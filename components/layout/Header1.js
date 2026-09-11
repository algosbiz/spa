import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import { TREATMENT_LINKS } from '../../lib/treatments';

// Searchable site destinations (pages + treatments). Add entries here to extend search.
const SEARCH_INDEX = [
    { title: 'Home', href: '/', keywords: 'home main spa bali moon' },
    { title: 'Pricelist', href: '/seminyak', keywords: 'price pricing cost packages rates list' },
    ...TREATMENT_LINKS.map((item) => ({
        title: item.title,
        href: item.href,
        keywords: `treatment ${item.keywords}`,
    })),
    { title: 'Outcall', href: '/outcall-home-service-massage', keywords: 'outcall home service massage hotel villa private accommodation' },
    { title: 'Reservation', href: '/reservation', keywords: 'reserve reservation appointment book booking' },
    { title: 'Blog', href: '/guide', keywords: 'blog news articles posts tips' },
    { title: 'Contact', href: '/contact', keywords: 'contact reach phone email location address whatsapp' },
    { title: 'Massage in Seminyak', href: '/massage-seminyak', keywords: 'massage seminyak outcall home service' },
    { title: 'Massage in Kuta', href: '/massage-kuta', keywords: 'massage kuta outcall home service' },
    { title: 'Hotel & Villa Massage', href: '/villa-hotel-massage', keywords: 'hotel villa massage outcall home service' },
    { title: 'Day Spa Seminyak', href: '/seminyak/day-spa', keywords: 'day spa facial cream bath seminyak treatment' },
    { title: 'Home Service', href: '/home-service', keywords: 'home service outcall massage whatsapp booking' },
    { title: 'FAQ', href: '/faq', keywords: 'faq frequently asked questions help' },
    { title: 'Privacy Policy', href: '/privacy-policy', keywords: 'privacy policy data personal' },
    { title: 'Terms & Conditions', href: '/terms-and-conditions', keywords: 'terms conditions rules booking' },
];

const SIDEBAR_TRANSITION_FALLBACK_MS = 400;

