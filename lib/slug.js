import slugify from 'slugify';

// Turn any string into a URL-safe slug, e.g. "Manfaat Spa untuk Kulit" -> "manfaat-spa-untuk-kulit"
export function makeSlug(str) {
    return slugify(str || '', { lower: true, strict: true, trim: true });
}
