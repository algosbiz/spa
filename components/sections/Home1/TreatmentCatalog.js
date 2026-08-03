import React, { useMemo, useState } from "react";
import Link from "next/link";

function TreatmentItem({ item, isOpen, onToggle }) {
  const panelId = `treatment-pricing-${item.href.replace(/^\//, "")}`;

  return (
    <article className={`treatment-catalog__item${isOpen ? " is-open" : ""}`}>
      <Link href={item.href} className="treatment-catalog__image" aria-label={`View ${item.name}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <div className="treatment-catalog__content">
        <div className="treatment-catalog__heading">
          <h3 className="title">
            <Link href={item.href}>{item.name}</Link>
          </h3>
          <button
            type="button"
            className="treatment-catalog__toggle"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={`${isOpen ? "Hide" : "Show"} pricing for ${item.name}`}
          >
            <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
          </button>
        </div>
        <p className="treatment-catalog__description">{item.desc}</p>
        <div
          id={panelId}
          className="treatment-catalog__dropdown"
          aria-hidden={!isOpen}
        >
          <div className="treatment-catalog__dropdown-inner">
            <div className="treatment-catalog__prices">
              {item.options.map((option) => (
                <div className="treatment-catalog__option" key={`${option.label}-${option.price}`}>
                  <div className="treatment-catalog__option-main">
                    <strong>{option.label}</strong>
                    <span>{option.price}</span>
                  </div>
                  {option.details?.length ? (
                    <ul>
                      {option.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            <Link href={item.href} className="treatment-catalog__details-link">
              View {item.name} details
              <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TreatmentCatalog({
  subTitle = "Signature Collection",
  title = "Find Your Perfect Spa Experience",
  treatments = [],
}) {
  const [openTreatment, setOpenTreatment] = useState(null);
  const sortedTreatments = useMemo(
    () => [...treatments].sort((a, b) => a.name.localeCompare(b.name)),
    [treatments]
  );

  return (
    <section className="package-section treatment-catalog section__decoration-top section__decoration-bottom bg-sub pt-170 pb-170">
      <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
        <img
          className="sway_Y__animationY"
          src="/images/shape/banner-five-shape1.png"
          alt=""
        />
      </div>
      <div className="shape2">
        <img className="sway__animation" src="/images/shape/package-shape-right.png" alt="" />
      </div>
      <div className="container">
        <div className="section-header mb-60 center">
          <h4 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            {subTitle}
          </h4>
          <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            {title}
          </h2>
        </div>

        <div className="treatment-catalog__fee mb-60" aria-label="Home service fee">
          <strong>Home Service Fee</strong>
          <span>Extra 75K/Therapist</span>
        </div>

        <div className="row g-5 align-items-start">
          {sortedTreatments.map((item) => (
            <div className="col-lg-6 package-block" key={item.href}>
              <TreatmentItem
                item={item}
                isOpen={openTreatment === item.href}
                onToggle={() =>
                  setOpenTreatment((current) => (current === item.href ? null : item.href))
                }
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .treatment-catalog__fee {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          color: var(--title-color);
          font-family: var(--title-font);
          font-size: 18px;
        }

        .treatment-catalog__item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          height: 100%;
          padding: 4px 0 28px;
          border-bottom: 1px solid rgba(95, 90, 84, 0.14);
        }

        .treatment-catalog__image {
          width: 96px;
          height: 92px;
          flex: 0 0 96px;
          overflow: hidden;
          border-radius: 12px;
          background: #ddd;
        }

        .treatment-catalog__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .treatment-catalog__image:hover img {
          transform: scale(1.08);
        }

        .treatment-catalog__content {
          min-width: 0;
          width: 100%;
        }

        .treatment-catalog__heading {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .treatment-catalog__heading .title {
          flex: 1;
          margin: 0;
          font-size: 25px;
          line-height: 1.25;
        }

        .treatment-catalog__heading .title a:hover,
        .treatment-catalog__details-link:hover {
          color: var(--theme-color1);
        }

        .treatment-catalog__toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: var(--title-color);
          font-family: Arial, sans-serif;
          font-size: 28px;
          line-height: 1;
          transition: color 0.25s ease, background-color 0.25s ease;
        }

        .treatment-catalog__toggle:hover,
        .treatment-catalog__toggle:focus-visible,
        .treatment-catalog__item.is-open .treatment-catalog__toggle {
          color: #fff;
          background: var(--theme-color1);
          outline: none;
        }

        .treatment-catalog__description {
          margin: 10px 48px 0 0;
          color: #5f5a54;
          font-size: 15px;
          line-height: 1.65;
        }

        .treatment-catalog__dropdown {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.4s ease, opacity 0.3s ease;
        }

        .treatment-catalog__item.is-open .treatment-catalog__dropdown {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .treatment-catalog__dropdown-inner {
          min-height: 0;
          overflow: hidden;
        }

        .treatment-catalog__prices {
          margin-top: 18px;
          border-top: 1px solid rgba(95, 90, 84, 0.18);
        }

        .treatment-catalog__option {
          padding: 13px 0;
          border-bottom: 1px solid rgba(95, 90, 84, 0.14);
        }

        .treatment-catalog__option-main {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 20px;
        }

        .treatment-catalog__option-main strong {
          color: var(--title-color);
          font-size: 16px;
        }

        .treatment-catalog__option-main span {
          flex-shrink: 0;
          color: var(--theme-color1);
          font-family: var(--title-font);
          font-size: 18px;
          font-weight: 600;
        }

        .treatment-catalog__option ul {
          display: flex;
          flex-wrap: wrap;
          gap: 5px 18px;
          margin: 8px 0 0;
          padding: 0;
          list-style: none;
        }

        .treatment-catalog__option li {
          position: relative;
          padding-left: 13px;
          color: #6a6f73;
          font-size: 13px;
          line-height: 1.5;
        }

        .treatment-catalog__option li::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--theme-color1);
        }

        .treatment-catalog__details-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 16px;
          color: var(--title-color);
          font-weight: 600;
        }

        @media (max-width: 767px) {
          .treatment-catalog__fee {
            flex-direction: column;
            gap: 6px;
          }

          .treatment-catalog__item {
            gap: 14px;
          }

          .treatment-catalog__image {
            width: 76px;
            height: 74px;
            flex-basis: 76px;
          }

          .treatment-catalog__heading .title {
            font-size: 20px;
          }

          .treatment-catalog__description {
            margin-right: 0;
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .treatment-catalog__dropdown,
          .treatment-catalog__image img,
          .treatment-catalog__toggle {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

