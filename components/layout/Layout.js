import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Header1 from './Header1';
import Header1Single from './Header1Single';
import Header1Dark from './Header1Dark';
import Header2 from './Header2';
import Header2Single from './Header2Single';
import Header2Dark from './Header2Dark';
import Header3 from './Header3';
import Header3Single from './Header3Single';
import Header3Dark from './Header3Dark';
import Header4 from './Header4';
import Header4Single from './Header4Single';
import Header4Dark from './Header4Dark';
import Header5 from './Header5';
import Header5Single from './Header5Single';
import Header5Dark from './Header5Dark';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode}) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

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


    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">

                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one-single" && <Header1Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one-dark" && <Header1Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two-single" && <Header2Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two-dark" && <Header2Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three-single" && <Header3Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three-dark" && <Header3Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four-single" && <Header4Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four-dark" && <Header4Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five" && <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five-single" && <Header5Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five-dark" && <Header5Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}

                {/* <Sidebar /> */}

                {children}

                {!FooterStyle && <Footer />}
                {FooterStyle === "two" && <Footer2 />}
                {FooterStyle === "three" && <Footer3 />}
                {FooterStyle === "four" && <Footer4 />}
            </div>
            {/* <BackToTop /> */}

            <BackToTop />
        </>
    );
};

export default Layout;