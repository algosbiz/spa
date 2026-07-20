import React from 'react';
import Layout from "../components/layout/Layout";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import MarqueeSwiper from "../components/sections/Home1/MarqueeSwiper";
import Video from "../components/sections/Home1/Video";
import Contact from "../components/sections/Home1/Contact";
import Testimonial from "../components/sections/Home3/Testimonial";
import PageTitle from "../components/sections/PageTitle";
import Pricing from "../components/sections/Home5/Pricing";
import PackagePricing from "../components/sections/Home5/PackagePricing";
import PackageSection from "@/components/sections/Home1/Package";
import PackageIntroText from "../components/sections/Home1/PackageIntroText";
import Banner from "../components/sections/Home2/Banner";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Faq from "../components/sections/Home6/Faq";

const pricingTreatments = [
  {
    name: "Aloe Vera Massage",
    desc: "A soothing treatment that helps calm the skin, reduce irritation, and support gentle recovery after travel or sun exposure.",
  },
  {
    name: "Aromatherapy Massage",
    desc: "A calming treatment that uses essential oils and gentle strokes to ease tension and support circulation.",
  },
  {
    name: "Bali Moon Tea Tree Facial",
    desc: "A purifying facial treatment for oily or blemish-prone skin using clay, tea tree care, and nourishing oils to restore balance.",
    benefits: [
      "Regulates shine and excess oil",
      "Aids in decreasing redness and breakouts",
      "Soothes and refreshes the skin",
      "Maintains balanced hydration",
    ],
  },
  {
    name: "Bali Moon Gold Facial",
    desc: "A restorative facial treatment using gold and argan oil to enhance radiance, hydration, and skin firmness.",
    benefits: [
      "Restores a natural glow",
      "Smooths and firms the skin",
      "Provides deep hydration",
      "Enhances overall skin vitality",
    ],
  },
  {
    name: "Balinese Massage - Relaxing",
    desc: "A holistic treatment that combines flowing movements, gentle stretches, and aromatherapy to encourage deep relaxation.",
  },
  {
    name: "Back Massage",
    desc: "A focused treatment that targets back tension to improve circulation and restore comfort.",
  },
  {
    name: "Body Scrub",
    desc: "A refreshing treatment that gently exfoliates the skin, leaving it smooth, clean, and renewed.",
  },
  {
    name: "Biokos Facial",
    desc: "Spa Facials For Dry, Normal & Oily Face. A customized facial treatment for dry, normal, or oily skin, including a facial massage and mask.",
  },
  {
    name: "Creambath & Hair Mask",
    desc: "A nourishing hair treatment that includes cleansing, conditioning, and a relaxing head massage.",
  },
  {
    name: "Couple Massage",
    desc: "A shared treatment that allows you and your partner to relax together in a calm and comfortable setting.",
  },
  {
    name: "Couple Traditional Massage",
    desc: "A shared treatment with firmer pressure, allowing both of you to release tension side by side.",
  },
  {
    name: "Couple Deep Tissue Massage",
    desc: "A deeper-pressure shared treatment focused on easing muscle tightness and improving comfort.",
  },
  {
    name: "Couple Warm Candle Oil Massages.",
    desc: "A warming treatment for two using melted candle oils to soften muscles and create a soothing shared experience.",
  },
  {
    name: "Cellulite Massage",
    desc: "A targeted treatment that helps stimulate circulation and support firmer-looking skin.",
  },
  {
    name: "Deep Tissue Massage",
    desc: "A therapeutic treatment that uses deeper pressure to ease muscle stiffness and release tension.",
  },
  {
    name: "Ear Candle",
    desc: "A gentle traditional treatment designed to promote comfort and relaxation.",
  },
  {
    name: "Foot Reflexology",
    desc: "A focused treatment applying pressure to reflex points on the feet to support circulation and relaxation.",
  },
  {
    name: "Foot Massage",
    desc: "A relieving treatment that focuses on the soles, heels, and ankles to reduce stiffness.",
  },
  {
    name: "Four Hand Massage",
    desc: "A coordinated treatment performed by two therapists working in harmony for deeper relaxation.",
  },
  {
    name: "Herbal Massage",
    desc: "A comforting treatment using herbal techniques to support relaxation, circulation, and muscle relief.",
  },
  {
    name: "Hot Stone Massage",
    desc: "A soothing treatment using heated basalt stones to relax muscles and encourage circulation.",
  },
  {
    name: "Head Massage",
    desc: "A calming treatment that helps release tension around the head and scalp.",
  },
  {
    name: "Lymphatic Massage",
    desc: "A gentle treatment that supports natural drainage, circulation, and overall body balance.",
  },
  {
    name: "Manicure Pedicure",
    desc: "A grooming treatment for hands and feet, including nail care, cuticle work, and polish.",
  },
  {
    name: "Organic Warm Candle Oil Massage",
    desc: "A warming treatment using natural candle oils to relax muscles and ease tension.",
  },
  {
    name: "Four Hand Warm Candle",
    desc: "A deeply relaxing treatment where two therapists work together using warmed oils.",
  },
  {
    name: "Shiatsu Massage",
    desc: "A traditional Japanese treatment using oil-free pressure-point techniques to release tension.",
  },
  {
    name: "Sport Massage",
    desc: "A focused treatment designed to relieve muscle tightness and support mobility.",
  },
  {
    name: "Traditional Massage - Strong",
    desc: "A firmer treatment using deeper pressure for a more intense muscle release.",
  },
  {
    name: "Thai Massage",
    desc: "A traditional oil-free treatment using assisted stretches and deep pressure techniques.",
  },
  {
    name: "Virgin Cold-Press Coconut Oil Massage",
    desc: "A nourishing treatment using pure coconut oil to relax muscles and soften the skin.",
  },
  {
    name: "Waxing",
    desc: "A hair removal treatment using hot wax to leave the skin smooth and clean.",
  },
].map((treatment, index) => ({
  ...treatment,
  id: index + 1,
  image: `/images/package/package-image${(index % 8) + 1}.png`,
  options: [],
}));

