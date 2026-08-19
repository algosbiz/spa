import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home2/Services";
import { createTreatmentImageSet } from "@/lib/treatmentImages";

const bookingUrl = "https://wa.me/6287863175144";

const sessionOptions = [
  {
    duration: "1 Hour",
    price: "IDR 350K",
    recommendations: [
      "First-time guests",
      "One or two target areas",
      "Regular maintenance sessions",
    ],
  },
  {
    duration: "1.5 Hours",
    price: "IDR 450K",
    recommendations: [
      "Multiple treatment areas",
      "More detailed treatment",
      "Guests wanting a longer session",
    ],
  },
];

const serviceHighlights = [
  { title: "Targeted", text: "Treatment Areas" },
  { title: "Adjustable", text: "Pressure Levels" },
  { title: "Experienced", text: "Therapists" },
  { title: "Outcall", text: "Available" },
];

const faqItems = [
  {
    question: "Which areas are commonly treated during cellulite massage?",
    answer:
      "The treatment most commonly focuses on the thighs, hips, buttocks, and abdomen, although other areas may also be included depending on individual goals.",
  },
  {
    question: "Does cellulite massage remove cellulite permanently?",
    answer:
      "No. Cellulite massage is not considered a permanent solution, but regular treatments may help improve circulation, reduce fluid buildup, and temporarily improve the appearance of skin texture.",
  },
  {
    question: "What is the difference between cellulite massage and lymphatic massage?",
    answer:
      "Cellulite massage uses firmer and more targeted techniques that focus on tissue mobility and skin texture, while lymphatic massage uses lighter movements designed to encourage fluid drainage and relaxation.",
  },
  {
    question: "Is cellulite massage painful?",
    answer:
      "The treatment uses firmer pressure than traditional relaxation massage, but it should remain comfortable throughout the session. Pressure can always be adjusted according to your preference.",
  },
  {
    question: "How many sessions are usually recommended?",
    answer:
      "Many guests choose regular sessions over several weeks as part of their body wellness routine, as results are generally gradual rather than immediate.",
  },
  {
    question: "Who is cellulite massage suitable for?",
    answer:
      "Cellulite massage may be suitable for adults who want to include targeted body massage in their wellness and skincare routine, particularly those concerned about the appearance of cellulite on areas such as the thighs, hips, buttocks, or abdomen. It can also be suitable for people who enjoy firm massage techniques and want a relaxing body treatment focused on specific areas.",
  },
  {
    question: "What is the difference between cellulite and stretch marks?",
    answer:
      "Cellulite and stretch marks are different skin concerns. Cellulite creates a dimpled or uneven appearance on the skin, commonly around the thighs, buttocks, hips, and abdomen. Stretch marks are lines or streaks that develop when the skin stretches or changes rapidly, often appearing during periods of growth, weight changes, or pregnancy. Cellulite massage is primarily focused on the appearance and feel of cellulite and is not a treatment for removing stretch marks.",
  },
];

