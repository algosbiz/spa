import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSession } from '@/lib/session';

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');
            router.push('/admin');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Admin Login</title>
                <meta name="robots" content="noindex" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400..600&family=Mulish:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="login-wrap">
                <div className="glow glow-a" aria-hidden="true" />
                <div className="glow glow-b" aria-hidden="true" />
                <img className="watermark" src="/images/logo/sbm.webp" alt="" aria-hidden="true" />

                <form className="login-card" onSubmit={submit}>
                    <div className="card-accent" aria-hidden="true" />

                    <div className="brand">
                        <img src="/images/logo/SMBtitle.svg" alt="Spa Bali Moon" width="435" height="80" />
                    </div>

                    <div className="divider" aria-hidden="true">
                        <span className="adm-line" />
                        <span className="eyebrow">Content Studio</span>
                        <span className="adm-line" />
                    </div>

                    <h1>Welcome back</h1>
                    <p className="adm-sub">Sign in to manage articles and guides.</p>

                    {error && (
                        <div className="err" role="alert">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M12 7.5v5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                <circle cx="12" cy="16.3" r="1.05" fill="currentColor" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <label htmlFor="admin-password">Password</label>
                    <div className="field">
                        <svg className="lock" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
                            <path d="M8 10.5V7.8a4 4 0 1 1 8 0v2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                            <circle cx="12" cy="15.4" r="1.3" fill="currentColor" />
                        </svg>
                        <input
                            id="admin-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            autoComplete="current-password"
                            autoFocus
                        />
                        <button
                            type="button"
                            className="toggle"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            aria-pressed={showPassword}
                            title={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.7" />
                                    <path d="M4 20 20 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.7" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <button className="submit" type="submit" disabled={loading || !password}>
                        {loading ? (
                            <>
                                <span className="spinner" aria-hidden="true" />
                                Processing…
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <p className="foot">Restricted area · Authorised staff only</p>
                </form>
            </div>

            <style jsx>{`
                .login-wrap {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px 20px;
                    overflow: hidden;
                    background: radial-gradient(120% 90% at 50% 0%, #fbf8f2 0%, #f2ece1 45%, #e9e0d0 100%);
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                    line-height: 1.5;
                }
                .glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }
                .glow-a {
                    width: 460px;
                    height: 460px;
                    top: -160px;
                    left: -120px;
                    background: rgba(184, 149, 46, 0.16);
                }
                .glow-b {
                    width: 520px;
                    height: 520px;
                    bottom: -200px;
                    right: -140px;
                    background: rgba(140, 160, 128, 0.14);
                }
                .watermark {
                    position: absolute;
                    width: 640px;
                    max-width: 130%;
                    height: auto;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0.05;
                    pointer-events: none;
                    user-select: none;
                }

                .login-card {
                    position: relative;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.94);
                    backdrop-filter: blur(6px);
                    padding: 42px 36px 30px;
                    border-radius: 20px;
                    width: 100%;
                    max-width: 410px;
                    border: 1px solid #ece3d3;
                    box-shadow: 0 1px 2px rgba(58, 45, 24, 0.04), 0 18px 50px -12px rgba(58, 45, 24, 0.16);
                    animation: rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                @keyframes rise {
                    from {
                        opacity: 0;
                        transform: translateY(14px);
                    }
                }
                .card-accent {
                    position: absolute;
                    inset: 0 0 auto 0;
                    height: 3px;
                    background: linear-gradient(90deg, #e3d199 0%, #b8952e 38%, #8a6f1c 62%, #e3d199 100%);
                }

                .brand {
                    text-align: center;
                    margin-bottom: 22px;
                }
                .brand img {
                    width: 100%;
                    max-width: 248px;
                    height: auto;
                    display: inline-block;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 26px;
                }
                .adm-line {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e0d5be, transparent);
                }
                .eyebrow {
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                    line-height: 1.4;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #b8952e;
                    white-space: nowrap;
                }

                h1 {
                    margin: 0 0 6px;
                    font-family: 'Literata', Georgia, serif;
                    line-height: 1.25;
                    font-size: 25px;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    color: #2f281e;
                }
                .adm-sub {
                    margin: 0 0 24px;
                    color: #8b7d6b;
                    font-size: 14px;
                    line-height: 1.5;
                }

                label {
                    display: block;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.09em;
                    color: #94856f;
                    margin-bottom: 8px;
                }

                .field {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: #fdfbf7;
                    border: 1px solid #ded5c5;
                    border-radius: 11px;
                    transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
                    margin-bottom: 22px;
                }
                .field:focus-within {
                    background: #fff;
                    border-color: #b8952e;
                    box-shadow: 0 0 0 3px rgba(184, 149, 46, 0.14);
                }
                .lock {
                    flex: none;
                    margin-left: 13px;
                    color: #bbaa90;
                    transition: color 0.18s ease;
                }
                .field:focus-within .lock {
                    color: #b8952e;
                }
                input {
                    flex: 1;
                    min-width: 0;
                    padding: 13px 4px 13px 11px;
                    border: none;
                    background: transparent;
                    font-family: inherit;
                    font-size: 14.5px;
                    color: #2f281e;
                    letter-spacing: 0.01em;
                }
                input::placeholder {
                    color: #b7aa95;
                    letter-spacing: normal;
                }
                input:focus {
                    outline: none;
                }

                .toggle {
                    flex: none;
                    display: grid;
                    place-items: center;
                    width: 38px;
                    height: 38px;
                    margin-right: 5px;
                    padding: 0;
                    border: none;
                    border-radius: 8px;
                    background: transparent;
                    color: #a8997f;
                    cursor: pointer;
                    transition: color 0.15s ease, background 0.15s ease;
                }
                .toggle:hover {
                    color: #8a6f1c;
                    background: rgba(184, 149, 46, 0.1);
                }
                .toggle:focus-visible {
                    outline: 2px solid #b8952e;
                    outline-offset: 2px;
                }

                .submit {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    padding: 13px;
                    background: linear-gradient(180deg, #c2a03a 0%, #b8952e 55%, #a5841f 100%);
                    color: #fff;
                    border: none;
                    border-radius: 11px;
                    font-family: inherit;
                    font-size: 15px;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    cursor: pointer;
                    box-shadow: 0 6px 16px -6px rgba(165, 132, 31, 0.6);
                    transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
                }
                .submit:hover:not(:disabled) {
                    filter: brightness(1.05);
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px -8px rgba(165, 132, 31, 0.7);
                }
                .submit:active:not(:disabled) {
                    transform: translateY(0);
                }
                .submit:focus-visible {
                    outline: 2px solid #8a6f1c;
                    outline-offset: 3px;
                }
                .submit:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                    box-shadow: none;
                }
                .spinner {
                    width: 15px;
                    height: 15px;
                    border: 2px solid rgba(255, 255, 255, 0.4);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.7s linear infinite;
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                .err {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    background: #fdf0ee;
                    color: #a8261d;
                    border: 1px solid #f3cac4;
                    padding: 10px 13px;
                    border-radius: 10px;
                    margin-bottom: 18px;
                    font-size: 13px;
                    line-height: 1.4;
                }
                .err svg {
                    flex: none;
                }

                .foot {
                    line-height: 1.5;
                    margin: 20px 0 0;
                    text-align: center;
                    font-size: 11.5px;
                    letter-spacing: 0.03em;
                    color: #a8997f;
                }

                @media (max-width: 420px) {
                    .login-card {
                        padding: 34px 24px 26px;
                    }
                    h1 {
                        font-size: 22px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .login-card {
                        animation: none;
                    }
                    .submit:hover:not(:disabled) {
                        transform: none;
                    }
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    if (session.isAdmin) {
        return { redirect: { destination: '/admin', permanent: false } };
    }
    return { props: {} };
}
