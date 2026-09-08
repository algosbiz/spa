import sanitizeHtmlLib from 'sanitize-html';

// Sanitize admin-authored HTML before rendering it on public pages.
// Runs server-side only (getStaticProps). Allows the formatting the editor can
// produce (headings, lists, links, images, blockquotes, text alignment) and
// strips anything dangerous (scripts, event handlers, javascript: URLs).
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
        // Force safe rel on links that open a new tab.
        transformTags: {
            a: sanitizeHtmlLib.simpleTransform('a', { rel: 'noopener noreferrer' }, false),
        },
    });
}
