/**
 * What has to happen to the caches when a guide article is created, edited or
 * deleted.
 *
 * Three layers hold a copy of that article and each needs its own nudge:
 *
 *   ISR page cache (origin)   -> res.revalidate()
 *   Cloudflare edge cache     -> purgeUrls()
 *   sitemap.xml               -> purge only; it is getServerSideProps, so
 *                                there is no ISR page to revalidate
 *
 * Order matters: revalidate first so the origin is already rebuilt by the time
 * Cloudflare comes back for a fresh copy. Purging first just re-caches the
 * page that is about to be replaced.
 */

import { SITE_URL, canonicalFor } from './seo'
import { purgeUrls } from './cloudflare'

/** Routes whose rendered output changes when any single post changes. */
const routesForPost = (slugs) => [
    '/guide', // the article list, which shows every published post
    ...slugs.map((slug) => `/guide/${slug}`),
]

/**
 * res.revalidate() re-requests the path internally, so trailingSlash: true
 * decides which spelling works -- and it differs by host:
 *
 *   Vercel-style (trustHostHeader) sends a real HEAD to the path. "/guide"
 *   answers 308 there, which Next reads as "Invalid response 308" and throws;
 *   only "/guide/" reaches the page.
 *
 *   Self-hosted `next start` resolves the path through the router instead,
 *   where either spelling normalises.
 *
 * So the slashed form is tried first, matching next.config's trailingSlash,
 * and the bare form is kept as a fallback rather than pinning one host's
 * behaviour.
 */
async function revalidateRoute(res, route) {
    const spellings = route === '/' ? ['/'] : [`${route}/`, route]
    let lastError
    for (const spelling of spellings) {
        try {
            await res.revalidate(spelling)
            return { route, ok: true, spelling }
        } catch (e) {
            lastError = e
        }
    }
    // A post saved but not revalidated is stale, not lost -- ISR picks it up
    // within the page's own revalidate window, so this is logged, not thrown.
    console.error(`revalidate failed for ${route}:`, lastError?.message)
    return { route, ok: false, error: lastError?.message }
}

/**
 * Refresh every cache layer for a post. Pass previousSlug when an edit renamed
 * the article so the old URL is dropped too -- otherwise Cloudflare keeps
 * serving the article from a slug the site no longer has.
 *
 * Never throws: the post is already written to the database by the time this
 * runs, so a cache problem must not turn a successful save into an error.
 */
export async function refreshPostCaches(res, { slug, previousSlug } = {}) {
    const slugs = [...new Set([slug, previousSlug].filter(Boolean))]
    if (!slugs.length) return { revalidated: [], purge: { ok: true, skipped: 'no slug' } }

    const routes = routesForPost(slugs)

    const revalidated = []
    for (const route of routes) {
        revalidated.push(await revalidateRoute(res, route))
    }

    const purge = await purgeUrls([
        ...routes.map(canonicalFor),
        // Not a page, so it has no ISR entry -- but Cloudflare may well be
        // holding the previous XML, and it now lists a different set of posts.
        `${SITE_URL}/sitemap.xml`,
    ])

    return { revalidated, purge }
}
