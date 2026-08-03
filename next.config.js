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
  async redirects() {
    return [
      // Old blog URLs -> /guide routes (permanent, SEO-friendly)
      { source: '/news-grid', destination: '/blog', permanent: true },
      { source: '/news/:slug', destination: '/guide/:slug', permanent: true },
      { source: '/blog/:slug', destination: '/guide/:slug', permanent: true },
      // Renamed pages -> cleaner routes
      { source: '/page-about', destination: '/pricing', permanent: true },
      { source: '/page-contact', destination: '/contact', permanent: true },
      { source: '/page-faq', destination: '/faq', permanent: true },
      { source: '/page-testimonial', destination: '/testimonials', permanent: true },
      { source: '/page-team', destination: '/team', permanent: true },
      { source: '/page-team-details', destination: '/team-details', permanent: true },
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
