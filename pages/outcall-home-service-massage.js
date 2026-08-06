import Head from "next/head";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Funfact from "../components/sections/Home2/Funfact";
import About from "../components/sections/Home1/About";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import PackageSection from "../components/sections/Home1/Package";
import HomeServiceInfo from "../components/sections/HomeService/Info";
import Faq from "../components/sections/Home6/Faq";
import ReserveCta from "../components/sections/Home1/ReserveCta";

const bookingUrl = "https://wa.me/6287863175144";

const option = (time, price) => ({ time, price });

const treatment = (id, name, desc, image, options, benefits) => ({
  id,
  name,
  desc,
  image,
  options,
  benefits,
});

const mostPopularTreatments = [
  treatment(
    "popular-balinese",
    "Balinese Massage",
    "Designed to calm the body with steady pressure, gentle stretching, and aromatic oils.",
    "/images/homepage/homepage-5.webp",
    [
      option("1 Hour", "IDR 159K"),
      option("1.5 Hours", "IDR 239K"),
      option("2 Hours", "IDR 330K"),
      option("1 Hour Aloe Vera", "IDR 195K"),
    ]
  ),
  treatment(
    "popular-cream-bath",
    "Cream Bath",
    "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
    "/images/homepage/homepage-6.webp",
    [
      option("Ginseng", "IDR 165K"),
      option("Avocado", "IDR 165K"),
      option("Aloe Vera", "IDR 165K"),
      option("L’Oreal", "IDR 195K"),
      option("NR", "IDR 165K"),
      option("Hair Mask", "IDR 165K"),
    ]
  ),
  treatment(
    "popular-four-hand",
    "Four Hand Massage",
    "Delivered by two therapists working together in synchronized movements.",
    "/images/homepage/homepage-3.webp",
    [
      option("1 Hour", "IDR 339K"),
      option("1.5 Hours", "IDR 499K"),
      option("2 Hours", "IDR 669K"),
    ]
  ),
  treatment(
    "popular-lymphatic",
    "Lymphatic Massage",
    "Applied gently to support natural drainage and promote healthy circulation.",
    "/images/homepage/homepage-15.webp",
    [
      option("1 Hour", "IDR 300K"),
      option("1.5 Hours", "IDR 440K"),
      option("2 Hours", "IDR 580K"),
    ]
  ),
  treatment(
    "popular-manicure-pedicure",
    "Manicure Pedicure",
    "A grooming treatment for hands and feet, including nail care, cuticle work, and polish.",
    "/images/homepage/homepage-19.webp",
    [
      option("Manicure & Pedicure", "IDR 238K"),
      option("Manicure", "IDR 99K"),
      option("Pedicure", "IDR 139K"),
      option("Nail Remover Feet & Hands", "IDR 98K"),
      option("Nail Gel Feet & Hands", "IDR 438K"),
      option("Nail Gel Color Feet & Hands", "IDR 138K"),
    ]
  ),
  treatment(
    "popular-sports",
    "Sports Massage",
    "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
    "/images/homepage/homepage-8.webp",
    [option("1 Hour", "IDR 269K"), option("1.5 Hours", "IDR 359K")]
  ),
  treatment(
    "popular-traditional",
    "Traditional Massage",
    "Focused on firmer pressure to help release muscle tension throughout the body.",
    "/images/homepage/homepage-16.webp",
    [
      option("30 Minutes", "IDR 90K"),
      option("1 Hour", "IDR 169K"),
      option("1.5 Hours", "IDR 259K"),
      option("2 Hours", "IDR 339K"),
    ]
  ),
  treatment(
    "popular-thai",
    "Thai Massage",
    "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
    "/images/homepage/homepage-20.webp",
    [
      option("30 Minutes", "IDR 133K"),
      option("1 Hour", "IDR 259K"),
      option("1.5 Hours", "IDR 379K"),
    ]
  ),
];

