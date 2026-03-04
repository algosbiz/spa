import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <footer className="footer-area">
			<div className="footer__shape">
				<img src="images/shape/footer-shape-left.png" alt="shape"/>
			</div>
			<div className="container">
				<div className="footer__head">
					<Link href="/" className="logo"><img src="images/logo/logo-light.png" alt="logo"/></Link>
				</div>
				<div className="row g-5">
					<div className="col-md-6 col-xl-4">
						<div className="footer__item">
							<div className="footer-about">
								<div>
									<p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
										ligula, eget
										egestas
										magna mi ut arcu.</p>
									<div className="socials">
										<Link href="#0">
											<svg width="22" height="23" viewBox="0 0 25 26" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M14.827 10.8382L23.9337 0.252441H21.7757L13.8684 9.44394L7.55282 0.252441H0.268555L9.81894 14.1516L0.268555 25.2524H2.42667L10.777 15.5459L17.4467 25.2524H24.731L14.8265 10.8382H14.827ZM11.8712 14.2741L10.9035 12.89L3.20427 1.87703H6.51901L12.7324 10.7649L13.7001 12.1489L21.7767 23.7017H18.462L11.8712 14.2746V14.2741Z"
													fill="white" />
											</svg>
										</Link>
										<Link href="#0"><i className="fa-brands fa-facebook-f"></i></Link>
										<Link href="#0"><i className="fa-brands fa-pinterest-p"></i></Link>
										<Link href="#0"><i className="fa-brands fa-vimeo-v"></i></Link>
									</div>
								</div>
								<p className="copyright-text">&copy; 2025 <Link href="/">Sparelx</Link>, All Rights Reserved
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-2">
						<div className="footer__item">
							<h3 className="title">Links</h3>
							<ul className="links">
								<li><Link href="#0">About</Link></li>
								<li><Link href="#0">Pricing</Link></li>
								<li><Link href="#0">Shop</Link></li>
								<li><Link href="#0">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="footer__item">
							<h3 className="title">Contact</h3>
							<ul className="links">
								<li><Link href="#0">2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486</Link></li>
								<li><Link href="#0">(907) 555-0101</Link></li>
								<li><Link href="#0">curtis.weaver@example.com</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="footer__item">
							<h3 className="title">Open Hours</h3>
							<ul className="time-table">
								<li>Monday to Friday : <span>09:00-20:00</span> </li>
								<li>Saturday: <span>09:00-18:00</span></li>
								<li>Sunday: <span>09:00-18:00</span></li>
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