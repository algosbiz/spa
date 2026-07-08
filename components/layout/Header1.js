import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

// Searchable site destinations (pages + treatments). Add entries here to extend search.
const SEARCH_INDEX = [
    { title: 'Home', href: '/', keywords: 'home main spa bali moon' },
    { title: 'Pricelist', href: '/pricing', keywords: 'price pricing cost packages rates list' },
    { title: 'Balinese Massage', href: '/balinese-massage', keywords: 'treatment balinese massage body relax' },
    { title: 'Bali Moon Facial', href: '/bali-moon-facial', keywords: 'treatment facial bali moon skin rejuvenation tea tree gold mask skincare' },
    { title: 'Body Scrub', href: '/body-scrub', keywords: 'treatment body scrub skin renewal exfoliation lulur coconut chocolate strawberry bengkoang jasmine green tea spa sari' },
    { title: 'Cellulite Massage', href: '/cellulite-massage', keywords: 'treatment cellulite massage body contouring smoother skin circulation lymphatic thighs hips buttocks abdomen' },
    { title: 'Couple Massage', href: '/couple-massage', keywords: 'treatment couple massage couples two pax honeymoon anniversary side by side shared wellness' },
    { title: 'Virgin Coconut Oil Massage', href: '/virgin-coconut-oil-massage', keywords: 'treatment virgin cold press coconut oil massage natural nourishment skin hydration moisturising relaxation' },
    { title: 'Hair Creambath', href: '/hair-creambath', keywords: 'treatment hair creambath cream bath scalp wellness ginseng avocado aloe vera loreal conditioning' },
    { title: 'Reservation', href: '/reservation', keywords: 'reserve reservation appointment book booking' },
    { title: 'Blog', href: '/blog', keywords: 'blog news articles posts tips' },
    { title: 'Contact', href: '/contact', keywords: 'contact reach phone email location address whatsapp' },
    { title: 'Massage in Seminyak', href: '/massage-seminyak', keywords: 'massage seminyak outcall home service' },
    { title: 'Massage in Kuta', href: '/massage-kuta', keywords: 'massage kuta outcall home service' },
    { title: 'Hotel & Villa Massage', href: '/massage-hotel-villa', keywords: 'hotel villa massage outcall home service' },
    { title: 'Day Spa Seminyak', href: '/day-spa-seminyak', keywords: 'day spa facial cream bath seminyak treatment' },
    { title: 'Home Service', href: '/home-service', keywords: 'home service outcall massage whatsapp booking' },
    { title: 'FAQ', href: '/faq', keywords: 'faq frequently asked questions help' },
    { title: 'Privacy Policy', href: '/privacy-policy', keywords: 'privacy policy data personal' },
    { title: 'Terms & Conditions', href: '/terms-conditions', keywords: 'terms conditions rules booking' },
];

const Header1 = ({ scroll }) => {
    const router = useRouter();
    const [searchToggle, setSearchToggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarToggle, setSidebarToggle] = useState(false);
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
    const handleToggleSidebar = () => setSidebarToggle(!sidebarToggle);

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
                        <Link href="/" className="logo">
                            <img src="/images/logo/SMBtitle.svg" alt="logo"/>
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
                                                        <Link href={item.href} className="header-search__result" onClick={closeSearch}>
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
                            <Link href="/contact" className="book-now d-none d-xxl-inline-block">Book An Apoinment
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <button onClick={handleToggleSidebar} className="menubars" type="button" data-bs-toggle="offcanvas" data-bs-target="#menubar">
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
            <div className={`sidebar-area sidebar-area--white offcanvas offcanvas-end ${sidebarToggle ? 'show' : ''}`} id="menubar" style={{ backgroundColor: "#ffffff", borderLeft: "1px solid rgba(95, 90, 84, 0.12)" }}>
                <div className="offcanvas-header">
                    <Link href="/" className="logo"> <img src="/images/logo/SMBtitle.svg" alt="logo"/></Link>
                    <button type="button" className="btn-close" onClick={handleToggleSidebar}><i
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
                            <li><i className="fa-solid fa-location-dot" style={{ color: "#A78627" }}></i> <Link href="/#0" style={{ color: "#5f5a54" }}>Jl. Panggung Sari No. 30, Seminyak, Bali</Link></li>
                            <li className="py-2"><i className="fa-solid fa-phone-volume" style={{ color: "#A78627" }}></i> <Link href="tel:+6287863175144" style={{ color: "#5f5a54" }}>+62 878-6317-5144</Link></li>
                            <li><i className="fa-solid fa-paper-plane" style={{ color: "#A78627" }}></i> <Link href="mailto:info@spabalimoon.com" style={{ color: "#5f5a54" }}>info@spabalimoon.com</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar__socials mt-30">
                        <ul>
                            <li>
                                <Link href="/#0">
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
