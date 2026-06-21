import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home5/Banner";
import About from "../components/sections/Home3/About";
import Gallery from "../components/sections/Home5/Gallery";
// import Services from "../components/sections/Home5/Services";
import Services from "../components/sections/Home1/Services";
import Marquee from "../components/sections/Home5/Marquee";
import Pricing from "../components/sections/Home5/Pricing";
import Step from "../components/sections/Home5/Step";
import Contact from "../components/sections/Home5/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import News from "../components/sections/Home5/News";
import PackageSection from "@/components/sections/Home1/Package";
import Feature from "../components/sections/Home1/Feature";
import Video from "../components/sections/Home1/Video";
import Faq from "../components/sections/Home6/Faq";
import PackageIntroText from "../components/sections/Home1/PackageIntroText";
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
          <Testimonial
            testimonialsData={[
              {
                image: "/images/testimonial/testimonial-two-image1.png",
                name: "Putu Ayu",
                designation: "Loyal Customer",
                text: "Layanan di sini sangat luar biasa! Saya merasa jauh lebih segar setelah melakukan perawatan massage. Terapisnya sangat profesional.",
                stars: 5,
              },
              {
                image: "/images/testimonial/testimonial-two-image2.png",
                name: "Made Suardana",
                designation: "Happy Client",
                text: "Tempat yang sangat tenang dan nyaman. Fasilitasnya sangat lengkap dan stafnya ramah-ramah. Sangat direkomendasikan!",
                stars: 5,
              },
              {
                image: "/images/testimonial/testimonial-two-image3.png",
                name: "Nyoman Sari",
                designation: "Relaxed Guest",
                text: "Saya sering ke sini untuk spa bulanan. Hasilnya selalu memuaskan dan harga yang ditawarkan sangat kompetitif.",
                stars: 5,
              },
              {
                image: "/images/testimonial/testimonial-two-image1.png",
                name: "Ketut Wijaya",
                designation: "New Client",
                text: "Pertama kali ke sini dan langsung suka! Pelayanannya cepat dan hasilnya instan terasa di tubuh.",
                stars: 5,
              },
            ]}
          />
          <PackageSection />
          <PackageIntroText />
          {/* <Video /> */}
          <Pricing showMore />
          {/* <Contact /> */}
          {/* <News /> */}
          <Faq
            showImage={false}
            subTitle="Get to know us"
            title={<>Frequently Asked Questions</>}
            items={[
              {
                question: "1. Do I need to make a reservation in advance?",
                answer:
                  "We highly recommend booking ahead to secure your preferred time, especially on weekends and holidays. You can reserve directly through our WhatsApp.",
              },
              {
                question: "2. What time should I arrive for my appointment?",
                answer:
                  "Please arrive 10–15 minutes before your scheduled treatment so you can relax and settle in before your session begins.",
              },
              {
                question: "3. Can I request a male or female therapist?",
                answer:
                  "Absolutely. You may request a male or female therapist based on your preference when booking, and we will do our best to accommodate it.",
              },
              {
                question: "4. What payment methods do you accept?",
                answer:
                  "We accept cash, bank transfer, and a range of digital wallets such as QRIS for your convenience.",
              },
            ]}
          />
          
        </Layout>
      </>
    );
}
