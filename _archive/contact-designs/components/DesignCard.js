import { Turnstile } from '@marsidev/react-turnstile';

// Design 2 — "Reply Card".
// One centred column: heading, a white card holding the whole form, then the
// contact details as a three-up strip underneath. Reads as a single focused
// task rather than a form competing with a sidebar.
// Declared out here, rendered inline below: styled-jsx only tags JSX that sits in
// the component's own returned tree, so markup built inside a nested helper
// function comes out without the scoped class and loses every style.
const FIELDS = [
    { name: 'form_name', type: 'text', label: 'Name', required: true, autoComplete: 'name', placeholder: 'Your name' },
    { name: 'form_email', type: 'email', label: 'Email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
    { name: 'form_subject', type: 'text', label: 'Subject', required: true, placeholder: 'What is this about?' },
    { name: 'form_phone', type: 'tel', label: 'Phone / WhatsApp', required: false, autoComplete: 'tel', placeholder: '+62 …' },
];

export default function DesignCard({
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
                <div className="cf-card-wrap">
                    <div className="sec-title cf-head">
                        <span className="sub-title">{formSubTitle}</span>
                        <h2>{formTitle}</h2>
                        <p className="cf-head__text">{infoText}</p>
                    </div>

                    <div className="cf-card">
                        <span className="cf-card__accent" aria-hidden="true" />
                        <form id="contact_form" name="contact_form" onSubmit={handleSubmit} onReset={handleReset}>
                            <div className="cf-grid">
                                {FIELDS.map((f) => (
                                    <div key={f.name} className="cf-field">
                                        <label htmlFor={`card-${f.name}`}>
                                            {f.label}
                                            {f.required ? <span aria-hidden="true"> *</span> : null}
                                        </label>
                                        <input
                                            id={`card-${f.name}`}
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
                                <label htmlFor="card-form_message">
                                    Message<span aria-hidden="true"> *</span>
                                </label>
                                <textarea
                                    id="card-form_message"
                                    name="form_message"
                                    rows="6"
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
                                <button type="submit" className="cf-submit" disabled={submitting}>
                                    {submitting ? 'Please wait…' : 'Send message'}
                                </button>
                                <button type="reset" className="cf-reset">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="cf-strip">
                        <p className="cf-strip__lead">
                            <span className="sub-title">{infoSubTitle}</span>
                            <strong>{infoTitle}</strong>
                        </p>
                        <ul className="cf-strip__list">
                            {contactItems.map((item) => (
                                <li key={item.title}>
                                    <span className="cf-strip__icon" aria-hidden="true">
                                        <i className={`fa-classic fa-light ${item.icon} fa-fw`} />
                                    </span>
                                    <h6>{item.title}</h6>
                                    {item.href ? <a href={item.href}>{item.text}</a> : <span>{item.text}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cf-card-wrap {
                    --cf-gap-field: 24px;
                    --cf-gap-block: 50px;
                    max-width: 880px;
                    margin: 0 auto;
                }

                .cf-head {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto var(--cf-gap-block);
                }
                .cf-head__text {
                    margin: 18px 0 0;
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 28px;
                    color: var(--text-color);
                }

                .cf-card {
                    position: relative;
                    overflow: hidden;
                    background: var(--theme-color-white);
                    border: 1px solid #ece5d8;
                    border-radius: 16px;
                    padding: 48px;
                    box-shadow: 0 1px 2px rgba(28, 26, 29, 0.03), 0 24px 60px -30px rgba(28, 26, 29, 0.22);
                }
                .cf-card__accent {
                    position: absolute;
                    inset: 0 0 auto 0;
                    height: 3px;
                    background: linear-gradient(90deg, rgba(var(--theme-color1-rgb), 0.25), var(--theme-color1) 45%, rgba(var(--theme-color1-rgb), 0.25));
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
                    border-radius: 10px;
                    padding: 14px 18px;
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 28px;
                    color: var(--theme-color-dark);
                    transition: border-color 0.22s ease, background-color 0.22s ease, box-shadow 0.22s ease;
                }
                .cf-field :global(textarea) {
                    resize: vertical;
                    min-height: 160px;
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
                .cf-submit {
                    flex: 1;
                    min-width: 200px;
                    border: 1px solid var(--theme-color1);
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                    border-radius: 30px;
                    padding: 17px 30px;
                    font-family: var(--text-font);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1;
                    cursor: pointer;
                    transition: 0.4s;
                }
                .cf-submit:hover:not(:disabled) {
                    background-color: transparent;
                    color: var(--theme-color1);
                }
                .cf-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
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

                .cf-strip {
                    margin-top: var(--cf-gap-block);
                    text-align: center;
                }
                .cf-strip__lead {
                    margin: 0 0 var(--cf-gap-field);
                }
                .cf-strip__lead :global(.sub-title) {
                    display: block;
                }
                .cf-strip__lead :global(strong) {
                    display: block;
                    font-family: var(--title-font);
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 38px;
                    color: var(--headings-color);
                }
                .cf-strip__list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: var(--cf-gap-field);
                }
                .cf-strip__list li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .cf-strip__icon {
                    width: 54px;
                    height: 54px;
                    margin-bottom: 14px;
                    border-radius: 50%;
                    border: 1px solid rgba(var(--theme-color1-rgb), 0.45);
                    color: var(--theme-color1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .cf-strip__list li:hover .cf-strip__icon {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }
                .cf-strip__list :global(h6) {
                    margin: 0 0 4px;
                    font-family: var(--text-font);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-strip__list :global(a),
                .cf-strip__list :global(span) {
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 26px;
                    color: var(--headings-color);
                }
                .cf-strip__list :global(a:hover) {
                    color: var(--theme-color1);
                }

                /* Three across stops working before the phone breakpoint: at 216px a
                   column the address wraps to four lines while its two neighbours stay
                   on one, so the row reads ragged. Stack it from 991 down. */
                @media (max-width: 991px) {
                    .cf-strip__list {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 28px;
                    }
                }

                @media (max-width: 767px) {
                    .cf-card-wrap {
                        --cf-gap-block: 25px;
                    }
                    .cf-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    .cf-card {
                        padding: 28px 20px;
                        border-radius: 14px;
                    }
                    .cf-actions {
                        gap: 16px;
                    }
                    .cf-submit {
                        flex: 1 1 100%;
                    }
                    .cf-reset {
                        margin: 0 auto;
                    }

                    .cf-strip__lead :global(strong) {
                        font-size: 24px;
                        line-height: 34px;
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
                    .cf-strip__list :global(a) {
                        position: relative;
                    }
                    .cf-strip__list :global(a)::after {
                        content: '';
                        position: absolute;
                        inset: -9px -6px;
                    }
                }
            `}</style>
        </>
    );
}
