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

const packageOptions = [
  {
    price: "IDR 449K",
    name: "Package A",
    treatments: [
      "1 Hr Mani & Pedi",
      "1 Hr Balinese Massage",
      "30 Mins Cream Bath",
    ],
  },
  {
    price: "IDR 549K",
    name: "Package B",
    treatments: [
      "1 Hr Mani & Pedi",
      "1 Hr Balinese Massage",
      "1 Hr Bali Moon Facial",
    ],
  },
  {
    price: "IDR 299K",
    name: "Package C",
    treatments: [
      "1 Hr Mani & Pedi",
      "30 Mins Cream Bath",
    ],
  },
  {
    price: "IDR 399K",
    name: "Package D",
    treatments: [
      "30 Mins Pedicure",
      "30 Mins Manicure",
      "1 Hr Balinese Massage",
    ],
  },
];

const serviceHighlights = [
  { title: "Nail", text: "Care" },
  { title: "Cuticle", text: "Treatment" },
  { title: "Gel Colour", text: "Available" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What is included in a Manicure & Pedicure?",
    answer:
      "The treatment includes nail trimming, shaping, cuticle care, moisturising, and optional nail colour or gel depending on the service you choose.",
  },
  {
    question: "What is the difference between a manicure and a pedicure?",
    answer:
      "A manicure focuses on the hands and fingernails, while a pedicure treats the feet, toenails, and areas such as the heels and cuticles.",
  },
  {
    question: "How often should I have a Manicure & Pedicure?",
    answer:
      "Many guests book treatments every two to three weeks, although the ideal schedule depends on nail growth and personal preference.",
  },
  {
    question: "Can I choose gel nails instead of regular polish?",
    answer:
      "Yes. Gel nail application is available as a separate treatment for guests who prefer a longer-lasting finish.",
  },
  {
    question: "Can I book Manicure & Pedicure at my villa or hotel?",
    answer:
      "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas with all required equipment.",
  },
];

export default function ManicurePedicure() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="manicure-pedicure-banner">
          <Banner
            subTitle="Polish and Pamper"
            titleSpan="Manicure & Pedicure"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Essentials Care"
          title={<>More Than Beautiful Nails</>}
          text="A professional Manicure & Pedicure focuses on both appearance and nail health. Beyond shaping and polishing, the treatment includes nail cleaning, cuticle care, skin conditioning, and hydration to help keep hands and feet looking neat while maintaining everyday comfort. Suitable for regular maintenance or as part of a relaxing spa visit, it offers practical care with lasting results."
          feature1Title="Healthy Nails"
          feature1Text="Professional care helps maintain clean, tidy, and well-shaped nails."
          feature2Title="Soft Skin"
          feature2Text="Hydration and conditioning leave hands and feet feeling smoother."
        />
        <div className="manicure-pedicure-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Package Options"
            text="Complete your nail care with spa treatments that help you feel refreshed from head to toe. Our packages combine professional manicure and pedicure services with massage, facial, or hair care, creating a balanced wellness experience during your stay in Bali."
            packages={packageOptions}
          />
        </div>
        <div className="manicure-pedicure-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="The Reason"
          title={<>Why Is Regular Nail Care Important?</>}
          text="Hands and feet are exposed to daily activities that can leave nails brittle, cuticles dry, and skin rough over time. Regular Manicure & Pedicure treatments help maintain healthy nails, improve skin condition, and keep hands and feet looking clean, comfortable, and well cared for."
          featuresLeft={[
            "Maintains healthy nail growth",
            "Helps prevent dry cuticles",
            "Softens rough skin",
          ]}
          featuresRight={[
            "Keeps nails neatly shaped",
            "Improves the appearance of hands and feet",
            "Suitable for routine self-care",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="What's Included"
          title={<>Professional Care from Nails to Skin</>}
          text="Our Manicure & Pedicure treatment combines essential nail care with skin conditioning to create a complete maintenance routine. Every step is performed carefully to improve both comfort and appearance."
          featuresLeft={[
            "Nail trimming and shaping",
            "Gentle cuticle care",
            "Buffing and nail preparation",
          ]}
          featuresRight={[
            "Moisturising treatment",
            "Heel and dry skin care",
            "Optional nail colour or gel finish",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Process"
          title={<>What Can You Expect During Your Appointment?</>}
          text="Our therapist begins by assessing your nails before cleaning, shaping, and caring for the cuticles. After the nails are prepared, the skin is moisturised using nourishing products, followed by your selected polish or gel finish if included. Every stage is completed with attention to hygiene, comfort, and long-lasting results."
          featuresLeft={[
            "Consultation and nail assessment",
            "Nail cleaning and shaping",
            "Cuticle treatment",
          ]}
          featuresRight={[
            "Skin hydration",
            "Optional polish or gel application",
            "Finishing care for lasting comfort",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="manicure-pedicure-faq">
          <Faq
            imageTitle="Nail Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Keep Your Hands and Feet Looking Their Best"
            text="Well-groomed nails are about more than appearance, they also contribute to everyday comfort and confidence. Whether you're preparing for a special occasion, recovering after days of exploring Bali, or simply taking time for yourself, our Manicure & Pedicure treatments provide professional care in a calm and relaxing environment. Enjoy your appointment at our spa or choose our convenient home service for villas and hotels throughout Seminyak and surrounding areas."
            closingText="Reserve your Manicure & Pedicure treatment and enjoy polished, comfortable care."
          />
        </div>
        <div className="manicure-pedicure-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .manicure-pedicure-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .manicure-pedicure-banner .banner-two__content .title span {
          display: inline;
        }

        .manicure-pedicure-pricing .pricing-section-three > .container,
        .manicure-pedicure-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .manicure-pedicure-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .manicure-pedicure-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .manicure-pedicure-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .manicure-pedicure-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .manicure-pedicure-pricing
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
          .manicure-pedicure-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .manicure-pedicure-services
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
