import { SITEMAP_STATIC_ROUTES, PAGE_SEO, PAGE_IMAGES, canonicalFor, assetUrl } from '@/lib/seo';
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

/**
 * Yoast wrote every lastmod as "2026-07-07T04:53:20+00:00" -- whole seconds,
 * numeric UTC offset. Supabase timestamps come back with milliseconds
 * ("2026-09-13T13:24:40.811+00:00"), so guide articles were emitting a
 * spelling the live sitemap never used. Normalising here keeps both halves of
 * the sitemap in one format. An unparseable value is dropped rather than
 * shipped, since a malformed lastmod invalidates the whole <url> entry.
 */
const formatLastmod = (value) => {
    if (!value) return null;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return d.toISOString().replace(/\.\d+Z$/, '+00:00');
};

const urlEntry = ({ loc, lastmod, image }) => {
    const stamp = formatLastmod(lastmod);
    return (
        '    <url>\n' +
        `        <loc>${escapeXml(loc)}</loc>\n` +
        (stamp ? `        <lastmod>${escapeXml(stamp)}</lastmod>\n` : '') +
        (image
            ? '        <image:image>\n' +
              `            <image:loc>${escapeXml(assetUrl(image))}</image:loc>\n` +
              '        </image:image>\n'
            : '') +
        '    </url>'
    );
};

/**
 * The image namespace is only declared when something actually uses it, so a
 * sitemap with no images stays byte-identical to the plain one.
 */
function buildSitemap(entries) {
    const hasImages = entries.some((e) => e.image);
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' +
        (hasImages
            ? '\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'
            : '') +
        '>\n' +
        entries.map(urlEntry).join('\n') +
        '\n</urlset>\n'
    );
}

export async function getServerSideProps({ res }) {
    const entries = SITEMAP_STATIC_ROUTES.map((route) => ({
        loc: canonicalFor(route),
        lastmod: PAGE_SEO[route]?.lastmod || null,
        image: PAGE_IMAGES[route] || null,
    }));

    // Guide articles come from Supabase. If that call fails the sitemap still
    // ships the static routes rather than 500-ing at a crawler.
    try {
        const posts = await getPublishedSlugsWithDates();
        for (const post of posts) {
            entries.push({
                loc: canonicalFor(`/guide/${post.slug}`),
                lastmod: post.lastmod,
                image: post.image || null,
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
