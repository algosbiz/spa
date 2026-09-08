export function createTreatmentImageSet(folder, pricingCount) {
  const image = (number) =>
    `/images/services/${folder}/${folder}-${number}.webp`;
  const detailsStart = pricingCount + 4;

  return {
    hero: image(1),
    intro: [image(2), image(3)],
    pricing: Array.from(
      { length: pricingCount },
      (_, index) => image(index + 4)
    ),
    details: [
      image(detailsStart),
      image(detailsStart + 1),
      image(detailsStart + 2),
    ],
    faq: image(detailsStart + 3),
    cta: image(detailsStart + 4),
  };
}
