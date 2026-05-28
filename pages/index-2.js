import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Product from "../components/sections/Home2/Product";
import Services from "../components/sections/Home2/Services";
import Marquee from "../components/sections/Home2/Marquee";
import Faq from "../components/sections/Home6/Faq";
// import Pricing from "../components/sections/Home2/Pricing";
import Pricing from "../components/sections/Home3/Pricing";
import Contact from "../components/sections/Home2/Contact";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import Team from "../components/sections/Home2/Team";
import News from "../components/sections/Home2/News";
import Instagram from "../components/sections/Home2/Instagram";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner />
                <AboutOld />
                <Pricing />
                {/* <Marquee /> */}
                {/* <Product /> */}
                <Funfact />
                {/* <News /> */}
                {/* <Instagram /> */}

                <Testimonial />
                {/* <Team /> */}
                {/* <Contact /> */}
                <About />
                <AboutReverse />
                <About />
                <Faq />
                <Services />
            </Layout>
        </>
    );
}
