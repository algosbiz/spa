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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,200..900&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
        </Head>
    );
};

export default PageHead;
