// Shared success / error toast for every contact design. Markup and timing are
// unchanged from the original form; only the styles moved into styled-jsx.
export default function ContactToast({ toast, onClose }) {
    if (!toast.show) return null;
    const isSuccess = toast.type === 'success';

    return (
        <>
            <div className={`cf-toast ${isSuccess ? 'is-success' : 'is-error'}`} role="status" aria-live="polite">
                <div className="cf-toast__body">
                    <span className="cf-toast__mark" aria-hidden="true">
                        <i className={`fa-solid ${isSuccess ? 'fa-check' : 'fa-exclamation'}`} />
                    </span>
                    <div className="cf-toast__text">
                        <p className="cf-toast__title">{isSuccess ? 'Message Sent' : 'Sending Failed'}</p>
                        <p className="cf-toast__msg">{toast.message}</p>
                    </div>
                    <button type="button" className="cf-toast__close" onClick={onClose} aria-label="Dismiss">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="cf-toast__progress" />
            </div>

            <style jsx>{`
                .cf-toast {
                    position: fixed;
                    top: 30px;
                    right: 30px;
                    z-index: 9999;
                    min-width: 340px;
                    max-width: 420px;
                    background-color: #fff;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                    animation: cfToastIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    font-family: var(--text-font);
                    line-height: 1.5;
                }
                .cf-toast.is-success {
                    border-left: 4px solid var(--theme-color1);
                }
                .cf-toast.is-error {
                    border-left: 4px solid #dc3545;
                }
                .cf-toast__body {
                    padding: 18px 20px;
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                }
                .cf-toast__mark {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 14px;
                }
                .is-success .cf-toast__mark {
                    background-color: #f8f4ee;
                    color: var(--theme-color1);
                }
                .is-error .cf-toast__mark {
                    background-color: #fdf0f0;
                    color: #dc3545;
                }
                .cf-toast__text {
                    flex: 1;
                    min-width: 0;
                }
                .cf-toast__title {
                    margin: 0 0 2px;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 1.4;
                    color: #3d3428;
                }
                .cf-toast__msg {
                    margin: 0;
                    font-size: 13px;
                    line-height: 1.5;
                    color: #8b7d6b;
                }
                .cf-toast__close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    color: #a89a88;
                    font-size: 16px;
                    line-height: 1;
                    flex-shrink: 0;
                }
                .cf-toast__progress {
                    height: 3px;
                    animation: cfToastProgress 5s linear forwards;
                }
                .is-success .cf-toast__progress {
                    background-color: var(--theme-color1);
                }
                .is-error .cf-toast__progress {
                    background-color: #dc3545;
                }
                @media (max-width: 575px) {
                    .cf-toast {
                        top: 16px;
                        right: 16px;
                        left: 16px;
                        min-width: 0;
                        max-width: none;
                    }
                }
                @keyframes cfToastIn {
                    from {
                        transform: translateX(100%) translateY(-10px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0) translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes cfToastProgress {
                    from {
                        width: 100%;
                    }
                    to {
                        width: 0%;
                    }
                }
            `}</style>
        </>
    );
}
