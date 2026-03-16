import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li>
                <Link href="/#0">Home <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/">Home one</Link></li>
                    <li><Link href="/index-2">Home two</Link></li>
                    <li><Link href="/index-3">Home three</Link></li>
                    <li><Link href="/index-4">Home four</Link></li>
                    <li><Link href="/index-5">Home five</Link></li>
                    <li><Link href="/index-6">Home six</Link></li>
                    <li>
                        <Link className="arrow" href="#0">Single Styles</Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/index-1-single">Single Style One</Link></li>
                            <li><Link href="/index-2-single">Single Style Two</Link></li>
                            <li><Link href="/index-3-single">Single Style Three</Link></li>
                            <li><Link href="/index-4-single">Single Style Four</Link></li>
                            <li><Link href="/index-5-single">Single Style Five</Link></li>
                            <li><Link href="/index-6-single">Single Style Six</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="arrow" href="#0">Dark Styles</Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/index-1-dark">Dark Style One</Link></li>
                            <li><Link href="/index-2-dark">Dark Style Two</Link></li>
                            <li><Link href="/index-3-dark">Dark Style Three</Link></li>
                            <li><Link href="/index-4-dark">Dark Style Four</Link></li>
                            <li><Link href="/index-5-dark">Dark Style Five</Link></li>
                            <li><Link href="/index-6-dark">Dark Style Six</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><Link href="/page-about">About</Link></li>
            <li>
                <Link href="/#0">Pages <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-gallery">Gallery</Link></li>
                    <li>
                        <Link className="arrow" href="#0">Team</Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-team">Team</Link></li>
                            <li><Link href="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link className="arrow" href="#0">Shop</Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/shop-products">Shop Product</Link></li>
                            <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link href="/shop-product-details">Product Details</Link></li>
                            <li><Link href="/shop-checkout">Checkout</Link></li>
                            <li><Link href="/shop-cart">Cart</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonials</Link></li>
                    <li><Link href="/page-faq">FAQ’s</Link></li>
                    <li><Link href="/page-404">404 Error</Link></li>
                </ul>
            </li>
            <li>
                <Link href="/index-2">Services <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-services">Service Grid</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
                </ul>
            </li>
            <li>
                <Link href="/#0">News <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/news-grid">News</Link></li>
                    <li><Link href="/news-details">News Details</Link></li>
                </ul>
            </li>
            <li><Link href="/page-contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;