import { Turnstile } from '@marsidev/react-turnstile';

// Design 3 — "Concierge Rail".
// Form and contact details share one panel: a dark rail carrying the ways to
// reach the spa, and a light side carrying the form. On a phone the rail comes
// first, so WhatsApp and the address are reachable without scrolling the form.
// Declared out here, rendered inline below: styled-jsx only tags JSX that sits in
// the component's own returned tree, so markup built inside a nested helper
// function comes out without the scoped class and loses every style.
const FIELDS = [
    { name: 'form_name', type: 'text', label: 'Name', required: true, autoComplete: 'name', placeholder: 'Your name' },
    { name: 'form_email', type: 'email', label: 'Email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
    { name: 'form_subject', type: 'text', label: 'Subject', required: true, placeholder: 'What is this about?' },
    { name: 'form_phone', type: 'tel', label: 'Phone / WhatsApp', required: false, autoComplete: 'tel', placeholder: '+62 …' },
];

export default function DesignRail({
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
}) {

    return (
        <>
            <div className="container cf-tail">
                <div className="cf-rail">
                    <aside className="cf-rail__info">
                        <img className="cf-rail__mark" src="/images/logo/sbm.webp" alt="" aria-hidden="true" />
                        <span className="cf-rail__eyebrow">{infoSubTitle}</span>
                        <h2 className="cf-rail__title">{infoTitle}</h2>
                        <p className="cf-rail__text">{infoText}</p>
                        <ul className="cf-rail__list">
                            {contactItems.map((item) => (
                                <li key={item.title}>
                                    <span className="cf-rail__icon" aria-hidden="true">
                                        <i className={`fa-classic fa-light ${item.icon} fa-fw`} />
                                    </span>
                                    <div>
                                        <h6>{item.title}</h6>
                                        {item.href ? <a href={item.href}>{item.text}</a> : <span>{item.text}</span>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <div className="cf-rail__form">
                        <span className="cf-rail__eyebrow cf-rail__eyebrow--dark">{formSubTitle}</span>
                        <h2 className="cf-rail__formtitle">{formTitle}</h2>

                        <form id="contact_form" name="contact_form" onSubmit={handleSubmit} onReset={handleReset}>
                            <div className="cf-grid">
                                {FIELDS.map((f) => (
                                    <div key={f.name} className="cf-field">
                                        <label htmlFor={`rail-${f.name}`}>
                                            {f.label}
                                            {f.required ? <span aria-hidden="true"> *</span> : null}
                                        </label>
                                        <input
                                            id={`rail-${f.name}`}
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
                                <label htmlFor="rail-form_message">
                                    Message<span aria-hidden="true"> *</span>
                                </label>
                                <textarea
                                    id="rail-form_message"
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
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 992px) {
                    .cf-rail {
                        margin-top: 4px;
                    }
                }
                .cf-rail {
                    --cf-gap-field: 24px;
                    --cf-gap-block: 50px;
                    --cf-gap-item: 19px;
                    display: grid;
                    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(28, 26, 29, 0.04), 0 28px 70px -34px rgba(28, 26, 29, 0.3);
                }

                /* Light rail: the info side is a warm cream panel against the white
                   form side. The two tones plus the divider still read as a rail, so
                   the design keeps its shape without the dark block. */
                .cf-rail__info {
                    position: relative;
                    overflow: hidden;
                    background: var(--theme-color-gray);
                    border-right: 1px solid #ece5d8;
                    color: var(--headings-color);
                    padding: 50px 40px;
                }
                .cf-rail__mark {
                    position: absolute;
                    right: -70px;
                    bottom: -60px;
                    width: 280px;
                    height: auto;
                    opacity: 0.08;
                    pointer-events: none;
                }

                .cf-rail__eyebrow {
                    position: relative;
                    display: block;
                    margin-bottom: 10px;
                    font-family: var(--text-font);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 22px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-rail__eyebrow--dark {
                    color: var(--theme-color1);
                }
                .cf-rail__title {
                    position: relative;
                    margin: 0 0 18px;
                    font-family: var(--title-font);
                    font-size: 36px;
                    font-weight: 300;
                    line-height: 46px;
                    color: var(--headings-color);
                }
                .cf-rail__text {
                    position: relative;
                    margin: 0;
                    font-family: var(--text-font);
                    font-size: 15px;
                    line-height: 27px;
                    color: var(--text-color);
                }

                .cf-rail__list {
                    position: relative;
                    list-style: none;
                    margin: 41px 0 0;
                    padding: 0;
                }
                .cf-rail__list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 18px;
                }
                .cf-rail__list li + li {
                    margin-top: var(--cf-gap-item);
                    padding-top: var(--cf-gap-item);
                    border-top: 1px solid rgba(var(--theme-color1-rgb), 0.18);
                }
                .cf-rail__icon {
                    flex: 0 0 46px;
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    border: 1px solid rgba(var(--theme-color1-rgb), 0.55);
                    color: var(--theme-color1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .cf-rail__list li:hover .cf-rail__icon {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }
                .cf-rail__list :global(h6) {
                    margin: 0 0 2px;
                    font-family: var(--text-font);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-rail__list :global(a),
                .cf-rail__list :global(span) {
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 26px;
                    color: var(--headings-color);
                }
                .cf-rail__list :global(a:hover) {
                    color: var(--theme-color1);
                }

                .cf-rail__form {
                    background: var(--theme-color-white);
                    padding: 50px 40px;
                }
                .cf-rail__formtitle {
                    margin: 0 0 var(--cf-gap-block);
                    font-family: var(--title-font);
                    font-size: 36px;
                    font-weight: 300;
                    line-height: 46px;
                    color: var(--headings-color);
                }

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
                    .cf-rail {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    /* Stacked, so the divider between the two halves runs across
                       instead of down. */
                    .cf-rail__info {
                        border-right: none;
                        border-bottom: 1px solid #ece5d8;
                    }
                }
                @media (max-width: 767px) {
                    .cf-rail {
                        --cf-gap-block: 25px;
                        border-radius: 14px;
                    }
                    .cf-rail__info,
                    .cf-rail__form {
                        padding: 32px 24px;
                    }

                    .cf-rail__title,
                    .cf-rail__formtitle {
                        font-size: 30px;
                        line-height: 40px;
                    }
                    .cf-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }
                }

                /* Tear rhythm: _tear-rhythm.scss sets this section's
                   padding-bottom to 89px, calibrated against the old form whose
                   button row carried a 48px mb-5 underneath it. That put the last
                   painted element 137px above the section box. This restores that
                   same 137px -- the 48px below the last row plus the 89px padding.
                   Below 992px the section stacks and the rhythm already lands, so
                   the tail only applies on desktop. */
                @media (min-width: 992px) {
                    .cf-tail {
                        padding-bottom: 48px;
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
                    .cf-rail__list :global(a) {
                        position: relative;
                    }
                    .cf-rail__list :global(a)::after {
                        content: '';
                        position: absolute;
                        inset: -9px -6px;
                    }
                }
            `}</style>
        </>
    );
}
