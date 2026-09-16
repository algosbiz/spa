import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setStatus('error');
            setMessage('Please enter your email address.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/subscribe/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setMessage(data.message || 'Thanks for subscribing!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please check your connection.');
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    };
    return (
        <>
        <footer className="footer-two-area footer-two-area--white-simple">
            <div className="footer__shape">
                <img loading="lazy" decoding="async" src="/images/shape/footer-shape-left.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-xl-3">
                        <div className="footer__item">
                            <div className="footer-about">
                                <div>
                                    <Link prefetch={false} href="/" className="logo footer__brand">
                                        <img loading="lazy" decoding="async" src="/images/logo/SMBtitle-footer.svg" alt="Spa Bali Moon"/>
                                    </Link>
                                    <p className="text">Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">Contact Us</h3>
                            <ul className="links">
                                <li className="footer__field">
                                    <span className="footer__field-label">Phone:</span>
                                    <span className="footer__field-value">+62 878-6317-5144</span>
                                </li>
                                <li className="footer__field">
                                    <span className="footer__field-label">Email:</span>
                                    <span className="footer__field-value">spabalimoon@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">
                                <Link prefetch={false} href="/seminyak/day-spa" style={{ color: 'inherit' }}>
                                    Our Day Spa
                                </Link>
                            </h3>
                            <ul className="time-table">
                                <li className="footer__field">
                                    <span className="footer__field-label">Open Daily:</span>
                                    <span className="footer__field-value">9am - 11pm</span>
                                </li>
                                <li className="footer__field">
                                    <span className="footer__field-label">Address:</span>
                                    <span className="footer__field-value">Jl. Pangkung Sari No. 30, Seminyak, Bali</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">
                                <Link prefetch={false} href="/outcall-home-service-massage" style={{ color: 'inherit' }}>
                                    Home Services
                                </Link>
                            </h3>
                            <ul className="links">
                                <li><Link prefetch={false} href="/villa-hotel-massage">Massage Hotel &amp; Villa</Link></li>
                                <li><Link prefetch={false} href="/">Massage Seminyak</Link></li>
                                <li><Link prefetch={false} href="/massage-kuta">Massage Kuta</Link></li>
                                <li className="footer__field footer__field--spaced">
                                    <span className="footer__field-label">Home service fee:</span>
                                    <span className="footer__field-value">75k / therapist</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-3">
                        <div className="footer__item">
                            <h3 className="title">Join Our Newsletter</h3>
                            <div className="newsletter footer__newsletter">
                                <form className="input" onSubmit={handleSubscribe}>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === 'loading'}
                                        required
                                    />
                                    <button type="submit" disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Sending...' : 'Subscribe'}
                                    </button>
                                </form>
                                {message ? (
                                    <p className="footer__newsletter-note" style={{ color: status === 'success' ? '#28a745' : '#dc3545' }}>
                                        {message}
                                    </p>
                                ) : (
                                    <p className="footer__newsletter-note">Just the occasional note about new treatments and offers.</p>
                                )}
                            </div>
                            <div className="footer__payments">
                                <h3 className="title">Accepted Payments:</h3>
                                <div className="footer__payment-list">
                                    {/* Drawn rather than pulled from Font Awesome's card set, whose
                                        marks are the pre-2016 ones. Mastercard is its current
                                        two-circle symbol; Visa is its wordmark in the brand blue. */}
                                    <span className="footer__payment-card" role="img" aria-label="Mastercard">
                                        <svg width="40" height="25" viewBox="0 0 48 30" fill="none" aria-hidden="true">
                                            <circle cx="18.5" cy="15" r="11.5" fill="#EB001B" />
                                            <circle cx="29.5" cy="15" r="11.5" fill="#F79E1B" />
                                            <path
                                                d="M24 6.06a11.48 11.48 0 0 0 0 17.88 11.48 11.48 0 0 0 0-17.88Z"
                                                fill="#FF5F00" />
                                        </svg>
                                    </span>
                                    <span className="footer__payment-card" role="img" aria-label="Visa">
                                        <span className="footer__payment-visa">VISA</span>
                                    </span>
                                    <span className="footer__payment-card" role="img" aria-label="Cash">
                                        <svg width="28" height="19" viewBox="0 0 26 18" fill="none" aria-hidden="true">
                                            <rect x="1" y="1" width="24" height="16" rx="3"
                                                fill="#EDF5EF" stroke="#2F7D5B" strokeWidth="1.5" />
                                            <circle cx="13" cy="9" r="3.6" fill="none" stroke="#2F7D5B" strokeWidth="1.5" />
                                            <path d="M4.6 4.6h1.8M19.6 13.4h1.8" stroke="#2F7D5B"
                                                strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span className="footer__payment-label">Cash</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(95, 90, 84, 0.12)' }}>
                    <p className="copyright-text" style={{ textAlign: 'center', marginBottom: 0 }}>
                        All Rights Reserved &copy; 2026 <Link prefetch={false} href="/">Spa Bali Moon</Link> &middot; <Link prefetch={false} href="/privacy-policy">Privacy Policy</Link> &middot; <Link prefetch={false} href="/terms-and-conditions">Terms &amp; Conditions</Link>
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
