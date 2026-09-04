import React from "react";
import Link from "next/link";

const defaultSessions = [
  {
    duration: "1 Hour",
    price: "IDR 159K",
    details: [
      "Full-body relaxation",
      "Everyday muscle tension",
      "Guests with limited time",
    ],
  },
  {
    duration: "1.5 Hour",
    price: "IDR 239K",
    details: [
      "More complete full-body care",
      "Extra focus on tense areas",
      "Guests wanting deeper relaxation",
    ],
  },
  {
    duration: "2 Hour",
    price: "IDR 330K",
    details: [
      "Extended full-body treatment",
      "More time for problem areas",
      "Guests seeking longer relaxation",
    ],
  },
];

const ArrowIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M25.8282 12.5835L19.9192 6.67445C19.7069 6.42659 19.3339 6.3977 19.0861 6.61001C18.8382 6.82227 18.8093 7.19531 19.0216 7.44316L23.9846 12.4121H0.59088C0.264566 12.4121 0 12.6766 0 13.003C0 13.3294 0.264566 13.5939 0.59088 13.5939H23.9846L19.0861 18.4924C18.8382 18.7047 18.8093 19.0777 19.0216 19.3256C19.2339 19.5734 19.6069 19.6023 19.8548 19.39L25.8282 13.4166C26.0573 13.1862 26.0573 12.8139 25.8282 12.5835Z"
      fill="currentColor"
    />
  </svg>
);

export default function SessionOptions({
  images = [],
  sessions = defaultSessions,
  bookingUrl = "https://wa.me/6287863175144",
}) {
  return (
    <div className="balinese-session-options">
      <div className="session-options__header">
        <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
          <span className="session-options__logo-mark" aria-hidden="true">
            <img src="/images/logo/SMBtitle.svg" alt="" />
          </span>
          Flexible Sessions
        </p>
        <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          Balinese Massage Session
        </h2>
        <p className="text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          Pick a session that fits your schedule and how much time you want to spend relaxing. Longer sessions give our therapists more time to work across the body and focus on areas that need extra attention.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {sessions.map((session, index) => (
          <div className="col-lg-4 col-md-6 service-block-two" key={`${session.duration}-${session.price}`}>
            <div className="inner-box session-option-card">
              <div className="image-box">
                <div className="image">
                  <img
                    src={images[index] || "/images/services/balinesemassage/balinesemassage-4.webp"}
                    alt={`${session.duration} Balinese Massage`}
                  />
                </div>
                <div className="icon">
                  <img
                    className="service-treatment-icon"
                    src="/images/spa/Balinese.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="content">
                <p className="session-option-price">{session.price}</p>
                <h3 className="title session-option-duration">{session.duration}</h3>
                <ul className="session-option-list">
                  {session.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div className="shape">
                <img src="/images/service/shape.png" alt="" aria-hidden="true" />
              </div>
              <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arry-icon"
                aria-label={`Book the ${session.duration} Balinese Massage session`}
              >
                <ArrowIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .balinese-session-options {
          margin: 0 0 70px;
        }

        .balinese-session-options .session-options__header {
          max-width: 820px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .balinese-session-options .session-options__header .sub-title {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-bottom: 8px;
        }

        .balinese-session-options .session-options__header .title {
          margin-bottom: 10px;
        }

        .balinese-session-options .session-options__header .text {
          max-width: 720px;
          margin: 0 auto;
        }

        .balinese-session-options .session-options__logo-mark {
          display: inline-block;
          width: 25px;
          height: 26px;
          margin-right: 10px;
          overflow: hidden;
          vertical-align: middle;
        }

        .balinese-session-options .session-options__logo-mark img {
          display: block;
          width: 130px;
          max-width: none;
          height: auto;
        }

        .balinese-session-options .session-option-card {
          display: flex;
          flex-direction: column;
        }

        .balinese-session-options .session-option-card .image-box .image {
          aspect-ratio: 1.2;
        }

        .balinese-session-options .session-option-card .image-box .image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .balinese-session-options .session-option-card .content {
          flex: 1;
        }

        .balinese-session-options .session-option-price {
          margin: 0 0 4px;
          color: var(--theme-color1);
          font-family: var(--title-font);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.25;
        }

        .balinese-session-options .session-option-duration {
          margin-bottom: 14px;
        }

        .balinese-session-options .session-option-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .balinese-session-options .session-option-list li {
          margin-top: 8px;
          color: var(--text-color);
          line-height: 1.55;
        }

        @media (max-width: 575px) {
          .balinese-session-options .session-options__header {
            margin-bottom: 35px;
          }

          .balinese-session-options .session-option-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
