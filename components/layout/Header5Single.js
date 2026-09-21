import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import MenuSingle from './MenuSingle';
import { FrangipaniSidebar } from '../elements/FrangipaniSpray';

const Header5 = ({ scroll }) => {
    const [searchToggle, setSearchToggle] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Get the mode from localStorage
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);

        // Apply the theme based on the saved mode
        if (savedMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('dark-mode');
        }
    }, []);

    const handleToggleSearch = () => setSearchToggle(!searchToggle);
    const handleToggleSidebar = () => setSidebarToggle(!sidebarToggle);

    return (
        <>
            {/* <!-- Header area start here --> */}
            <header className={`header-area ${scroll ? "menu-fixed" : ""}`}>
                <div className="header-one__wrp">
                    <div className="header__main">
                        <Link prefetch={false} href="/" className="logo">
                            <img src="/images/logo/SMBtitle.svg" alt="logo" width="435" height="80"/>
                        </Link>
                        <div className="main-menu">
                            <nav>
                                <MenuSingle />
                            </nav>
                            <div className="menu-btns">
                                <button className="search-trigger d-none d-lg-block" onClick={handleToggleSearch}><i className="fa-light fa-magnifying-glass"></i></button>
                                <Link prefetch={false} href="/contact" className="book-now d-none d-xl-inline-block">Book An Appoinment
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_441)">
                                            <path
                                                d="M11.5975 12.4898C11.6058 12.4882 11.614 12.4859 11.6222 12.4838C11.6298 12.4819 11.6374 12.4802 11.6449 12.478C11.653 12.4755 11.6608 12.4725 11.6686 12.4697C11.6761 12.467 11.6837 12.4645 11.6911 12.4615C11.6984 12.4584 11.7055 12.4548 11.7127 12.4514C11.7203 12.4478 11.728 12.4445 11.7354 12.4405C11.7423 12.4368 11.7488 12.4326 11.7555 12.4286C11.7628 12.4242 11.7702 12.4201 11.7773 12.4153C11.7847 12.4104 11.7917 12.4049 11.7987 12.3996C11.8047 12.3951 11.8108 12.391 11.8166 12.3862C11.8292 12.3759 11.8413 12.3651 11.8527 12.3536C11.8529 12.3534 11.8531 12.3533 11.8533 12.3531C11.8534 12.3529 11.8536 12.3527 11.8538 12.3526C11.8652 12.3411 11.8761 12.329 11.8864 12.3165C11.8912 12.3107 11.8953 12.3045 11.8998 12.2986C11.9051 12.2915 11.9106 12.2845 11.9155 12.2772C11.9203 12.27 11.9244 12.2626 11.9288 12.2553C11.9328 12.2486 11.937 12.2421 11.9406 12.2352C11.9446 12.2278 11.948 12.2201 11.9516 12.2125C11.955 12.2053 11.9586 12.1983 11.9616 12.1909C11.9647 12.1835 11.9672 12.176 11.9698 12.1685C11.9727 12.1606 11.9757 12.1528 11.9781 12.1447C11.9804 12.1372 11.9821 12.1296 11.984 12.122C11.9861 12.1138 11.9883 12.1057 11.99 12.0973C11.9917 12.0885 11.9928 12.0796 11.9941 12.0708C11.9951 12.0635 11.9965 12.0563 11.9972 12.0489C11.9988 12.0325 11.9997 12.016 11.9997 11.9995V5.49951C11.9997 5.22337 11.7759 4.99952 11.4997 4.99952C11.2236 4.99952 10.9997 5.22337 10.9997 5.49951V10.7924L0.853309 0.645955C0.658051 0.450697 0.341457 0.450697 0.146199 0.645955C-0.0490586 0.841213 -0.0490586 1.15781 0.146199 1.35306L10.2926 11.4995H4.99975C4.72361 11.4995 4.49976 11.7234 4.49976 11.9995C4.49976 12.2756 4.72361 12.4995 4.99975 12.4995H11.4997C11.5162 12.4995 11.5327 12.4987 11.5491 12.497C11.5565 12.4963 11.5636 12.4949 11.571 12.4939C11.5798 12.4926 11.5887 12.4916 11.5975 12.4898Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <button onClick={handleToggleSidebar} className="menubars d-block d-lg-none" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#menubar">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.55566 11H1.55566C1.29045 11 1.03609 11.1054 0.848557 11.2929C0.661021 11.4804 0.555664 11.7348 0.555664 12V19C0.555664 19.2652 0.661021 19.5196 0.848557 19.7071C1.03609 19.8946 1.29045 20 1.55566 20H8.55566C8.82088 20 9.07523 19.8946 9.26277 19.7071C9.45031 19.5196 9.55566 19.2652 9.55566 19V12C9.55566 11.7348 9.45031 11.4804 9.26277 11.2929C9.07523 11.1054 8.82088 11 8.55566 11ZM7.55566 18H2.55566V13H7.55566V18ZM19.5557 0H12.5557C12.2904 0 12.0361 0.105357 11.8486 0.292893C11.661 0.48043 11.5557 0.734784 11.5557 1V8C11.5557 8.26522 11.661 8.51957 11.8486 8.70711C12.0361 8.89464 12.2904 9 12.5557 9H19.5557C19.8209 9 20.0752 8.89464 20.2628 8.70711C20.4503 8.51957 20.5557 8.26522 20.5557 8V1C20.5557 0.734784 20.4503 0.48043 20.2628 0.292893C20.0752 0.105357 19.8209 0 19.5557 0ZM18.5557 7H13.5557V2H18.5557V7ZM19.5557 11H12.5557C12.2904 11 12.0361 11.1054 11.8486 11.2929C11.661 11.4804 11.5557 11.7348 11.5557 12V19C11.5557 19.2652 11.661 19.5196 11.8486 19.7071C12.0361 19.8946 12.2904 20 12.5557 20H19.5557C19.8209 20 20.0752 19.8946 20.2628 19.7071C20.4503 19.5196 20.5557 19.2652 20.5557 19V12C20.5557 11.7348 20.4503 11.4804 20.2628 11.2929C20.0752 11.1054 19.8209 11 19.5557 11ZM18.5557 18H13.5557V13H18.5557V18ZM8.55566 0H1.55566C1.29045 0 1.03609 0.105357 0.848557 0.292893C0.661021 0.48043 0.555664 0.734784 0.555664 1V8C0.555664 8.26522 0.661021 8.51957 0.848557 8.70711C1.03609 8.89464 1.29045 9 1.55566 9H8.55566C8.82088 9 9.07523 8.89464 9.26277 8.70711C9.45031 8.51957 9.55566 8.26522 9.55566 8V1C9.55566 0.734784 9.45031 0.48043 9.26277 0.292893C9.07523 0.105357 8.82088 0 8.55566 0ZM7.55566 7H2.55566V2H7.55566V7Z"
                                            fill="#707070" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
            {/* <!-- Header area end here --> */}

            {/* <!-- Sidebar area start here --> */}
            <div className={`sidebar-area sidebar-area--white offcanvas offcanvas-end ${sidebarToggle ? 'show' : ''}`} id="menubar" style={{ backgroundColor: "#ffffff", borderLeft: "1px solid rgba(95, 90, 84, 0.12)" }}>
                <div className="offcanvas-header">
                    <Link prefetch={false} href="/" className="logo"> <img src="/images/logo/SMBtitle.svg" alt="logo" width="435" height="80"/></Link>
                    <button type="button" className="btn-close" onClick={handleToggleSidebar}><i
                            className="fa-regular fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body sidebar__body">
                    <div className="mobile-menu overflow-hidden">
                        <MobileMenu />
                    </div>
                    <div className="d-none d-lg-block">
                        <h5 className="mb-20" style={{ color: "#2f2924" }}>About Us</h5>
                        <p className="sidebar__text" style={{ color: "#5f5a54" }}>Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                    </div>
                    <div className="sidebar__contact-info mt-30">
                        <h5 className="mb-20" style={{ color: "#2f2924" }}>Contact Info</h5>
                        <ul>
                            <li><i className="fa-solid fa-location-dot" style={{ color: "#A78627" }}></i> <Link prefetch={false} href="/#0" style={{ color: "#5f5a54" }}>Jl. Panggung Sari No. 30, Seminyak, Bali</Link></li>
                            <li className="py-2"><i className="fa-solid fa-phone-volume" style={{ color: "#A78627" }}></i> <Link prefetch={false} href="tel:+6287863175144" style={{ color: "#5f5a54" }}>+62 878-6317-5144</Link></li>
                         </ul>
                    </div>
                    <FrangipaniSidebar />
                </div>
            </div>
            {/* <!-- Sidebar area end here --> */}

            {/* <!-- Fullscreen search area start here --> */}
            <div className={`search-wrap light-area ${searchToggle ? 'd-block' : ''}`}>
                <div className="search-inner">
                    <i className="fa-light fa-xmark search-close" id="search-close" onClick={handleToggleSearch}></i>
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Fullscreen search area end here --> */}

        </>
    );
};

export default Header5;
