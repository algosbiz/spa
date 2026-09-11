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
            const response = await fetch('/api/subscribe', {
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
                                    <Link href="/" className="logo footer__brand">
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
                                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Phone:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>+62 878-6317-5144</span>
                                </li>
                                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '12px' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Email:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>spabalimoon@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">
                                <Link href="/seminyak/day-spa" style={{ color: 'inherit' }}>
                                    Our Day Spa
                                </Link>
                            </h3>
                            <ul className="time-table">
                                <li style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Open Daily:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>9am - 11pm</span>
                                </li>
                                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Address:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>Jl. Pangkung Sari No. 30, Seminyak, Bali</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">
                                <Link href="/home-service" style={{ color: 'inherit' }}>
                                    Home Services
                                </Link>
                            </h3>
                            <ul className="links">
                                <li><Link href="/massage-hotel-villa">Massage Hotel &amp; Villa</Link></li>
                                <li><Link href="/">Massage Seminyak</Link></li>
                                <li><Link href="/massage-kuta">Massage Kuta</Link></li>
                                <li style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Home service fee:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>75k / therapist</span>
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
                                    <p className="footer__newsletter-note">We Won&apos;t Spam. We Hate It More Than You Do.</p>
                                )}
                            </div>
                            <div className="footer__payments">
                                <h3 className="title">Accepted Payments:</h3>
                                <div className="footer__payment-list">
                                    <span className="footer__payment-card" role="img" aria-label="Mastercard">
                                        <i className="fa-brands fa-cc-mastercard"></i>
                                    </span>
                                    <span className="footer__payment-card" role="img" aria-label="Visa">
                                        <i className="fa-brands fa-cc-visa"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(95, 90, 84, 0.12)' }}>
                    <p className="copyright-text" style={{ textAlign: 'center', marginBottom: 0 }}>
                        All Rights Reserved &copy; 2026 <Link href="/">Spa Bali Moon</Link> &middot; <Link href="/privacy-policy">Privacy Policy</Link> &middot; <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
