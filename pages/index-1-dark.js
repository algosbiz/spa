import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home1/Banner";
import About from "../components/sections/Home1/About";
import FeatureDark from "../components/sections/Home1/FeatureDark";
import ServicesDark from "../components/sections/Home1/ServicesDark";
import Marquee from "../components/sections/Home1/Marquee";
import Contact from "../components/sections/Home1/Contact";
import VideoDark from "../components/sections/Home1/VideoDark";
import PackageDark from "../components/sections/Home1/PackageDark";
import Testimonial from "../components/sections/Home1/Testimonial";
import Gellery from "../components/sections/Home1/Gellery";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import News from "../components/sections/Home1/News";
import Instagram from "../components/sections/Home1/Instagram";

export default function Home1Dark() {
    return (
        <>
            <Layout HeaderStyle="one-dark" styleMode="Dark">
                <Banner />
                <About />
                <FeatureDark />
                <ServicesDark />
                <Marquee />
                <Contact />
                <VideoDark />
                <PackageDark />
                <Testimonial />
                <Gellery />
                <MarqueeSwiper />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
