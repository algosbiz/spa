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

const sportsMassageOptions = [
  {
    price: "IDR 269K",
    name: "1 Hour",
    treatments: [
      "Targeted muscle tension",
      "Post-workout recovery",
      "Specific problem areas",
    ],
  },
  {
    price: "IDR 359K",
    name: "1.5 Hours",
    treatments: [
      "Full-body recovery",
      "Multiple muscle groups",
      "Deeper relaxation after activity",
    ],
  },
];

const serviceHighlights = [
  { title: "Experienced", text: "Therapists" },
  { title: "Deep", text: "Pressure" },
  { title: "Muscle", text: "Recovery" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Sport Massage only for professional athletes?",
    answer:
      "No. Sport Massage is suitable for anyone with an active lifestyle, including gym-goers, runners, surfers, hikers, and people who experience muscle tightness from regular movement.",
  },
  {
    question: "What is the difference between Sport Massage and Deep Tissue Massage?",
    answer:
      "Both techniques may use firm pressure, but their purpose is different. Sport Massage focuses more on recovery, mobility, and the physical demands of an active lifestyle, while Deep Tissue Massage focuses on releasing deeper areas of long-term muscle tension.",
  },
  {
    question: "Should I get Sport Massage before or after exercise?",
    answer:
      "Both options are possible. A pre-activity session usually uses lighter techniques to prepare the body, while a post-activity session focuses more on relaxation and recovery after physical effort.",
  },
  {
    question: "Will Sport Massage feel painful?",
    answer:
      "Sport Massage may involve stronger pressure than a relaxation massage, but it should not feel painful. Our therapists adjust the intensity based on your comfort and body condition.",
  },
  {
    question: "How often should I receive Sport Massage?",
    answer:
      "The ideal frequency depends on your activity level, training schedule, and personal preference. Some active individuals enjoy regular sessions, while others book treatments after periods of increased physical demand.",
  },
];

export default function SportsMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="sports-massage-banner">
          <Banner
            subTitle="Active Recovery"
            titleSpan="Sport Massage Treatment"
            title=""
          />
        </div>
        <AboutOld
          subTitle="Movement & Recovery"
          title={<>What Makes Sport Massage Different from a Regular Massage?</>}
          text="Sport Massage is a targeted treatment designed for active bodies experiencing frequent movement, physical effort, and muscle strain. Through controlled pressure, stretching, and rhythmic movements, it focuses on areas that become tight after exercise, training, surfing, or active travel, helping the body feel more flexible, balanced, and ready for the next activity."
          feature1Title="Muscle Recovery"
          feature1Text="Helps release tension from physically demanding activities."
          feature2Title="Active Mobility"
          feature2Text="Supports comfortable movement through targeted bodywork."
        />
        <div className="sports-massage-pricing">
          <Pricing
            subTitle="Choose Yours"
            title="Our Session Options"
            text="Different activities place different demands on the body. A shorter session works well for focused recovery, while a longer treatment allows more time to work through multiple areas affected by training, travel, or repetitive movement."
            packages={sportsMassageOptions}
          />
        </div>
        <div className="sports-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Active Bodies"
          title={<>Who Can Benefit from Sport Massage?</>}
          text="Sport Massage is not limited to professional athletes. Anyone who regularly challenges their body through movement can benefit from a treatment focused on muscle comfort and recovery."
          featuresLeft={[
            "Runners and marathon participants",
            "Surfers and water sports enthusiasts",
            "Gym and strength training enthusiasts",
          ]}
          featuresRight={[
            "Cyclists and endurance athletes",
            "Travellers with physically active itineraries",
            "People experiencing muscle tightness from repetitive movement",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Targeted Treatment"
          title={<>Areas That Receive the Most Attention During Sport Massage</>}
          text="Our therapists adjust the treatment based on your activity and the areas that feel most affected. Common focus areas include large muscle groups that experience repeated use during exercise, sports, and daily movement."
          featuresLeft={["Shoulders and upper back", "Lower back", "Glutes and hips", "Thighs"]}
          featuresRight={["Calves", "Feet", "Arms"]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Recovery Technique"
          title={<>What Happens During a Sport Massage?</>}
          text="The session begins with a short consultation to understand your activity level and areas needing attention. Our therapist combines techniques such as kneading, compression, stretching, and controlled pressure to ease muscle tightness while adjusting the intensity to your comfort and goals."
          featuresLeft={[
            "Personalised body assessment",
            "Warm-up massage techniques",
            "Targeted pressure on tense areas",
          ]}
          featuresRight={[
            "Muscle kneading and compression",
            "Stretching movements when needed",
            "Relaxing recovery finish",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="sports-massage-faq">
          <Faq
            imageTitle="Sport Massage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Renew Your Body After Every Challenge"
            text="An active lifestyle asks a lot from your body. Long training sessions, outdoor adventures, and busy days exploring Bali can leave muscles feeling tired and restricted. Sport Massage at Spa Bali Moon provides focused care through controlled pressure and recovery techniques that help you feel more comfortable, mobile, and refreshed. Enjoy your treatment at our spa in Seminyak or experience the convenience of our home service at selected hotels and villas around Bali."
            closingText="Reserve your Sport Massage and feel ready for your next activity."
          />
        </div>
        <div className="sports-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .sports-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .sports-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .sports-massage-pricing .pricing-section-three > .container,
        .sports-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .sports-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .sports-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .sports-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .sports-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .sports-massage-pricing
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
          .sports-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .sports-massage-services
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
