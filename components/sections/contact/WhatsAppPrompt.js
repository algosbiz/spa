import { useEffect, useRef } from 'react';

// Shown instead of sending the contact form while enquiries are handled on
// WhatsApp only. It carries whatever the visitor already typed into the chat,
// so changing channel does not cost them the message they just wrote.
export default function WhatsAppPrompt({ open, onClose, href }) {
    const dialogRef = useRef(null);
    const primaryRef = useRef(null);
    const restoreFocusTo = useRef(null);

    useEffect(() => {
        if (!open) return undefined;

        restoreFocusTo.current = document.activeElement;
        primaryRef.current?.focus();

        // Bootstrap's offcanvas locks the body the same way on this site, so
        // Lenis copes with it; the previous value is restored rather than
        // blanked, in case the sidebar is holding a lock of its own.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }
            if (event.key !== 'Tab') return;
            // Keep Tab inside the dialog: with the page still in the DOM behind
            // it, focus would otherwise walk off into the form underneath.
            const focusables = dialogRef.current?.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!focusables?.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            restoreFocusTo.current?.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <>
            <div className="wa-prompt" role="presentation" onClick={onClose}>
                <div
                    className="wa-prompt__card"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="wa-prompt-title"
                    aria-describedby="wa-prompt-text"
                    ref={dialogRef}
                    onClick={(event) => event.stopPropagation()}
                >
                    <button type="button" className="wa-prompt__close" onClick={onClose} aria-label="Close">
                        <i className="fa-solid fa-xmark" aria-hidden="true" />
                    </button>

                    <span className="wa-prompt__mark" aria-hidden="true">
                        <i className="fa-brands fa-whatsapp" />
                    </span>

                    <h3 className="wa-prompt__title" id="wa-prompt-title">
                        We reply on WhatsApp
                    </h3>
                    <p className="wa-prompt__text" id="wa-prompt-text">
                        For now all bookings and enquiries go through WhatsApp — it is the quickest way to
                        reach our therapists. Your message is ready to send, just tap below.
                    </p>

                    <a
                        className="wa-prompt__btn"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={primaryRef}
                        onClick={onClose}
                    >
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                        Continue on WhatsApp
                    </a>

                    <button type="button" className="wa-prompt__cancel" onClick={onClose}>
                        Not now
                    </button>
                </div>
            </div>

            <style jsx>{`
                .wa-prompt {
                    position: fixed;
                    inset: 0;
                    z-index: 1100;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(28, 26, 29, 0.45);
                    backdrop-filter: blur(6px);
                    animation: waFade 0.25s ease;
                }

                .wa-prompt__card {
                    position: relative;
                    width: 100%;
                    max-width: 420px;
                    padding: 40px 36px 32px;
                    border-radius: 18px;
                    background: var(--theme-color-white, #fff);
                    box-shadow: 0 30px 80px -30px rgba(28, 26, 29, 0.55);
                    text-align: center;
                    animation: waRise 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .wa-prompt__close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    border: none;
                    border-radius: 50%;
                    background: transparent;
                    color: #8b7d6b;
                    font-size: 16px;
                    line-height: 1;
                    cursor: pointer;
                    transition: background-color 0.25s ease, color 0.25s ease;
                }
                .wa-prompt__close:hover {
                    background: var(--theme-color-gray, #f5f2ec);
                    color: var(--theme-color2, #1c1a1d);
                }

                .wa-prompt__mark {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 64px;
                    height: 64px;
                    margin-bottom: 20px;
                    box-sizing: border-box;
                    border: 2px solid var(--theme-color1, #a78627);
                    border-radius: 50%;
                    background: var(--theme-color-white, #fff);
                    color: var(--theme-color1, #a78627);
                    font-size: 28px;
                }

                .wa-prompt__title {
                    margin: 0 0 12px;
                    font-family: var(--title-font, 'Literata'), serif;
                    font-size: 26px;
                    font-weight: 400;
                    line-height: 1.3;
                    color: var(--headings-color, #1c1a1d);
                }

                .wa-prompt__text {
                    margin: 0 0 26px;
                    font-family: var(--text-font, 'Mulish'), sans-serif;
                    font-size: 15px;
                    line-height: 26px;
                    color: var(--text-color, #6d6459);
                }

                .wa-prompt__btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    width: 100%;
                    min-height: 52px;
                    padding: 14px 24px;
                    box-sizing: border-box;
                    border: 2px solid var(--theme-color1, #a78627);
                    border-radius: 30px;
                    background: var(--theme-color1, #a78627);
                    font-family: var(--text-font, 'Mulish'), sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1;
                    color: var(--theme-color-white, #fff);
                    text-decoration: none;
                    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
                }
                .wa-prompt__btn:hover,
                .wa-prompt__btn:focus-visible {
                    background: #8a6f1c;
                    border-color: #8a6f1c;
                    color: var(--theme-color-white, #fff);
                }
                .wa-prompt__btn i {
                    font-size: 19px;
                }

                .wa-prompt__cancel {
                    margin-top: 14px;
                    padding: 10px 12px;
                    min-height: 44px;
                    border: none;
                    background: none;
                    font-family: var(--text-font, 'Mulish'), sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                    color: #8b7d6b;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    cursor: pointer;
                    transition: color 0.25s ease;
                }
                .wa-prompt__cancel:hover {
                    color: var(--theme-color2, #1c1a1d);
                }

                @media (max-width: 575px) {
                    .wa-prompt__card {
                        padding: 34px 24px 26px;
                    }
                    .wa-prompt__title {
                        font-size: 22px;
                    }
                }

                /* Respect a reduced-motion preference: the dialog still appears,
                   it just does not slide or fade in. */
                @media (prefers-reduced-motion: reduce) {
                    .wa-prompt,
                    .wa-prompt__card {
                        animation: none;
                    }
                }

                @keyframes waFade {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes waRise {
                    from {
                        opacity: 0;
                        transform: translateY(14px) scale(0.97);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </>
    );
}
