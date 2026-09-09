import React from "react";
import { formatPrice } from "@/lib/formatPrice";

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

export default function SessionOptions({
  sessions = defaultSessions,
  groups,
  subTitle = "Flexible Sessions",
  title = "Balinese Massage Session",
  text = "Pick a session that fits your schedule and how much time you want to spend relaxing. Longer sessions give our therapists more time to work across the body and focus on areas that need extra attention.",
  icon = "/images/spa/Balinese.svg",
  layout = "cards",
  className = "",
}) {
  const sessionGroups = groups && groups.length ? groups : [{ title: null, sessions }];

  return (
    <div className={`balinese-session-options${className ? ` ${className}` : ""}`}>
      <div className="session-options__header">
        <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
          <span className="session-options__logo-mark" aria-hidden="true">
            <img loading="lazy" decoding="async" src="/images/logo/SMBtitle.svg" alt="" />
          </span>
          {subTitle}
        </p>
        <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          {title}
        </h2>
        <p className="text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          {text}
        </p>
      </div>

      {layout === "compact" ? (
        <div className="row g-4 align-items-stretch justify-content-center">
          {sessions.map((session) => (
            <div className="col-lg-3 col-md-4 col-6" key={`${session.duration}-${session.price}`}>
              <div className="session-option-chip">
                <span className="session-option-chip__icon" aria-hidden="true">
                  <img loading="lazy" decoding="async" src={session.icon || icon} alt="" />
                </span>
                <span className="session-option-chip__name">{session.duration}</span>
                <span className="session-option-chip__price">{formatPrice(session.price)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        sessionGroups.map((group, groupIndex) => (
          <div className="session-option-group" key={group.title || `session-group-${groupIndex}`}>
            {group.title ? (
              <h3 className="session-option-group__title wow fadeInUp" data-wow-duration="1500ms">
                {group.title}
              </h3>
            ) : null}
            <div className="row g-4 align-items-stretch justify-content-center">
              {group.sessions.map((session) => (
                <div className="col-lg-4 col-md-6 service-block-two" key={`${session.duration}-${session.price}`}>
                  <div className="inner-box session-option-card">
                    <div className="session-option-shape" aria-hidden="true">
                      <img loading="lazy" decoding="async" src="/images/pricing/shape.png" alt="" />
                    </div>
                    <div className="image-box">
                      <div className="icon">
                        <img loading="lazy" decoding="async"
                          className="service-treatment-icon"
                          src={session.icon || icon}
                          alt=""
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <p className="session-option-price">{formatPrice(session.price)}</p>
                      <h3 className="title session-option-duration">{session.duration}</h3>
                      {session.details && session.details.length ? (
                        <ul className="session-option-list">
                          {session.details.map((detail) => <li key={detail}>{detail}</li>)}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
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

        .balinese-session-options .session-option-group + .session-option-group {
          margin-top: 50px;
        }

        .balinese-session-options .session-option-group__title {
          margin-bottom: 25px;
          color: var(--headings-color);
          font-family: var(--title-font);
          font-size: 26px;
          font-weight: 400;
          line-height: 36px;
          text-align: center;
        }

        .balinese-session-options .session-option-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          padding-bottom: 30px;
        }

        .balinese-session-options .session-option-card .image-box {
          display: flex;
          justify-content: center;
        }

        .balinese-session-options .session-option-card .image-box .icon {
          position: static;
        }

        .balinese-session-options .session-option-card .content {
          position: relative;
          z-index: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          max-width: none;
          margin-top: 25px;
          text-align: center;
        }

        .balinese-session-options .session-option-shape {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .balinese-session-options .session-option-shape img {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
        }

        .balinese-session-options .session-option-price {
          margin: 0 0 15px;
          padding-bottom: 15px;
          color: var(--headings-color);
          font-family: var(--title-font);
          font-size: 38px;
          font-weight: 300;
          line-height: 52px;
        }

        .balinese-session-options .session-option-card .content .session-option-duration {
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 500;
          line-height: 28px;
        }

        .balinese-session-options .session-option-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .balinese-session-options .session-option-list li {
          margin-top: 10px;
          color: var(--headings-color);
        }

        .balinese-session-options .session-option-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          height: 100%;
          padding: 26px 18px;
          border: 1px solid rgba(var(--theme-color1-rgb), 0.35);
          border-radius: 8px;
          background-color: #fff;
          text-align: center;
        }

        .balinese-session-options .session-option-chip__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          margin-bottom: 6px;
        }

        .balinese-session-options .session-option-chip__icon img {
          display: block;
          width: 100%;
          height: auto;
        }

        .balinese-session-options .session-option-chip__name {
          color: var(--headings-color);
          font-size: 16px;
          font-weight: 500;
          line-height: 26px;
        }

        .balinese-session-options .session-option-chip__price {
          color: var(--headings-color);
          font-family: var(--title-font);
          font-size: 24px;
          font-weight: 300;
          line-height: 34px;
        }

        @media (max-width: 767px) {
          .balinese-session-options .session-option-price {
            font-size: 28px;
            line-height: 38px;
          }

          .balinese-session-options .session-option-group__title {
            font-size: 22px;
            line-height: 32px;
          }
        }

        @media (max-width: 575px) {
          .balinese-session-options .session-options__header {
            margin-bottom: 35px;
          }

          .balinese-session-options .session-option-card {
            padding: 20px;
          }

          .balinese-session-options .session-option-shape {
            right: -20px;
          }
        }
      `}</style>
    </div>
  );
}
