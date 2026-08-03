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

const outcallHighlights = [
  { title: "Easy Booking", text: "via WhatsApp" },
  { title: "Spa Treatments", text: "at Your Place" },
  { title: "Flexible", text: "Spa Packages" },
  { title: "Open Daily", text: "9am - 11pm" },
];

const outcallTreatments = [
  {
    id: 1,
    name: "Balinese Massage",
    desc: "Flowing pressure, gentle stretches, and aromatic oil for a balanced full-body treatment.",
    image: "/images/homepage/homepage-5.webp",
    options: [
      { time: "1 Hour", price: "IDR 159K" },
      { time: "1.5 Hours", price: "IDR 239K" },
      { time: "2 Hours", price: "IDR 330K" },
      { time: "1 Hour Aloe Vera", price: "IDR 195K" },
    ],
  },
  {
    id: 2,
    name: "Cream Bath",
    desc: "Hair and scalp care with cleansing, conditioning cream, and a relaxing head massage.",
    image: "/images/homepage/homepage-6.webp",
    options: [
      { time: "Ginseng / Avocado / Aloe Vera", price: "IDR 165K" },
      { time: "L'Oreal", price: "IDR 195K" },
      { time: "NR / Hair Mask", price: "IDR 165K" },
    ],
  },
  {
    id: 3,
    name: "Four Hand Massage",
    desc: "Two therapists work in coordinated movements for a deeply immersive massage experience.",
    image: "/images/homepage/homepage-3.webp",
    options: [
      { time: "1 Hour", price: "IDR 339K" },
      { time: "1.5 Hours", price: "IDR 499K" },
      { time: "2 Hours", price: "IDR 669K" },
    ],
  },
  {
    id: 4,
    name: "Lymphatic Massage",
    desc: "Gentle rhythmic care designed to support natural drainage and circulation.",
    image: "/images/homepage/homepage-15.webp",
    options: [
      { time: "1 Hour", price: "IDR 300K" },
      { time: "1.5 Hours", price: "IDR 440K" },
      { time: "2 Hours", price: "IDR 580K" },
    ],
  },
  {
    id: 5,
    name: "Manicure & Pedicure",
    desc: "Professional hand, foot, nail, and cuticle care delivered to your accommodation.",
    image: "/images/homepage/homepage-19.webp",
    options: [
      { time: "Manicure & Pedicure", price: "IDR 238K" },
      { time: "Manicure", price: "IDR 99K" },
      { time: "Pedicure", price: "IDR 139K" },
      { time: "Nail Gel Feet & Hands", price: "IDR 438K" },
    ],
  },
  {
    id: 6,
    name: "Sports Massage",
    desc: "Focused massage for tired muscles, stiffness, and post-activity recovery.",
    image: "/images/homepage/homepage-8.webp",
    options: [
      { time: "1 Hour", price: "IDR 269K" },
      { time: "1.5 Hours", price: "IDR 359K" },
    ],
  },
  {
    id: 7,
    name: "Traditional Massage",
    desc: "Firmer pressure helps release tension throughout the body.",
    image: "/images/homepage/homepage-16.webp",
    options: [
      { time: "30 Minutes", price: "IDR 90K" },
      { time: "1 Hour", price: "IDR 169K" },
      { time: "1.5 Hours", price: "IDR 259K" },
      { time: "2 Hours", price: "IDR 339K" },
    ],
  },
  {
    id: 8,
    name: "Thai Massage",
    desc: "Oil-free rhythmic pressure and assisted stretching for mobility and comfort.",
    image: "/images/homepage/homepage-20.webp",
    options: [
      { time: "30 Minutes", price: "IDR 133K" },
      { time: "1 Hour", price: "IDR 259K" },
      { time: "1.5 Hours", price: "IDR 379K" },
    ],
  },
  {
    id: 9,
    name: "Aloe Vera Massage",
    desc: "Cooling aloe vera care for skin that feels warm or sensitive after sun exposure.",
    image: "/images/homepage/homepage-12.webp",
    options: [{ time: "1 Hour", price: "IDR 199K" }],
  },
  {
    id: 10,
    name: "Deep Tissue Massage",
    desc: "Controlled deeper pressure targets tight muscles and recurring stiffness.",
    image: "/images/homepage/homepage-10.webp",
    options: [
      { time: "1 Hour", price: "IDR 269K" },
      { time: "1.5 Hours", price: "IDR 359K" },
    ],
  },
  {
    id: 11,
    name: "Foot Reflexology",
    desc: "Focused pressure is applied to reflex points across the feet.",
    image: "/images/homepage/homepage-22.webp",
    options: [
      { time: "30 Minutes", price: "IDR 99K" },
      { time: "1 Hour", price: "IDR 169K" },
      { time: "1.5 Hours", price: "IDR 239K" },
    ],
  },
  {
    id: 12,
    name: "Foot Massage",
    desc: "Relaxing care for tired feet, soles, heels, ankles, and lower legs.",
    image: "/images/homepage/homepage-18.webp",
    options: [
      { time: "1 Hour", price: "IDR 159K" },
      { time: "1.5 Hours", price: "IDR 239K" },
      { time: "2 Hours", price: "IDR 330K" },
    ],
  },
  {
    id: 13,
    name: "Head Massage",
    desc: "A calming treatment focused on the scalp, head, neck, and upper shoulders.",
    image: "/images/homepage/homepage-11.webp",
    options: [
      { time: "1 Hour", price: "IDR 159K" },
      { time: "1.5 Hours", price: "IDR 239K" },
      { time: "2 Hours", price: "IDR 330K" },
    ],
  },
  {
    id: 14,
    name: "Shiatsu Massage",
    desc: "Japanese oil-free pressure-point techniques help ease body tension.",
    image: "/images/homepage/homepage-27.webp",
    options: [
      { time: "30 Minutes", price: "IDR 119K" },
      { time: "1 Hour", price: "IDR 219K" },
      { time: "1.5 Hours", price: "IDR 329K" },
    ],
  },
  {
    id: 15,
    name: "Virgin Coconut Oil Massage",
    desc: "Pure cold-pressed coconut oil nourishes the skin while the body relaxes.",
    image: "/images/homepage/homepage-25.webp",
    options: [
      { time: "1 Hour", price: "IDR 300K" },
      { time: "1.5 Hours", price: "IDR 440K" },
      { time: "2 Hours", price: "IDR 580K" },
    ],
  },
  {
    id: 16,
    name: "Hot Stone Massage",
    desc: "Warm stones and massage techniques help soften tight muscles.",
    image: "/images/homepage/homepage-7.webp",
    options: [
      { time: "1.5 Hours", price: "IDR 299K" },
      { time: "2 Hours", price: "IDR 439K" },
    ],
  },
  {
    id: 17,
    name: "Body Scrub",
    desc: "Gentle exfoliation helps refresh the body and smooth the skin.",
    image: "/images/homepage/homepage-13.webp",
    options: [
      { time: "Chocolate / Coconut", price: "IDR 169K" },
      { time: "Strawberry / Bengkoang", price: "IDR 169K" },
      { time: "Jasmine / Green Tea / Spa Sari", price: "IDR 169K" },
    ],
  },
  {
    id: 18,
    name: "Ear Candle",
    desc: "A traditional wellness ritual focused on gentle warmth and relaxation.",
    image: "/images/homepage/homepage-14.webp",
    options: [{ time: "30 Minutes", price: "IDR 159K" }],
  },
  {
    id: 19,
    name: "Waxing",
    desc: "Selected professional waxing services for smooth, well-cared-for skin.",
    image: "/images/homepage/homepage-24.webp",
    options: [
      { time: "Arms", price: "IDR 159K" },
      { time: "Under Arms", price: "IDR 99K" },
      { time: "Half Legs", price: "IDR 149K" },
      { time: "Full Legs", price: "IDR 299K" },
      { time: "Brazilian", price: "IDR 269K" },
    ],
  },
];

