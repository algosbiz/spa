/**
 * Meta title, description and sitemap lastmod for every page, copied
 * verbatim from the live WordPress site (Yoast output) so the migration
 * does not change what Google already has indexed. Keys are route paths
 * without a trailing slash; canonicalFor() in PageHead adds the slash.
 *
 * Guide articles are not here: their seo_title / seo_description live in
 * Supabase and are read by pages/guide/[slug].js.
 *
 * Regenerate by re-reading the live sitemaps if the WordPress site changes.
 */
export const SITE_URL = 'https://spabalimoon.com'

export const DEFAULT_TITLE = 'Spa Bali Moon - Outcall & Home Service Massage'

export const DEFAULT_DESCRIPTION =
    'Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.'

/**
 * Live URLs carry a trailing slash (every Yoast canonical on the WordPress
 * site ends in "/"), and next.config sets trailingSlash: true to match, so
 * canonicals built here have to agree or Google sees two spellings of one page.
 */
export const canonicalFor = (path) => {
    if (!path) return `${SITE_URL}/`
    if (/^https?:\/\//i.test(path)) return path
    const clean = '/' + String(path).replace(/^\/+/, '').replace(/\/+$/, '')
    return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}/`
}

export const PAGE_SEO = {
    "/": {
        title: "Spa Bali Moon - Outcall & Home Service Massage",
        description: "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
        lastmod: "2026-07-08T01:37:02+00:00",
    },
    "/contact": {
        title: "Contact Us - Rejuvenating Massage at Spa Bali Moon",
        description: "Contact our professional and well-trained therapists at Spa Bali Moon in Seminyak for quality spa treatments and home massage services.",
        lastmod: "2026-01-21T06:55:30+00:00",
    },
    "/guide": {
        title: "Blog - Spa Bali Moon",
        description: "Explore Bali spa tips, massage guides, wellness advice, and relaxation insights from us. Discover expert guides to help you relax, recharge, and enjoy a better spa experience in Bali.",
        lastmod: "2026-07-06T08:14:14+00:00",
    },
    "/massage-kuta": {
        title: "Affordable Massage in Kuta",
        description: "Enjoy waves of Relaxation with foot and couple massage in Kuta. Our Traditional Balinese therapists are available for in-spa and outcall.",
        lastmod: "2026-05-26T01:45:12+00:00",
    },
    "/outcall-home-service-massage": {
        title: "Spa Bali Moon - Outcall & Home Service Massage",
        description: "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
        lastmod: "2026-07-08T01:43:32+00:00",
    },
    "/privacy-policy": {
        title: "Spa Bali Moon Privacy Policy",
        description: "Read Spa Bali Moon’s privacy policy detailing data protection, guest confidentiality, and secure handling of personal information.",
        lastmod: "2026-03-24T07:03:50+00:00",
    },
    "/reservation": {
        title: "Reserve your massage treatments at Spa Bali Moon in Seminyak",
        description: "If you want to have quality massage treatments around Seminyak, our therapists are always available and ready to give you the best services.",
        lastmod: "2026-07-06T06:53:00+00:00",
    },
    "/seminyak": {
        title: "Spa and Massage in Seminyak Bali - Price and Packages",
        description: "Book affordable massages in Seminyak at Spa Bali Moon. Our Price list includes luxury facial, couple packages, shiatsu and Balinese massage.",
        lastmod: "2026-07-08T01:50:34+00:00",
    },
    "/seminyak/anti-cellulite-massage": {
        title: "Anti-Cellulite Massage in Seminyak – Smooth & Tone",
        description: "Target stubborn cellulite with our firming massage in Bali. Boost circulation, smooth skin texture, and feel more confident naturally and effectively.",
        lastmod: "2026-07-07T05:26:17+00:00",
    },
    "/seminyak/balinese-massage": {
        title: "Balinese Massage Treatment in Seminyak – Traditional Healing Therapy",
        description: "Experience authentic Balinese massage treatment in Seminyak, Bali. Combining long strokes, gentle pressure, and warm oils, this therapy restores harmony and deep relaxation.",
        lastmod: "2026-07-06T06:40:25+00:00",
    },
    "/seminyak/body-scrub": {
        title: "Body Scrub in Seminyak – Exfoliating Spa Therapy",
        description: "Experience a rejuvenating body scrub treatment in Bali. Refresh your skin, restore softness, and enjoy a calming spa escape in Seminyak.",
        lastmod: "2026-07-06T06:29:01+00:00",
    },
    "/seminyak/coconut-oil-massage": {
        title: "Virgin Coconut Oil Massage in Bali – Hydrate & Relax",
        description: "Indulge in a virgin coconut oil massage at Spa Bali Moon. Deeply hydrating, naturally soothing, and perfect for tropical skin renewal in Seminyak.",
        lastmod: "2026-07-06T06:40:43+00:00",
    },
    "/seminyak/couple-spa": {
        title: "Romantic Couple Massage in Bali",
        description: "Indulge in a warm candle massage perfect for couples. Includes facial, natural scrub, and Balinese massage. Book for In-Spa or Villa.",
        lastmod: "2026-07-06T05:10:55+00:00",
    },
    "/seminyak/creambath": {
        title: "Hair Cream Bath Bali - Seminyak Spa Experience",
        description: "Indulge in cream bath therapy in Seminyak, Bali. A soothing hair spa treatment that nourishes roots, relaxes the scalp, and restores natural shine.",
        lastmod: "2026-07-06T06:37:10+00:00",
    },
    "/seminyak/day-spa": {
        title: "Day Spa Treatments in Seminyak – Relax & Rejuvenate",
        description: "Discover day spa treatments in Seminyak, Bali. From massages to facials, our therapies are designed to relax, refresh, and restore your natural glow.",
        lastmod: "2026-07-06T06:39:18+00:00",
    },
    "/seminyak/deep-tissue-massage": {
        title: "Deep Tissue Massage Bali – Relieve Tension & Stress",
        description: "Relax deeply with professional deep tissue massage therapy in Seminyak. Perfect for easing tension, restoring energy, and enhancing overall wellness.",
        lastmod: "2026-07-07T05:25:27+00:00",
    },
    "/seminyak/ear-wax-removal": {
        title: "Ear Candle Bali - Traditional Spa Treatment",
        description: "Book a special ear candle therapy in Seminyak. It gives a warm and comfy feeling. The candle's warmth offers more than just touch.",
        lastmod: "2026-07-06T06:22:17+00:00",
    },
    "/seminyak/facial": {
        title: "Seminyak Facial – Organic Scrub & Lymphatic Face Massage",
        description: "Enjoy facials at Spa Bali Moon in Seminyak. Treatments include organic scrubs, Argan Oil massage, warm steam therapy, natural masks, and lymphatic face massage.",
        lastmod: "2026-07-06T06:17:36+00:00",
    },
    "/seminyak/foot-massage": {
        title: "Foot Massage Treatment in Seminyak",
        description: "Soothe tired feet with gentle strokes, reflexology-inspired techniques, and warm oils at Spa Bali Moon Seminyak.",
        lastmod: "2026-07-07T06:14:25+00:00",
    },
    "/seminyak/foot-reflexology": {
        title: "Foot Reflexology in Seminyak, Bali",
        description: "Experience authentic Bali reflexology in Seminyak. Unwind in our spa where traditional techniques meet relaxing foot therapy.",
        lastmod: "2026-07-07T05:22:52+00:00",
    },
    "/seminyak/hair-braiding": {
        title: "Hair Braiding Bali – Stylish Braided Hair & Braid Services at Spa Bali Moon",
        description: "Experience professional hair braiding in Bali at Spa Bali Moon, Seminyak. From casual braid hair to intricate braided hair styles, enjoy glossy, protective braids that suit the beach, events, or everyday wear.",
        lastmod: "2026-07-06T05:11:42+00:00",
    },
    "/seminyak/head-massage": {
        title: "Head Massage Bali Treatment",
        description: "Relax with a head massage that relieves tension, soothes the scalp, and promotes overall relaxation by skilled masseurs' in Seminyak, Bali.",
        lastmod: "2026-07-06T06:25:57+00:00",
    },
    "/seminyak/hot-stone-massage": {
        title: "Hot Stone Massage - Spa Bali Moon in Seminyak",
        description: "Melt into bliss with the best hot stone massages in Bali. Our traditions meet warm serenity, providing a soul-soothing escape.",
        lastmod: "2026-07-06T06:29:51+00:00",
    },
    "/seminyak/lymphatic-drainage-massage": {
        title: "Lymphatic Drainage Massage in Bali - Restore Balance",
        description: "Experience gentle lymphatic drainage massage in Seminyak, Bali, to reduce swelling, support detox, and boost your immune system.",
        lastmod: "2026-07-07T05:32:03+00:00",
    },
    "/seminyak/manicure-pedicure": {
        title: "Professional Nail Care in Bali – Manicure & Pedicure",
        description: "Discover manicure and pedicure treatments in Seminyak, Bali. From shaping and polishing to nourishing care, our spa ensures radiant nails and refreshed hands and feet.",
        lastmod: "2026-07-06T06:16:51+00:00",
    },
    "/seminyak/nail-spa": {
        title: "Gel Art & Nails in Seminyak",
        description: "Indulge in Seminyak's affordable nail care, offering sublime nail salon treatments. Experience fabulous extensions and more today!",
        lastmod: "2026-07-06T06:27:58+00:00",
    },
    "/seminyak/shiatsu-massage": {
        title: "Traditional Shiatsu Massage Bali – Energy Flow & Wellness",
        description: "Experience Japanese Shiatsu massage therapy in Seminyak, Bali. Gentle stretches and focused pressure release muscle tension, restore energy flow, and promote deep relaxation.",
        lastmod: "2026-07-06T05:13:16+00:00",
    },
    "/seminyak/sport-massage": {
        title: "Sports Massage in Bali – Recovery & Performance",
        description: "Sports massage therapy in Seminyak tailored for athletes and active guests. Reduce pain, enhance mobility, and enjoy faster recovery in a relaxing spa setting.",
        lastmod: "2026-07-07T05:23:53+00:00",
    },
    "/seminyak/sunburn-massage": {
        title: "Sunburn Massage Treatment in Bali - Skin Repair with Soft Aloe Vera",
        description: "Our sunburn massage treatment provides quick relief with the healing power of cold aloe vera, known for its soothing effects.",
        lastmod: "2026-07-06T06:23:11+00:00",
    },
    "/seminyak/thai-massage": {
        title: "Thai Massage Bali - Stretch, Heal, Renew",
        description: "Experience authentic Thai massage therapy in Seminyak, Bali. Combining ancient techniques with modern spa comfort, our treatments restore energy and balance.",
        lastmod: "2026-07-06T06:22:41+00:00",
    },
    "/seminyak/traditional-massage": {
        title: "Traditional Massage — Spa Bali Moon in Seminyak",
        description: "Relieve tensions with traditional massage. Let our hands guide you through a journey of passive techniques and soothing recovery.",
        lastmod: "2026-07-06T06:42:02+00:00",
    },
    "/seminyak/waxing-salon": {
        title: "Waxing Treatment in Bali – Smooth & Confident Skin",
        description: "Discover waxing therapy in Seminyak, Bali. From brows to full body, our treatments deliver silky skin with expert precision in a relaxing spa atmosphere.",
        lastmod: "2026-07-06T05:12:10+00:00",
    },
    "/terms-and-conditions": {
        title: "Spa Bali Moon Terms and Conditions",
        description: "Review Spa Bali Moon’s terms and conditions outlining policies, services, and guest responsibilities for a seamless experience.",
        lastmod: "2026-03-24T07:00:23+00:00",
    },
    "/villa-hotel-massage": {
        title: "In-Room Villa & Hotel Massage Services - Seminyak, Bali",
        description: "In-room massage service with authentic Balinese techniques. Feel great in Bali with our villa and hotel massage.",
        lastmod: "2026-07-06T06:38:12+00:00",
    },
    "/wellness-in-bali": {
        title: "Wellness Bali Guide",
        description: "Discover the ultimate wellness experiences in Bali, view our recommendations for wellness retreats to rejuvenating spa treatments.",
        lastmod: "2026-07-07T06:15:46+00:00",
    },
}

/** Look up a route's meta, falling back to the site defaults. */
export const seoFor = (route) => PAGE_SEO[route] || {}

/**
 * Routes that are live on WordPress but have no page in this codebase yet.
 * They stay out of the generated sitemap until the page exists — listing a
 * 404 in a sitemap is worse than omitting it. Empty means full parity.
 */
export const UNPORTED_ROUTES = []

/**
 * The static (non-guide-article) routes that belong in sitemap.xml,
 * i.e. every live URL that this codebase actually serves.
 */
export const SITEMAP_STATIC_ROUTES = Object.keys(PAGE_SEO).filter(
    (route) => !UNPORTED_ROUTES.includes(route)
)
