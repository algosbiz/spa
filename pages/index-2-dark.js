import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import About from "../components/sections/Home2/About";
import Product from "../components/sections/Home2/Product";
import ServicesDark from "../components/sections/Home2/ServicesDark";
import Marquee from "../components/sections/Home2/Marquee";
import Pricing from "../components/sections/Home2/Pricing";
import Contact from "../components/sections/Home2/Contact";
import Funfact from "../components/sections/Home2/Funfact";
import TestimonialDark from "../components/sections/Home2/TestimonialDark";
import Team from "../components/sections/Home2/Team";
import News from "../components/sections/Home2/News";
import Instagram from "../components/sections/Home2/Instagram";

export default function Home2Dark() {
    return (
        <>
            <Layout HeaderStyle="two-dark" FooterStyle="two" styleMode="Dark">
                <Banner />
                <About />
                <ServicesDark />
                <Marquee />
                <Pricing />
                <Product />
                <TestimonialDark />
                <Team />
                <Contact />
                <Funfact />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
