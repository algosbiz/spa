import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home3/Banner";
import About from "../components/sections/Home3/About";
import Product from "../components/sections/Home3/Product";
import Video from "../components/sections/Home3/Video";
import Services from "../components/sections/Home3/Services";
import Marquee from "../components/sections/Home3/Marquee";
import Pricing from "../components/sections/Home3/Pricing";
import Contact from "../components/sections/Home3/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import News from "../components/sections/Home3/News";
import Instagram from "../components/sections/Home2/Instagram";

export default function Home3() {
    return (
        <> 
            <Layout HeaderStyle="three" FooterStyle="two">
                <Banner />
                <Marquee />
                <Services />
                <About />
                <Pricing />
                <Product />
                <Video />
                <Testimonial />
                <Contact />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
