import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home6/Banner";
import Feature from "../components/sections/Home6/Feature";
import About from "../components/sections/Home6/About";
import Product from "../components/sections/Home6/Product";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home6/Services";
import Marquee from "../components/sections/Home6/Marquee";
import Portfolio from "../components/sections/Home6/Portfolio";
import Contact from "../components/sections/Home6/Contact";
import Testimonial from "../components/sections/Home1/Testimonial";
import News from "../components/sections/Home6/News";

export default function Home6() {
    return (
        <> 
            <Layout HeaderStyle="one" FooterStyle="four">
                <Banner />
                <Feature />
                <About />
                <Marquee />
                <Services />
                <Product />
                <Faq />
                <Testimonial />
                <Portfolio />
                <Contact />
                <News />
            </Layout>
        </>
    );
}