const massageTreatments = [
  treatment(
    "massage-aloe-vera",
    "Aloe Vera Massage",
    "Using cooling aloe vera to help soothe the skin and support gentle recovery.",
    "/images/homepage/homepage-12.webp",
    [option("1 Hour", "IDR 199K")]
  ),
  treatment(
    "massage-aromatherapy",
    "Aromatherapy Massage",
    "Essential oils combined with gentle movements promote calm and body relaxation.",
    "/images/homepage/homepage-1.webp",
    [
      option("1 Hour", "IDR 169K"),
      option("1.5 Hours", "IDR 239K"),
      option("2 Hours", "IDR 339K"),
    ]
  ),
  treatment(
    "massage-balinese",
    "Balinese Massage",
    "Designed to calm the body with steady pressure, gentle stretching, and aromatic oils.",
    "/images/homepage/homepage-5.webp",
    [
      option("1 Hour", "IDR 159K"),
      option("1.5 Hours", "IDR 239K"),
      option("2 Hours", "IDR 330K"),
      option("1 Hour Aloe Vera", "IDR 195K"),
    ]
  ),
  treatment(
    "massage-back",
    "Back Massage",
    "Focusing on the upper body to help relieve tightness and restore comfort.",
    "/images/homepage/homepage-16.webp",
    [
      option("30 Minutes", "IDR 90K"),
      option("1 Hour", "IDR 169K"),
      option("1.5 Hours", "IDR 259K"),
      option("2 Hours", "IDR 339K"),
    ]
  ),
  treatment(
    "massage-cellulite",
    "Cellulite Massage",
    "Targeting specific areas to help stimulate circulation and support skin firmness.",
    "/images/homepage/homepage-17.webp",
    [option("1 Hour", "IDR 350K"), option("1.5 Hours", "IDR 450K")]
  ),
  treatment(
    "massage-deep-tissue",
    "Deep Tissue Massage",
    "Focused on deeper pressure to help release muscle knots and support better movement.",
    "/images/homepage/homepage-10.webp",
    [option("1 Hour", "IDR 269K"), option("1.5 Hours", "IDR 359K")]
  ),
  treatment(
    "massage-four-hand",
    "Four Hand Massage",
    "Delivered by two therapists working together in synchronized movements.",
    "/images/homepage/homepage-3.webp",
    [
      option("1 Hour", "IDR 339K"),
      option("1.5 Hours", "IDR 499K"),
      option("2 Hours", "IDR 669K"),
    ]
  ),
  treatment(
    "massage-four-hand-candle",
    "Four Hand Warm Candle",
    "Performed by two therapists in synchronized movements for deeper relaxation.",
    "/images/homepage/homepage-7.webp",
    [
      option("1 Hour", "IDR 539K"),
      option("1.5 Hours", "IDR 799K"),
      option("2 Hours", "IDR 999K"),
    ]
  ),
  treatment(
    "massage-foot-reflexology",
    "Foot Reflexology",
    "Applying pressure to reflex points on the feet to help restore body balance.",
    "/images/homepage/homepage-22.webp",
    [
      option("30 Minutes", "IDR 99K"),
      option("1 Hour", "IDR 169K"),
      option("1.5 Hours", "IDR 239K"),
    ]
  ),
  treatment(
    "massage-foot",
    "Foot Massage",
    "A focused massage on the soles, heels, and ankles to ease stiffness and restore comfort.",
    "/images/homepage/homepage-18.webp",
    [
      option("1 Hour", "IDR 159K"),
      option("1.5 Hours", "IDR 239K"),
      option("2 Hours", "IDR 330K"),
    ]
  ),
  treatment(
    "massage-head",
    "Head Massage",
    "Focused on the head area to help release built-up stress and promote mental ease.",
    "/images/homepage/homepage-11.webp",
    [
      option("1 Hour", "IDR 159K"),
      option("1.5 Hours", "IDR 239K"),
      option("2 Hours", "IDR 330K"),
    ]
  ),
  treatment(
    "massage-herbal",
    "Herbal Massage",
    "Using herbal ingredients to support relaxation and encourage circulation.",
    "/images/homepage/homepage-25.webp",
    [option("1 Hour", "IDR 199K"), option("2 Hours", "IDR 399K")]
  ),
  treatment(
    "massage-lymphatic",
    "Lymphatic Massage",
    "Applied gently to support natural drainage and promote healthy circulation.",
    "/images/homepage/homepage-15.webp",
    [
      option("1 Hour", "IDR 300K"),
      option("1.5 Hours", "IDR 440K"),
      option("2 Hours", "IDR 580K"),
    ]
  ),
  treatment(
    "massage-warm-candle",
    "Organic Warm Candle Oil Massage",
    "Using natural, warmed oils to help relax the body and soften muscle tension.",
    "/images/homepage/homepage-7.webp",
    [
      option("1 Hour – Warm Candle Wax Balinese", "IDR 269K"),
      option("1.5 Hours – Warm Candle Wax Balinese", "IDR 399K"),
      option("2 Hours – Warm Candle Wax Balinese", "IDR 499K"),
    ]
  ),
  treatment(
    "massage-sports",
    "Sports Massage",
    "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
    "/images/homepage/homepage-8.webp",
    [option("1 Hour", "IDR 269K"), option("1.5 Hours", "IDR 359K")]
  ),
  treatment(
    "massage-shiatsu",
    "Shiatsu Massage",
    "Using Japanese pressure-point techniques without oil to help ease body tension.",
    "/images/homepage/homepage-27.webp",
    [
      option("30 Minutes", "IDR 119K"),
      option("1 Hour", "IDR 219K"),
      option("1.5 Hours", "IDR 329K"),
    ]
  ),
  treatment(
    "massage-traditional",
    "Traditional Massage",
    "Focused on firmer pressure to help release muscle tension throughout the body.",
    "/images/homepage/homepage-16.webp",
    [
      option("30 Minutes", "IDR 90K"),
      option("1 Hour", "IDR 169K"),
      option("1.5 Hours", "IDR 259K"),
      option("2 Hours", "IDR 339K"),
    ]
  ),
  treatment(
    "massage-thai",
    "Thai Massage",
    "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
    "/images/homepage/homepage-20.webp",
    [
      option("30 Minutes", "IDR 133K"),
      option("1 Hour", "IDR 259K"),
      option("1.5 Hours", "IDR 379K"),
    ]
  ),
  treatment(
    "massage-coconut-oil",
    "Virgin Cold-Press Coconut Oil Massage",
    "Using pure coconut oil to help nourish the skin and promote deep relaxation.",
    "/images/homepage/homepage-25.webp",
    [
      option("1 Hour", "IDR 300K"),
      option("1.5 Hours", "IDR 440K"),
      option("2 Hours", "IDR 580K"),
    ]
  ),
  treatment(
    "massage-warm-stone",
    "Warm Stone Massage",
    "Using heated stones to help relax muscles and support healthy circulation.",
    "/images/homepage/homepage-7.webp",
    [option("1.5 Hours", "IDR 299K"), option("2 Hours", "IDR 439K")]
  ),
];

