/**
 * Purge the Cloudflare cache after a deploy.
 *
 *   node scripts/purge-cloudflare.mjs            # purge everything
 *   node scripts/purge-cloudflare.mjs /guide/ /  # purge just these paths
 *
 * A deploy changes the hashed /_next/ asset names and can change any page's
 * HTML, so listing the affected URLs is not practical -- the no-argument form
 * purges the whole zone. Run it AFTER the new build is live, otherwise
 * Cloudflare refills its cache from the old one.
 *
 * Needs CLOUDFLARE_ZONE_ID and CLOUDFLARE_API_TOKEN (token permission:
 * Zone -> Cache Purge -> Purge). Without them it exits 0 and does nothing, so
 * a deploy pipeline that has not been given credentials yet still succeeds.
 *
 * Exits non-zero only when a purge was actually attempted and failed, which
 * is what a CI step should fail on.
 */

import fs from 'node:fs'
import path from 'node:path'

// Load .env.local for local runs. A CI job supplies real env vars instead and
// will not have the file; that is fine.
const envFile = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envFile)) {
    for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const eq = trimmed.indexOf('=')
        if (eq === -1) continue
        const key = trimmed.slice(0, eq).trim()
        if (!process.env[key]) process.env[key] = trimmed.slice(eq + 1).trim()
    }
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://spabalimoon.com'
const { CLOUDFLARE_ZONE_ID, CLOUDFLARE_API_TOKEN } = process.env

if (!CLOUDFLARE_ZONE_ID || !CLOUDFLARE_API_TOKEN) {
    console.log('cloudflare: CLOUDFLARE_ZONE_ID / CLOUDFLARE_API_TOKEN not set — skipping purge.')
    process.exit(0)
}

const paths = process.argv.slice(2)
const body = paths.length
    ? {
          files: paths.map((p) =>
              /^https?:\/\//i.test(p) ? p : `${SITE_URL}/${p.replace(/^\/+/, '')}`
          ),
      }
    : { purge_everything: true }

const res = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`,
    {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
)

// Cloudflare returns 200 with success:false for a bad zone id or token, so the
// body has to be checked as well as the status.
const json = await res.json().catch(() => null)
if (!res.ok || !json?.success) {
    const detail =
        json?.errors?.map((e) => `${e.code} ${e.message}`).join('; ') || `HTTP ${res.status}`
    console.error('cloudflare: purge failed —', detail)
    process.exit(1)
}

console.log(
    paths.length
        ? `cloudflare: purged ${body.files.length} URL(s).`
        : 'cloudflare: purged the entire zone.'
)
