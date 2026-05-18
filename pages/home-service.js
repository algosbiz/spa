import React from "react";
import Layout from "../components/layout/Layout";
import AboutOld from "../components/sections/Home2/About";
import Services from "../components/sections/Home2/Services";
import Faq from "../components/sections/Home6/Faq";
import Pricing from "../components/sections/Home3/Pricing";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import HomeServiceBanner from "../components/sections/HomeService/Banner";
import HomeServiceInfo from "../components/sections/HomeService/Info";

export default function HomeServicePage() {
    return (
        <>
            <Layout HeaderStyle="five" FooterStyle="two">
                {/* Custom Banner with different shape and titles */}
                <HomeServiceBanner />
                
                {/* Custom Home Service Info details */}
                <HomeServiceInfo />

                {/* About and service pricing details from standard layout */}
                <AboutOld />
                <Pricing />
                <Funfact />
                <Testimonial />
                <Faq />
                <Services />
            </Layout>
        </>
    );
}
