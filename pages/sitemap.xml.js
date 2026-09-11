import { SITEMAP_STATIC_ROUTES, PAGE_SEO, canonicalFor } from '@/lib/seo';
import { getPublishedSlugsWithDates } from '@/lib/posts';

/**
 * Single sitemap covering every indexable URL, replacing the Yoast
 * sitemap_index.xml + page-sitemap.xml + post-sitemap.xml trio from the
 * WordPress site. Same URL set, same trailing-slash spelling.
 *
 * Served from getServerSideProps so newly published guide posts appear
 * without a rebuild.
 */

const escapeXml = (s) =>
    String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

const urlEntry = ({ loc, lastmod }) =>
    '    <url>\n' +
    `        <loc>${escapeXml(loc)}</loc>\n` +
    (lastmod ? `        <lastmod>${escapeXml(lastmod)}</lastmod>\n` : '') +
    '    </url>';

function buildSitemap(entries) {
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        entries.map(urlEntry).join('\n') +
        '\n</urlset>\n'
    );
}

export async function getServerSideProps({ res }) {
    const entries = SITEMAP_STATIC_ROUTES.map((route) => ({
        loc: canonicalFor(route),
        lastmod: PAGE_SEO[route]?.lastmod || null,
    }));

    // Guide articles come from Supabase. If that call fails the sitemap still
    // ships the static routes rather than 500-ing at a crawler.
    try {
        const posts = await getPublishedSlugsWithDates();
        for (const post of posts) {
            entries.push({
                loc: canonicalFor(`/guide/${post.slug}`),
                lastmod: post.lastmod,
            });
        }
    } catch (e) {
        console.error('sitemap: could not load guide posts:', e.message);
    }

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    res.write(buildSitemap(entries));
    res.end();

    return { props: {} };
}

export default function Sitemap() {
    return null;
}
