import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home5/Banner";
import About from "../components/sections/Home3/About";
import Video from "../components/sections/Home5/Video";
import Gallery from "../components/sections/Home5/Gallery";
import Services from "../components/sections/Home5/Services";
import Marquee from "../components/sections/Home5/Marquee";
import Pricing from "../components/sections/Home5/Pricing";
import Step from "../components/sections/Home5/Step";
import Contact from "../components/sections/Home5/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import News from "../components/sections/Home5/News";

export default function Home5() {
    return (
        <> 
            <Layout HeaderStyle="five-single" FooterStyle="three">
                <Banner />
                <About />
                <Video />
                <Services />
                <Marquee />
                <Pricing />
                <Step />
                <Gallery />
                <Testimonial />
                <Contact />
                <News />
            </Layout>
        </>
    );
}
