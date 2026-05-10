import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home1/Banner";
import About from "../components/sections/Home1/About";
import Feature from "../components/sections/Home1/Feature";
import Services from "../components/sections/Home1/Services";
import Marquee from "../components/sections/Home1/Marquee";
import Contact from "../components/sections/Home1/Contact";
import Video from "../components/sections/Home1/Video";
import Package from "../components/sections/Home1/Package";
import Testimonial from "../components/sections/Home1/Testimonial";
import Gellery from "../components/sections/Home1/Gellery";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import News from "../components/sections/Home1/News";
import Instagram from "../components/sections/Home1/Instagram";

export default function Home1() {
    return (
        <> 
            <Layout HeaderStyle="one">
                <Banner />
                <About />
                <Feature />
                <Services />
                <Marquee />
                <Contact />
                <Video />
                <Package />
                <Testimonial />
                <Gellery />
                <MarqueeSwiper />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
