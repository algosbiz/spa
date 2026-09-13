import { Turnstile } from '@marsidev/react-turnstile';

// Design 1 — "Studio Split".
// Keeps the page's two-column shape but trades the grey boxes for underline
// fields with floating labels, and turns the info column into a warm panel.
// The section still opens on the sec-title and ends on the send button, so the
// tear rhythm's measured 139/89 (desktop) and 50/49 (mobile) still land right.
// Declared out here, rendered inline below: styled-jsx only tags JSX that sits in
// the component's own returned tree, so markup built inside a nested helper
// function comes out without the scoped class and loses every style.
const FIELDS = [
    { name: 'form_name', type: 'text', label: 'Name', required: true, autoComplete: 'name', placeholder: 'Your name' },
    { name: 'form_email', type: 'email', label: 'Email', required: true, autoComplete: 'email', placeholder: 'you@example.com' },
    { name: 'form_subject', type: 'text', label: 'Subject', required: true, placeholder: 'What is this about?' },
    { name: 'form_phone', type: 'tel', label: 'Phone / WhatsApp', required: false, autoComplete: 'tel', placeholder: '+62 …' },
];

export default function DesignSplit({
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
                <div className="row cf-split">
                    <div className="col-xl-7 col-lg-6">
                        <div className="sec-title mb-50">
                            <span className="sub-title">{formSubTitle}</span>
                            <h2>{formTitle}</h2>
                        </div>

                        <form id="contact_form" name="contact_form" onSubmit={handleSubmit} onReset={handleReset}>
                            <div className="cf-grid">
                                {FIELDS.map((f) => (
                                    <div key={f.name} className={`cf-field${formData[f.name] ? ' is-filled' : ''}`}>
                                        <input
                                            id={`split-${f.name}`}
                                            name={f.name}
                                            type={f.type}
                                            value={formData[f.name]}
                                            onChange={handleChange}
                                            required={f.required}
                                            placeholder=" "
                                            autoComplete={f.autoComplete}
                                        />
                                        <label htmlFor={`split-${f.name}`}>
                                            {f.label}
                                            {f.required ? <span aria-hidden="true"> *</span> : null}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className={`cf-field cf-field--area${formData.form_message ? ' is-filled' : ''}`}>
                                <textarea
                                    id="split-form_message"
                                    name="form_message"
                                    rows="6"
                                    value={formData.form_message}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label htmlFor="split-form_message">
                                    Message<span aria-hidden="true"> *</span>
                                </label>
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

                    <div className="col-xl-5 col-lg-6">
                        <aside className="cf-aside">
                            <img className="cf-aside__mark" src="/images/logo/sbm.webp" alt="" aria-hidden="true" />
                            <div className="sec-title">
                                <span className="sub-title">{infoSubTitle}</span>
                                <h2>{infoTitle}</h2>
                                <div className="text">{infoText}</div>
                            </div>
                            <ul className="cf-aside__list">
                                {contactItems.map((item) => (
                                    <li key={item.title}>
                                        <span className="cf-aside__icon" aria-hidden="true">
                                            <i className={`fa-classic fa-light ${item.icon} fa-fw`} />
                                        </span>
                                        <div className="cf-aside__text">
                                            <h6>{item.title}</h6>
                                            {item.href ? <a href={item.href}>{item.text}</a> : <span>{item.text}</span>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Spacing tokens taken from what the page already uses: the 24px
                   Bootstrap gutter for the field grid, 50/25px for the block
                   rhythm the sec-title sets, 19px between info rows. */
                .cf-split {
                    --cf-gap-field: 24px;
                    --cf-gap-block: 50px;
                    --cf-gap-item: 19px;
                }

                .cf-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: var(--cf-gap-field);
                }

                .cf-field {
                    position: relative;
                    padding-top: 18px;
                }
                .cf-field :global(input),
                .cf-field :global(textarea) {
                    width: 100%;
                    display: block;
                    border: none;
                    border-bottom: 1px solid #ddd6c6;
                    border-radius: 0;
                    background: transparent;
                    padding: 6px 0 12px;
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 28px;
                    color: var(--theme-color-dark);
                    transition: border-color 0.25s ease;
                }
                .cf-field :global(textarea) {
                    resize: vertical;
                    min-height: 150px;
                }
                .cf-field :global(input:focus),
                .cf-field :global(textarea:focus) {
                    outline: none;
                    border-bottom-color: var(--theme-color1);
                }
                .cf-field :global(input::placeholder),
                .cf-field :global(textarea::placeholder) {
                    color: transparent;
                }
                .cf-field :global(label) {
                    position: absolute;
                    left: 0;
                    top: 24px;
                    margin: 0;
                    font-family: var(--text-font);
                    font-size: 16px;
                    line-height: 28px;
                    color: var(--text-color);
                    pointer-events: none;
                    transform-origin: left top;
                    transition: transform 0.22s ease, color 0.22s ease;
                }
                .cf-field :global(label span) {
                    color: var(--theme-color1);
                }
                /* Float on focus, when the browser has autofilled, and whenever
                   the field holds a value (is-filled covers programmatic resets). */
                .cf-field :global(input:focus) ~ :global(label),
                .cf-field :global(textarea:focus) ~ :global(label),
                .cf-field :global(input:not(:placeholder-shown)) ~ :global(label),
                .cf-field :global(textarea:not(:placeholder-shown)) ~ :global(label),
                .cf-field.is-filled :global(label) {
                    transform: translateY(-24px) scale(0.8125);
                    color: var(--theme-color1);
                }

                .cf-field--area {
                    margin-top: var(--cf-gap-field);
                }
                .cf-field--area :global(label) {
                    top: 24px;
                }

                .cf-verify {
                    margin-top: var(--cf-gap-block);
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

                .cf-aside {
                    position: relative;
                    overflow: hidden;
                    background: var(--theme-light-background);
                    border-left: 2px solid var(--theme-color1);
                    padding: 50px 40px;
                }
                @media (min-width: 992px) {
                    /* Only once it really is a side column; while stacked, a full
                       height overflows the row and drags the last ink too low. */
                    .cf-aside {
                        height: 100%;
                    }
                }
                .cf-aside__mark {
                    position: absolute;
                    right: -60px;
                    bottom: -50px;
                    width: 260px;
                    height: auto;
                    opacity: 0.07;
                    pointer-events: none;
                }
                .cf-aside :global(.sec-title) {
                    position: relative;
                    margin-bottom: 0;
                }
                .cf-aside :global(.sec-title h2) {
                    font-size: 38px;
                    line-height: 48px;
                }

                .cf-aside__list {
                    position: relative;
                    list-style: none;
                    margin: 41px 0 0;
                    padding: 0;
                }
                .cf-aside__list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                }
                .cf-aside__list li + li {
                    margin-top: var(--cf-gap-item);
                    padding-top: var(--cf-gap-item);
                    border-top: 1px solid rgba(var(--theme-color1-rgb), 0.18);
                }
                .cf-aside__icon {
                    flex: 0 0 48px;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 1px solid rgba(var(--theme-color1-rgb), 0.45);
                    color: var(--theme-color1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .cf-aside__list li:hover .cf-aside__icon {
                    background-color: var(--theme-color1);
                    color: var(--theme-color-white);
                }
                .cf-aside__text :global(h6) {
                    margin: 0 0 2px;
                    font-family: var(--text-font);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--theme-color1);
                }
                .cf-aside__text :global(a),
                .cf-aside__text :global(span) {
                    font-family: var(--text-font);
                    font-size: 17px;
                    line-height: 27px;
                    color: var(--headings-color);
                }
                .cf-aside__text :global(a:hover) {
                    color: var(--theme-color1);
                }

                @media (max-width: 991px) {
                    .cf-aside {
                        margin-top: var(--cf-gap-block);
                    }
                }
                @media (max-width: 767px) {
                    .cf-split {
                        --cf-gap-block: 25px;
                    }
                    .cf-grid {
                        grid-template-columns: minmax(0, 1fr);
                    }
                    .cf-aside {
                        padding: 32px 24px;
                    }
                    .cf-aside :global(.sec-title h2) {
                        font-size: 30px;
                        line-height: 40px;
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
                    .cf-aside__text :global(a) {
                        position: relative;
                    }
                    .cf-aside__text :global(a)::after {
                        content: '';
                        position: absolute;
                        inset: -9px -6px;
                    }
                }
            `}</style>
        </>
    );
}
