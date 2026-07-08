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
    price: "IDR 639K",
    name: "Package A",
    treatments: ["1 Hr Balinese Massage 2 Pax", "30 Mins Ear Candle 2 Pax"],
  },
  {
    price: "IDR 709K",
    name: "Package B",
    treatments: ["1 Hr Balinese Massage 2 Pax", "1 Hr Bali Moon Facial 2 Pax"],
  },
  {
    price: "IDR 849K",
    name: "Package C",
    treatments: ["1 Hr Warm Candle 2 Pax", "30 Mins Ear Candle 2 Pax"],
  },
  {
    price: "IDR 929K",
    name: "Package D",
    treatments: ["1 Hr Warm Candle 2 Pax", "1 Hr Bali Moon Facial 2 Pax"],
  },
];

const serviceHighlights = [
  { title: "Private", text: "Room Available" },
  { title: "Flexible", text: "Booking" },
  { title: "Customized", text: "Packages" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Couple Massage only for romantic couples?",
    answer:
      "No. Couple Massage simply means two people enjoying treatments together. Friends, siblings, parents, and family members regularly book this experience as well.",
  },
  {
    question: "Do we receive our massages in the same room?",
    answer:
      "Yes. Both guests receive their treatments side by side with two therapists in the same private treatment room or during the same home service appointment.",
  },
  {
    question: "Can each person request different pressure?",
    answer:
      "Absolutely. Each guest has their own consultation before the treatment begins, allowing pressure levels and focus areas to be adjusted individually.",
  },
  {
    question: "Can we choose different massage treatments?",
    answer:
      "Depending on the package selected, different massage options may be available for each guest. Our team will be happy to recommend the most suitable combination when booking.",
  },
  {
    question: "Is Couple Massage suitable for honeymooners?",
    answer:
      "Yes. It is one of our most popular experiences for honeymoon trips, anniversaries, birthdays, and other special occasions, offering a relaxing way to spend quality time together.",
  },
];

export default function CoupleMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="couple-massage-banner">
          <Banner
            subTitle="Together in Relaxation"
            titleSpan="Couple Massage"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Shared Wellness"
          title={<>The Couples Massage Experience</>}
          text="A Couple Massage is a shared spa experience where two guests receive treatments side by side, each with their own therapist. While it's popular with couples, it's also suitable for friends and family members who want to relax together. Each guest can choose their preferred pressure, creating a personalised treatment within the same relaxing environment."
          feature1Title="Side-by-Side Treatment"
          feature1Text="Enjoy your massage together in a private room or through our villa and hotel home service."
          feature2Title="Personalised for Each Guest"
          feature2Text="Each person can request their preferred pressure and focus areas for a comfortable experience."
        />
        <div className="couple-massage-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Package Options"
            text="Every couple enjoys relaxation differently, which is why we offer several massage styles for two. Whether you prefer gentle Balinese techniques, deeper muscle work, or a warm candle ritual, each experience is designed to help you slow down and enjoy quality time together."
            packages={packageOptions}
          />
        </div>
        <div className="couple-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Shared Moments"
          title={<>Why Is Couple Massage So Popular in Bali?</>}
          text="For many visitors, a Couple Massage is more than a spa treatment. It offers dedicated time to unwind together after sightseeing, beach activities, or long travel days. The experience is especially popular among honeymooners, anniversary celebrations, birthdays, and anyone looking to enjoy a relaxing moment with someone special."
          featuresLeft={[
            "Popular for honeymoon trips",
            "A favourite anniversary activity",
            "Perfect after sightseeing and beach days",
          ]}
          featuresRight={[
            "Encourages quality time together",
            "Suitable before romantic dinners or celebrations",
            "Creates a relaxing shared experience",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Suitable For"
          title={<>Couple Massage isn't Just for Couples</>}
          text="Although the name suggests a romantic experience, Couple Massage simply means two people receiving treatments together. Our therapists welcome all guests who wish to enjoy a shared wellness session in a calm and comfortable environment."
          featuresLeft={[
            "Romantic couples",
            "Honeymooners",
            "Friends travelling together",
          ]}
          featuresRight={[
            "Parents and adult children",
            "Brothers and sisters",
            "Anyone wanting to relax side by side",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Your Visit"
          title={<>A Personalised Experience for Two</>}
          text="Your experience begins with a short consultation where each guest can discuss preferred pressure and any areas needing extra attention. Two therapists perform the treatments simultaneously, allowing both guests to relax together while receiving personalised care. Sessions are available at our spa or through home service for villas and hotels across selected areas of Seminyak."
          featuresLeft={[
            "Brief consultation before treatment",
            "Individual pressure preferences",
            "Two therapists working simultaneously",
          ]}
          featuresRight={[
            "Private treatment environment",
            "Available in spa or at your accommodation",
            "Suitable for special occasions or everyday relaxation",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="couple-massage-faq">
          <Faq
            imageTitle="Relax Together"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Make Time for Each Other While You're in Bali"
            text="A Couple Massage is a simple way to enjoy quality time while also giving your body a chance to relax. Many guests book this experience during their holiday, honeymoon, anniversary, or even as a wellness activity with friends or family. Sessions are available in our spa or through home service at villas and hotels, with an additional IDR 75,000 per therapist within Seminyak and nearby areas."
            closingText="Create a memorable wellness experience together and let our therapists take care of the rest."
          />
        </div>
        <div className="couple-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .couple-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .couple-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .couple-massage-pricing .pricing-section-three > .container,
        .couple-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .couple-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .couple-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .couple-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .couple-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .couple-massage-pricing
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
          .couple-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .couple-massage-services
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
