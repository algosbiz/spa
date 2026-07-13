import React from 'react';
import Layout from "../components/layout/Layout";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import Video from "../components/sections/Home1/Video";
import Contact from "../components/sections/Home1/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import PageTitle from "../components/sections/PageTitle";
import Pricing from "../components/sections/Home5/Pricing";
import PackagePricing from "../components/sections/Home5/PackagePricing";
import PackageSection from "@/components/sections/Home1/Package";
import PackageIntroText from "../components/sections/Home1/PackageIntroText";
import Banner from "../components/sections/Home2/Banner";
import ReserveCta from "../components/sections/Home1/ReserveCta";

export default function Home() {

  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <Banner />
        <Video />
        {/* <AboutReverse /> */}
        <div className="pricing-package-section">
          <PackageSection />
        </div>
        <PackageIntroText />
        {/* <Pricing /> */}
        <PackagePricing />
        {/* <MarqueeSwiper /> */}

        {/* <Contact /> */}
        <Testimonial />
        <div className="section__decoration-top section__decoration-bottom bg-sub pt-100 pb-100">
          <ReserveCta />
        </div>
      </Layout>
      <style jsx global>{`
        .pricing-package-section .package-section .shape2 {
          bottom: 60px;
        }
      `}</style>
    </>
  );
}
