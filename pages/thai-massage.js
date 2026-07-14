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
    price: "IDR 549K",
    name: "Package A",
    treatments: [
      "1 Hr Thai Massage",
      "1 Hr Bali Moon Facial",
      "30 Mins Manicure",
    ],
  },
  {
    price: "IDR 649K",
    name: "Package B",
    treatments: [
      "1 Hr Thai Massage",
      "1 Hr Cream Bath",
      "1 Hr Bali Moon Facial",
    ],
  },
  {
    price: "IDR 449K",
    name: "Package C",
    treatments: [
      "1 Hr Thai Massage",
      "1 Hr Bali Moon Facial",
    ],
  },
  {
    price: "IDR 539K",
    name: "Package D",
    treatments: [
      "1 Hr Thai Massage",
      "1 Hr Cream Bath",
      "30 Mins Body Scrub",
    ],
  },
];

const serviceHighlights = [
  { title: "Traditional", text: "Thai Technique" },
  { title: "Guided", text: "Stretching" },
  { title: "Body", text: "Mobility" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What is Traditional Thai Massage?",
    answer:
      "Traditional Thai Massage is a traditional bodywork technique that combines pressure, stretching, and movement. It focuses on improving body comfort, flexibility, and relaxation through structured techniques.",
  },
  {
    question: "Is Thai Massage different from Balinese Massage?",
    answer:
      "Yes. Thai Massage focuses more on assisted stretching, mobility, and pressure techniques without oil, while Balinese Massage usually uses flowing strokes and massage oils for a more relaxing experience.",
  },
  {
    question: "Is Thai Massage suitable for beginners?",
    answer:
      "Yes. Beginners can enjoy Thai Massage as our therapists can adjust the intensity and stretching movements based on your comfort level.",
  },
  {
    question: "What should I wear during a Thai Massage session?",
    answer:
      "Comfortable clothing is recommended because the treatment includes stretching and guided movements. Unlike oil massage, Thai Massage does not require direct skin contact for the entire session.",
  },
  {
    question: "Is Thai Massage good after a long flight or travel?",
    answer:
      "Yes. Many travellers choose Thai Massage after long journeys because the stretching techniques can help the body feel less restricted and more comfortable.",
  },
  {
    question: "Can I combine Thai Massage with other spa treatments?",
    answer:
      "Yes. Many guests combine Thai Massage with facial, manicure, cream bath, or body treatments for a more complete spa experience.",
  },
];

export default function ThaiMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="thai-massage-banner">
          <Banner
            subTitle="Active Release"
            titleSpan="Traditional Thai Massage"
            title="in Bali"
          />
        </div>
        <AboutOld
          subTitle="Get to Know"
          title={<>What Makes Traditional Thai Massage Unique?</>}
          text="Traditional Thai Massage is an ancient wellness technique that combines rhythmic pressure, assisted stretching, and controlled body movements to improve flexibility and ease physical tension. Unlike oil-based massage styles that focus mainly on flowing strokes, Thai Massage uses guided stretches and pressure points to encourage better mobility, body awareness, and overall relaxation."
          feature1Title="Assisted Stretching"
          feature1Text="Uses guided movements inspired by traditional Thai techniques to help improve flexibility."
          feature2Title="Pressure Point Focus"
          feature2Text="Applies steady pressure to areas where stiffness and tension commonly build up."
        />
        <div className="thai-massage-pricing">
          <Pricing
            subTitle="Choose Yours"
            title="Our Package Options"
            text="Enjoy a complete Thai Massage experience combined with other relaxing treatments at Spa Bali Moon. Each package is created to provide a balanced wellness session, combining traditional Thai techniques with facial, nail, and body treatments."
            packages={packageOptions}
          />
        </div>
        <div className="thai-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Body Benefits"
          title={<>Why Do Guests Choose Thai Massage in Bali?</>}
          text="Traditional Thai Massage is often chosen by guests who want a more active approach to relaxation. The combination of pressure and stretching helps the body feel more open, especially after travelling, exercising, or spending long hours sitting."
          featuresLeft={[
            "Helps ease stiffness from daily activities",
            "Supports easier movement and flexibility",
            "Relieves tension in commonly affected areas",
          ]}
          featuresRight={[
            "Suitable after flights, travel, or physical activity",
            "Combines massage with gentle stretching techniques",
            "Ideal for guests who prefer a more active treatment style",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Focus Areas"
          title={<>Which Parts of the Body Are Treated During Thai Massage?</>}
          text="Thai Massage works with the entire body through pressure techniques and assisted movements. Our therapists focus on areas that commonly feel restricted from posture, travel, or active routines, helping create a greater sense of balance and ease throughout the session."
          featuresLeft={[
            "Back and shoulders affected by long sitting",
            "Neck area with daily posture tension",
            "Hips and legs needing more mobility",
          ]}
          featuresRight={[
            "Arms and upper body after repetitive movement",
            "Areas that feel stiff after exercise or travelling",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Massage Technique"
          title={<>How Does Traditional Thai Massage Work?</>}
          text="Traditional Thai Massage combines steady pressure, stretching, and rhythmic movements without the use of massage oil. Our therapists use hands, thumbs, palms, and body weight techniques to work through areas of tension while carefully guiding the body through comfortable stretches. Each movement follows a slow and controlled approach to help improve relaxation and flexibility."
          featuresLeft={[
            "Uses hands, thumbs, palms, and elbows for pressure",
            "Includes Thai-inspired assisted stretching",
            "Performed without oil for better control",
          ]}
          featuresRight={[
            "Focuses on flexibility and alignment",
            "Adjusted to your comfort level",
            "Balances relaxation and active bodywork",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="thai-massage-faq">
          <Faq
            imageTitle="Thai Massage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Increase Your Flexibility with Traditional Thai Massage at Spa Bali Moon"
            text="After long flights, busy adventures, or active days in Bali, the body can begin to feel tight and restricted. Traditional Thai Massage combines rhythmic pressure and assisted stretching to help ease stiffness, improve flexibility, and bring back a lighter feeling of movement. Enjoy your session at Spa Bali Moon or request our home service option at selected villas and hotels around Seminyak."
            closingText="Reserve your Thai Massage package and move through Bali feeling lighter."
          />
        </div>
        <div className="thai-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .thai-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .thai-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .thai-massage-pricing .pricing-section-three > .container,
        .thai-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .thai-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .thai-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .thai-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .thai-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .thai-massage-pricing
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
          .thai-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .thai-massage-services
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
