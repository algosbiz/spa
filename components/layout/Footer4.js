import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="footer-two-area footer-two-area--light">
                <div className="container">
                    <div className="footer-two__panel pt-80">
                        <div className="row g-5">
                            <div className="col-md-6 col-xl-3">
                                <div className="footer__item">
                                    <div className="footer-about">
                                        <div>
                                            <Link href="/" className="logo footer__brand">
                                                <img src="images/logo/SMBtitle.svg" alt="Spa Bali Moon" />
                                            </Link>
                                            <p className="text">Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                                        </div>
                                        <div className="footer__mini-block">
                                            <h3 className="title">Local Health &amp; Wellness News</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer__item">
                                    <h3 className="title">Contact Us</h3>
                                    <ul className="links">
                                        <li>Address: Jl. Panggung Sari No. 30, Seminyak, Bali</li>
                                        <li>Phone: +62 878-6317-5144</li>
                                    </ul>
                                    <div className="footer__follow">
                                        <h3 className="title">Follow Us</h3>
                                        <div className="socials">
                                            <Link href="#0" aria-label="Tripadvisor">
                                                <i className="fa-brands fa-tripadvisor"></i>
                                            </Link>
                                            <Link href="#0" aria-label="Instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer__item">
                                    <h3 className="title">Opening Times</h3>
                                    <ul className="links">
                                        <li>Day Spa in Seminyak</li>
                                        <li>Open Daily: 9am-11pm</li>
                                        <li><Link href="/home-service" style={{ color: 'inherit', textDecoration: 'underline' }}><strong>Home service fee</strong></Link> 75k/therapist</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer__item">
                                    <h3 className="title">Home Services</h3>
                                    <ul className="links">
                                        <li><Link href="#0">Massage Hotel &amp; Villa</Link></li>
                                        <li><Link href="#0">Massage Seminyak</Link></li>
                                        <li><Link href="#0">Massage Kuta</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-3">
                                <div className="footer__item">
                                    <h3 className="title">Join Our Newsletter</h3>
                                    <div className="newsletter footer__newsletter">
                                        <div className="input">
                                            <input type="email" placeholder="Your Email" />
                                            <button type="button">Subscribe</button>
                                        </div>
                                        <p className="footer__newsletter-note">We Won&apos;t Spam. We Hate It More Than You Do.</p>
                                    </div>
                                    <div className="footer__payments">
                                        <h3 className="title">Accepted Payments:</h3>
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
                        <div className="footer__bottom">
                            <p className="copyright-text">All Rights Reserved &copy; 2026 Spa Bali Moon</p>
                            <div className="footer__bottom-links">
                                <Link href="/privacy-policy">Privacy Policy</Link>
                                <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