const DurationPricing = ({ images = [] }) => (
  <section className="cellulite-pricing-section bg-sub section__decoration-top section__decoration-bottom pt-130 pb-130">
    <div className="container">
      <div className="section-header__flex mb-60">
        <div>
          <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            Choose Your Session
          </p>
          <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            Treatment Duration &amp; Pricing
          </h2>
        </div>
        <div className="flex-text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <p>
            Every cellulite massage session is tailored to your body and treatment goals. Choose the session length that best suits the areas you&apos;d like us to focus on. Longer sessions allow more time to work across multiple areas while maintaining steady and targeted techniques.
          </p>
        </div>
      </div>
      <div className="row g-4">
        {sessionOptions.map((option, index) => (
          <div className="col-lg-6" key={option.duration}>
            <div className="cellulite-pricing-card">
              <div className="cellulite-pricing-card__image">
                <img src={images[index] || "/images/pricing/pricing-three-image1.jpg"} alt="Cellulite massage treatment" />
              </div>
              <div className="cellulite-pricing-card__content">
                <p className="cellulite-pricing-card__price">{option.price}</p>
                <h3>{option.duration}</h3>
                <p className="cellulite-pricing-card__label">Recommended for:</p>
                <ul>
                  {option.recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-two mt-30">
                  Book Now
                  <span className="icon_box">
                    <i className="fa-regular icon_first fa-arrow-right-long"></i>
                    <i className="fa-regular icon_second fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function CelluliteMassage() {
  const treatmentImages = createTreatmentImageSet("cellulitemassage", sessionOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="cellulite-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Body Contouring"
            titleSpan="Cellulite Massage"
            title="Seminyak"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
          subTitle="Smoother Skin Support"
          title={<>Can Massage Help Improve the Appearance of Cellulite?</>}
          text="Cellulite massage is a targeted body treatment designed to support circulation, encourage lymphatic movement, and improve the appearance of uneven skin texture commonly associated with cellulite. The treatment uses firm, controlled techniques that focus on areas such as the thighs, hips, buttocks, and abdomen where cellulite often develops. Our therapists adjust the intensity according to your comfort level and treatment goals."
          feature1Title="Targeted Areas"
          feature1Text="Commonly focuses on the thighs, hips, buttocks, and stomach area."
          feature2Title="Firm Pressure"
          feature2Text="Uses controlled movements designed to stimulate circulation and tissue mobility."
        />
        <DurationPricing images={treatmentImages.pricing} />
        <div className="cellulite-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          image={treatmentImages.details[0]}
          subTitle="Understanding Cellulite"
          title={<>Why Does Cellulite Form in the First Place?</>}
          text="Cellulite develops when fat deposits beneath the skin push against connective tissue, creating the uneven or dimpled appearance many people notice on the thighs, hips, or buttocks. Several common factors are associated with its appearance:"
          featuresLeft={[
            "Commonly appears on thighs and buttocks",
            "Can affect people of different body types",
            "Often influenced by genetics and hormones",
          ]}
          featuresRight={[
            "May become more visible with fluid retention",
            "Frequently associated with connective tissue structure",
            "A very common and normal skin condition",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Treatment Benefits"
          title={<>How Cellulite Massage Supports Your Wellness</>}
          text="Cellulite massage combines targeted massage techniques with focused pressure and rhythmic movements to address areas where cellulite commonly appears. Some of the reasons why many people choose cellulite massage include:"
          featuresLeft={[
            "Supports healthy circulation",
            "Encourages lymphatic movement",
            "May help reduce fluid retention",
          ]}
          featuresRight={[
            "Can improve skin smoothness temporarily",
            "Helps soften tight or dense tissue areas",
            "Often included in body contouring routines",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="Inside the Session"
          title={<>How the Treatment Works</>}
          text="Each session is designed to provide focused attention to the selected areas while allowing the treatment intensity to be adjusted according to your comfort. The process generally includes:"
          featuresLeft={[
            "Consultation regarding treatment areas",
            "Focused work on selected body zones",
            "Firm and repetitive massage movements",
          ]}
          featuresRight={[
            "Adjustable pressure throughout the session",
            "Treatment tailored to your comfort level",
            "Available at the spa or through home service",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="cellulite-massage-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Smooth Skin Support"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div>
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Support Smoother Skin Wherever You Prefer to Relax"
            text="Whether you visit our spa or prefer the privacy of your villa or hotel, our cellulite massage treatment can be arranged around your schedule. Home service is available for an additional IDR 75,000 per therapist within Seminyak and nearby areas, allowing you to enjoy focused body care without interrupting your plans in Bali."
            closingText="Reserve your session and let our therapists help you create a treatment plan that fits your comfort and body goals."
          />
        </div>
        <div className="cellulite-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .cellulite-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .cellulite-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .cellulite-massage-funfact .funfact-section > .container,
        .cellulite-pricing-section > .container {
          max-width: 1200px;
        }

        .cellulite-pricing-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          height: 100%;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(167, 134, 39, 0.18);
        }

        .cellulite-pricing-card__image {
          min-height: 260px;
          position: relative;
        }

        .cellulite-pricing-card__image img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cellulite-pricing-card__content {
          padding: 34px;
        }

        .cellulite-pricing-card__price {
          color: #a78627;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .cellulite-pricing-card h3 {
          margin-bottom: 18px;
        }

        .cellulite-pricing-card__label {
          color: #1d1d1d;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .cellulite-pricing-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .cellulite-pricing-card li {
          margin-bottom: 8px;
        }

        @media (min-width: 992px) {
          .cellulite-pricing-card {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1400px) {
          .cellulite-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .cellulite-massage-services
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
