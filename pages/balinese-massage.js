import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Product from "../components/sections/Home2/Product";
import Services from "../components/sections/Home2/Services";
import Marquee from "../components/sections/Home2/Marquee";
import Faq from "../components/sections/Home6/Faq";
// import Pricing from "../components/sections/Home2/Pricing";
import Pricing from "../components/sections/Home3/Pricing";
import Contact from "../components/sections/Home2/Contact";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import Team from "../components/sections/Home2/Team";
import News from "../components/sections/Home2/News";
import Instagram from "../components/sections/Home2/Instagram";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import ReserveCta from "../components/sections/Home1/ReserveCta";

const bookingUrl = "https://wa.me/6287863175144";

const packageOptions = [
  {
    price: "IDR 449K",
    name: "Package A",
    treatments: ["1 Hr Balinese Massage", "1 Hr Medi Pedi", "30 Mins Cream Bath"],
  },
  {
    price: "IDR 549K",
    name: "Package B",
    treatments: ["1 Hr Balinese Massage", "1 Hr Medi Pedi", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 449K",
    name: "Package C",
    treatments: ["1 Hr Balinese Massage", "30 Mins Cream Bath", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 399K",
    name: "Package D",
    treatments: ["1 Hr Balinese Massage", "30 Mins Manicure", "30 Mins Pedicure"],
  },
];

const serviceHighlights = [
  { title: "Experienced", text: "Therapists" },
  { title: "Flexible", text: "Booking" },
  { title: "Customized", text: "Packages" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Balinese Massage suitable for first-time spa guests?",
    answer:
      "Yes. Balinese Massage uses gentle to medium pressure, making it comfortable even for guests who are new to massage treatments. We can adjust the pressure and techniques according to your comfort level.",
  },
  {
    question: "What should I expect during a Balinese Massage session?",
    answer:
      "The session includes long, rhythmic strokes, soft kneading, light stretching, and selected acupressure points. Warm oil is used throughout the treatment to help the movements stay smooth and comfortable.",
  },
  {
    question: "Can I request lighter or stronger pressure?",
    answer:
      "Absolutely. You can let us know your preferred pressure at any time. We adjust our technique to ensure the session remains comfortable and effective for you.",
  },
  {
    question: "What Balinese Massage durations are available?",
    answer:
      "We offer 60, 90, and 120 minute Balinese massage sessions to suit different schedules and relaxation preferences. A 60 minute session is ideal for general relaxation and full-body rejuvenation, while 90 minutes allows additional focus on areas such as the neck, shoulders, and lower back where muscle tension commonly builds up. Guests seeking a slower and more immersive wellness experience may prefer the 120 minute option. Treatments are available both in our spa and through villa and hotel home service appointments, with flexible scheduling available through WhatsApp.",
  },
  {
    question: "Are there any conditions that would prevent me from receiving this massage?",
    answer:
      "If you have recent injuries, inflammation, unexplained pain, or medical concerns, please inform us before your session. We will help determine whether Balinese Massage is suitable or recommend an alternative treatment.",
  },
];

export default function Home2() {
    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two">
          <div className="balinese-massage-banner">
            <Banner
              subTitle="Ancient Healing"
              titleSpan="Balinese Massage"
              title="Treatment"
            />
          </div>
          <AboutOld
            subTitle="A Traditional Wellness"
            title={<>The Story: What Makes Balinese Massage Unique?</>}
            text="Balinese massage is a traditional treatment influenced by healing practices from Bali, Java, India, and China. The treatment combines acupressure, gentle stretching, skin rolling, and flowing strokes to help reduce tension, improve circulation, and encourage relaxation. Our therapists adapt the pressure and focus areas according to your comfort and preferences."
            feature1Title="Traditional Techniques"
            feature1Text="Combines acupressure, stretching, skin rolling, and rhythmic massage movements."
            feature2Title="Adjustable Pressure"
            feature2Text="Suitable for both gentle relaxation and firmer muscle relief sessions."
          />
          <div className="balinese-massage-pricing">
            <Pricing
              subTitle="Find Yours"
              title="Our Package Options"
              text="Balinese massage is often combined with treatments such as facials, cream baths, and nail care to create a more complete spa experience. Our treatment packages are created for guests looking to relax, refresh, and make the most of their massage time in Bali."
              packages={packageOptions}
            />
          </div>
          {/* <Marquee /> */}
          {/* <Product /> */}
          <div className="balinese-massage-funfact">
            <Funfact items={serviceHighlights} />
          </div>
          {/* <News /> */}
          {/* <Instagram /> */}

          <Testimonial />
          {/* <Team /> */}
          {/* <Contact /> */}
          <About
            subTitle="The Benefits"
            title={<>Why Guests Choose Balinese Massage</>}
            text="Our Balinese massage is commonly chosen by travellers, office workers, and active individuals because it combines relaxation techniques with muscle-focused work in a single treatment."
            featuresLeft={[
              "Helps reduce muscle tension",
              "Encourages relaxation and stress relief",
              "Supports healthy blood circulation",
            ]}
            featuresRight={[
              "Often chosen after long flights and travel days",
              "Popular after surfing and outdoor activities",
              "Suitable for regular wellness routines",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          <AboutReverse
            subTitle="Suitable For"
            title={<>Who Is Balinese Massage Best For?</>}
            text="This treatment is suitable for many different lifestyles and travel situations. Our therapists frequently recommend Balinese massage for guests looking for both relaxation and physical recovery."
            featuresLeft={[
              "Travellers recovering from long flights",
              "Visitors returning from outdoor activities",
              "Guests experiencing neck and shoulder tension",
            ]}
            featuresRight={[
              "People spending long hours sitting or working",
              "Couples looking for a relaxing spa experience",
              "Anyone seeking traditional Balinese wellness",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          <About
            subTitle="The Experience"
            title={<>What to Expect from a Balinese Massage</>}
            text="A Balinese massage session begins with a short consultation regarding pressure preferences and areas that require extra attention. Massage oil is used to support smooth movements and muscle relaxation. The same treatment experience is also available through our home service for guests staying in villas, hotels, or private accommodations."
            featuresLeft={[
              "Brief consultation before treatment",
              "Full body massage using massage oil",
              "Adjustable pressure during the session",
            ]}
            featuresRight={[
              "Additional attention to specific areas",
              "Available for individuals and couples",
              "Home service appointments available",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          <div className="balinese-massage-faq">
            <Faq
              subTitle="Frequently Asked Questions"
              title={<>Everything You Need to Know</>}
              items={faqItems}
            />
          </div>
          <div className=" pt-100 pb-100">
            <ReserveCta
              title="Enjoy Balinese Massage Wherever You Feel Most Comfortable"
              text="Experience traditional Balinese massage in the comfort of your home, villa, or hotel without compromising on quality or convenience. Home service is available for an additional IDR 75,000 per therapist within Seminyak and nearby areas, while in-spa appointments can be scheduled throughout the day."
              closingText="Reserve a session that fits your plans and enjoy authentic Balinese relaxation wherever you stay in Bali"
            />
          </div>
          <div className="balinese-massage-services section__decoration-top section__decoration-bottom bg-sub ">
            <Services title="Our Services Will Make You Glow" />
          </div>
        </Layout>
        <style jsx global>{`
          .balinese-massage-banner .banner-two__content .title {
            max-width: 1200px;
          }

          .balinese-massage-banner .banner-two__content .title span {
            display: inline;
          }

          .balinese-massage-pricing .pricing-section-three > .container,
          .balinese-massage-funfact .funfact-section > .container {
            max-width: 1200px;
          }

          .balinese-massage-pricing .pricing-section-three .shape2 {
            bottom: 30px;
          }

          @media (min-width: 992px) {
            .balinese-massage-pricing
              .pricing-section-three
              .pricing-block
              .inner-box {
              padding: 20px;
            }

            .balinese-massage-pricing
              .pricing-section-three
              .image-column {
              display: flex;
            }

            .balinese-massage-pricing
              .pricing-section-three
              .image-column
              .image-box {
              flex: 1;
              position: relative;
              min-height: 0;
            }

            .balinese-massage-pricing
              .pricing-section-three
              .image-column
              .image-box
              img {
              position: absolute;
              inset: 0;
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          @media (min-width: 1400px) {
            .balinese-massage-faq .faq-section .content-column .inner-column {
              padding-right: 32px;
              padding-left: 32px;
            }
          }

          .balinese-massage-services
            .service-section-two
            .section-header
            .title {
            max-width: 720px;
            margin-right: auto;
            margin-left: auto;
          }
        `}</style>
      </>
    );
}
