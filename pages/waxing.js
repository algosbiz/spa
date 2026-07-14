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

const waxingOptions = [
  {
    price: "IDR 159K",
    name: "Arms",
    treatments: [
      "Smooth arm hair removal",
      "Everyday grooming",
      "Professional waxing finish",
    ],
  },
  {
    price: "IDR 99K",
    name: "Under Arms",
    treatments: [
      "Quick underarm grooming",
      "Longer-lasting smoothness",
      "Gentle technique for sensitive skin",
    ],
  },
  {
    price: "IDR 139K",
    name: "Back",
    treatments: [
      "Focused back waxing",
      "Neat grooming finish",
      "Suitable for women and men",
    ],
  },
  {
    price: "IDR 299K",
    name: "Full Back",
    treatments: [
      "Complete back waxing",
      "Larger body area care",
      "Smooth, clean result",
    ],
  },
  {
    price: "IDR 149K",
    name: "Half Legs",
    treatments: [
      "Lower or upper leg waxing",
      "Holiday-ready skin",
      "Ideal before beach days",
    ],
  },
  {
    price: "IDR 299K",
    name: "Full Legs",
    treatments: [
      "Complete leg waxing",
      "Longer-lasting smoothness",
      "Professional strip wax application",
    ],
  },
  {
    price: "IDR 269K",
    name: "Waxing Brazilian",
    treatments: [
      "Private treatment setting",
      "Careful technique for sensitive areas",
      "Comfort-focused service",
    ],
  },
];

const serviceHighlights = [
  { title: "Private", text: "Treatment Room" },
  { title: "Quality", text: "Wax Products" },
  { title: "Various", text: "Options" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "How long does waxing results usually last?",
    answer:
      "Waxing results can last several weeks depending on your natural hair growth cycle. With regular sessions, many guests notice that hair grows back softer and finer over time.",
  },
  {
    question: "Is waxing painful?",
    answer:
      "Waxing may feel slightly uncomfortable, especially during the first session, but professional techniques and suitable wax products help make the process more comfortable.",
  },
  {
    question: "Should I shave before my waxing appointment?",
    answer:
      "No. Shaving is not necessary before waxing. Hair should be long enough for the wax to grip properly, usually around 1/4 inch.",
  },
  {
    question: "Can I get Brazilian waxing at Spa Bali Moon?",
    answer:
      "Yes. Brazilian waxing is available in a private treatment setting with careful techniques to maintain comfort and discretion.",
  },
  {
    question: "What should I avoid after waxing?",
    answer:
      "After waxing, it is recommended to avoid hot showers, intense sun exposure, and strong exfoliation for a short period to allow the skin to remain calm.",
  },
  {
    question: "Is waxing suitable for men?",
    answer:
      "Yes. Spa Bali Moon provides waxing options for men, including areas such as the back and Manzilian, with techniques adjusted for comfort.",
  },
];

export default function Waxing() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="waxing-banner">
          <Banner
            subTitle="Smooth Finish"
            titleSpan="Waxing Treatment"
            title="in Bali"
          />
        </div>
        <AboutOld
          subTitle="Beyond Shaving"
          title={<>What Is Professional Waxing Treatment?</>}
          text="Waxing Treatment is a professional hair removal method that removes hair from the root, leaving skin smoother for longer than shaving. Our therapists use quality wax products and hygienic techniques to treat different areas, including arms, legs, and sensitive areas such as Brazilian waxing, with care and comfort in mind."
          feature1Title="Longer-Lasting"
          feature1Text="Removes hair from the root for smoother skin that lasts longer than shaving."
          feature2Title="Gentle Finish"
          feature2Text="Techniques adjusted according to the area and skin sensitivity."
        />
        <div className="waxing-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Waxing Options"
            text="Every area of the body has different needs, which is why Spa Bali Moon provides various waxing options for both everyday grooming and special occasions. Each service is performed carefully to help you achieve smooth and well-maintained skin."
            packages={waxingOptions}
          />
        </div>
        <div className="waxing-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Hair Removal"
          title={<>Why Do Guests Choose Waxing Treatment in Bali?</>}
          text="Many guests choose professional waxing because it provides a cleaner and longer-lasting alternative to shaving. It is especially popular among travellers who want smooth skin before beach activities, holidays, events, or simply as part of their regular self-care routine."
          featuresLeft={[
            "Removes unwanted hair from the root",
            "Leaves skin feeling smooth and refreshed",
            "Suitable for different body areas",
          ]}
          featuresRight={[
            "Popular before beach days and special occasions",
            "Helps maintain a neat appearance for longer",
            "Available for both women and men",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Treatment Areas"
          title={<>Which Areas Can Be Treated with Waxing?</>}
          text="Waxing can be customized based on your grooming needs, from smaller facial areas to larger body sections. Our therapists select the appropriate waxing technique according to the treatment area to maintain comfort and effective results."
          featuresLeft={[
            "Arms and underarms",
            "Half and full legs",
            "Back and full back",
          ]}
          featuresRight={[
            "Brazilian waxing in a private setting",
            "Facial waxing areas such as lip, chin, and eyebrows",
            "Men's waxing options available",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Waxing Process"
          title={<>How Does a Waxing Treatment Work?</>}
          text="Our Waxing Treatment begins with preparing the skin before applying suitable wax based on the treatment area. We use Mancine Strawberry Hard Wax for sensitive areas and olive oil strip wax for larger sections to help remove hair effectively while maintaining skin comfort. After the waxing process, simple aftercare guidance is provided to help keep your skin smooth."
          featuresLeft={[
            "Skin preparation before waxing",
            "Hard wax used for delicate areas",
            "Strip wax applied for larger body sections",
          ]}
          featuresRight={[
            "Hair removed from the root",
            "Therapist checks skin comfort throughout the session",
            "Aftercare guidance after treatment",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="waxing-faq">
          <Faq
            imageTitle="Waxing Treatment"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Smooth Skin Starts with the Right Care at Spa Bali Moon"
            text="Whether preparing for a beach holiday, a special occasion, or maintaining your regular grooming routine, our Waxing Treatment helps keep your skin smooth and refreshed. With careful techniques, quality products, and personalized service, you can enjoy professional waxing at our spa or through selected home service options around Seminyak."
            closingText="Reserve your Waxing Treatment and enjoy smooth, well-maintained skin."
          />
        </div>
        <div className="waxing-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .waxing-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .waxing-banner .banner-two__content .title span {
          display: inline;
        }

        .waxing-pricing .pricing-section-three > .container,
        .waxing-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .waxing-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .waxing-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .waxing-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .waxing-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .waxing-pricing
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
          .waxing-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .waxing-services
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
