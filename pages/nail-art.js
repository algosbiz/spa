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

const serviceOptions = [
  {
    price: "IDR 159K",
    name: "Manicure & Colour",
    treatments: [
      "Fresh polished everyday nails",
      "Simple colour application",
      "Guests wanting a natural elegant finish",
    ],
  },
  {
    price: "IDR 169K",
    name: "Pedicure & Colour",
    treatments: [
      "Beautiful toenails for sandals",
      "Holiday-ready feet",
      "Smooth colour with professional finishing",
    ],
  },
  {
    price: "IDR 219K",
    name: "Nail Gel",
    treatments: [
      "Longer-lasting glossy finish",
      "Busy travellers",
      "Guests wanting extra durability",
    ],
  },
];

const serviceHighlights = [
  { title: "Creative", text: "Designs" },
  { title: "Quality", text: "Gel Products" },
  { title: "Natural", text: "Nail Care" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Gel Nail Art better than regular nail polish?",
    answer:
      "Gel Nail Art generally lasts longer and keeps its shine better than traditional nail polish, making it a popular choice for holidays and special occasions.",
  },
  {
    question: "Can I bring my own nail design reference?",
    answer:
      "Yes. You're welcome to show inspiration photos so our nail artists can recreate a similar style that suits your nails.",
  },
  {
    question: "Will gel nails damage my natural nails?",
    answer:
      "When applied and removed correctly, gel products can be used while maintaining the health of your natural nails. Our team follows gentle application techniques throughout the treatment.",
  },
  {
    question: "How long does a Nail Art appointment take?",
    answer:
      "The duration depends on the design complexity, but most appointments take between 45 and 90 minutes.",
  },
  {
    question: "How long will Gel Nail Art last?",
    answer:
      "Many guests enjoy beautiful results for around two to three weeks, depending on nail growth and daily activities.",
  },
];

export default function NailArt() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="nail-art-banner">
          <Banner
            subTitle="Creative Design"
            titleSpan="Nail Art & Gel Nails"
            title="in Seminyak"
          />
        </div>
        <AboutOld
          subTitle="Personal Style"
          title={<>Why Do Many Guests Choose Gel Nail Art?</>}
          text="Gel Nail Art combines creative design with a durable gel finish that helps nails stay neat and polished for longer than regular nail polish. Many guests choose this treatment before holidays, weddings, special events, or simply to enjoy beautiful nails throughout their stay in Bali. At Spa Bali Moon, every design is applied carefully to protect the natural nail while creating a personalised look that matches your style."
          feature1Title="Long Lasting Finish"
          feature1Text="Designed to stay glossy and beautiful through everyday activities."
          feature2Title="Personalised Designs"
          feature2Text="Colours, patterns, and finishes selected to suit your own style."
        />
        <div className="nail-art-pricing">
          <Pricing
            subTitle="Service Options"
            title="Choose the Finish You Prefer"
            text="Our nail services include fresh colour, decorative nail art, and long lasting gel finishes, giving you different options to suit your personal style and any occasion."
            packages={serviceOptions}
          />
        </div>
        <div className="nail-art-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Beauty Benefits"
          title={<>What Makes Gel Nail Art So Popular?</>}
          text="Beautiful nails are more than decoration. Gel Nail Art helps create a polished appearance while protecting the design from everyday wear. Many guests choose it because it combines creativity, durability, and professional finishing in a single treatment."
          featuresLeft={[
            "Long-lasting shine",
            "Helps reduce frequent polish touch-ups",
            "Wide selection of colours and designs",
          ]}
          featuresRight={[
            "Suitable for holidays and special occasions",
            "Comfortable lightweight finish",
            "Applied with attention to natural nail health",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Design Possibilities"
          title={<>Find Nail Art Style That Matches You</>}
          text="Every guest has a different style preference. Our therapists can create clean minimalist looks, elegant classic finishes, or detailed artistic designs based on your inspiration and the condition of your natural nails."
          featuresLeft={[
            "Minimalist nail designs",
            "French tips",
            "Chrome and glossy finishes",
          ]}
          featuresRight={[
            "Floral or artistic patterns",
            "Seasonal colour combinations",
            "Custom designs from your reference photos",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Application Process"
          title={<>How Is Gel Nail Art Applied?</>}
          text="Each appointment begins with nail preparation to create a smooth foundation before colour or gel is applied. Designs are built layer by layer using professional products, then cured under a UV or LED lamp to achieve a durable finish. Throughout the session, our nail artists work carefully to keep both the design and your natural nails in excellent condition."
          featuresLeft={[
            "Nail preparation and shaping",
            "Cuticle care",
            "Gel or colour application",
          ]}
          featuresRight={[
            "Design created by hand",
            "UV or LED curing process",
            "Protective finishing top coat",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="nail-art-faq">
          <Faq
            imageTitle="Gel Nail Art"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Experience Beautiful Nails That Last Beyond Your Bali Holiday"
            text="Whether you're preparing for a beach holiday, a romantic dinner, a wedding, or simply want beautifully finished nails, our Nail Art service offers personalised designs created with professional care and long-lasting gel products. Every appointment is tailored to your preferred style while keeping your natural nails healthy and comfortable."
            closingText="Leave with polished nails that feel as beautiful as they look."
          />
        </div>
        <div className="nail-art-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .nail-art-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .nail-art-banner .banner-two__content .title span {
          display: inline;
        }

        .nail-art-pricing .pricing-section-three > .container,
        .nail-art-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .nail-art-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .nail-art-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .nail-art-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .nail-art-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .nail-art-pricing
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
          .nail-art-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .nail-art-services
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
