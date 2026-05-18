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
                <img src="images/shape/footer-shape-left.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="footer-two__head">
                    <Link href="/" className="logo"><img src="images/logo/SMBtitle.svg" alt="Spa Bali Moon"/></Link>
                    <div className="newsletter">
                        <h3 className="title">Join Our Newsletter</h3>
                        <form className="input" onSubmit={handleSubscribe} style={{ position: 'relative' }}>
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
                        {message && (
                            <p style={{ 
                                marginTop: '10px', 
                                fontSize: '14px', 
                                color: status === 'success' ? '#28a745' : '#dc3545',
                                transition: 'opacity 0.3s ease'
                            }}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-xl-4">
                        <div className="footer__item">
                            <div className="footer-about">
                                <div>
                                    <p className="text">Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                                    <div className="footer__payments">
                                        <h3 className="title" style={{ marginBottom: '20px' }}>We accept payment</h3>
                                        <div className="footer__payment-list">
                                            <span className="footer__payment-card" aria-label="Mastercard">
                                                <i className="fa-brands fa-cc-mastercard"></i>
                                            </span>
                                            <span className="footer__payment-card" aria-label="Visa">
                                                <i className="fa-brands fa-cc-visa"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-2">
                        <div className="footer__item">
                            <h3 className="title">Contact Us</h3>
                            <ul className="links">
                                <li style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Address:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>Jl. Panggung Sari No. 30, Seminyak, Bali</span>
                                </li>
                                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Phone:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>+62 878-6317-5144</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="footer__item">
                            <h3 className="title">Home Services</h3>
                            <ul className="links">
                                <li><Link href="#0">Massage Hotel &amp; Villa</Link></li>
                                <li><Link href="#0">Massage Seminyak</Link></li>
                                <li><Link href="#0">Massage Kuta</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="footer__item">
                            <h3 className="title">Opening Times</h3>
                            <ul className="time-table">
                                <li style={{ display: 'block', marginBottom: '15px', borderBottom: '1px solid rgba(95, 90, 84, 0.1)', paddingBottom: '8px' }}>
                                    <span style={{ fontWeight: '700', color: '#2f2924', fontSize: '16px' }}>Day Spa in Seminyak</span>
                                </li>
                                <li style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>Open Daily:</span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>9am - 11pm</span>
                                </li>
                                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '14px', marginBottom: '2px' }}>
                                        <Link href="/home-service" style={{ color: '#5f5a54', textDecoration: 'underline', fontWeight: '500' }}>
                                            Home service fee:
                                        </Link>
                                    </span>
                                    <span style={{ fontWeight: '600', color: '#2f2924', fontSize: '16px' }}>75k / therapist</span>
                                </li>
                            </ul>
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
