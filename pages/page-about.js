import React from 'react';
import Layout from "../components/layout/Layout";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import Video from "../components/sections/Home1/Video";
import Contact from "../components/sections/Home1/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import PageTitle from "../components/sections/PageTitle";
import Pricing from "../components/sections/Home5/Pricing";
import PackageSection from "@/components/sections/Home1/Package";
import Banner from "../components/sections/Home2/Banner";

export default function Home() {

    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two">
          <Banner />
          <AboutReverse />
          <PackageSection />
          <Pricing />
          <MarqueeSwiper />
          <Video />
          <Contact />
          <Testimonial />
        </Layout>
      </>
    );
}
