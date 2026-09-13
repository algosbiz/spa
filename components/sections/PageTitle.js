import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


const PageTitle = (props) => {
  const background = props.backgroundImage || '/images/bg/page-title-bg.jpg';
  // Only a background passed in by a page has a phone-sized copy:
  // scripts/make-hero-variants.py discovers heroes by scanning pages/ for this
  // prop, so the built-in fallback is not among them. It is a 5.9KB file, well
  // under what a variant would save, so it is served as-is on every viewport.
  const mobileBackground = props.backgroundImage
      ? props.backgroundImage.replace(/(\.[a-z0-9]+)$/i, '-sm$1')
      : null;
  return (
          <>
            {/* Same reason as the Home2 banner: a CSS background is invisible
                to the preload scanner, and this one is the LCP element on the
                pages that use PageTitle instead of a banner. */}
            <Head>
                {mobileBackground
                    ? <>
                        <link rel="preload" as="image" href={mobileBackground} media="(max-width: 767px)" fetchpriority="high" />
                        <link rel="preload" as="image" href={background} media="(min-width: 768px)" fetchpriority="high" />
                      </>
                    : <link rel="preload" as="image" href={background} fetchpriority="high" />}
            </Head>
            <section
                className="page-title"
                style={mobileBackground
                    ? { '--pt-bg-lg': `url(${background})`, '--pt-bg-sm': `url(${mobileBackground})` }
                    : { backgroundImage: `url(${background})` }}
            >
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">{props.pageName}</h1>
                        <ul className="page-breadcrumb">
                            {/* An empty href resolves to the current route
                                pattern, which on /guide/[slug] rendered a link
                                to the literal "/guide/[slug]" — a 404. */}
                            <li><Link href="/">Home</Link></li>
                            <li>{props.pageName}</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Scoped to the custom-property form above: a page-title using the
                fallback still carries its own inline background-image and is
                untouched by these rules. */}
            <style jsx global>{`
                .page-title[style*="--pt-bg-lg"] {
                    background-image: var(--pt-bg-lg);
                }
                @media (max-width: 767px) {
                    .page-title[style*="--pt-bg-lg"] {
                        background-image: var(--pt-bg-sm, var(--pt-bg-lg));
                    }
                }
            `}</style>
          </>
  );
};

export default PageTitle;
