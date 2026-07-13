import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { TREATMENT_MENU_COLUMNS } from '../../lib/treatments';

const NavLinks = () => {
    const router = useRouter();
    const currentPath = (router.asPath || '').split(/[?#]/)[0].replace(/\/$/, '') || '/';
    const isActiveHref = (href) => currentPath === (href.replace(/\/$/, '') || '/');
    const isTreatmentsActive = TREATMENT_MENU_COLUMNS.some((column) =>
        column.some((item) => isActiveHref(item.href))
    );

    return (

        <>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricelist</Link></li>
            <li className={`treatments-menu-item${isTreatmentsActive ? ' is-active' : ''}`}>
                <Link href="/#0">Treatments <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu treatment-mega-menu">
                    {TREATMENT_MENU_COLUMNS.map((column, columnIndex) => (
                        <li className="treatment-mega-menu__column" key={columnIndex}>
                            <ul className="treatment-mega-menu__column-list">
                                {column.map((item) => (
                                    <li
                                        className={`treatment-mega-menu__link-item${isActiveHref(item.href) ? ' is-active' : ''}`}
                                        key={item.href}
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </li>
            <li><Link href="/reservation">Reservation</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        <style jsx global>{`
            .header__main .main-menu ul li .treatment-mega-menu {
                left: 50%;
                top: 105px;
                display: grid;
                grid-template-columns: repeat(4, 220px);
                gap: 0;
                align-items: stretch;
                width: 880px;
                padding: 10px 0;
                border-top: 2px solid var(--theme-color1);
                border-radius: 0;
                box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.0509803922);
                transform: translate(-50%, 10px);
            }

            .header__main .main-menu ul li:hover .treatment-mega-menu {
                transform: translate(-50%, 0);
            }

            .header__main .main-menu ul li .treatment-mega-menu > li {
                width: 100%;
                padding: 0;
                align-self: stretch;
            }

            .header__main
                .main-menu
                ul
                li
                .treatment-mega-menu
                > li:not(:last-child) {
                border-right: 1px solid rgba(var(--theme-color-black-rgb), 0.08);
                border-bottom: 0;
            }

            .header__main .main-menu ul li .treatment-mega-menu__column-list {
                display: flex;
                flex-direction: column;
                gap: 0;
                align-items: stretch;
                height: 100%;
            }

            .header__main .main-menu ul li .treatment-mega-menu__link-item {
                border-bottom: 0 !important;
            }

            .header__main .main-menu ul li .treatment-mega-menu__link-item a {
                display: block;
                padding: 10px 20px;
                color: var(--headings-color) !important;
                font-size: 14px;
                font-weight: 600;
                line-height: 26px;
                text-transform: capitalize;
                white-space: nowrap;
            }

            .header__main
                .main-menu
                ul
                li.treatments-menu-item:hover
                .treatment-mega-menu__link-item
                a {
                color: var(--headings-color) !important;
                padding-left: 20px !important;
            }

            .header__main
                .main-menu
                ul
                li.treatments-menu-item
                .treatment-mega-menu
                .treatment-mega-menu__column:hover
                .treatment-mega-menu__link-item
                a {
                color: var(--headings-color) !important;
                padding-left: 20px !important;
            }

            .header__main .main-menu ul li.treatments-menu-item.is-active > a,
            .header__main .main-menu ul li.treatments-menu-item.is-active > a i {
                color: var(--theme-color1) !important;
            }

            .header__main
                .main-menu
                ul
                li.treatments-menu-item
                .treatment-mega-menu
                .treatment-mega-menu__link-item:hover
                > a,
            .header__main
                .main-menu
                ul
                li.treatments-menu-item
                .treatment-mega-menu
                .treatment-mega-menu__link-item.is-active
                > a {
                padding-left: 25px !important;
                color: var(--theme-color1) !important;
            }

            @media (max-width: 1399px) {
                .header__main .main-menu ul li .treatment-mega-menu {
                    grid-template-columns: repeat(4, 200px);
                    width: 800px;
                }

                .header__main .main-menu ul li .treatment-mega-menu__link-item a {
                    font-size: 14px;
                }
            }
        `}</style>
        </>
    );
};

export default NavLinks;
