import { Turnstile } from '@marsidev/react-turnstile';

// Design 4 — "Atlas".
// Everything in one section: form, contact details and the map share a single
// panel, so there is no separate cream map band between the section and the
// footer. ContactInner therefore renders no <MapPanel> for this design.
//
// Declared out here, rendered inline below: styled-jsx only tags JSX that sits
// in the component's own returned tree, so markup built inside a nested helper
// function comes out without the scoped class and loses every style.
const FIELDS = [
    { name: 'form_name', type: 'text', label: 'Name', required: true, autoComplete: 'name', placeholder: 'Your name' },
    { name: 'form_email', type: 'email', label: 'Email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
    { name: 'form_subject', type: 'text', label: 'Subject', required: true, placeholder: 'What is this about?' },
    { name: 'form_phone', type: 'tel', label: 'Phone / WhatsApp', required: false, autoComplete: 'tel', placeholder: '+62 …' },
];

const DIRECTIONS =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Spa Bali Moon, Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361');

export default function DesignAtlas({
    formSubTitle,
    formTitle,
    infoSubTitle,
    infoTitle,
    infoText,
    contactItems,
    formData,
    handleChange,
    handleSubmit,
    handleReset,
    submitting,
    turnstileProps,
    embedSrc,
}) {
    return (
        <>
            <div className="container">
                <div className="sec-title cf-atlas-head">
                    <span className="sub-title">{formSubTitle}</span>
                    <h2>{formTitle}</h2>
                </div>

                <div className="cf-atlas">
                    <div className="cf-atlas__form">
                        <form id="contact_form" name="contact_form" onSubmit={handleSubmit} onReset={handleReset}>
                            <div className="cf-grid">
                                {FIELDS.map((f) => (
                                    <div key={f.name} className="cf-field">
                                        <label htmlFor={`atlas-${f.name}`}>
                                            {f.label}
                                            {f.required ? <span aria-hidden="true"> *</span> : null}
                                        </label>
                                        <input
                                            id={`atlas-${f.name}`}
                                            name={f.name}
                                            type={f.type}
                                            value={formData[f.name]}
                                            onChange={handleChange}
                                            required={f.required}
                                            placeholder={f.placeholder}
                                            autoComplete={f.autoComplete}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="cf-field cf-field--area">
                                <label htmlFor="atlas-form_message">
                                    Message<span aria-hidden="true"> *</span>
                                </label>
                                <textarea
                                    id="atlas-form_message"
                                    name="form_message"
                                    rows="5"
                                    value={formData.form_message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us what you need and when you would like to come in."
                                />
                            </div>

                            <div className="cf-verify">
                                <Turnstile {...turnstileProps} />
                            </div>

                            <input name="form_botcheck" type="hidden" value={formData.form_botcheck} onChange={handleChange} />

                            <div className="cf-actions">
                                <button type="submit" className="btn-one" disabled={submitting}>
                                    <span className="btn-title">{submitting ? 'Please wait…' : 'Send message'}</span>
                                </button>
                                <button type="reset" className="cf-reset">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>

                    <aside className="cf-atlas__side">
                        <div className="cf-atlas__map">
                            <iframe
                                src={embedSrc}
                                title="Map showing Spa Bali Moon in Seminyak, Bali"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="cf-atlas__info">
                            <span className="cf-atlas__eyebrow">{infoSubTitle}</span>
                            <h3 className="cf-atlas__title">{infoTitle}</h3>
                            <p className="cf-atlas__text">{infoText}</p>

                            <ul className="cf-atlas__list">
                                {contactItems.map((item) => (
                                    <li key={item.title}>
                                        <span className="cf-atlas__icon" aria-hidden="true">
                                            <i className={`fa-classic fa-light ${item.icon} fa-fw`} />
                                        </span>
                                        <div>
                                            <h6>{item.title}</h6>
                                            {item.href ? <a href={item.href}>{item.text}</a> : <span>{item.text}</span>}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <a className="cf-atlas__btn" href={DIRECTIONS} target="_blank" rel="noreferrer">
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
                    </aside>
                </div>
            </div>

            <style jsx global>{`
                /* This design drops the cream map band, so nothing tears into the
                   footer and the 150/75 tear rule has no edge to measure from here.
                   The footer itself already owns 82px above its first line (30px of
                   its own padding plus 52px inside it), which is as tight as this
                   gap can get. .pb-100 left the phone gap at 132px -- the same as
                   desktop, where the site normally halves it -- so trim it there.
                   Scoped to this design's own modifier class, so it leaves with it. */
                .contact-details.contact-details--atlas {
                    padding-bottom: 100px;
                }
                @media (max-width: 767px) {
                    .contact-details.contact-details--atlas {
                        padding-bottom: 20px;
                    }
                }
            `}</style>

            <style jsx>{`
                .cf-atlas-head {
                    --cf-gap-block: 50px;
                    margin-bottom: var(--cf-gap-block);
                    max-width: 640px;
                }

                .cf-atlas {
                    --cf-gap-field: 24px;
                    display: grid;
                    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
                    border: 1px solid #ece5d8;
                    border-radius: 18px;
                    overflow: hidden;
                    background: var(--theme-color-white);
                    box-shadow: 0 1px 2px rgba(28, 26, 29, 0.04), 0 28px 70px -34px rgba(28, 26, 29, 0.28);
                }

                .cf-atlas__form {
                    padding: 46px 44px;
                }

                /* The map takes whatever height the form column leaves, so the two
                   sides always finish level and the panel reads as one block. */
                .cf-atlas__side {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    border-left: 1px solid #ece5d8;
                    background: var(--theme-light-background);
                }
                .cf-atlas__map {
                    flex: 1 1 auto;
                    min-height: 260px;
                    line-height: 0;
                    background: var(--theme-color-gray);
                }
                .cf-atlas__map :global(iframe) {
                    display: block;
                    width: 100%;
                    height: 100%;
                    min-height: 260px;
                }

                .cf-atlas__info {
                    flex: 0 0 auto;
                    padding: 34px 34px 36px;
                    border-top: 1px solid #ece5d8;
                }
                .cf-atlas__eyebrow {
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
                .cf-atlas__title {
                    margin: 0 0 10px;
                    font-family: var(--title-font);
                    font-size: 26px;
                    font-weight: 400;
                    line-height: 34px;
                    color: var(--headings-color);
                }
                .cf-atlas__text {
                    margin: 0 0 24px;
                    font-family: var(--text-font);
                    font-size: 15px;
                    line-height: 25px;
                    color: var(--text-color);
                }

                .cf-atlas__list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .cf-atlas__list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                }
                .cf-atlas__list li + li {
                    margin-top: 19px;
                    padding-top: 19px;
                    border-top: 1px solid rgba(var(--theme-color1-rgb), 0.18);
                }
                .cf-atlas__icon {
                    flex: 0 0 42px;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    border: 1px solid rgba(var(--theme-color1-rgb), 0.45);
                    color: var(--theme-color1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .cf-atlas__list li:hover .cf-atlas__icon {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }
                .cf-atlas__list :global(h6) {
                    margin: 0 0 2px;
                    font-family: var(--text-font);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0.07em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-atlas__list :global(a),
                .cf-atlas__list :global(span) {
                    font-family: var(--text-font);
                    font-size: 15px;
                    line-height: 25px;
                    color: var(--headings-color);
                }
                .cf-atlas__list :global(a:hover) {
                    color: var(--theme-color1);
                }

                .cf-atlas__btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 26px;
                    padding: 14px 24px;
                    border: 1px solid var(--theme-color1);
                    border-radius: 30px;
                    font-family: var(--text-font);
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 1;
                    color: var(--theme-color1);
                    text-decoration: none;
                    transition: background-color 0.35s ease, color 0.35s ease;
                }
                .cf-atlas__btn:hover {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }

                /* ---- form controls, matching the other designs ---- */
                .cf-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: var(--cf-gap-field);
                }
                .cf-field :global(label) {
                    display: block;
                    margin: 0 0 8px;
                    font-family: var(--text-font);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: var(--headings-color);
                }
                .cf-field :global(label span) {
                    color: var(--theme-color1);
                }
                .cf-field :global(input),
                .cf-field :global(textarea) {
                    width: 100%;
                    display: block;
                    background: var(--theme-color-gray);
                    border: 1px solid transparent;
                    border-radius: 8px;
                    padding: 13px 16px;
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 26px;
                    color: var(--theme-color-dark);
                    transition: border-color 0.22s ease, background-color 0.22s ease, box-shadow 0.22s ease;
                }
                .cf-field :global(textarea) {
                    resize: vertical;
                    min-height: 132px;
                }
                .cf-field :global(input::placeholder),
                .cf-field :global(textarea::placeholder) {
                    color: #a79d8d;
                }
                .cf-field :global(input:focus),
                .cf-field :global(textarea:focus) {
                    outline: none;
                    background: var(--theme-color-white);
                    border-color: var(--theme-color1);
                    box-shadow: 0 0 0 3px rgba(var(--theme-color1-rgb), 0.14);
                }
                .cf-field--area {
                    margin-top: var(--cf-gap-field);
                }
                .cf-verify {
                    margin-top: var(--cf-gap-field);
                }
                .cf-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--cf-gap-field);
                    margin-top: var(--cf-gap-field);
                    flex-wrap: wrap;
                }
                .cf-reset {
                    border: none;
                    background: none;
                    padding: 0;
                    font-family: var(--text-font);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1;
                    color: var(--text-color);
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    transition: color 0.25s ease;
                }
                .cf-reset:hover {
                    color: var(--theme-color1);
                }

                @media (max-width: 991px) {
                    .cf-atlas {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    .cf-atlas__side {
                        border-left: none;
                        border-top: 1px solid #ece5d8;
                    }
                    .cf-atlas__map {
                        min-height: 320px;
                    }
                    .cf-atlas__map :global(iframe) {
                        height: 320px;
                    }
                }

                @media (max-width: 767px) {
                    .cf-atlas-head {
                        --cf-gap-block: 25px;
                    }
                    .cf-atlas {
                        border-radius: 14px;
                    }
                    .cf-atlas__form {
                        padding: 28px 22px;
                    }
                    .cf-atlas__info {
                        padding: 28px 22px 30px;
                    }
                    .cf-atlas__map,
                    .cf-atlas__map :global(iframe) {
                        min-height: 260px;
                        height: 260px;
                    }
                    .cf-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    .cf-atlas__title {
                        font-size: 22px;
                        line-height: 30px;
                    }
                }

                /* Touch targets. The reset button is 16px tall from its line box
                   alone, under the 24px WCAG 2.5.8 floor, so give it real height on
                   a phone. The contact link clears 24px but is well under a
                   comfortable thumb, so its hit area is grown with a pseudo-element
                   instead of padding — that keeps the layout exactly as designed. */
                @media (max-width: 767px) {
                    .cf-reset {
                        display: inline-flex;
                        align-items: center;
                        min-height: 44px;
                        padding: 0 6px;
                    }
                    .cf-atlas__list :global(a) {
                        position: relative;
                    }
                    .cf-atlas__list :global(a)::after {
                        content: '';
                        position: absolute;
                        inset: -10px -6px;
                    }
                }
            `}</style>
        </>
    );
}