export default function Home() {

  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <Banner
          subTitle="Find Your Treatment"
          titleSpan="Spa Treatments for"
          title="Every Kind of Day"
          buttonText="Book Now"
        />
        <Video
          topSubTitle="Start With What You Need"
          topTitle="Which Treatment Are You Looking For Today?"
          topText="Our treatment menu makes it easy to find the care your body or skin needs, from massage and muscle care to facials, body scrubs, and beauty treatments. Choose the treatment and duration that suit your day."
          contentSubTitle="More Than Massage"
          contentTitle="A Complete Spa Menu in Seminyak"
          contentText="Spa Bali Moon brings massage, body care, facials, and beauty services together in one place. Choose a familiar treatment, try something new during your Bali stay, or ask our team for help finding the right option."
          firstStat={<>Established Since <br /> 2009</>}
          secondStat={<>In-Spa &amp; <br /> Home Service</>}
        />
        {/* <AboutReverse /> */}
        <div className="pricing-package-section">
          <PackageSection
            subTitle="Best Price"
            title="Our Massages Price List"
            firstServices={pricingTreatments}
            secondServices={pricingTreatments}
          />
        </div>
        <PackageIntroText
          subTitle="All Spa Packages"
          title="Available In-Spa & with Day Spa at Home"
          text="We offer multiple spa packages at our spa or as a day spa at home. Some guests know what they want, while others wish to combine treatments. We provide the help, so you can enjoy a laid-back and cozy experience, whether alone, with a partner, or with friends."
          note="Browse the packages below to find a combination that fits your plans."
        />
        {/* <Pricing /> */}
        <PackagePricing />
        {/* <MarqueeSwiper /> */}

        {/* <Contact /> */}
        <Testimonial />
        <Faq
          subTitle="Frequently Asked Questions"
          title={<>Everything You Need to Know</>}
          items={[
            {
              question: "1. How do I choose the right treatment?",
              answer:
                "Start with what you want from your visit. Balinese Massage is a popular choice for general relaxation, while Sport Massage and Deep Tissue Massage are better suited to muscle tightness and recovery. Our team can also recommend a treatment based on how your body feels and what you would like to achieve.",
            },
            {
              question: "2. Can I combine several treatments into one visit?",
              answer:
                "Yes. Massage, facials, body scrubs, cream baths, manicures, pedicures, and other services can be combined through our spa packages or selected treatment combinations.",
            },
            {
              question: "3. Are the prices listed for each treatment?",
              answer:
                "Yes. Our treatment menu provides clear pricing for individual services and packages, making it easier to compare your options before booking.",
            },
            {
              question: "4. Can I book a treatment at my hotel or villa?",
              answer:
                "Many of our massage and spa treatments are available through home service in Seminyak and nearby areas. An additional outcall fee of IDR 75,000 per therapist applies.",
            },
            {
              question: "5. Can I create a custom spa package?",
              answer:
                "Yes. If you have several treatments in mind, contact us through WhatsApp and our team can help you find a combination that suits your preferences, schedule, and budget.",
            },
            {
              question: "6. Do I need to book in advance?",
              answer:
                "Advance booking is recommended, particularly during busy periods. Contact us on WhatsApp with your preferred treatment and time so we can check availability.",
            },
          ]}
        />
        <div className="section__decoration-top section__decoration-bottom bg-sub pt-100 pb-100">
          <ReserveCta
            title="Take a Proper Break from Your Bali Itinerary"
            text="Some treatments are chosen because your muscles need attention. Others are for tired skin, overworked feet, a scalp that needs care, or simply the feeling that you have been moving from one plan to the next without stopping. Browse the Spa Bali Moon price list to find the treatment that fits your day."
            closingText="Visit us in Seminyak or arrange selected treatments at your villa or hotel."
          />
        </div>
      </Layout>
      <style jsx global>{`
        .pricing-package-section .package-section .shape2 {
          bottom: 60px;
        }
      `}</style>
    </>
  );
}
