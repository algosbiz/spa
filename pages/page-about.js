import React from 'react';
import Layout from "../components/layout/Layout";
import About from "../components/sections/Home1/About";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import Video from "../components/sections/Home1/Video";
import Contact from "../components/sections/Home1/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four">
                <PageTitle pageName="About Us" />
                <About />
                <MarqueeSwiper />
                <Video />
                <Contact />
                <Testimonial />
            </Layout>
        </>
    )
}