const beautyTreatments = [
  treatment(
    "beauty-tea-tree-facial",
    "Bali Moon Tea Tree Facial",
    "A purifying facial treatment for oily or blemish-prone skin using clay, tea tree care, and nourishing oils to restore balance.",
    "/images/homepage/homepage-9.webp",
    [option("Price", "IDR 196K")],
    [
      "Helps control excess oil",
      "Supports clearer-looking skin",
      "Calms and refreshes the face",
      "Maintains healthy hydration",
    ]
  ),
  treatment(
    "beauty-gold-facial",
    "Bali Moon Gold Facial",
    "Premium facial care using gold and argan oil to support skin radiance and firmness.",
    "/images/homepage/homepage-9.webp",
    [option("Price", "IDR 269K")],
    [
      "Boosts natural glow",
      "Improves skin smoothness and elasticity",
      "Deeply moisturizes",
      "Revives overall skin vitality",
    ]
  ),
  treatment(
    "beauty-body-scrub",
    "Body Scrub",
    "Gently exfoliating the skin to help refresh the body and leave the skin smooth and clean.",
    "/images/homepage/homepage-13.webp",
    [
      option("Chocolate", "IDR 169K"),
      option("Coconut", "IDR 169K"),
      option("Strawberry", "IDR 169K"),
      option("Bengkoang", "IDR 169K"),
      option("Jasmine", "IDR 169K"),
      option("Green Tea", "IDR 169K"),
      option("Spa Sari", "IDR 169K"),
    ]
  ),
  treatment(
    "beauty-biokos-facial",
    "Biokos Facial",
    "Custom facial care for dry, normal, or oily skin, including facial massage and mask application.",
    "/images/homepage/homepage-9.webp",
    [
      option("Biokos", "IDR 179K"),
      option("Mustika Ratu", "IDR 169K"),
      option("Sari Ayu", "IDR 169K"),
      option("Viva", "IDR 169K"),
    ]
  ),
  treatment(
    "beauty-cream-bath",
    "Cream Bath",
    "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
    "/images/homepage/homepage-6.webp",
    [
      option("Ginseng", "IDR 165K"),
      option("Avocado", "IDR 165K"),
      option("Aloe Vera", "IDR 165K"),
      option("L’Oreal", "IDR 195K"),
      option("NR", "IDR 165K"),
      option("Hair Mask", "IDR 165K"),
    ]
  ),
  treatment(
    "beauty-ear-candle",
    "Ear Candle",
    "Providing a traditional ear candle experience focused on comfort and gentle relaxation.",
    "/images/homepage/homepage-14.webp",
    [option("30 Minutes", "IDR 159K")]
  ),
  treatment(
    "beauty-eyelash",
    "Eyelash",
    "Enhancing the appearance of lashes with a simple and neat beauty treatment.",
    "/images/homepage/homepage-23.webp",
    [
      option("Normal Eyelash", "IDR 299K"),
      option("Volume", "IDR 359K"),
      option("Mega Volume", "IDR 399K"),
    ]
  ),
  treatment(
    "beauty-manicure-pedicure",
    "Manicure Pedicure",
    "A grooming treatment for hands and feet, including nail care, cuticle work, and polish.",
    "/images/homepage/homepage-19.webp",
    [
      option("Manicure & Pedicure", "IDR 238K"),
      option("Manicure", "IDR 99K"),
      option("Pedicure", "IDR 139K"),
      option("Nail Remover Feet & Hands", "IDR 98K"),
      option("Nail Gel Feet & Hands", "IDR 438K"),
      option("Nail Gel Color Feet & Hands", "IDR 138K"),
    ]
  ),
  treatment(
    "beauty-waxing",
    "Waxing",
    "Removing unwanted hair using olive oil hot wax for smooth and well-cared-for skin.",
    "/images/homepage/homepage-24.webp",
    [
      option("Arms", "IDR 159K"),
      option("Under Arms", "IDR 99K"),
      option("Back", "Starts from IDR 139K"),
      option("Full Back", "IDR 299K"),
      option("Half Legs", "IDR 149K"),
      option("Full Legs", "IDR 299K"),
      option("Brazilian", "IDR 269K"),
    ]
  ),
];

