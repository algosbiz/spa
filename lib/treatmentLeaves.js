const treatmentLeafPairs = [
  ["/images/shape/leaf/2a.png", "/images/shape/leaf/3a.png"],
  ["/images/shape/leaf/4a.png", "/images/shape/leaf/5a.png"],
  ["/images/shape/leaf/6a.png", "/images/shape/leaf/7a.png"],
  ["/images/shape/leaf/8a.png", "/images/shape/leaf/9a.png"],
  ["/images/shape/leaf/10a.png", "/images/shape/leaf/11a.png"],
];

const sectionTypeByFallback = {
  "/images/shape/about-two-left.png": "intro",
  "/images/shape/about-two-right.png": "intro",
  "/images/shape/about-left-shape.png": "about",
  "/images/shape/about-right-shape.png": "about",
  "/images/shape/banner-six-shape.png": "reverse",
  "/images/shape/mirror-left-shape.png": "reverse",
};

const treatmentImagePattern =
  /^\/images\/services\/([^/]+)\/[^/]+-(\d+)\.webp$/i;
const homepageImagePattern = /^\/images\/homepage\/homepage-(\d+)\.webp$/i;

function hashTreatmentName(name) {
  return [...name].reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0,
    0
  );
}

function getTreatmentImageData(imageSrc) {
  if (typeof imageSrc !== "string") return null;

  const match = imageSrc.match(treatmentImagePattern);
  if (match) {
    return {
      treatmentName: match[1],
      imageNumber: Number(match[2]),
    };
  }

  const homepageMatch = imageSrc.match(homepageImagePattern);
  if (homepageMatch) {
    return {
      treatmentName: "homepage",
      imageNumber: Number(homepageMatch[1]),
    };
  }

  return null;
}

function getSectionSlot(sectionType, imageNumber) {
  if (sectionType === "intro") return 0;

  const firstVariant = imageNumber % 4 < 2;
  if (sectionType === "about") return firstVariant ? 1 : 2;
  if (sectionType === "reverse") return firstVariant ? 3 : 4;

  return null;
}

function getTreatmentLeafPair(imageSrc, fallbackShape) {
  const imageData = getTreatmentImageData(imageSrc);
  const sectionType = sectionTypeByFallback[fallbackShape];
  if (!imageData || !sectionType) return null;

  const sectionSlot = getSectionSlot(sectionType, imageData.imageNumber);
  const pageRotation =
    hashTreatmentName(imageData.treatmentName) % treatmentLeafPairs.length;

  return treatmentLeafPairs[
    (sectionSlot + pageRotation) % treatmentLeafPairs.length
  ];
}

export function getTreatmentLeafShape(imageSrc, fallbackShape) {
  return getTreatmentLeafPair(imageSrc, fallbackShape)?.[0] || fallbackShape;
}

export function getTreatmentRightLeafShape(imageSrc, fallbackShape) {
  return getTreatmentLeafPair(imageSrc, fallbackShape)?.[1] || fallbackShape;
}

export function isTreatmentLeafShape(imageSrc) {
  return typeof imageSrc === "string" && imageSrc.startsWith("/images/shape/leaf/");
}
