/** @type {import('next').NextConfig} */

/**
 * Treatment pages: the path the old Next build used -> the slug the live
 * WordPress site serves. Anything on the left 301s to /seminyak/<right>.
 * Where the two are identical the page simply moved under /seminyak/.
 */
const treatmentSlugMap = {
  'bali-moon-facial': 'facial',
  'balinese-massage': 'balinese-massage',
  'body-scrub': 'body-scrub',
  'cellulite-massage': 'anti-cellulite-massage',
  'couple-massage': 'couple-spa',
  'deep-tissue-massage': 'deep-tissue-massage',
  'ear-candle': 'ear-wax-removal',
  'foot-massage': 'foot-massage',
  'foot-reflexology': 'foot-reflexology',
  'hair-braiding': 'hair-braiding',
  'hair-creambath': 'creambath',
  'head-massage': 'head-massage',
  'hot-stone-massage': 'hot-stone-massage',
  'lymphatic-massage': 'lymphatic-drainage-massage',
  'manicure-pedicure': 'manicure-pedicure',
  'nail-art': 'nail-spa',
  'shiatsu-massage': 'shiatsu-massage',
  'sports-massage': 'sport-massage',
  'sunburn-treatment': 'sunburn-massage',
  'thai-massage': 'thai-massage',
  'traditional-massage': 'traditional-massage',
  'virgin-coconut-oil-massage': 'coconut-oil-massage',
  'waxing': 'waxing-salon',
}

/**
 * With trailingSlash: true Next first 308s "/x" to "/x/", then applies the
 * redirect below. If the destination had no trailing slash it would be sent
 * through that normalisation a second time, costing a third hop. Writing the
 * destinations slashed keeps every old URL two hops from its target.
 * Paths with a file extension (sitemap.xml) are exempt — Next does not add a
 * trailing slash to those.
 */
const withTrailingSlashDestination = (rule) => {
  const { destination } = rule
  const isFile = /\.[a-z0-9]+$/i.test(destination.split('?')[0])
  if (isFile || destination.endsWith('/')) return rule
  return { ...rule, destination: `${destination}/` }
}

const nextConfig = {
  reactStrictMode: true,
  // Every canonical on the live WordPress site ends in "/" (Yoast), and those
  // are the URLs Google has indexed. Matching that spelling here keeps the
  // migrated URLs byte-identical instead of 308-ing every page to a new form.
  trailingSlash: true,
  // A second dev server (a preview running alongside the one in your terminal)
  // would otherwise write into the same .next folder as the first and corrupt
  // its chunks. Setting NEXT_DIST_DIR gives that second server its own folder.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  webpack: (config, { dev }) => {
    // Webpack's filesystem cache writes .next/cache/webpack/*.pack.gz_ and then
    // renames it into place. On this machine that rename keeps failing (ENOENT),
    // which leaves the cache half-written; the next request then dies with
    // "Cannot find module './chunks/vendor-chunks/next.js'" and every route
    // answers 404 with "missing required error components". Keeping the dev
    // cache in memory removes those files, and with them the failure. Costs a
    // slower cold start; production builds are untouched.
    if (dev) {
      config.cache = { type: 'memory' }
    }
    return config
  },
  async redirects() {
    const treatmentRedirects = []
    for (const [oldSlug, liveSlug] of Object.entries(treatmentSlugMap)) {
      // Top-level treatment path -> the Seminyak location path.
      treatmentRedirects.push({
        source: `/${oldSlug}`,
        destination: `/seminyak/${liveSlug}`,
        permanent: true,
      })
      // A renamed slug that was already published under /seminyak/.
      if (oldSlug !== liveSlug) {
        treatmentRedirects.push({
          source: `/seminyak/${oldSlug}`,
          destination: `/seminyak/${liveSlug}`,
          permanent: true,
        })
      }
    }

    return [
      // --- Redirects that already exist on the live WordPress site ---
      // Verified with curl against spabalimoon.com; keep these in step with it.
      { source: '/massage-seminyak', destination: '/seminyak', permanent: true },
      { source: '/blog', destination: '/guide', permanent: true },
      { source: '/day-spa-seminyak', destination: '/seminyak/day-spa', permanent: true },

      // --- Yoast sitemap URLs -> the single Next sitemap ---
      // Search Console has sitemap_index.xml on file; keep it resolving.
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/page-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/post-sitemap.xml', destination: '/sitemap.xml', permanent: true },

      // --- Old blog URLs -> /guide routes ---
      { source: '/news-grid', destination: '/guide', permanent: true },
      { source: '/news/:slug', destination: '/guide/:slug', permanent: true },
      { source: '/blog/:slug', destination: '/guide/:slug', permanent: true },

      // --- Pages whose slug now matches the live site ---
      { source: '/terms-conditions', destination: '/terms-and-conditions', permanent: true },
      { source: '/massage-hotel-villa', destination: '/villa-hotel-massage', permanent: true },

      // --- Renamed theme pages -> cleaner routes ---
      { source: '/page-about', destination: '/seminyak', permanent: true },
      { source: '/pricing', destination: '/seminyak', permanent: true },
      // The price list moved up from /seminyak/pricing to the location root.
      { source: '/seminyak/pricing', destination: '/seminyak', permanent: true },
      { source: '/page-contact', destination: '/contact', permanent: true },
      { source: '/page-faq', destination: '/faq', permanent: true },
      { source: '/page-testimonial', destination: '/testimonials', permanent: true },
      { source: '/page-team', destination: '/team', permanent: true },
      { source: '/page-team-details', destination: '/team-details', permanent: true },

      ...treatmentRedirects,
    ].map(withTrailingSlashDestination)
  },
}

module.exports = nextConfig