const coupleTreatments = [
  treatment(
    "couple-balinese",
    "Couple Balinese Massage",
    "Performed side by side using steady pressure and flowing techniques for shared relaxation.",
    "/images/homepage/homepage-21.webp",
    [
      option("1 Hour · 2 guests", "IDR 319K"),
      option("1.5 Hours · 2 guests", "IDR 479K"),
      option("2 Hours · 2 guests", "IDR 659K"),
    ]
  ),
  treatment(
    "couple-traditional",
    "Couple Traditional Massage",
    "Applied with firmer pressure to help reduce tension while relaxing together.",
    "/images/homepage/homepage-21.webp",
    [
      option("1 Hour · 2 guests", "IDR 339K"),
      option("1.5 Hours · 2 guests", "IDR 519K"),
      option("2 Hours · 2 guests", "IDR 679K"),
    ]
  ),
  treatment(
    "couple-deep-tissue",
    "Couple Deep Tissue Massage",
    "Delivered with deeper pressure for two, aimed at easing tight muscles and improving comfort.",
    "/images/homepage/homepage-21.webp",
    [
      option("1 Hour · 2 guests", "IDR 539K"),
      option("1.5 Hours · 2 guests", "IDR 719K"),
    ]
  ),
  treatment(
    "couple-warm-candle",
    "Couple Warm Candle Massage",
    "Using gently warmed candle oils to help soften muscles and create a calming shared experience.",
    "/images/homepage/homepage-21.webp",
    [
      option("1 Hour · 2 guests", "IDR 539K"),
      option("1.5 Hours · 2 guests", "IDR 799K"),
      option("2.5 Hours · 2 guests", "IDR 999K"),
    ]
  ),
  treatment(
    "couple-packages",
    "Couple Massage Packages",
    "Well-balanced couple massage packages created for relaxing together.",
    "/images/homepage/homepage-21.webp",
    [
      option("Package A · Balinese Massage + Ear Candle", "IDR 639K"),
      option("Package B · Balinese Massage + Bali Moon Facial", "IDR 709K"),
      option("Package C · Warm Candle + Ear Candle", "IDR 849K"),
      option("Package D · Warm Candle + Bali Moon Facial", "IDR 929K"),
    ]
  ),
];

