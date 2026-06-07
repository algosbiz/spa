import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home5/Banner";
import About from "../components/sections/Home3/About";
import Gallery from "../components/sections/Home5/Gallery";
// import Services from "../components/sections/Home5/Services";
import Services from "../components/sections/Home1/Services";
import Marquee from "../components/sections/Home5/Marquee";
import Pricing from "../components/sections/Home5/Pricing";
import PackagePricing from "../components/sections/Home5/PackagePricing";
import Step from "../components/sections/Home5/Step";
import Contact from "../components/sections/Home5/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import News from "../components/sections/Home5/News";
import PackageSection from "@/components/sections/Home1/Package";
import Feature from "../components/sections/Home1/Feature";
import Video from "../components/sections/Home1/Video";
export default function Home5() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner />
                <Step />
                <Services />
                <About />
                <Feature />

                {/* <Gallery /> */}

                {/* <Video /> */}
                {/* <Services /> */}
                {/* <Marquee /> */}
                <Testimonial testimonialsData={[
                    {
                        image: "images/testimonial/testimonial-two-image1.png",
                        name: "Putu Ayu",
                        designation: "Loyal Customer",
                        text: "Layanan di sini sangat luar biasa! Saya merasa jauh lebih segar setelah melakukan perawatan massage. Terapisnya sangat profesional.",
                        stars: 5
                    },
                    {
                        image: "images/testimonial/testimonial-two-image2.png",
                        name: "Made Suardana",
                        designation: "Happy Client",
                        text: "Tempat yang sangat tenang dan nyaman. Fasilitasnya sangat lengkap dan stafnya ramah-ramah. Sangat direkomendasikan!",
                        stars: 5
                    },
                    {
                        image: "images/testimonial/testimonial-two-image3.png",
                        name: "Nyoman Sari",
                        designation: "Relaxed Guest",
                        text: "Saya sering ke sini untuk spa bulanan. Hasilnya selalu memuaskan dan harga yang ditawarkan sangat kompetitif.",
                        stars: 5
                    },
                    {
                        image: "images/testimonial/testimonial-two-image1.png",
                        name: "Ketut Wijaya",
                        designation: "New Client",
                        text: "Pertama kali ke sini dan langsung suka! Pelayanannya cepat dan hasilnya instan terasa di tubuh.",
                        stars: 5
                    }
                ]} />
                <PackageSection />
                <Video />
                <Pricing />
                <PackagePricing />
                {/* <Contact /> */}
                {/* <News /> */}
            </Layout>
        </>
    );
}
