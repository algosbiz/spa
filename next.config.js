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
  // Every rule below uses statusCode: 301 rather than `permanent: true`.
  // Next spells `permanent` as 308, but the WordPress site these URLs come from
  // answered 301, and the brief is to keep the old links behaving identically.
  // Google treats the two the same; older crawlers and link checkers do not.
  // The old canonicals all ended in "/", and in that form a rule here is the
  // only hop -- so an old link now gets one 301, exactly as it used to.
  async redirects() {
    const treatmentRedirects = []
    for (const [oldSlug, liveSlug] of Object.entries(treatmentSlugMap)) {
      // Top-level treatment path -> the Seminyak location path.
      treatmentRedirects.push({
        source: `/${oldSlug}`,
        destination: `/seminyak/${liveSlug}`,
        statusCode: 301,
      })
      // A renamed slug that was already published under /seminyak/.
      if (oldSlug !== liveSlug) {
        treatmentRedirects.push({
          source: `/seminyak/${oldSlug}`,
          destination: `/seminyak/${liveSlug}`,
          statusCode: 301,
        })
      }
    }

    return [
      // --- Redirects that already exist on the live WordPress site ---
      // Verified with curl against spabalimoon.com; keep these in step with it.
      { source: '/massage-seminyak', destination: '/seminyak', statusCode: 301 },
      { source: '/blog', destination: '/guide', statusCode: 301 },
      { source: '/day-spa-seminyak', destination: '/seminyak/day-spa', statusCode: 301 },
      // Found by crawling the old WordPress site rather than reading a plugin:
      // there is no redirect plugin there, so these come from WordPress's own
      // old-slug memory. /spa-packages went through the price-list URL in two
      // hops; both spellings are still live, so both are caught here and sent
      // straight to /seminyak in one.
      { source: '/spa-treatments', destination: '/seminyak', statusCode: 301 },
      { source: '/spa-packages', destination: '/seminyak', statusCode: 301 },
      { source: '/spa-massage-seminyak-bali-price-list', destination: '/seminyak', statusCode: 301 },
      { source: '/massage-petitenget', destination: '/contact', statusCode: 301 },

      // --- Yoast sitemap URLs -> the single Next sitemap ---
      // Search Console has sitemap_index.xml on file; keep it resolving.
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/page-sitemap.xml', destination: '/sitemap.xml', statusCode: 301 },
      { source: '/post-sitemap.xml', destination: '/sitemap.xml', statusCode: 301 },

      // --- Old blog URLs -> /guide routes ---
      { source: '/news-grid', destination: '/guide', statusCode: 301 },
      { source: '/news/:slug', destination: '/guide/:slug', statusCode: 301 },
      { source: '/blog/:slug', destination: '/guide/:slug', statusCode: 301 },

      // --- Pages whose slug now matches the live site ---
      { source: '/terms-conditions', destination: '/terms-and-conditions', statusCode: 301 },
      { source: '/massage-hotel-villa', destination: '/villa-hotel-massage', statusCode: 301 },

      // --- Renamed theme pages -> cleaner routes ---
      { source: '/page-about', destination: '/seminyak', statusCode: 301 },
      { source: '/pricing', destination: '/seminyak', statusCode: 301 },
      // The price list moved up from /seminyak/pricing to the location root.
      { source: '/seminyak/pricing', destination: '/seminyak', statusCode: 301 },
      { source: '/page-contact', destination: '/contact', statusCode: 301 },
      { source: '/page-faq', destination: '/faq', statusCode: 301 },
      { source: '/page-testimonial', destination: '/testimonials', statusCode: 301 },
      { source: '/page-team', destination: '/team', statusCode: 301 },
      { source: '/page-team-details', destination: '/team-details', statusCode: 301 },

      ...treatmentRedirects,
    ].map(withTrailingSlashDestination)
  },

  // Everything under public/ is served `max-age=0, must-revalidate` by default,
  // so a repeat visitor re-validates ~86 image requests before anything renders.
  // These filenames are stable, so cache them and refresh in the background --
  // a replaced image can take up to a day to reach someone who already has it.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/webfonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
