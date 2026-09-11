// The map band, shared by the split, card and rail designs (atlas folds the
// map into its own section instead).
//
// The <section> keeps its classes, its pt-130 pb-130 and its decorations
// untouched: _tear-rhythm.scss gives a doubly-decorated section 163px top and
// 157px bottom so the first and last painted thing sits ~150px from each torn
// edge. Everything here is inside that box, and the panel is the first and last
// thing painted, so the rhythm is unchanged. The iframe's own height can vary
// freely — it moves the section's total height, never the ink-to-tear distance.
const DEFAULT_DIRECTIONS =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Spa Bali Moon, Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361');

export default function MapPanel({
    embedSrc,
    name = 'Spa Bali Moon',
    eyebrow = 'Find Us',
    address = 'Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361',
    hours = 'Open daily · 9:00 – 22:00',
    directionsUrl = DEFAULT_DIRECTIONS,
}) {
    return (
        <>
            <section className="map-section map-section--contact section__decoration-top section__decoration-bottom pt-130 pb-130">
                <div className="container">
                    <div className="cf-map">
                        <div className="cf-map__frame">
                            <iframe
                                src={embedSrc}
                                className="map w-100"
                                height="450"
                                style={{ border: 0 }}
                                title={`Map showing ${name} in Seminyak, Bali`}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="cf-map__card">
                            <span className="cf-map__eyebrow">{eyebrow}</span>
                            <h3 className="cf-map__name">
                                <img className="cf-map__mark" src="/images/logo/sbm.webp" alt="" aria-hidden="true" />
                                {name}
                            </h3>
                            <p className="cf-map__addr">{address}</p>
                            <p className="cf-map__hours">{hours}</p>
                            <a className="cf-map__btn" href={directionsUrl} target="_blank" rel="noreferrer">
                                Get Directions
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M13.8 5.2h5v5M19 5.4 11.6 12.8"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18 14.4v3.4a1.9 1.9 0 0 1-1.9 1.9H6.4a1.9 1.9 0 0 1-1.9-1.9V8.1a1.9 1.9 0 0 1 1.9-1.9h3.4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .cf-map {
                    --cf-gap-field: 24px;
                    position: relative;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(28, 26, 29, 0.04), 0 28px 70px -34px rgba(28, 26, 29, 0.3);
                }
                /* A hairline of brand gold around the whole panel, drawn on top so the
                   iframe cannot paint over it. */
                .cf-map::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border: 1px solid rgba(var(--theme-color1-rgb), 0.35);
                    border-radius: 18px;
                    pointer-events: none;
                    z-index: 2;
                }

                .cf-map__frame {
                    position: relative;
                    line-height: 0;
                    background: var(--theme-color-gray);
                }
                .cf-map__frame :global(iframe) {
                    display: block;
                    width: 100%;
                }

                /* Right-hand side on purpose: this embed always draws Google's own
                   place card in the top-left corner, and a card of ours there would
                   sit straight on top of it. */
                .cf-map__card {
                    position: absolute;
                    z-index: 3;
                    right: 40px;
                    bottom: 40px;
                    width: 350px;
                    padding: 30px 32px;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.96);
                    backdrop-filter: blur(6px);
                    box-shadow: 0 12px 40px -16px rgba(28, 26, 29, 0.4);
                }

                .cf-map__eyebrow {
                    display: block;
                    margin-bottom: 8px;
                    font-family: var(--text-font);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-map__name {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 0 0 12px;
                    font-family: var(--title-font);
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 32px;
                    color: var(--headings-color);
                }
                .cf-map__mark {
                    width: 30px;
                    height: auto;
                    flex: none;
                }
                .cf-map__addr,
                .cf-map__hours {
                    margin: 0;
                    font-family: var(--text-font);
                    font-size: 15px;
                    line-height: 25px;
                    color: var(--text-color);
                }
                .cf-map__hours {
                    margin-top: 6px;
                    color: var(--theme-color1);
                    font-weight: 600;
                }

                .cf-map__btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 20px;
                    padding: 14px 24px;
                    border: 1px solid var(--theme-color1);
                    border-radius: 30px;
                    background: transparent;
                    font-family: var(--text-font);
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 1;
                    color: var(--theme-color1);
                    text-decoration: none;
                    transition: background-color 0.35s ease, color 0.35s ease;
                }
                .cf-map__btn:hover {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }

                /* Below 992px the container steps down to 696px and a floating card
                   would cover about half the map — and the left half already carries
                   Google's own place card. So from here down the card drops below the
                   map and the panel reads as one stacked block. This is also where the
                   contact columns above stack, so the whole page turns at once. */
                @media (max-width: 991px) {
                    .cf-map__card {
                        position: static;
                        width: auto;
                        border-radius: 0;
                        padding: 26px 26px;
                        backdrop-filter: none;
                        box-shadow: none;
                        background: var(--theme-light-background);
                    }
                }

                @media (max-width: 767px) {
                    .cf-map {
                        border-radius: 14px;
                    }
                    .cf-map::after {
                        border-radius: 14px;
                    }
                    .cf-map__card {
                        padding: 26px 22px;
                    }
                    .cf-map__name {
                        font-size: 21px;
                        line-height: 29px;
                    }
                }
            `}</style>
        </>
    );
}
