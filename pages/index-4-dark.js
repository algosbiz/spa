import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home4/Banner";
import AboutDark from "../components/sections/Home4/AboutDark";
import Funfact from "../components/sections/Home4/Funfact";
import Newsletter from "../components/sections/Home4/Newsletter";
import Map from "../components/sections/Home4/Map";
import Services from "../components/sections/Home4/Services";
import Marquee from "../components/sections/Home4/Marquee";
import Pricing from "../components/sections/Home4/Pricing";
import Contact from "../components/sections/Home4/Contact";
import Testimonial from "../components/sections/Home1/Testimonial";
import News from "../components/sections/Home4/News";
import Instagram from "../components/sections/Home2/Instagram";

export default function Home4() {
    return (
        <> 
            <Layout HeaderStyle="four-dark" FooterStyle="two" styleMode="Dark">
                <Banner />
                <Services />
                <Marquee />
                <AboutDark />
                <Pricing />
                <Contact />
                <Testimonial />
                <Funfact />
                <Newsletter />
                <Map />
                <News />
                <Instagram />
            </Layout>
        </>
    );
}