const pricingTabs = [
  { label: "Most Popular", services: mostPopularTreatments },
  { label: "Massage", services: massageTreatments },
  { label: "Beauty", services: beautyTreatments },
  { label: "For Couples", services: coupleTreatments },
];

const outcallHighlights = [
  { title: "Easy Booking", text: "via WhatsApp" },
  { title: "Spa Treatments", text: "at Your Place" },
  { title: "Flexible", text: "Spa Packages" },
  { title: "Open Daily", text: "9am - 11pm" },
];

const faqItems = [
  {
    question: "What is outcall massage?",
    answer:
      "An outcall massage is a professional massage service where a therapist travels to your hotel, villa, or private accommodation instead of you visiting a spa. Spa Bali Moon offers professional outcall massage services, allowing guests to enjoy authentic Balinese massage and wellness treatments without leaving their location.",
  },
  {
    question: "Can I Book a Home Service Massage in Seminyak?",
    answer:
      "Yes. Home service massage is available for guests staying in Seminyak, Canggu, North Kuta, Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, and selected nearby areas. Bookings can be made through our website or via WhatsApp for availability, scheduling, and service-area confirmation.",
  },
  {
    question: "What Areas Does Spa Bali Moon Serve?",
    answer:
      "The spa is based in Seminyak, and home service massage may be available in Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Kuta, Jimbaran, Sanur, Denpasar, and selected nearby areas. Availability may vary depending on your location, therapist scheduling, and travel distance.",
  },
  {
    question: "Is Spa Bali Moon's Home Massage Service Legitimate?",
    answer:
      "Yes. We are an established spa studio offering both in-spa and home massage services. Guests can book directly through our spa or WhatsApp, and experienced therapists provide professional massage services at villas, hotels, and private accommodations.",
  },
  {
    question: "Who Is Spa Bali Moon Suitable For?",
    answer:
      "Our services are suitable for a wide range of guests, including couples, friends, solo travellers, athletes, and those seeking relaxation or wellness treatments during their stay in Bali.",
  },
  {
    question: "How Much Does a Home Massage Cost at Spa Bali Moon?",
    answer:
      "Massage treatments start from IDR 159K for a 60-minute session, with premium treatments and longer sessions available at higher rates. An additional home service fee of IDR 75K per therapist applies for villas, hotels, and private accommodations in Seminyak and surrounding areas.",
  },
  {
    question: "How Can I Tell If a Home Massage Service Is Legitimate?",
    answer:
      "Spa Bali Moon operates from Jl. Pangkung Sari No. 30, Seminyak, Bali, and accepts bookings through its official website and WhatsApp at +62 878-6317-5144, giving guests a reliable way to arrange professional massage treatments.",
  },
  {
    question: "What Types of Massage Can I Book for a Home Service?",
    answer:
      "Popular options include Balinese massage, Thai massage, deep tissue massage, sports massage, lymphatic massage, and relaxing aromatherapy treatments. Choose the treatment that best suits your goals, whether you are seeking relaxation, muscle recovery, or a traditional spa experience.",
  },
  {
    question: "How Does Spa Bali Moon Ensure a Safe and Professional Experience?",
    answer:
      "Guests can expect professional service, transparent treatment information, and a dedicated team focused on providing a comfortable and reliable spa experience, whether visiting the spa or booking a home massage service.",
  },
  {
    question: "How Does Spa Bali Moon Ensure a Comfortable Home Massage Experience?",
    answer:
      "Before your appointment, we confirm your preferred treatment, pressure level, session duration, and any areas that require special attention. Booking details and applicable service fees are confirmed in advance so you can relax in the comfort of your villa, hotel, or private accommodation.",
  },
];