const beautyTreatmentNames = new Set([
  "Body Scrub",
  "Cream Bath",
  "Ear Candle",
  "Manicure & Pedicure",
  "Waxing",
]);

const massageTreatments = outcallTreatments
  .filter((treatment) => !beautyTreatmentNames.has(treatment.name))
  .sort((a, b) => a.name.localeCompare(b.name));

const beautyTreatments = outcallTreatments
  .filter((treatment) => beautyTreatmentNames.has(treatment.name))
  .sort((a, b) => a.name.localeCompare(b.name));

const faqItems = [
  {
    question: "What is outcall massage?",
    answer:
      "An outcall massage brings the therapist and essential treatment setup to your hotel, villa, residence, or private accommodation, so you can enjoy professional spa care without travelling to the spa.",
  },
  {
    question: "Can I Book a Home Service Massage in Seminyak?",
    answer:
      "Yes. Home service is available in Seminyak and selected surrounding areas. Share your location through WhatsApp and our team will confirm coverage, travel time, and therapist availability.",
  },
  {
    question: "What Areas Does Spa Bali Moon Serve?",
    answer:
      "Our team serves Seminyak and may also accept bookings in Canggu, Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, Ubud, and nearby locations, depending on distance and scheduling.",
  },
  {
    question: "Is Spa Bali Moon's Home Massage Service Legitimate?",
    answer:
      "Spa Bali Moon is an established Seminyak spa offering both in-spa and home service appointments. Bookings can be arranged through the official website or WhatsApp with the treatment, location, fee, and schedule confirmed in advance.",
  },
  {
    question: "Who Is Spa Bali Moon Suitable For?",
    answer:
      "Home service is suitable for solo guests, couples, friends, families, active travellers, and groups who prefer to receive their treatment in familiar surroundings.",
  },
  {
    question: "How Much Does a Home Massage Cost at Spa Bali Moon?",
    answer:
      "Treatment prices follow the price list shown on this page. An additional home service fee of IDR 75,000 per therapist applies within Seminyak, while other locations can be confirmed before booking.",
  },
  {
    question: "How Can I Tell If a Home Massage Service Is Legitimate?",
    answer:
      "Spa Bali Moon operates from Jl. Pangkung Sari No. 30 in Seminyak and accepts appointments through its official website and WhatsApp number, +62 878-6317-5144.",
  },
  {
    question: "What Types of Massage Can I Book for a Home Service?",
    answer:
      "Popular options include Balinese, Traditional, Thai, Deep Tissue, Sports, Shiatsu, Lymphatic, foot, and selected beauty treatments. Availability depends on the treatment and required setup.",
  },
  {
    question: "How Does Spa Bali Moon Ensure a Safe and Professional Experience?",
    answer:
      "Guests receive clear treatment information, confirmed booking details, clean equipment, and attentive service from therapists focused on a comfortable and reliable appointment."
  },
  {
    question: "How Does Spa Bali Moon Ensure a Comfortable Home Massage Experience?",
    answer:
      "Before the appointment, our team confirms your treatment, duration, preferred pressure, location, service fee, and any areas needing special attention. Therapists arrive with clean linens, oils, and the required equipment.",
  },
];

