import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import WhatsAppButton from '../elements/WhatsAppButton';
import PageHead from './PageHead';

// Every page imports Layout, and Layout used to import all fifteen headers and
// all four footers statically -- 270KB of source that webpack could not drop,
// because every one of them was referenced in the render. Fifty-two of the
// ~seventy pages show Header1 and Footer2 and nothing else; the remaining
// variants belong to the theme's demo pages, one page each.
//
// next/dynamic still renders these on the server, so the markup, the SEO that
// reads it and the layout stability that depends on it are all unchanged --
// the only difference is that each variant now gets its own client chunk, and
// a page downloads just the header it actually shows.
const HEADERS = {
    one: dynamic(() => import('./Header1')),
    'one-single': dynamic(() => import('./Header1Single')),
    'one-dark': dynamic(() => import('./Header1Dark')),
    two: dynamic(() => import('./Header2')),
    'two-single': dynamic(() => import('./Header2Single')),
    'two-dark': dynamic(() => import('./Header2Dark')),
    three: dynamic(() => import('./Header3')),
    'three-single': dynamic(() => import('./Header3Single')),
    'three-dark': dynamic(() => import('./Header3Dark')),
    four: dynamic(() => import('./Header4')),
    'four-single': dynamic(() => import('./Header4Single')),
    'four-dark': dynamic(() => import('./Header4Dark')),
    five: dynamic(() => import('./Header5')),
    'five-single': dynamic(() => import('./Header5Single')),
    'five-dark': dynamic(() => import('./Header5Dark')),
};

const FOOTERS = {
    two: dynamic(() => import('./Footer2')),
    three: dynamic(() => import('./Footer3')),
    four: dynamic(() => import('./Footer4')),
};

const DefaultHeader = HEADERS.one;
const DefaultFooter = dynamic(() => import('./Footer'));

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode, headTitle, metaDescription, canonicalPath, ogImage, ogType, robots }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(false)
    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }

    useEffect(() => {
        if (styleMode === "Dark") {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }
    }, [styleMode]);


    // No style named means Header1/Footer, matching the old `{!HeaderStyle &&
    // <Header1 …>}` branch. An unrecognised style resolves to undefined and
    // renders nothing, which is also what the old chain did -- the 404 page
    // passes HeaderStyle="error" precisely to get no header at all.
    const Header = HeaderStyle ? HEADERS[HeaderStyle] : DefaultHeader;
    const PageFooter = FooterStyle ? FOOTERS[FooterStyle] : DefaultFooter;

    return (
        <>
            <PageHead
                headTitle={headTitle}
                metaDescription={metaDescription}
                canonicalPath={canonicalPath}
                ogImage={ogImage}
                ogType={ogType}
                robots={robots}
            />
            <div className="page-wrapper" id="top">

                {Header && <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}

                {/* <Sidebar /> */}

                {children}

                {PageFooter && <PageFooter />}
            </div>

            <WhatsAppButton />
        </>
    );
};

export default Layout;
