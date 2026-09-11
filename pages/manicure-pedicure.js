import FloralDecoration from "../components/elements/FloralDecoration";
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
import SessionOptions from "../components/sections/Home1/SessionOptions";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home2/Services";
import { createTreatmentImageSet } from "@/lib/treatmentImages";
import { seoFor } from "@/lib/seo";

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

const treatmentOptions = [
  {
    price: "IDR 238K",
    duration: "Manicure & Pedicure",
    details: [
      "Complete hand and foot care",
      "Cuticle and nail grooming",
      "Ideal for a full refresh",
    ],
  },
  {
    price: "IDR 99K",
    duration: "Manicure",
    details: [
      "Nail and cuticle care",
      "Hand grooming",
      "A simple tidy-up",
    ],
  },
  {
    price: "IDR 139K",
    duration: "Pedicure",
    details: [
      "Nail and cuticle care",
      "Foot grooming",
      "Ideal for regular maintenance",
    ],
  },
  {
    price: "IDR 138K",
    duration: "Nail Gel Color Feet & Hands",
    details: [
      "Gel colour application",
      "For hands and feet",
      "A polished colour finish",
    ],
  },
  {
    price: "IDR 98K",
    duration: "Nail Remover Feet & Hands",
    details: [
      "Gel or nail product removal",
      "For hands and feet",
      "Prepares nails for the next service",
    ],
  },
  {
    price: "IDR 438K",
    duration: "Nail Gel Feet & Hands",
    details: [
      "Gel nail treatment",
      "For hands and feet",
      "A longer-lasting finish",
    ],
  },
];

const serviceHighlights = [
  { title: "Nail", text: "Care" },
  { title: "Cuticle", text: "Treatment" },
  { title: "Gel Colour", text: "Available" },
  { title: "Outcall", text: "Available" },
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
  {
    question: "What is a manicure and pedicure?",
    answer:
      "A manicure is a treatment for the hands and fingernails, while a pedicure focuses on the feet and toenails. Both typically include nail cleaning, shaping, cuticle care, and moisturising, with polish or gel available depending on the treatment.",
  },
];

const PAGE_SEO_ROUTE = "/seminyak/manicure-pedicure";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function ManicurePedicure() {
  const treatmentImages = createTreatmentImageSet("manicurepedicure", packageOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
        <div className="manicure-pedicure-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Polish and Pamper"
            titleSpan="Manicure & Pedicure"
            title="Seminyak"
          />
        </div>
        <AboutOld
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={treatmentImages.pricing}
            subTitle="Find Yours"
            title="Our Package Options"
            text="Complete your nail care with spa treatments that help you feel refreshed from head to toe. Our packages combine professional manicure and pedicure services with massage, facial, or hair care, creating a balanced wellness experience during your stay in Bali."
            packages={packageOptions}
            topContent={
              <SessionOptions
                sessions={treatmentOptions}
                subTitle="Perfectly Polished"
                title="Manicure & Pedicure Treatment Options"
                text="We offers manicure, pedicure, gel colour, gel nail, and removal services for hands and feet. Each option can be booked individually, making it easy to match your appointment with the nail care you need."
                icon="/images/spa/Manicure.svg"
              />
            }
          />
        </div>
        <div className="manicure-pedicure-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial rightShapeSrc={null} />
        <About
          leftShapeSrc={null}
          rightShapeSrc="/images/shape/about-right-shape.png"
          image={treatmentImages.details[0]}
          subTitle="The Reason"
          title={<>Why Is Regular Nail Care Important?</>}
          text="Regular nail care is about more than keeping your hands and feet looking neat. Manicure & Pedicure treatments give attention to the nails, cuticles, and surrounding skin, helping maintain a clean and well-groomed appearance as part of your regular self-care routine. Regular care can help with:"
          featuresLeft={[
            "Maintaining healthy-looking nails",
            "Keeping cuticles soft and cared for",
            "Smoothing rough or dry skin",
          ]}
          featuresRight={[
            "Keeping nails neatly shaped",
            "Enhancing the appearance of hands and feet",
            "Making nail care part of your regular self-care routine",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          leftShapeSrc="/images/shape/step-shape-left.png"
          rightShapeSrc="/images/shape/banner-six-shape2.png"
          rightDecoration={<FloralDecoration clustered />}
          image={treatmentImages.details[1]}
          subTitle="What's Included"
          badgeTopText="Beauty in"
          badgeBottomText="the Details"
          title={<>Professional Care from Nails to Skin</>}
          text="Our Manicure & Pedicure session gives attention to both the nails and the surrounding skin, with each part of the treatment carried out to leave your hands and feet feeling clean and well cared for. Depending on the service selected, your treatment may cover:"
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
          rightShapeSrc="/images/shape/banner-three-shape2.png"
          image={treatmentImages.details[2]}
          subTitle="The Process"
          badgeTopText="The Finishing"
          badgeBottomText="Touch"
          title={<>What Can You Expect During Your Appointment?</>}
          text="Our Manicure & Pedicure appointment follows a simple sequence, starting with an assessment of your nails and ending with the finish you have selected. The treatment is carried out step by step, with attention to keeping your nails and skin clean, comfortable, and well cared for. The appointment typically covers:"
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
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Nail Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="manicure-pedicure-services">
          <Services
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            title="Complete Your Care Beyond Nails" showFullTreatmentSlider embedded
          />
        </div>
        <div className="manicure-pedicure-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Keep Your Hands and Feet Looking Their Best"
            text="Well-groomed nails are about more than appearance, they also contribute to everyday comfort and confidence. Whether you're preparing for a special occasion, recovering after days of exploring Bali, or simply taking time for yourself, our Manicure & Pedicure treatments provide professional care in a calm and relaxing environment. Enjoy your appointment at our spa or choose our convenient home service for villas and hotels throughout Seminyak and surrounding areas."
            closingText="Reserve your Manicure & Pedicure treatment and enjoy polished, comfortable care."
          />
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
