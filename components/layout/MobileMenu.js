import Link from "next/link";
import { useState } from "react";
import { TREATMENT_LINKS } from "../../lib/treatments";

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

    const treatmentsExpanded = isActive.key === 2;

    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricelist</Link></li>
                <li>
                    <Link href="#0">Treatments</Link>
                    <div
                        className={`mobile-submenu ${treatmentsExpanded ? "is-open" : ""}`}
                        aria-hidden={!treatmentsExpanded}
                    >
                        <ul className="sub-menu">
                            {TREATMENT_LINKS.map((item) => (
                                <li key={item.href}><Link href={item.href}>{item.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={treatmentsExpanded ? "dropdown-btn active" : "dropdown-btn"}
                        onClick={() => handleClick(2)}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle treatments menu"
                        aria-expanded={treatmentsExpanded}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                handleClick(2);
                            }
                        }}
                    >
                        <i className="fa fa-angle-down" />
                    </div>
                </li>
                <li>
                    <Link href="/reservation">Reservation</Link>
                </li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <style jsx>{`
                .mobile-submenu {
                    clear: both;
                    display: grid;
                    grid-template-rows: 0fr;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-6px);
                    transition:
                        grid-template-rows 400ms cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 220ms ease,
                        transform 320ms cubic-bezier(0.4, 0, 0.2, 1),
                        visibility 0s linear 400ms;
                }

                .mobile-submenu.is-open {
                    grid-template-rows: 1fr;
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    transition-delay: 0s;
                }

                .mobile-submenu .sub-menu {
                    display: flow-root !important;
                    min-height: 0;
                    margin: 0;
                    overflow: hidden;
                }

                .dropdown-btn i {
                    transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1);
                }

                .dropdown-btn.active i {
                    transform: rotate(180deg);
                }

                @media (prefers-reduced-motion: reduce) {
                    .mobile-submenu,
                    .dropdown-btn i {
                        transition-duration: 0.01ms;
                    }
                }
            `}</style>
        </>
    );
};

export default MobileMenu;
