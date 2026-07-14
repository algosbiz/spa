import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Pricing from "../components/sections/Home3/Pricing";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home2/Services";

const bookingUrl = "https://wa.me/6287863175144";

const sessionOptions = [
  {
    price: "IDR 279K",
    name: "Short Hair",
    treatments: [
      "Bob or shoulder-length hair",
      "Simple braid styles",
      "Quick styling sessions",
    ],
  },
  {
    price: "IDR 379K",
    name: "Medium Hair",
    treatments: [
      "Most Dutch braid styles",
      "Added braid definition",
      "Everyday or holiday hairstyles",
    ],
  },
  {
    price: "IDR 469K",
    name: "Long Hair",
    treatments: [
      "Longer braid designs",
      "Fuller braided looks",
      "Hair extensions if preferred",
    ],
  },
];

const serviceHighlights = [
  { title: "Popular", text: "Braid Styles" },
  { title: "Custom", text: "Designs" },
  { title: "Extension", text: "Options" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Hair Braiding suitable for all hair types?",
    answer:
      "Yes. Most hair types can be braided, and the technique is adjusted according to your hair's length, texture, and condition.",
  },
  {
    question: "How long does Hair Braiding usually take?",
    answer:
      "Depending on the chosen style, appointments generally take between 30 minutes and 2 hours.",
  },
  {
    question: "Will braiding damage my hair?",
    answer:
      "When done correctly, braiding is considered a protective hairstyle. We avoid excessive tension to keep your scalp comfortable.",
  },
  {
    question: "How long do braids usually last?",
    answer:
      "The lifespan depends on the braid style, daily activities, and aftercare. Many styles remain neat for several days or even longer.",
  },
  {
    question: "Can I bring a reference photo?",
    answer:
      "Absolutely. Reference photos help us better understand the style, braid pattern, and overall look you'd like to achieve.",
  },
  {
    question: "Are hair extensions available?",
    answer:
      "Yes. Selected braid styles can be created with extensions for additional length or volume.",
  },
];

export default function HairBraiding() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="hair-braiding-banner">
          <Banner
            subTitle="Creative Hairstyles"
            titleSpan="Hair Braiding"
            title="in Bali"
          />
        </div>
        <AboutOld
          subTitle="More Than a Hairstyle"
          title={<>Hair Braiding for Style, Comfort, and Everyday Wear</>}
          text="Hair braiding is more than a fashion trend. It is a practical hairstyle that helps keep hair neat, manageable, and protected throughout busy days in Bali. From beach clubs and sightseeing to special events and everyday activities, braided hairstyles reduce tangling in humid weather while offering a personalised look that suits different hair lengths, and occasions."
          feature1Title="Protective Styling"
          feature1Text="Helps reduce tangles and keeps hair organised throughout the day."
          feature2Title="Personalised Designs"
          feature2Text="Choose from classic, modern, or customised braid styles to match your look."
        />
        <div className="hair-braiding-pricing">
          <Pricing
            subTitle="Hair Length Options"
            title="Choose the Style That Fits Your Hair"
            text="Pricing is based on hair length, allowing enough time to create neat, balanced braids while adapting the technique to your preferred style and overall hair volume."
            packages={sessionOptions}
          />
        </div>
        <div className="hair-braiding-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Very Popular"
          title={<>Why Many Visitors Choose Hair Braiding in Bali</>}
          text="Braided hairstyles have become one of the most popular beauty services in Bali because they combine style with practicality. They help keep hair comfortable in warm, humid weather while reducing the need for daily styling, making them ideal for beach days, sightseeing, outdoor adventures, and special occasions."
          featuresLeft={[
            "Keeps hair neat in Bali's tropical climate",
            "Helps reduce tangling from wind and humidity",
            "Comfortable for swimming and beach activities",
          ]}
          featuresRight={[
            "Suitable for holidays, events, and festivals",
            "Low-maintenance hairstyle for several days",
            "Available in a variety of braid patterns",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Braid Collection"
          title={<>Explore Our Most Popular Hair Braiding Styles</>}
          text="Every hairstyle creates a different look and level of hold. Whether you prefer a clean everyday braid or something more detailed for a special occasion, we'll help you choose a style that matches your hair type, plans, and personal preference."
          featuresLeft={[
            "Classic Double Dutch",
            "Single Dutch Braid",
            "Dutch Braid Crown",
            "Cornrows",
          ]}
          featuresRight={[
            "Half Up Dutch Braids",
            "Box Braids",
            "Dutch Fishtail Braid",
            "Braids with Extensions",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Your Custom Style"
          title={<>Every Braid Starts with the Right Plan</>}
          text="Before braiding begins, we discuss your preferred hairstyle, braid size, hair length, and whether you'd like to include extensions. Each section of hair is carefully prepared before braiding to create an even, comfortable finish. Once complete, we'll also share simple aftercare tips to help your hairstyle stay neat for longer."
          featuresLeft={[
            "Hairstyle consultation",
            "Braid size selection",
            "Hair sectioning and preparation",
          ]}
          featuresRight={[
            "Comfortable braiding technique",
            "Extension options available",
            "Easy aftercare recommendations",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="hair-braiding-faq">
          <Faq
            imageTitle="Braid Styles"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="A Hairstyle That Keeps Up with Your Bali Plans"
            text="From beach mornings and sunset dinners to island tours and special celebrations, the right hairstyle lets you enjoy every moment without constantly fixing your hair. Our Hair Braiding service combines personalised styling with practical comfort, creating braids that are made to suit your holiday, your plans, and your personal style. Visit our spa to create a look that's comfortable to wear, easy to maintain, and ready for wherever Bali takes you next."
            closingText="Reserve your Hair Braiding appointment and create a style made for your Bali plans."
          />
        </div>
        <div className="hair-braiding-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .hair-braiding-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .hair-braiding-banner .banner-two__content .title span {
          display: inline;
        }

        .hair-braiding-pricing .pricing-section-three > .container,
        .hair-braiding-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .hair-braiding-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .hair-braiding-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .hair-braiding-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .hair-braiding-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .hair-braiding-pricing
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
          .hair-braiding-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .hair-braiding-services
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