const Header1 = ({ scroll }) => {
    const router = useRouter();
    const [searchToggle, setSearchToggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarState, setSidebarState] = useState('closed');
    const [darkMode, setDarkMode] = useState(false);
    const searchRef = useRef(null);
    const searchInputRef = useRef(null);

    const query = searchQuery.trim().toLowerCase();
    const searchResults = query
        ? SEARCH_INDEX.filter(
              (item) =>
                  item.title.toLowerCase().includes(query) ||
                  item.keywords.includes(query)
          )
        : [];

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

    const handleToggleSearch = () => setSearchToggle((prev) => !prev);
    const handleOpenSidebar = () => setSidebarState('open');
    const handleCloseSidebar = () => setSidebarState('closing');

    const handleSidebarTransitionEnd = (event) => {
        if (
            event.target === event.currentTarget &&
            event.propertyName === 'transform' &&
            sidebarState === 'closing'
        ) {
            setSidebarState('closed');
        }
    };

    // Complete the close even when reduced-motion disables transition events.
    useEffect(() => {
        if (sidebarState !== 'closing') return;

        const timeout = window.setTimeout(
            () => setSidebarState('closed'),
            SIDEBAR_TRANSITION_FALLBACK_MS
        );

        return () => window.clearTimeout(timeout);
    }, [sidebarState]);

    const closeSearch = () => {
        setSearchToggle(false);
        setSearchQuery('');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            router.push(searchResults[0].href);
            closeSearch();
        }
    };

    // Focus the input as soon as the search opens.
    useEffect(() => {
        if (searchToggle && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchToggle]);

    // Close the search on Escape or a click outside the panel.
    useEffect(() => {
        if (!searchToggle) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeSearch();
        };
        const onMouseDown = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                closeSearch();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('mousedown', onMouseDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('mousedown', onMouseDown);
        };
    }, [searchToggle]);

    return (
        <>
            {/* <!-- Header area start here --> */}
            <header className={`header-area header-three-area ${scroll ? "menu-fixed" : ""}`}>
                <div className="header-one__wrp">
                    <div className="header__main">
                        <Link prefetch={false} href="/" className="logo">
                            <img src="/images/logo/SMBtitle.svg" alt="logo" width="435" height="80"/>
                        </Link>
                        <div className="main-menu">
                            <nav>
                                <NavLinks />
                            </nav>
                        </div>
                        <div className="menu-btns">
                            <div className="header-search d-none d-lg-block" ref={searchRef}>
                                <button className="search-trigger" onClick={handleToggleSearch} aria-label="Search" aria-expanded={searchToggle}>
                                    <i className={`fa-light ${searchToggle ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
                                </button>
                                <div className={`header-search__dropdown ${searchToggle ? 'is-open' : ''}`}>
                                    <form className="header-search__form" onSubmit={handleSearchSubmit}>
                                        <i className="fa-light fa-magnifying-glass header-search__form-icon"></i>
                                        <input
                                            ref={searchInputRef}
                                            type="search"
                                            className="header-search__input"
                                            placeholder="Search treatments, pages..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </form>
                                    {query && (
                                        <ul className="header-search__results">
                                            {searchResults.length > 0 ? (
                                                searchResults.map((item) => (
                                                    <li key={item.href}>
                                                        <Link prefetch={false} href={item.href} className="header-search__result" onClick={closeSearch}>
                                                            <i className="fa-light fa-arrow-right-long"></i>
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="header-search__empty">No results for &ldquo;{searchQuery.trim()}&rdquo;</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <Link prefetch={false} href="/contact" className="book-now d-none d-xxl-inline-block">Book an Appointment
                                <svg width="18" height="18" viewBox="0 0 25 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12.5 17.6875C12.3459 17.6875 12.199 17.6187 12.1 17.5C8.47609 13.15 8.47609 8.16143 12.1 3.81143C12.2969 3.57393 12.7021 3.57393 12.9 3.81143C16.524 8.16143 16.524 13.15 12.9 17.5C12.8011 17.6187 12.6542 17.6875 12.5 17.6875ZM12.5 4.98226C9.71359 8.66143 9.71359 12.651 12.5 16.3302C15.2865 12.651 15.2865 8.66143 12.5 4.98226Z" fill="currentColor" />
                                    <path d="M12.5 22.3749C12.3458 22.3749 12.199 22.3062 12.1 22.1874C11.2479 21.1645 10.5854 20.0843 10.1323 18.978C10.024 18.7114 10.151 18.4072 10.4167 18.2989C10.6833 18.1905 10.9875 18.3176 11.0958 18.5832C11.4344 19.4124 11.9052 20.228 12.499 21.0155C13.0917 20.228 13.5625 19.4124 13.9021 18.5832C14.0104 18.3176 14.3146 18.1895 14.5812 18.2989C14.8479 18.4072 14.975 18.7114 14.8656 18.978C14.4125 20.0843 13.751 21.1645 12.8979 22.1874C12.801 22.3062 12.6542 22.3749 12.5 22.3749Z" fill="currentColor" />
                                    <path d="M12.5094 17.6772C12.2438 17.6772 12.0167 17.4741 11.9917 17.2043C11.9656 16.9178 12.1761 16.6637 12.4625 16.6376C17.4125 16.1793 20.1344 13.647 20.7646 8.90324C18.4854 9.21053 16.699 10.0105 15.4448 11.2824C15.2406 11.4876 14.9104 11.4897 14.7083 11.2876C14.5031 11.0855 14.5011 10.7564 14.7021 10.5512C16.249 8.98241 18.4708 8.05532 21.3073 7.79386C21.4583 7.7772 21.6136 7.83449 21.7229 7.94386C21.8313 8.05324 21.8875 8.20532 21.874 8.35949C21.3625 14.0168 18.2281 17.1501 12.5594 17.6751C12.5417 17.6772 12.525 17.6772 12.5094 17.6772Z" fill="currentColor" />
                                    <path d="M18.2354 20.2978C16.2146 20.2978 14.1927 19.5301 12.1833 17.9926C11.9542 17.8186 11.9115 17.4916 12.0854 17.2624C12.2615 17.0332 12.5875 16.9916 12.8156 17.1655C16.4573 19.9509 20.0031 19.9551 23.6438 17.1739C21.9906 15.9155 20.3354 15.2259 18.7156 15.1197C18.4292 15.1009 18.2125 14.853 18.2302 14.5655C18.25 14.2791 18.4708 14.0603 18.7844 14.0801C20.7917 14.2114 22.8198 15.1176 24.8115 16.7718C24.9313 16.8707 25 17.0176 25 17.1718C25 17.327 24.9323 17.4739 24.8125 17.5728C22.6323 19.3895 20.4333 20.2978 18.2354 20.2978Z" fill="currentColor" />
                                    <path d="M6.76458 20.2978C4.56667 20.2978 2.36771 19.3895 0.1875 17.5728C0.0677083 17.4739 0 17.327 0 17.1718C0 17.0176 0.06875 16.8707 0.188542 16.7718C2.18021 15.1176 4.20833 14.2114 6.21562 14.0801C6.52396 14.0582 6.75104 14.2791 6.76979 14.5655C6.78854 14.852 6.57187 15.1009 6.28437 15.1197C4.66354 15.2259 3.00833 15.9166 1.35625 17.1739C4.99479 19.9551 8.54271 19.9509 12.1844 17.1655C12.4125 16.9916 12.7396 17.0332 12.9146 17.2624C13.0885 17.4905 13.0458 17.8176 12.8167 17.9926C10.8073 19.5291 8.78646 20.2978 6.76458 20.2978Z" fill="currentColor" />
                                    <path d="M12.4906 17.6772C12.4739 17.6772 12.4583 17.6772 12.4416 17.6751C6.77286 17.1501 3.63849 14.0157 3.12703 8.35949C3.11244 8.20636 3.16869 8.05324 3.27807 7.94386C3.38744 7.83449 3.53849 7.7772 3.69369 7.79386C6.53015 8.05428 8.75099 8.98241 10.2989 10.5512C10.4999 10.7564 10.4979 11.0855 10.2927 11.2876C10.0895 11.4897 9.75932 11.4876 9.55619 11.2824C8.30203 10.0105 6.51453 9.21157 4.23536 8.90324C4.86453 13.647 7.58744 16.1793 12.5374 16.6376C12.8239 16.6637 13.0354 16.9178 13.0083 17.2043C12.9833 17.4741 12.7562 17.6772 12.4906 17.6772Z" fill="currentColor" />
                                </svg>
                            </Link>
                            <button
                                onClick={handleOpenSidebar}
                                className="menubars d-block d-lg-none"
                                type="button"
                                aria-controls="menubar"
                                aria-expanded={sidebarState === 'open'}
                                aria-label="Open menu"
                            >
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.55566 11H1.55566C1.29045 11 1.03609 11.1054 0.848557 11.2929C0.661021 11.4804 0.555664 11.7348 0.555664 12V19C0.555664 19.2652 0.661021 19.5196 0.848557 19.7071C1.03609 19.8946 1.29045 20 1.55566 20H8.55566C8.82088 20 9.07523 19.8946 9.26277 19.7071C9.45031 19.5196 9.55566 19.2652 9.55566 19V12C9.55566 11.7348 9.45031 11.4804 9.26277 11.2929C9.07523 11.1054 8.82088 11 8.55566 11ZM7.55566 18H2.55566V13H7.55566V18ZM19.5557 0H12.5557C12.2904 0 12.0361 0.105357 11.8486 0.292893C11.661 0.48043 11.5557 0.734784 11.5557 1V8C11.5557 8.26522 11.661 8.51957 11.8486 8.70711C12.0361 8.89464 12.2904 9 12.5557 9H19.5557C19.8209 9 20.0752 8.89464 20.2628 8.70711C20.4503 8.51957 20.5557 8.26522 20.5557 8V1C20.5557 0.734784 20.4503 0.48043 20.2628 0.292893C20.0752 0.105357 19.8209 0 19.5557 0ZM18.5557 7H13.5557V2H18.5557V7ZM19.5557 11H12.5557C12.2904 11 12.0361 11.1054 11.8486 11.2929C11.661 11.4804 11.5557 11.7348 11.5557 12V19C11.5557 19.2652 11.661 19.5196 11.8486 19.7071C12.0361 19.8946 12.2904 20 12.5557 20H19.5557C19.8209 20 20.0752 19.8946 20.2628 19.7071C20.4503 19.5196 20.5557 19.2652 20.5557 19V12C20.5557 11.7348 20.4503 11.4804 20.2628 11.2929C20.0752 11.1054 19.8209 11 19.5557 11ZM18.5557 18H13.5557V13H18.5557V18ZM8.55566 0H1.55566C1.29045 0 1.03609 0.105357 0.848557 0.292893C0.661021 0.48043 0.555664 0.734784 0.555664 1V8C0.555664 8.26522 0.661021 8.51957 0.848557 8.70711C1.03609 8.89464 1.29045 9 1.55566 9H8.55566C8.82088 9 9.07523 8.89464 9.26277 8.70711C9.45031 8.51957 9.55566 8.26522 9.55566 8V1C9.55566 0.734784 9.45031 0.48043 9.26277 0.292893C9.07523 0.105357 8.82088 0 8.55566 0ZM7.55566 7H2.55566V2H7.55566V7Z"
                                        fill="#707070" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Header area end here --> */}

            {/* <!-- Sidebar area start here --> */}
            <div
                className={`sidebar-area sidebar-area--white offcanvas offcanvas-end ${sidebarState === 'open' ? 'show' : ''} ${sidebarState === 'closing' ? 'hiding' : ''}`}
                id="menubar"
                aria-hidden={sidebarState === 'closed'}
                onTransitionEnd={handleSidebarTransitionEnd}
                style={{ backgroundColor: "#ffffff", borderLeft: "1px solid rgba(95, 90, 84, 0.12)" }}
            >
                <div className="offcanvas-header">
                    <Link prefetch={false} href="/" className="logo"> <img src="/images/logo/sbm.webp" alt="Spa Bali Moon" width="56" height="44"/></Link>
                    <button type="button" className="btn-close" onClick={handleCloseSidebar}><i
                            className="fa-regular fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body sidebar__body">
                    <div className="mobile-menu overflow-hidden">
                        <MobileMenu />
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="mb-20" style={{ color: "#2f2924", fontFamily: "var(--title-font)", fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}>About Us</p>
                        <p className="sidebar__text" style={{ color: "#5f5a54" }}>Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.</p>
                    </div>
                    <div className="sidebar__contact-info mt-30">
                        <p className="mb-20" style={{ color: "#2f2924", fontFamily: "var(--title-font)", fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}>Contact Info</p>
                        <ul>
                            <li><i className="fa-solid fa-location-dot" style={{ color: "#A78627" }}></i> <Link prefetch={false} href="/#0" style={{ color: "#5f5a54" }}>Jl. Panggung Sari No. 30, Seminyak, Bali</Link></li>
                            <li className="py-2"><i className="fa-solid fa-phone-volume" style={{ color: "#A78627" }}></i> <Link prefetch={false} href="tel:+6287863175144" style={{ color: "#5f5a54" }}>+62 878-6317-5144</Link></li>
                            <li><i className="fa-solid fa-paper-plane" style={{ color: "#A78627" }}></i> <Link prefetch={false} href="mailto:info@spabalimoon.com" style={{ color: "#5f5a54" }}>info@spabalimoon.com</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__socials mt-30">
                        <ul>
                            <li>
                                <Link prefetch={false} href="/#0">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.9466 4.69593C15.8843 3.41522 15.5906 2.27682 14.6563 1.34297C13.7219 0.409114 12.5829 0.11562 11.3014 0.053363C9.97553 -0.0177877 6.01557 -0.0177877 4.69855 0.053363C3.41713 0.11562 2.28699 0.409114 1.34372 1.34297C0.400455 2.27682 0.115684 3.41522 0.0533926 4.69593C-0.0177975 6.02111 -0.0177975 9.97887 0.0533926 11.3041C0.115684 12.5848 0.409354 13.7232 1.34372 14.657C2.28699 15.5909 3.41713 15.8844 4.69855 15.9466C6.02447 16.0178 9.98443 16.0178 11.3014 15.9466C12.5829 15.8844 13.7219 15.5909 14.6563 14.657C15.5906 13.7232 15.8843 12.5848 15.9466 11.3041C16.0178 9.97887 16.0178 6.02112 15.9466 4.70483V4.69593ZM7.99111 12.2201C5.65963 12.2201 3.76419 10.3257 3.76419 7.99555C3.76419 5.66536 5.65963 3.77098 7.99111 3.77098C10.3226 3.77098 12.218 5.66536 12.218 7.99555C12.218 10.3257 10.3226 12.2201 7.99111 12.2201ZM12.9032 3.99332C12.4138 3.99332 12.0133 3.5931 12.0133 3.10394C12.0133 2.61478 12.4049 2.21456 12.9032 2.21456C13.3926 2.21456 13.7931 2.61478 13.7931 3.10394C13.7931 3.5931 13.3926 3.99332 12.9032 3.99332ZM10.8832 7.99555C10.8832 9.58754 9.58399 10.886 7.99111 10.886C6.39823 10.886 5.09901 9.58754 5.09901 7.99555C5.09901 6.40355 6.39823 5.10505 7.99111 5.10505C9.58399 5.10505 10.8832 6.40355 10.8832 7.99555Z"
                                            fill="white" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Sidebar area end here --> */}

            <style jsx>{`
                .header-search {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                }
                .header-search .search-trigger {
                    background: transparent;
                    border: 0;
                    padding: 0;
                    line-height: 1;
                    cursor: pointer;
                    color: var(--headings-color, #2f2924);
                    transition: color 0.25s ease;
                }
                .header-search .search-trigger:hover {
                    color: #a78627;
                }
                .header-search__dropdown {
                    position: absolute;
                    top: calc(100% + 18px);
                    right: 0;
                    width: 340px;
                    max-width: calc(100vw - 40px);
                    background: #ffffff;
                    border: 1px solid rgba(95, 90, 84, 0.12);
                    border-radius: 14px;
                    box-shadow: 0 24px 60px rgba(31, 27, 22, 0.16);
                    padding: 14px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
                    z-index: 1050;
                }
                .header-search__dropdown.is-open {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .header-search__form {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .header-search__form-icon {
                    position: absolute;
                    left: 16px;
                    font-size: 15px;
                    color: #a78627;
                    pointer-events: none;
                }
                .header-search__input {
                    width: 100%;
                    height: 48px;
                    border: 1px solid rgba(95, 90, 84, 0.18);
                    border-radius: 10px;
                    background: #faf8f4;
                    padding: 0 16px 0 42px;
                    font-size: 15px;
                    color: #2f2924;
                    font-family: var(--text-font);
                    outline: none;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .header-search__input:focus {
                    border-color: #a78627;
                    box-shadow: 0 0 0 3px rgba(167, 134, 39, 0.12);
                }
                .header-search__input::placeholder {
                    color: #9a948c;
                }
                .header-search__results {
                    list-style: none;
                    margin: 10px 0 0;
                    padding: 0;
                    max-height: 320px;
                    overflow-y: auto;
                }
                .header-search__result {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 11px 12px;
                    border-radius: 8px;
                    color: #2f2924;
                    font-size: 14px;
                    font-family: var(--text-font);
                    text-decoration: none;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }
                .header-search__result i {
                    font-size: 13px;
                    color: #a78627;
                    transition: transform 0.2s ease;
                }
                .header-search__result:hover {
                    background: #f4efe3;
                    color: #a78627;
                }
                .header-search__result:hover i {
                    transform: translateX(3px);
                }
                .header-search__empty {
                    padding: 14px 12px;
                    text-align: center;
                    color: #9a948c;
                    font-size: 14px;
                    font-family: var(--text-font);
                }
            `}</style>

        </>
    );
};

export default Header1;
