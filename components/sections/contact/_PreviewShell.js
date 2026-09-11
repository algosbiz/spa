// TEMPORARY preview shell — one page per contact design, each a faithful copy of
// the real /contact/ page (same banner, same props, same section adjacency, so
// the tear rhythm measures identically). Delete this file together with
// pages/contact-design-1|2|3.js once a design is chosen.
import React from 'react';
import Head from 'next/head';
import Layout from '../../layout/Layout';
import Banner from '../Home2/Banner';
import ContactInner from '../ContactInner';

export const PREVIEW_DESIGNS = [
    { id: 'split', page: '/contact-design-1/', label: 'Design 1 · Studio Split' },
    { id: 'card', page: '/contact-design-2/', label: 'Design 2 · Reply Card' },
    { id: 'rail', page: '/contact-design-3/', label: 'Design 3 · Concierge Rail' },
    { id: 'atlas', page: '/contact-design-4/', label: 'Design 4 · Atlas (one section)' },
];

// Same copy the live /contact/ page passes in.
const CONTACT_PROPS = {
    formSubTitle: 'Get in Touch',
    formTitle: 'How Can We Help?',
    infoSubTitle: 'Questions or Bookings',
    infoTitle: 'Let’s Arrange Your Visit',
    infoText:
        'Contact Spa Bali Moon to check availability, ask about treatments and packages, or arrange a massage and spa service at our Seminyak location or through selected home service options.',
    contactItems: [
        {
            icon: 'fa-phone-plus',
            title: 'WhatsApp Message',
            href: 'https://wa.me/6287863175144',
            text: '+62 878-6317-5144',
        },
        {
            icon: 'fa-location-dot',
            title: 'Visit anytime',
            text: 'Jl. Pangkung Sari No. 30 Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361',
        },
        {
            icon: 'fa-clock',
            title: 'Opening Times',
            text: 'Open Daily: 9:00 - 22:00',
        },
    ],
};

export default function PreviewShell({ design }) {
    const current = PREVIEW_DESIGNS.find((d) => d.id === design);

    return (
        <>
            <Head>
                <title>{`${current.label} — contact preview`}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <Layout
                HeaderStyle="one"
                FooterStyle="two"
                headTitle={`${current.label} — contact preview`}
                canonicalPath={current.page}
            >
                <Banner
                    subTitle="Ready When You Are"
                    titleSpan="Book Your Spa"
                    title="Experience in Seminyak"
                    buttonText="Contact Us"
                    image="/images/contact/contact-1.webp"
                />
                <ContactInner design={design} {...CONTACT_PROPS} />
            </Layout>

            {/* Fixed, outside the page flow, so it cannot affect section adjacency. */}
            <nav className="dp-switch" aria-label="Switch contact design">
                <span className="dp-switch__now">{current.label}</span>
                {PREVIEW_DESIGNS.filter((d) => d.id !== design).map((d) => (
                    <a key={d.id} href={d.page}>
                        {d.label}
                    </a>
                ))}
            </nav>

            <style jsx global>{`
                .dp-switch {
                    position: fixed;
                    left: 16px;
                    bottom: 16px;
                    z-index: 9998;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: 10px 12px;
                    border-radius: 10px;
                    background: rgba(28, 26, 29, 0.92);
                    font-family: var(--text-font);
                }
                .dp-switch__now {
                    font-size: 11px;
                    font-weight: 700;
                    line-height: 18px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                    white-space: nowrap;
                }
                .dp-switch a {
                    font-size: 12px;
                    line-height: 20px;
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    white-space: nowrap;
                }
                .dp-switch a:hover {
                    color: #fff;
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
}
