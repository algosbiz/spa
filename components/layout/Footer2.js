import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <footer className="footer-two-area footer-two-area--white-simple">
            <div className="footer__shape">
                <img src="images/shape/footer-shape-left.png" alt="shape"/>
            </div>
            <div className="container">
                <div className="footer-two__head">
                    <Link href="/" className="logo"><img src="images/logo/logo.png" alt="Spa Bali Moon"/></Link>
                    <div className="newsletter">
                        <h3 className="title">Join Our Newsletter</h3>
                        <div className="input">
                            <input type="text" placeholder="Your Email"/>
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-xl-4">
                        <div className="footer__item">
                            <div className="footer-about">
                                <div>
                                    <p className="text">Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                                    <div className="socials">
                                        <Link href="#0" aria-label="Tripadvisor"><i className="fa-brands fa-tripadvisor"></i></Link>
                                        <Link href="#0" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></Link>
                                    </div>

                                </div>
                                <p className="copyright-text">&copy; 2026 <Link href="/">Spa Bali Moon</Link>, All Rights Reserved
                                </p>
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
                                <li>Day Spa in Seminyak <span>&nbsp;</span></li>
                                <li>Open Daily: <span>9am-11pm</span></li>
                                <li>Home service fee <span>75k/therapist</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
