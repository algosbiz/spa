/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old blog URLs -> new /blog routes (permanent, SEO-friendly)
      { source: '/news-grid', destination: '/blog', permanent: true },
      { source: '/news/:slug', destination: '/blog/:slug', permanent: true },
      // Renamed pages -> cleaner routes
      { source: '/page-about', destination: '/pricing', permanent: true },
      { source: '/page-contact', destination: '/contact', permanent: true },
      { source: '/page-faq', destination: '/faq', permanent: true },
      { source: '/page-testimonial', destination: '/testimonials', permanent: true },
      { source: '/page-team', destination: '/team', permanent: true },
      { source: '/page-team-details', destination: '/team-details', permanent: true },
    ]
  },
}

module.exports = nextConfig
