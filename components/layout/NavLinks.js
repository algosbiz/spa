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
                    <li><Link href="/balinese-massage">Balinese Massage</Link></li>
                    <li><Link href="/bali-moon-facial">Bali Moon Facial</Link></li>
                    <li><Link href="/body-scrub">Body Scrub</Link></li>
                    <li><Link href="/cellulite-massage">Cellulite Massage</Link></li>
                    <li><Link href="/couple-massage">Couple Massage</Link></li>
                    <li><Link href="/virgin-coconut-oil-massage">Coconut Oil Massage</Link></li>
                    <li><Link href="/hair-creambath">Hair Creambath</Link></li>
                </ul>
            </li>
            <li><Link href="/reservation">Reservation</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;
