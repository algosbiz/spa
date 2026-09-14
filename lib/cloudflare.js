/**
 * Cloudflare cache purging.
 *
 * Cloudflare sits in front of the origin, so a page it has already cached
 * keeps being served even after Next has rebuilt it. Publishing a guide
 * article therefore needs two things to happen, in this order:
 *
 *   1. res.revalidate() so the origin rebuilds the ISR page, and
 *   2. a purge here so Cloudflare drops its copy and re-fetches that rebuild.
 *
 * Doing it the other way round re-populates Cloudflare with the stale page.
 *
 * Both env vars are optional. With either one missing every call here is a
 * no-op that reports `skipped` -- the same shape the Google Places helper
 * uses, so a local checkout without Cloudflare credentials behaves normally
 * instead of failing every save.
 *
 * The API token needs exactly one permission: Zone -> Cache Purge -> Purge.
 */

const API_BASE = 'https://api.cloudflare.com/client/v4'

// Cloudflare caps purge-by-URL at 30 URLs per request on every plan below
// Enterprise, and rejects the whole call if the list is longer.
const MAX_URLS_PER_REQUEST = 30

// A purge is a nice-to-have on a request that has already saved to the
// database, so it is not allowed to hold the admin's response open for long.
const TIMEOUT_MS = 5000

export const cloudflareConfigured = () =>
    Boolean(process.env.CLOUDFLARE_ZONE_ID && process.env.CLOUDFLARE_API_TOKEN)

async function callPurgeApi(body) {
    const res = await fetch(
        `${API_BASE}/zones/${process.env.CLOUDFLARE_ZONE_ID}/purge_cache`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(TIMEOUT_MS),
        }
    )

    // Cloudflare answers 200 with { success: false, errors: [...] } for things
    // like a bad zone id, so the HTTP status alone does not mean it worked.
    const json = await res.json().catch(() => null)
    if (!res.ok || !json?.success) {
        const detail =
            json?.errors?.map((e) => `${e.code} ${e.message}`).join('; ') ||
            `HTTP ${res.status}`
        throw new Error(detail)
    }
    return json
}

const chunk = (list, size) => {
    const out = []
    for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size))
    return out
}

/**
 * Purge specific absolute URLs. Never throws: a failed purge is reported, not
 * raised, so it cannot turn a saved post into a 500 for the admin.
 */
export async function purgeUrls(urls) {
    const files = [...new Set((urls || []).filter(Boolean))]
    if (!files.length) return { ok: true, skipped: 'no urls' }
    if (!cloudflareConfigured()) return { ok: true, skipped: 'not configured' }

    try {
        for (const batch of chunk(files, MAX_URLS_PER_REQUEST)) {
            await callPurgeApi({ files: batch })
        }
        return { ok: true, purged: files }
    } catch (e) {
        console.error('cloudflare: purge failed:', e.message, files)
        return { ok: false, error: e.message, purged: [] }
    }
}

/**
 * Drop the whole zone cache. Meant for deploys, where the hashed asset names
 * change and listing every affected URL is not practical. Too blunt for a
 * single post edit -- use purgeUrls for that.
 */
export async function purgeEverything() {
    if (!cloudflareConfigured()) return { ok: true, skipped: 'not configured' }
    try {
        await callPurgeApi({ purge_everything: true })
        return { ok: true, purged: 'everything' }
    } catch (e) {
        console.error('cloudflare: purge-everything failed:', e.message)
        return { ok: false, error: e.message }
    }
}
