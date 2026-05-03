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
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul>
                <li>
                    <Link href="/index-5">Home</Link>
                    <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/">Home one</Link></li>
                        <li><Link href="/index-2">Home two</Link></li>
                        <li><Link href="/index-3">Home three</Link></li>
                        <li><Link href="/index-4">Home four</Link></li>
                        <li><Link href="/index-5">Home five</Link></li>
                        <li><Link href="/index-6">Home six</Link></li>
                        <li>
                            <Link className="arrow" href="#0">Single Styles</Link>
                            <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
                                <li><Link href="/index-1-single">Single Style One</Link></li>
                                <li><Link href="/index-2-single">Single Style Two</Link></li>
                                <li><Link href="/index-3-single">Single Style Three</Link></li>
                                <li><Link href="/index-4-single">Single Style Four</Link></li>
                                <li><Link href="/index-5-single">Single Style Five</Link></li>
                                <li><Link href="/index-6-single">Single Style Six</Link></li>
                            </ul>
                            <div className={isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(4)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li>
                            <Link className="arrow" href="#0">Dark Styles</Link>
                            <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                                <li><Link href="/index-1-dark">Dark Style One</Link></li>
                                <li><Link href="/index-2-dark">Dark Style Two</Link></li>
                                <li><Link href="/index-3-dark">Dark Style Three</Link></li>
                                <li><Link href="/index-4-dark">Dark Style Four</Link></li>
                                <li><Link href="/index-5-dark">Dark Style Five</Link></li>
                                <li><Link href="/index-6-dark">Dark Style Six</Link></li>
                            </ul>
                            <div className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(5)}><i className="fa fa-angle-down" /></div>
                        </li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link href="/page-about">Pricelist</Link></li>
                <li>
                    <Link href="#0">Treatments</Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-2">Balinese Massage</Link></li>
                        <li>
                            <Link href="#0">Team</Link>
                            <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                                <li><Link href="/page-team">Team</Link></li>
                                <li><Link href="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(1)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li>
                            <Link href="#0">Shop</Link>
                            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                                <li><Link href="/shop-products">Shop Product</Link></li>
                                <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                                <li><Link href="/shop-product-details">Product Details</Link></li>
                                <li><Link href="/shop-checkout">Checkout</Link></li>
                                <li><Link href="/shop-cart">Cart</Link></li>
                            </ul>
                            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link href="/page-testimonial">Testimonials</Link></li>
                        <li><Link href="/page-faq">FAQ’s</Link></li>
                        <li><Link href="/page-404">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="#0">Reservation</Link>
                    <ul className={isActive.key === 3 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/page-services">Service Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MobileMenu;