export default function OutcallHomeServiceMassage() {
  return (
    <>
      <Head>
        <title>Outcall & Home Service Massage in Bali | Spa Bali Moon</title>
        <meta
          name="description"
          content="Book a professional home service massage in Bali for your hotel, villa, or private accommodation, available daily from 9am to 11pm."
        />
        <link
          rel="canonical"
          href="https://spabalimoon.com/outcall-home-service-massage/"
        />
      </Head>
      <Layout HeaderStyle="one" FooterStyle="two">
        <main className="outcall-page">
          <Banner
            subTitle="Home Comfort Spa"
            titleSpan="Home Service"
            title="Massage in Bali"
            text="Experience our traditional massage and spa treatments in the comfort of your home, hotel, or villa."
            openingText="OPENING TIMES: Open Daily: 9:00 - 23:00"
            image="/images/homepage/homepage-28.webp"
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          <AboutOld
            subTitle="Spa Bali Moon in Seminyak, Bali"
            title={<>Home Service Balinese Massage</>}
            text={
              <>
                Find an authentic Balinese massage without the hassle. Let the
                stress of the week ease away as you enjoy a quiet, well-prepared
                session that fits naturally into your day.
                <br />
                <br />
                Explore treatment and package options that can be customized to
                your preferences.
              </>
            }
            feature1Title="Easy Booking via WhatsApp"
            feature1Text="Check available treatments and arrange your spa session easily through WhatsApp."
            feature2Title="Spa Treatments at Your Place"
            feature2Text="Select your preferred treatment and book a spa session delivered to your location."
            primaryImage="/images/homepage/homepage-2.webp"
            secondaryImage="/images/homepage/homepage-4.webp"
          />
          <Funfact items={outcallHighlights} />
          <About
            subTitle="Spa & Beauty Service"
            title={<>Massage & Body Treatments</>}
            text="We offer a calm and comfortable environment where you can relax and select the treatment that fits your needs. Our selection includes classic Balinese techniques, Japanese Shiatsu, beauty care, and treatment options for couples."
            featuresLeft={[
              "Couple Massage — Relax side by side while sharing a massage experience together.",
              "Shiatsu — Release muscle tension using gentle Japanese pressure-point techniques.",
              "Thai Massage — Improve flexibility and posture with assisted stretching and acupressure.",
              "Cream Bath — Revitalize your hair while supporting softness and freshness.",
            ]}
            featuresRight={[
              "Body Scrub — Softly exfoliate the skin and promote smoothness.",
              "Mani-Pedi — Maintain clean and well-groomed hands and feet with professional care.",
              "Hot Stone — Soothe muscle tension using warm stones for deeper relaxation.",
              "Facial Care — Cleanse and refresh the skin to restore a healthy appearance.",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
            image="/images/homepage/homepage-3.webp"
          />
          <AboutReverse
            subTitle="Reserve Your Home Service Massage"
            title={<>Get Your Massage Service at Home</>}
            text={
              <>
                Professional Balinese massage and spa treatments are available
                throughout the day at your home, hotel, or villa, with flexible
                appointment times and responsive booking support. Our therapists
                can accommodate both individual and group bookings with
                appropriate pricing.
                <br />
                <br />
                Discover calming treatments available at our spa or as a home
                service. View our price list and contact us for quick assistance
                with rates and therapist availability when you are ready to book.
              </>
            }
            featuresLeft={[
              "Individual and group bookings",
              "Flexible appointment times",
              "Treatments at your hotel, villa, or home",
            ]}
            featuresRight={[
              "Clear treatment prices",
              "Responsive booking support",
              "Quick availability confirmation",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
            image="/images/homepage/homepage-4.webp"
          />
          <div id="outcall-prices">
            <PackageSection
              subTitle="Prices"
              title="Professional Care with Thoughtful Details Focused on Comfort and Relaxation"
              tabs={pricingTabs}
            />
          </div>
          <HomeServiceInfo plain />
          <Faq
            subTitle="Frequently Asked Questions"
            title={<>Home Service Massage</>}
            items={faqItems}
            showImage={false}
            columns={2}
          />
          <ReserveCta
            title="Home Service Massage in Seminyak"
            text="Professional spa treatments are available at your home, hotel, or villa. An additional IDR 75,000 per therapist applies for home service in Seminyak and nearby areas."
            closingText="For in-spa treatments, bookings should be made on-site based on your preferred time."
            backgroundImage="/images/homepage/homepage-28.webp"
          />
        </main>
      </Layout>
    </>
  );
}