export default function OutcallHomeServiceMassage() {
  return (
    <>
      <Head>
        <title>Outcall & Home Service Massage in Bali | Spa Bali Moon</title>
        <meta
          name="description"
          content="Book professional outcall and home service massage for your hotel, villa, or private accommodation in Seminyak and nearby areas."
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
          text={<>Find an authentic Balinese massage without the hassle.<br />Let the stress of the week ease away as you enjoy a quiet, well-prepared session that fits naturally into your day.</>}
          feature1Title="Easy Booking via WhatsApp"
          feature1Text="Check available treatments and arrange your spa session easily through our WhatsApp."
          feature2Title="Spa Treatments at Your Place"
          feature2Text="Select your preferred treatment and book a spa session delivered to your location."
          primaryImage="/images/homepage/homepage-2.webp"
          secondaryImage="/images/homepage/homepage-4.webp"
        />
        <Funfact items={outcallHighlights} />
        <About
          subTitle="Spa & Beauty Service"
          title={<>Massage & Body Treatments</>}
          text={<>We offer a calm and comfortable environment where you can relax and select the treatment that fits your needs.<br />Our massage selection includes classic Balinese techniques as well as Japanese Shiatsu, available in various treatment options.</>}
          featuresLeft={[
            "Couple Massage — Relax side by side while sharing a massage experience together.",
            "Shiatsu — Release muscle tension using Japanese pressure-point techniques gently.",
          ]}
          featuresRight={[
            "Thai Massage — Improve flexibility and posture with assisted stretching and acupressure.",
            "Cream Bath — Revitalize your hair with a cream bath that supports softness and freshness.",
          ]}
          buttonText="Book a Treatment"
          buttonLink={bookingUrl}
          image="/images/homepage/homepage-3.webp"
        />
        <AboutReverse
          subTitle="Flexible"
          title={<>Spa Packages</>}
          text="Explore treatment and package options that can be customized to your preferences."
          featuresLeft={[
            "Individual treatment bookings",
            "Couple massage options",
            "Custom treatment combinations",
          ]}
          featuresRight={[
            "Hotel and villa appointments",
            "Daily service from 9am to 11pm",
            "Quick assistance through WhatsApp",
          ]}
          buttonText="Spa Package"
          buttonLink="#outcall-prices"
          image="/images/homepage/homepage-4.webp"
        />
        <div id="outcall-prices">
          <PackageSection
            subTitle="Prices"
            title="Professional Care with Thoughtful Details"
            firstServices={massageTreatments}
            secondServices={beautyTreatments}
            firstTabLabel="Massage"
            secondTabLabel="Beauty & Care"
          />
        </div>
        <HomeServiceInfo plain />
        <Faq
          imageTitle="Home Service Massage"
          subTitle="Frequently Asked Questions"
          title={<>Home Service Massage</>}
          image="/images/services/balinesemassage/balinesemassage-11.webp"
          items={faqItems}
        />
          <ReserveCta
            title="Reserve Your Home Service Massage"
            text="Professional Balinese massage and spa treatments are available throughout the day at your home, hotel, or villa, with flexible appointment times and responsive booking support."
            closingText="Individual and group bookings can be arranged according to therapist availability and the treatments selected."
            backgroundImage="/images/homepage/homepage-28.webp"
          />
        </main>
      </Layout>
    </>
  );
}
