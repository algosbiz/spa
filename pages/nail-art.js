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
import { createTreatmentImageSet } from "@/lib/treatmentImages";

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
  { title: "Outcall", text: "Available" },
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
  {
    question: "What is nail art?",
    answer:
      "Nail art is the decoration of fingernails or toenails using colours, patterns, designs, or other decorative details. It can be added to natural nails or applied over gel or polish.",
  },
];

export default function NailArt() {
  const treatmentImages = createTreatmentImageSet("nailart", serviceOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="nail-art-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Creative Design"
            titleSpan="Nail Art & Gel Nails"
            title="in Seminyak"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            images={treatmentImages.pricing}
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
          image={treatmentImages.details[0]}
          subTitle="Beauty Benefits"
          title={<>What Makes Gel Nail Art So Popular?</>}
          text="Gel Nail Art offers a practical way to add colour and personality to your nails while maintaining a neat, polished look. It can suit different styles and occasions, from simple everyday designs to more creative looks for holidays or special events. People often choose gel nails for reasons such as:"
          featuresLeft={[
            "Long-lasting shine",
            "Less need for frequent polish touch-ups",
            "A wide selection of colours and designs",
          ]}
          featuresRight={[
            "Suitable for holidays and special occasions",
            "A lightweight, comfortable finish",
            "Careful application to support natural nail health",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Design Possibilities"
          badgeTopText="Your Signature"
          badgeBottomText="Set"
          title={<>Find Nail Art Style That Matches You</>}
          text="Your nail design can be simple, elegant, playful, or more detailed depending on the look you have in mind. We can work from your inspiration and adapt the design to suit your natural nails, preferred colours, and occasion. Some popular styles are:"
          featuresLeft={[
            "Minimalist nail designs",
            "French tips",
            "Chrome and glossy finishes",
          ]}
          featuresRight={[
            "Floral or artistic patterns",
            "Seasonal colour combinations",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="Application Process"
          badgeTopText="Built Layer"
          badgeBottomText="by Layer"
          title={<>How Is Gel Nail Art Applied?</>}
          text="Gel Nail Art is applied through a step-by-step process that prepares the nails before the colour and design are added. Each layer is carefully finished and cured to create a smooth, polished result while keeping the application neat and comfortable. The process typically involves:"
          featuresLeft={[
            "Nail preparation and shaping",
            "Cuticle care",
            "Gel or colour application",
          ]}
          featuresRight={[
            "Hand-created nail design",
            "UV or LED curing",
            "Protective finishing top coat",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="nail-art-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Gel Nail Art"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div>
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Experience Beautiful Nails That Last Beyond Your Bali Holiday"
            text="Whether you're preparing for a beach holiday, a romantic dinner, a wedding, or simply want beautifully finished nails, our Nail Art service offers personalised designs created with professional care and long-lasting gel products. Every appointment is tailored to your preferred style while keeping your natural nails healthy and comfortable."
            closingText="Leave with polished nails that feel as beautiful as they look."
          />
        </div>
        <div className="nail-art-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Explore More Ways to Perfect Your Bali Glow" showFullTreatmentSlider embedded />
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
