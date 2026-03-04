import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import About from "../components/sections/Home2/About";
import Product from "../components/sections/Home2/Product";
import Services from "../components/sections/Home2/Services";
import Marquee from "../components/sections/Home2/Marquee";
import Pricing from "../components/sections/Home2/Pricing";
import Contact from "../components/sections/Home2/Contact";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import Team from "../components/sections/Home2/Team";
import News from "../components/sections/Home2/News";
import Instagram from "../components/sections/Home2/Instagram";

export default function Home2() {
    return (
        <> 
            <Layout HeaderStyle="two" FooterStyle="two">
                <Banner />
                <About />
                <Services />
                <Marquee />
                <Pricing />
                <Product />
                <Testimonial />
                <Team />
                <Contact />
                <Funfact />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
