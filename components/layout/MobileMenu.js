import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricelist</Link></li>
                <li>
                    <Link href="#0">Treatments</Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-2">Balinese Massage</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/reservation">Reservation</Link>
                </li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MobileMenu;
