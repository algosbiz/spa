# Cloudflare caching — setup for the Next.js site

Two halves, and both are needed:

1. **Cache Rules** in the Cloudflare dashboard, so the edge caches the site.
2. **Automatic purging**, so an edit is not stuck behind that cache.

Measured on the live site before this was written:

```
Server: cloudflare
cf-cache-status: HIT
Cache-Control: max-age=7200
```

HTML is already being cached at the edge for the WordPress site, with a 2-hour
TTL. The rules below reproduce that behaviour on the Next.js site, but let each
page carry its own TTL instead of forcing one number across the whole site.

---

## Part 1 — Credentials

Add to `.env.local` (and to the host's environment variables):

| Variable | Where to get it |
|---|---|
| `CLOUDFLARE_ZONE_ID` | dash.cloudflare.com → spabalimoon.com → **Overview** → right sidebar → Zone ID |
| `CLOUDFLARE_API_TOKEN` | **My Profile → API Tokens → Create Token → Create Custom Token** |

The token needs exactly **one** permission — anything more is a liability:

```
Permissions:      Zone  →  Cache Purge  →  Purge
Zone Resources:   Include  →  Specific zone  →  spabalimoon.com
```

Leave both blank and every purge turns into a logged no-op, so a local checkout
keeps working without credentials.

---

## Part 2 — What the origin already sends

The rules below lean on these headers, measured from a production build
(`next start`), not assumed. Cloudflare respects origin `Cache-Control` on the
Free, Pro and Business plans by default, so most pages need no TTL of their own.

| URL | `Cache-Control` from origin | Cached by Cloudflare by default? |
|---|---|---|
| `/` (ISR 24 h) | `s-maxage=86400, stale-while-revalidate` | No — HTML is never cached by default |
| `/guide/`, `/guide/<slug>/` (ISR 60 s) | `s-maxage=60, stale-while-revalidate` | No |
| `/seminyak/`, `/contact/`, the 30-odd static pages | **none at all** | No |
| `/_next/static/*` | `public, max-age=31536000, immutable` | Yes (.js / .css) |
| `/_next/data/<buildId>/*.json` | `s-maxage=60, stale-while-revalidate` | No — JSON is not cached by default |
| `/images/*` | `public, max-age=2592000, stale-while-revalidate=86400` | Yes |
| `/webfonts/*` | `public, max-age=31536000, immutable` | Yes |
| `/sitemap.xml` | `public, max-age=0, s-maxage=3600, stale-while-revalidate=86400` | No — .xml is not on the default list |
| `/robots.txt` | `public, max-age=0` | No |
| `/admin/*` | `private, no-cache, no-store, max-age=0, must-revalidate` | No |
| `/api/*` | none | No |

Two things follow from this table:

- **HTML, JSON and XML need a rule** or none of the pages get cached at all.
- The pages with **no header** (every non-ISR page) fall back to Cloudflare's
  own default of 2 hours for a 200 — which is the 7200 the live site shows
  today.

---

## Part 3 — Cache Rules

**Caching → Cache Rules → Create rule.** Order matters, and not the way Page
Rules worked:

> "If several matching rules set a value for the same setting, the value in the
> last matching rule wins."
> — [Cache Rules order and priority](https://developers.cloudflare.com/cache/how-to/cache-rules/order/)

So the **bypass rules go last**. Create them in the order below and leave them
in that order.

### Rule 1 — Cache the public site

| Field | Value |
|---|---|
| Name | `Cache public HTML` |
| Expression | `not starts_with(http.request.uri.path, "/api/") and not starts_with(http.request.uri.path, "/admin")` |
| Cache eligibility | **Eligible for cache** |
| Edge TTL | **Use cache-control header if present, use default Cloudflare caching behavior if not** |
| Browser TTL | **Respect origin** |

`Respect origin` is the whole point: Next already works out the right number per
page (60 s for guide articles, 24 h for the homepage), so there is no single TTL
to pick and nothing to keep in sync by hand. Pages with no header get
Cloudflare's 2-hour default, matching what the live site does now.

This one rule also covers `/sitemap.xml` (3600 from its own header),
`/_next/data/*.json` and the static assets.

### Rule 2 — Never cache the API

| Field | Value |
|---|---|
| Name | `Bypass API` |
| Expression | `starts_with(http.request.uri.path, "/api/")` |
| Cache eligibility | **Bypass cache** |

### Rule 3 — Never cache the admin

| Field | Value |
|---|---|
| Name | `Bypass admin` |
| Expression | `starts_with(http.request.uri.path, "/admin")` |
| Cache eligibility | **Bypass cache** |

### Rule 4 — Never serve a cached page to a logged-in admin

| Field | Value |
|---|---|
| Name | `Bypass admin session` |
| Expression | `http.cookie contains "sbm_admin_session"` |
| Cache eligibility | **Bypass cache** |

Without this, an admin who just published an article can be handed the edge's
old copy of `/guide/` and reasonably conclude the publish failed.

> **Why rules 2–4 are not optional, even though the origin already sends
> `no-store` on `/admin`:** they are the guardrail against Edge TTL being
> switched to *"Ignore cache-control header and use this TTL"* in rule 1. That
> setting overrides `private, no-store`, and an admin page in a shared cache
> leaks a logged-in session to the next visitor. Keeping the bypasses last means
> that mistake stays survivable.

### Migrating the rules that are already on the zone

The zone carried these five rules over from WordPress. Three of them guard
paths that stop existing the moment Next.js takes over.

| # | Existing rule | Do this | Why |
|---|---|---|---|
| 1 | `Cache Everything [Template]` — `spabalimoon.com/*`, Active | **Keep, but edit its TTLs** — this is Rule 1 above | The match is right; the TTL settings are what need checking (see below) |
| 2 | `_GRECAPTCHA` — cookie, Disabled | **Delete** | The site uses Turnstile, not reCAPTCHA — that cookie is never set |
| 3 | `bypass contact` — `/contact/`, Disabled | **Delete** | `/contact/` is static HTML here; the form POSTs to `/api/contact`, which rule 2 already bypasses |
| 4 | `Bypass Wp Login` — `/wp-login.php*`, Active | **Delete at cutover, not before** | The path 404s on Next |
| 5 | `Bypass wp admin` — `/wp-admin/*`, Active | **Delete at cutover, not before** | Replaced by the `/admin` bypass |

**Do not delete rules 4 and 5 while WordPress is still serving the site.** They
are the only thing keeping the WP login and admin out of a shared cache; remove
them early and a logged-in admin session can be handed to the next visitor.
They are harmless to leave in place after cutover — those paths simply 404 — so
deleting them is cleanup, not a step the migration depends on.

#### What to check inside `Cache Everything [Template]`

The list view only shows that Browser TTL, cache eligibility and Edge TTL are
all set; it does not show their values. Open the rule and confirm:

| Setting | Must be | If it is currently an override number instead |
|---|---|---|
| Edge TTL | *Use cache-control header if present, use default Cloudflare caching behavior if not* | A fixed Edge TTL ignores `s-maxage`, so guide articles freeze at that number instead of 60 s, and `/sitemap.xml` stops tracking new posts |
| Browser TTL | *Respect origin* | A fixed Browser TTL overwrites the 30-day `max-age` on `/images/*` and the year on `/webfonts/*` — every repeat visitor re-downloads them |

The live site answers `Cache-Control: max-age=7200`, which is the fingerprint of
a Browser TTL override set to 2 hours. That number came from WordPress, where no
page emitted a useful header of its own. Next does emit one per page, so the
override now costs more than it buys.

### Global settings to check once

**Caching → Configuration:**

- **Browser Cache TTL → Respect Existing Headers.** Anything else overwrites the
  30-day `max-age` on `/images/*` and the year on `/webfonts/*`.
- **Caching Level → Standard.**
- **Tiered Cache → on** (free, raises the hit rate).

Also remove any leftover **Page Rule** using *Cache Everything* on this zone —
Cache Rules already cover it, and a Page Rule fighting a Cache Rule is painful
to debug.

---

## Part 4 — Automatic purging

Caching HTML at the edge means Next's own ISR timer is no longer what the
visitor experiences: the edge copy outlives it. Purging is what closes that gap.

### On publish — automatic, nothing to run

Wired into the admin API. Creating, editing or deleting a **published** article
triggers, in this order:

1. `res.revalidate()` on `/guide/` and `/guide/<slug>/` — rebuilds at the origin.
2. A Cloudflare purge of those URLs plus `/sitemap.xml`.

The order is deliberate. Purging first would just refill Cloudflare with the
page that is about to be replaced.

Handled automatically:

- **Renaming a slug** purges the old URL as well as the new one, so the article
  stops being served from the address it no longer has.
- **Un-publishing** purges too.
- **Draft-to-draft edits** skip the purge — nothing public changed.
- A failed purge is logged and returned in the response's `cache` field; it
  never turns a saved article into an error.

Files: `lib/cloudflare.js`, `lib/publishCache.js`,
`pages/api/admin/posts/index.js`, `pages/api/admin/posts/[id].js`.

### On deploy — one command

```bash
npm run purge
```

A deploy changes the hashed `/_next/` filenames and can change any page's HTML,
so this purges the whole zone. **Run it after the new build is live** — run it
before and Cloudflare simply refills from the old one.

Single paths, when a full purge is too blunt:

```bash
node scripts/purge-cloudflare.mjs /guide/ /seminyak/facial/
```

Exit codes: `0` when it worked *or* when credentials are absent (so a pipeline
without them still passes), `1` only when a purge was attempted and failed.

---

## Verifying it works

```bash
curl -sI https://spabalimoon.com/seminyak/facial/ | grep -i cf-cache-status
```

`HIT` means the edge served it. After `npm run purge`, the same command should
show `MISS` once, then `HIT` again.

To confirm a publish purged correctly, note `cf-cache-status` on `/guide/`,
publish an article, and check the article appears without waiting out the TTL.
