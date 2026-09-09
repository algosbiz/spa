/** @type {import('next').NextConfig} */
const treatmentSlugs = [
  'bali-moon-facial',
  'balinese-massage',
  'body-scrub',
  'cellulite-massage',
  'couple-massage',
  'deep-tissue-massage',
  'ear-candle',
  'foot-massage',
  'foot-reflexology',
  'hair-braiding',
  'hair-creambath',
  'head-massage',
  'hot-stone-massage',
  'lymphatic-massage',
  'manicure-pedicure',
  'nail-art',
  'shiatsu-massage',
  'sports-massage',
  'sunburn-treatment',
  'thai-massage',
  'traditional-massage',
  'virgin-coconut-oil-massage',
  'waxing',
]

const nextConfig = {
  reactStrictMode: true,
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
    return [
      // Old blog URLs -> /guide routes (permanent, SEO-friendly)
      { source: '/news-grid', destination: '/blog', permanent: true },
      { source: '/news/:slug', destination: '/guide/:slug', permanent: true },
      { source: '/blog/:slug', destination: '/guide/:slug', permanent: true },
      // Renamed pages -> cleaner routes
      { source: '/page-about', destination: '/seminyak', permanent: true },
      { source: '/pricing', destination: '/seminyak', permanent: true },
      // The price list moved up from /seminyak/pricing to the location root.
      { source: '/seminyak/pricing', destination: '/seminyak', permanent: true },
      { source: '/page-contact', destination: '/contact', permanent: true },
      { source: '/page-faq', destination: '/faq', permanent: true },
      { source: '/page-testimonial', destination: '/testimonials', permanent: true },
      { source: '/page-team', destination: '/team', permanent: true },
      { source: '/page-team-details', destination: '/team-details', permanent: true },
      { source: '/day-spa-seminyak', destination: '/seminyak/day-spa', permanent: true },
      // Treatment pages now live below the Seminyak location path.
      ...treatmentSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/seminyak/${slug}`,
        permanent: true,
      })),
    ]
  },
}

module.exports = nextConfig
