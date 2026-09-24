import React, { useMemo, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

const catalogCategories = [
  { id: "massage", label: "Massage" },
  { id: "beauty", label: "Beauty" },
  { id: "couple", label: "For Couple" },
  { id: "couple-package", label: "Couple Package" },
];

function TreatmentItem({ item, itemKey, isOpen, onToggle }) {
  const panelId = `treatment-pricing-${itemKey}`;
  const isBookingLink = item.href === "/contact";
  // Split off the last word so it can be glued to the arrow below.
  const detailsLabel = (() => {
      const text = isBookingLink ? `Book ${item.name}` : `View ${item.name} details`;
      const cut = text.lastIndexOf(' ');
      return cut === -1
          ? { head: '', tail: text }
          : { head: text.slice(0, cut + 1), tail: text.slice(cut + 1) };
  })();

  return (
    <article className={`treatment-catalog__item${isOpen ? " is-open" : ""}`}>
      {item.href ? (
        <Link prefetch={false} href={item.href} className="treatment-catalog__image" aria-label={`View ${item.name}`}>
          <img loading="lazy" decoding="async" src={item.image} alt={item.name} />
        </Link>
      ) : (
        <div className="treatment-catalog__image">
          <img loading="lazy" decoding="async" src={item.image} alt={item.name} />
        </div>
      )}
      <div className="treatment-catalog__content">
        <div className="treatment-catalog__heading">
          <h3 className="title">
            {item.href ? <Link prefetch={false} href={item.href}>{item.name}</Link> : item.name}
          </h3>
          <button
            type="button"
            className="treatment-catalog__toggle"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={`${isOpen ? "Hide" : "Show"} pricing for ${item.name}`}
          >
            <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
          </button>
        </div>
        <p className="treatment-catalog__description">{item.desc}</p>
        <div
          id={panelId}
          className="treatment-catalog__dropdown"
          aria-hidden={!isOpen}
        >
          <div className="treatment-catalog__dropdown-inner">
            {item.benefits?.length ? (
              <div className="treatment-catalog__benefits">
                <p className="treatment-catalog__benefits-title">Benefits:</p>
                <ul>
                  {item.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="treatment-catalog__prices">
              {item.options.map((option) => (
                <div className="treatment-catalog__option" key={`${option.label}-${option.price}`}>
                  <div className="treatment-catalog__option-main">
                    <strong>{option.label}</strong>
                    <span>{formatPrice(option.price)}</span>
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
            {item.href ? (
              <Link prefetch={false}
                href={item.href}
                className="treatment-catalog__details-link"
                // The panel is aria-hidden while collapsed, so its link must leave
                // the tab order too -- otherwise keyboard users land on a control
                // screen readers have been told does not exist.
                tabIndex={isOpen ? undefined : -1}
              >
                {/* The arrow glyph lives in the Private Use Area, and Chrome
                    treats PUA characters as breakable on both sides -- so even
                    with no whitespace before it the arrow dropped onto a line of
                    its own while the label still fitted above. Binding it to the
                    final word keeps the two together and lets the rest wrap. */}
                {detailsLabel.head}
                <span className="treatment-catalog__details-tail">
                  {detailsLabel.tail}
                  <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                </span>
              </Link>
            ) : null}
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
  const [activeCategory, setActiveCategory] = useState("massage");
  const filteredTreatments = useMemo(
    () => treatments
      .filter((item) =>
        (item.categories || [item.category]).includes(activeCategory)
      )
      .sort((a, b) => a.name.localeCompare(b.name)),
    [activeCategory, treatments]
  );
  const treatmentColumns = useMemo(() => {
    const splitIndex = Math.ceil(filteredTreatments.length / 2);

    return [
      filteredTreatments.slice(0, splitIndex),
      filteredTreatments.slice(splitIndex),
    ];
  }, [filteredTreatments]);

  return (
    <section className="package-section treatment-catalog section__decoration-top section__decoration-bottom bg-sub pt-170 pb-170">
      <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
        <img loading="lazy" decoding="async"
          className="sway_Y__animationY"
          src="/images/shape/banner-five-shape1.png"
          alt=""
        />
      </div>
      <div className="shape2">
        <img loading="lazy" decoding="async" className="sway__animation" src="/images/shape/package-shape-right.png" alt="" />
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

        <div className="treatment-catalog__fee" aria-label="Home service fee">
          <strong>Home Service Fee</strong>
          <span>Extra 75K/Therapist</span>
        </div>

        <div className="treatment-catalog__categories" aria-label="Treatment categories">
          {catalogCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                type="button"
                key={category.id}
                className={`treatment-catalog__category${isActive ? " is-active" : ""}`}
                aria-pressed={isActive}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenTreatment(null);
                }}
              >
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="row g-5 align-items-start">
          {treatmentColumns.map((column, columnIndex) => (
            <div className="col-lg-6 treatment-catalog__column" key={`column-${columnIndex}`}>
              {column.map((item) => {
                const itemKey = item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

                return (
                  <div className="package-block" key={itemKey}>
                    <TreatmentItem
                      item={item}
                      itemKey={itemKey}
                      isOpen={openTreatment === itemKey}
                      onToggle={() =>
                        setOpenTreatment((current) => (current === itemKey ? null : itemKey))
                      }
                    />
                  </div>
                );
              })}
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

        .treatment-catalog__categories {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 34px 0 60px;
        }

        .treatment-catalog__category {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 12px 32px;
          border: 1px solid var(--theme-color1);
          border-radius: 999px;
          background: transparent;
          color: var(--theme-color1);
          font-family: var(--title-font);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.2;
          transition: color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
        }

        .treatment-catalog__category:hover,
        .treatment-catalog__category:focus-visible,
        .treatment-catalog__category.is-active {
          color: #fff;
          background: var(--theme-color1);
          outline: none;
        }

        .treatment-catalog__item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          height: 100%;
          padding: 4px 0 28px;
          border-bottom: 1px solid rgba(95, 90, 84, 0.14);
        }

        .treatment-catalog__column .package-block:last-child .treatment-catalog__item {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .treatment-catalog__column {
          display: flex;
          flex-direction: column;
          gap: 48px;
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
          box-sizing: border-box;
          border: 2px solid var(--theme-color1);
          border-radius: 50%;
          background: var(--theme-color-white);
          color: var(--theme-color1);
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1;
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .treatment-catalog__toggle i {
          transition: transform 0.25s ease;
        }

        .treatment-catalog__item.is-open .treatment-catalog__toggle i {
          transform: rotate(180deg);
        }

        /* Stays an outline in every state -- open and hover only deepen the
           gold, so the control never turns into a filled disc. */
        .treatment-catalog__toggle:hover,
        .treatment-catalog__toggle:focus-visible,
        .treatment-catalog__item.is-open .treatment-catalog__toggle {
          color: #8a6f1c;
          border-color: #8a6f1c;
          background: var(--theme-color-white);
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
          /* The description already clears the toggle with a 48px right margin;
             the price rows did not, so they ran 48px further right than every
             other line in the card. Same gutter here puts the durations, the
             prices and the details link on one right edge with the text. */
          margin-right: 48px;
        }

        .treatment-catalog__benefits {
          margin-top: 16px;
        }

        .treatment-catalog__benefits-title {
          margin: 0 0 6px;
          color: var(--title-color);
          font-family: var(--text-font);
          font-size: 15px;
          font-weight: 700;
        }

        .treatment-catalog__benefits ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .treatment-catalog__benefits li {
          position: relative;
          padding-left: 14px;
          color: #5f5a54;
          font-size: 15px;
          line-height: 1.65;
        }

        /* Half the 1.65 line height, less half the dot: centred on the first
           line at either font size. */
        .treatment-catalog__benefits li::before {
          content: "";
          position: absolute;
          top: calc(0.825em - 2px);
          left: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--theme-color1);
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

        .treatment-catalog__option-main strong,
        .treatment-catalog__option-main span {
          font-family: var(--text-font);
          font-size: 16px;
          font-weight: 700;
        }

        .treatment-catalog__option-main strong {
          color: var(--title-color);
        }

        .treatment-catalog__option-main span {
          flex-shrink: 0;
          color: var(--theme-color1);
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

        /* inline-block, not inline-flex: as a flex container the label and the
           arrow are two items, so a label that wraps leaves the arrow centred
           against the whole block -- stranded at the far right, level with the
           gap between the lines. Six of the twenty labels already wrapped at
           390px. Laid out as inline content the arrow simply follows the last
           word. inline-block rather than inline so margin-top still applies. */
        .treatment-catalog__details-link {
          display: inline-block;
          margin-top: 16px;
          color: var(--title-color);
          font-weight: 600;
        }

        .treatment-catalog__details-link i {
          margin-left: 9px;
          vertical-align: middle;
        }

        .treatment-catalog__details-tail {
          white-space: nowrap;
        }

        @media (max-width: 767px) {
          .treatment-catalog__fee {
            flex-direction: column;
            gap: 6px;
          }

          .treatment-catalog__categories {
            gap: 10px;
            margin: 28px 0 48px;
          }

          .treatment-catalog__category {
            min-height: 48px;
            padding: 10px 20px;
            font-size: 15px;
          }

          .treatment-catalog__item {
            gap: 14px;
          }

          /* 76px of a 390px screen plus the gap is a fifth of the row, spent
             on a photo too small to tell one treatment from another, while
             the name and the price table it opens share what is left. The
             menu reads better with the row given over to the words. */
          .treatment-catalog__image {
            display: none;
          }

          .treatment-catalog__heading .title {
            font-size: 20px;
          }

          .treatment-catalog__description,
          .treatment-catalog__benefits li {
            margin-right: 0;
            font-size: 14px;
          }

          .treatment-catalog__dropdown-inner {
            margin-right: 0;
          }

          /* The row now starts at the container gutter on both sides, so the
             content column needs no inset of its own -- one used to sit here
             to keep the toggle and the price figures off the card edge while
             the thumbnail held the left. */
          .treatment-catalog__content {
            padding-right: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .treatment-catalog__dropdown,
          .treatment-catalog__image img,
          .treatment-catalog__category,
          .treatment-catalog__toggle,
          .treatment-catalog__toggle i {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
