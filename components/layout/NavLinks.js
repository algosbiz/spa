import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricelist</Link></li>
            <li>
                <Link href="/#0">Treatments <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/index-2">Balinese Massage</Link></li>
                </ul>
            </li>
            <li><Link href="/reservation">Reservation</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;
