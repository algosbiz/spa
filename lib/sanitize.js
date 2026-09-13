import sanitizeHtmlLib from 'sanitize-html';
import { SITE_URL } from './seo';

const SITE_HOST = new URL(SITE_URL).host.replace(/^www\./, '');

// Does this href send the reader to another site?
//
// Only absolute http(s) URLs on a different host count. Everything else stays a
// link: relative and root-relative paths ("/seminyak/..."), absolute URLs back
// to our own host, in-page fragments, and mailto:/tel:, which are our own
// contact channels rather than somewhere else to browse.
function leavesTheSite(href) {
    if (!href) return false;
    const value = href.trim();
    if (!/^https?:\/\//i.test(value)) return false;
    try {
        return new URL(value).host.replace(/^www\./, '') !== SITE_HOST;
    } catch {
        // Unparseable absolute URL: treat it as outbound rather than let it through.
        return true;
    }
}

// Sanitize admin-authored HTML before rendering it on public pages.
// Runs server-side only (getStaticProps). Allows the formatting the editor can
// produce (headings, lists, links, images, blockquotes, text alignment) and
// strips anything dangerous (scripts, event handlers, javascript: URLs).
//
// It also unwraps outbound links in post bodies: the anchor becomes a plain
// <span> and the wording it carried survives untouched, so a sentence never
// loses a word -- it only stops being a way off the site. Internal links are
// left exactly as they were; those are the ones carrying readers to the
// treatment pages. Doing it here rather than in the stored HTML means it
// applies to every post, including ones written later in the admin editor, and
// nothing in the database is rewritten.
export function sanitizeHtml(html) {
    if (!html) return '';
    return sanitizeHtmlLib(html, {
        allowedTags: [
            'p', 'br', 'hr', 'span', 'div',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'strong', 'b', 'em', 'i', 'u', 's', 'mark', 'sub', 'sup',
            'ul', 'ol', 'li',
            'blockquote', 'pre', 'code',
            'a', 'img',
            'table', 'thead', 'tbody', 'tr', 'th', 'td',
        ],
        allowedAttributes: {
            '*': ['class', 'style'],
            a: ['href', 'title', 'target', 'rel'],
            img: ['src', 'alt', 'title', 'width', 'height'],
        },
        allowedSchemes: ['http', 'https', 'mailto', 'tel'],
        allowedSchemesByTag: { img: ['http', 'https', 'data'] },
        transformTags: {
            a: (tagName, attribs) => {
                if (leavesTheSite(attribs.href)) {
                    // A <span> with no attributes: the text stays, the link and
                    // anything the author hung on it (target, title, class) go.
                    return { tagName: 'span', attribs: {} };
                }
                // Force safe rel on links that open a new tab. Spreading the
                // existing attribs first matters: replacing them outright would
                // silently strip href off every link in the post.
                return { tagName: 'a', attribs: { ...attribs, rel: 'noopener noreferrer' } };
            },
        },
    });
}
