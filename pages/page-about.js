import React from 'react';
import Layout from "../components/layout/Layout";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import Video from "../components/sections/Home1/Video";
import Contact from "../components/sections/Home1/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <PageTitle pageName="About Us" />
                <AboutReverse />
                <MarqueeSwiper />
                <Video />
                <Contact />
                <Testimonial />
            </Layout>
        </>
    )
}
