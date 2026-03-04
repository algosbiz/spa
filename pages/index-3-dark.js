import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home3/Banner";
import About from "../components/sections/Home3/About";
import Product from "../components/sections/Home3/Product";
import Video from "../components/sections/Home3/Video";
import Services from "../components/sections/Home3/Services";
import Marquee from "../components/sections/Home3/Marquee";
import PricingDark from "../components/sections/Home3/PricingDark";
import Contact from "../components/sections/Home3/Contact";
import TestimonialDark from "../components/sections/Home3/TestimonialDark";
import News from "../components/sections/Home3/News";
import Instagram from "../components/sections/Home2/Instagram";

export default function Home3() {
    return (
        <> 
            <Layout HeaderStyle="three-dark" FooterStyle="two" styleMode="Dark">
                <Banner />
                <Marquee />
                <Services />
                <About />
                <PricingDark />
                <Product />
                <Video />
                <TestimonialDark />
                <Contact />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
