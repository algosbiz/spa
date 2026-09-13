import Head from 'next/head';
import React from 'react';
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION, canonicalFor } from '@/lib/seo';

const PageHead = ({
    headTitle,
    metaDescription,
    canonicalPath,
    ogImage,
    ogType = 'website',
    robots,
}) => {
    const title = headTitle || DEFAULT_TITLE;
    const description = metaDescription || DEFAULT_DESCRIPTION;
    const canonical = canonicalPath ? canonicalFor(canonicalPath) : null;
    const image = ogImage
        ? (/^https?:\/\//i.test(ogImage) ? ogImage : `${SITE_URL}${ogImage}`)
        : null;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {robots
                ? <meta name="robots" content={robots} />
                : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* The two latin subsets these pages actually use -- Literata for
                headings, Mulish for body. Both are declared inside
                google-fonts.css, which Next bundles into the one page
                stylesheet, so the browser only discovers them after that
                510KB sheet has downloaded AND parsed: measured, they started
                at ~138ms while the stylesheet itself started at ~46ms.
                Preloading moves them onto the first round of requests.
                crossOrigin is required even same-origin -- fonts are fetched
                in CORS mode, and without it the preload is not matched and
                the file is downloaded a second time. Only the latin subsets
                are listed; the latin-ext files are left to normal discovery
                because almost no page has a character that needs them. */}
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                href="/webfonts/or3hQ6P12-iJxAIgLYTwJrUXnTPm.woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                type="font/woff2"
                href="/webfonts/1Ptvg83HX_SGhgqk3wotYKNnBQ.woff2"
                crossOrigin="anonymous"
            />

            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Spa Bali Moon" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonical && <meta property="og:url" content={canonical} />}
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            <link rel="shortcut icon" href="/images/SMBlogo.ico" type="image/x-icon" />
        </Head>
    );
};

export default PageHead;
