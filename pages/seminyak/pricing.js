import React from 'react';
import Layout from "../../components/layout/Layout";
import AboutReverse from "../../components/sections/Home1/AboutReverse";
import MarqueeSwiper from "../../components/sections/Home1/MarqueeSwiper";
import Video from "../../components/sections/Home1/Video";
import Contact from "../../components/sections/Home1/Contact";
import Testimonial from "../../components/sections/Home3/Testimonial";
import PageTitle from "../../components/sections/PageTitle";
import Pricing from "../../components/sections/Home5/Pricing";
import PackagePricing from "../../components/sections/Home5/PackagePricing";
import PackageSection from "@/components/sections/Home1/Package";
import PackageIntroText from "../../components/sections/Home1/PackageIntroText";
import Banner from "../../components/sections/Home2/Banner";
import ReserveCta from "../../components/sections/Home1/ReserveCta";
import Faq from "../../components/sections/Home6/Faq";

const pricingTreatmentImages = {
  "Aloe Vera Massage": "/images/homepage/homepage-12.webp",
  "Aromatherapy Massage": "/images/homepage/homepage-1.webp",
  "Bali Moon Gold Facial": "/images/services/balimoonfacial/balimoonfacial-2.webp",
  "Bali Moon Tea Tree Facial": "/images/services/balimoonfacial/balimoonfacial-1.webp",
  "Balinese Massage - Relaxing": "/images/services/balinesemassage/balinesemassage-1.webp",
  "Back Massage": "/images/services/traditionalmassage/traditionalmassage-1.webp",
  "Biokos Facial": "/images/services/balimoonfacial/balimoonfacial-3.webp",
  "Body Scrub": "/images/services/bodyscrub/bodyscrub-1.webp",
  "Creambath & Hair Mask": "/images/services/creambath/creambath-1.webp",
  "Couple Massage": "/images/services/couplemassage/couplemassage-1.webp",
  "Cellulite Massage": "/images/services/cellulitemassage/cellulitemassage-1.webp",
  "Deep Tissue Massage": "/images/services/deeptissuemassage/deeptissuemassage-1.webp",
  "Ear Candle": "/images/services/earcandle/earcandle-1.webp",
  "Foot Reflexology": "/images/services/footreflexology/footreflexology-1.webp",
  "Foot Massage": "/images/services/footmassage/footmassage-1.webp",
  "Four Hand Massage": "/images/homepage/homepage-3.webp",
  "Herbal Massage": "/images/homepage/homepage-25.webp",
  "Head Massage": "/images/services/headmassage/headmassage-1.webp",
  "Hot Stone Massage": "/images/services/hotstonemassage/hotstonemassage-1.webp",
  "Lymphatic Massage": "/images/services/lymphaticmassage/lymphaticmassage-1.webp",
  "Manicure Pedicure": "/images/services/manicurepedicure/manicurepedicure-1.webp",
  "Organic Warm Candle Oil Massage": "/images/homepage/homepage-7.webp",
  "Shiatsu Massage": "/images/services/shiatsumassage/shiatsumassage-1.webp",
  "Sport Massage": "/images/services/sportsmassage/sportsmassage-1.webp",
  "Traditional Massage - Strong": "/images/services/traditionalmassage/traditionalmassage-2.webp",
  "Thai Massage": "/images/services/thaimassage/thaimassage-1.webp",
  "Virgin Cold-Press Coconut Oil Massage": "/images/services/coconutoilmassage/coconutoilmassage-1.webp",
  "Waxing": "/images/services/waxing/waxing-1.webp",
};

const priceOption = (time, price) => ({ time, price: `IDR ${price}` });

const pricingTreatments = [
  {
    name: "Aloe Vera Massage",
    desc: "A soothing treatment that helps calm the skin, reduce irritation, and support gentle recovery after travel or sun exposure.",
    options: [priceOption("1 Hour", "199K")],
  },
  {
    name: "Aromatherapy Massage",
    desc: "A calming treatment that uses essential oils and gentle strokes to ease tension and support circulation.",
    options: [
      priceOption("1 Hour", "169K"),
      priceOption("1.5 Hours", "239K"),
      priceOption("2 Hours", "339K"),
    ],
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
    options: [priceOption("Price", "196K")],
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
    options: [priceOption("Price", "269K")],
  },
  {
    name: "Balinese Massage - Relaxing",
    desc: "A holistic treatment that combines flowing movements, gentle stretches, and aromatherapy to encourage deep relaxation.",
    options: [
      priceOption("1 Hour", "159K"),
      priceOption("1.5 Hours", "239K"),
      priceOption("2 Hours", "330K"),
      priceOption("1 Hour Aloe Vera", "195K"),
    ],
  },
  {
    name: "Back Massage",
    desc: "A focused treatment that targets back tension to improve circulation and restore comfort.",
    options: [
      priceOption("30 Minutes", "90K"),
      priceOption("1 Hour", "169K"),
      priceOption("1.5 Hours", "259K"),
      priceOption("2 Hours", "339K"),
    ],
  },
  {
    name: "Body Scrub",
    desc: "A refreshing treatment that gently exfoliates the skin, leaving it smooth, clean, and renewed.",
    options: [
      priceOption("Body Massage & Scrub · Start From", "169K"),
      priceOption("Chocolate", "169K"),
      priceOption("Coconut", "169K"),
      priceOption("Strawberry", "169K"),
      priceOption("Bengkoang", "169K"),
      priceOption("Jasmine", "169K"),
      priceOption("Green Tea", "169K"),
      priceOption("Spa Sari", "169K"),
    ],
  },
  {
    name: "Biokos Facial",
    desc: "Spa Facials For Dry, Normal & Oily Face. A customized facial treatment for dry, normal, or oily skin, including a facial massage and mask.",
    options: [
      priceOption("Biokos", "179K"),
      priceOption("Mustika Ratu", "169K"),
      priceOption("Sari Ayu", "169K"),
      priceOption("Viva", "169K"),
    ],
  },
  {
    name: "Creambath & Hair Mask",
    desc: "A nourishing hair treatment that includes cleansing, conditioning, and a relaxing head massage.",
    options: [
      priceOption("Ginseng", "165K"),
      priceOption("Avocado", "165K"),
      priceOption("Aloe Vera", "165K"),
      priceOption("L'Oreal", "195K"),
      priceOption("NR", "165K"),
      priceOption("Hair Mask", "165K"),
    ],
  },
  {
    name: "Couple Massage",
    children: [
      {
        name: "Couple Balinese Massage",
        desc: "A shared treatment that allows you and your partner to relax together in a calm and comfortable setting.",
        options: [
          priceOption("1 Hour · Balinese Massage · 2 Pax", "319K"),
          priceOption("1.5 Hours · Balinese Massage · 2 Pax", "479K"),
          priceOption("2 Hours · Balinese Massage · 2 Pax", "659K"),
        ],
      },
      {
        name: "Couple Traditional Massage",
        desc: "A shared treatment with firmer pressure, allowing both of you to release tension side by side.",
        options: [
          priceOption("1 Hour · Traditional Massage · 2 Pax", "339K"),
          priceOption("1.5 Hours · Traditional Massage · 2 Pax", "519K"),
          priceOption("2 Hours · Traditional Massage · 2 Pax", "679K"),
        ],
      },
      {
        name: "Couple Deep Tissue Massage",
        desc: "A deeper-pressure shared treatment focused on easing muscle tightness and improving comfort.",
        options: [
          priceOption("1 Hour · Deep Tissue Massage · 2 Pax", "539K"),
          priceOption("1.5 Hours · Deep Tissue Massage · 2 Pax", "719K"),
        ],
      },
      {
        name: "Couple Warm Candle Oil Massages",
        desc: "A warming treatment for two using melted candle oils to soften muscles and create a soothing shared experience.",
        options: [
          priceOption("1 Hour · Warm Candle Massage · 2 Pax", "539K"),
          priceOption("1.5 Hours · Warm Candle Massage · 2 Pax", "799K"),
          priceOption("2 Hours · Warm Candle Massage · 2 Pax", "999K"),
        ],
      },
      {
        name: "Couple Massage Packages",
        options: [
          priceOption("Package A · 1 Hour Balinese Massage · 2 pax + 30 Mins Ear Candle", "639K"),
          priceOption("Package B · 1 Hour Balinese Massage · 2 pax + 1 Hour Bali Moon Facial", "709K"),
          priceOption("Package C · 1 Hour Warm Candle · 2 pax + 30 Mins Ear Candle", "849K"),
          priceOption("Package D · 1 Hour Warm Candle · 2 pax + 1 Hour Bali Moon Facial", "929K"),
        ],
      },
    ],
  },
  {
    name: "Cellulite Massage",
    desc: "A targeted treatment that helps stimulate circulation and support firmer-looking skin.",
    options: [priceOption("1 Hour", "350K"), priceOption("1.5 Hours", "450K")],
  },
  {
    name: "Deep Tissue Massage",
    desc: "A therapeutic treatment that uses deeper pressure to ease muscle stiffness and release tension.",
    options: [priceOption("1 Hour", "269K"), priceOption("1.5 Hours", "359K")],
  },
  {
    name: "Ear Candle",
    desc: "A gentle traditional treatment designed to promote comfort and relaxation.",
    options: [priceOption("30 Minutes", "159K")],
  },
  {
    name: "Foot Reflexology",
    desc: "A focused treatment applying pressure to reflex points on the feet to support circulation and relaxation.",
    options: [
      priceOption("30 Minutes", "99K"),
      priceOption("1 Hour", "169K"),
      priceOption("1.5 Hours", "239K"),
    ],
  },
  {
    name: "Foot Massage",
    desc: "A relieving treatment that focuses on the soles, heels, and ankles to reduce stiffness.",
    options: [
      priceOption("1 Hour", "159K"),
      priceOption("1.5 Hours", "239K"),
      priceOption("2 Hours", "330K"),
    ],
  },
  {
    name: "Four Hand Massage",
    desc: "A coordinated treatment performed by two therapists working in harmony for deeper relaxation.",
    options: [
      priceOption("1 Hour", "339K"),
      priceOption("1.5 Hours", "499K"),
      priceOption("2 Hours", "669K"),
    ],
  },
  {
    name: "Herbal Massage",
    desc: "A comforting massage using herbal techniques to support relaxation, circulation, and muscle relief.",
    options: [priceOption("1 Hour", "199K"), priceOption("2 Hours", "399K")],
  },
  {
    name: "Hot Stone Massage",
    desc: "A soothing treatment using heated basalt stones to relax muscles and encourage circulation.",
    options: [priceOption("1.5 Hours", "299K"), priceOption("2 Hours", "439K")],
  },
  {
    name: "Head Massage",
    desc: "A calming treatment that helps release tension around the head and scalp.",
    options: [
      priceOption("1 Hour", "159K"),
      priceOption("1.5 Hours", "239K"),
      priceOption("2 Hours", "330K"),
    ],
  },
  {
    name: "Lymphatic Massage",
    desc: "A gentle treatment that supports natural drainage, circulation, and overall body balance.",
    options: [
      priceOption("1 Hour", "300K"),
      priceOption("1.5 Hours", "440K"),
      priceOption("2 Hours", "580K"),
    ],
  },
  {
    name: "Manicure Pedicure",
    desc: "A grooming treatment for hands and feet, including nail care, cuticle work, and polish.",
    options: [
      priceOption("Manicure & Pedicure", "238K"),
      priceOption("Manicure", "99K"),
      priceOption("Pedicure", "139K"),
      priceOption("Nail Gel Color Feet & Hands", "138K"),
      priceOption("Nail Remover Feet & Hands", "98K"),
      priceOption("Nail Gel Feet & Hands", "438K"),
    ],
  },
  {
    name: "Organic Warm Candle Oil Massage",
    desc: "A warming treatment using natural candle oils to relax muscles and ease tension.",
    options: [
      priceOption("1 Hour · Warm Candle Wax Balinese", "269K"),
      priceOption("1.5 Hours · Warm Candle Wax Balinese", "399K"),
      priceOption("2 Hours · Warm Candle Wax Balinese", "499K"),
    ],
    children: [
      {
        name: "Four Hand Warm Candle",
        desc: "A deeply relaxing treatment where two therapists work together using warmed oils.",
        options: [
          priceOption("1 Hour · Four Hand Warm Candle", "539K"),
          priceOption("1.5 Hours · Four Hand Warm Candle", "799K"),
          priceOption("2 Hours · Four Hand Warm Candle", "999K"),
        ],
      },
    ],
  },
  {
    name: "Shiatsu Massage",
    desc: "A traditional Japanese treatment using oil-free pressure-point techniques to release tension.",
    options: [
      priceOption("30 Minutes", "119K"),
      priceOption("1 Hour", "219K"),
      priceOption("1.5 Hours", "329K"),
    ],
  },
  {
    name: "Sport Massage",
    desc: "A focused treatment designed to relieve muscle tightness and support mobility.",
    options: [priceOption("1 Hour", "269K"), priceOption("1.5 Hours", "359K")],
  },
  {
    name: "Traditional Massage - Strong",
    desc: "A firmer treatment using deeper pressure for a more intense muscle release.",
    options: [
      priceOption("30 Minutes", "90K"),
      priceOption("1 Hour", "169K"),
      priceOption("1.5 Hours", "259K"),
      priceOption("2 Hours", "339K"),
    ],
  },
  {
    name: "Thai Massage",
    desc: "A traditional oil-free treatment using assisted stretches and deep pressure techniques.",
    options: [
      priceOption("30 Minutes", "133K"),
      priceOption("1 Hour", "259K"),
      priceOption("1.5 Hours", "379K"),
    ],
  },
  {
    name: "Virgin Cold-Press Coconut Oil Massage",
    desc: "A nourishing treatment using pure coconut oil to relax muscles and soften the skin.",
    options: [
      priceOption("1 Hour", "300K"),
      priceOption("1.5 Hours", "440K"),
      priceOption("2 Hours", "580K"),
    ],
  },
  {
    name: "Waxing",
    desc: "A hair removal treatment using hot wax to leave the skin smooth and clean.",
    options: [
      priceOption("Arms", "159K"),
      priceOption("Under Arms", "99K"),
      priceOption("Back · Start From", "139K"),
      priceOption("Full Back", "299K"),
      priceOption("Half Legs", "149K"),
      priceOption("Full Legs", "299K"),
      priceOption("Waxing Brazilian", "269K"),
    ],
  },
].map((treatment, index) => ({
  ...treatment,
  id: index + 1,
  image: pricingTreatmentImages[treatment.name],
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
          image="/images/pricelist/pricelist-1.webp"
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
          contentImage="/images/pricelist/pricelist-2.webp"
          featureImage="/images/pricelist/pricelist-3.webp"
        />
        {/* <AboutReverse /> */}
        <div className="pricing-package-section">
          <PackageSection
            subTitle="Best Price"
            title="Our Massages Price List"
            firstServices={pricingTreatments}
            secondServices={pricingTreatments}
            spreadDropdownArrow
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
        <div className="pricing-faq-section">
          <Faq
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            image="/images/pricelist/pricelist-4.webp"
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
            {
              question: '7. What does "K" mean in the prices?',
              answer:
                '"K" means thousand Indonesian Rupiah. A treatment listed at 159K costs IDR 159,000. All prices on this page are in Indonesian Rupiah (IDR).',
            },
            {
              question: "8. What is your cheapest treatment?",
              answer:
                "The lowest-priced options are the 30-minute traditional massage and 30-minute back massage at IDR 90,000, and the 30-minute foot reflexology at IDR 99,000. For a full hour, Balinese massage at IDR 159,000 is the most affordable full-body treatment.",
            },
            {
              question: "9. Are prices per person or per booking?",
              answer:
                'Individual treatments are priced per person. Couple treatments are priced for two people together; the "2 pax" label means the listed price covers both guests. For example, a one-hour couple Balinese massage at IDR 319,000 is the total for two people, not per person.',
            },
            {
              question: "10. How much extra is home service?",
              answer:
                "Home service costs an additional IDR 75,000 per therapist on top of the treatment price. The treatment itself is charged at the same rate as in-spa. For a couple booking with two therapists, the outcall fee is IDR 150,000 total.",
            },
            {
              question: "11. Which areas do you cover for outcall massage?",
              answer:
                "Seminyak and surrounding areas. For villas, hotels, or residences further out, message us on WhatsApp with your location and we will confirm availability and any additional travel cost before you book.",
            },
            {
              question: "12. Is tipping expected?",
              answer:
                "Tipping is not required and is never added automatically. It is appreciated but entirely at your discretion, and our therapists are paid regardless.",
            },
            {
              question: "13. Do prices differ between the website and in the spa?",
              answer:
                "No. The prices listed on this page are our current rates and apply both in-spa and for home service, with the outcall fee added separately for home visits. If you are ever quoted a different price, please tell us before your treatment.",
            },
            {
              question: "14. Are towels, oils, and amenities included?",
              answer:
                "Yes. Every treatment includes clean towels, professional-grade massage oil, and use of a private treatment room. There is no additional charge for amenities.",
            },
            {
              question: "15. Can I choose the pressure or a specific therapist?",
              answer:
                "Yes. Tell your therapist your preferred pressure at the start and adjust it at any point during the session. If you have a therapist you have booked before, request them by name on WhatsApp and we will do our best to accommodate.",
            },
            ]}
          />
        </div>
        <div className="pricing-closing-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            title="Take a Proper Break from Your Bali Itinerary"
            text="Some treatments are chosen because your muscles need attention. Others are for tired skin, overworked feet, a scalp that needs care, or simply the feeling that you have been moving from one plan to the next without stopping. Browse the Spa Bali Moon price list to find the treatment that fits your day."
            closingText="Visit us in Seminyak or arrange selected treatments at your villa or hotel."
            backgroundImage="/images/pricelist/pricelist-5.webp"
          />
        </div>
      </Layout>
      <style jsx global>{`
        .pricing-package-section .package-section .shape2 {
          bottom: 60px;
        }

        .pricing-faq-section .faq-section {
          padding-bottom: 100px;
        }

        .pricing-closing-section .reserve-cta-section {
          padding: 100px 0 !important;
        }

        .pricing-package-section .package-item-price {
          flex-shrink: 0;
          color: var(--theme-color1) !important;
          font-family: var(--text-font) !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          line-height: 1.4;
          white-space: nowrap;
        }

        @media (max-width: 767px) {
          .pricing-faq-section .faq-section {
            padding-bottom: 18px;
          }

          .pricing-closing-section .reserve-cta-section {
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
