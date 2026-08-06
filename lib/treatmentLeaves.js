const leftTreatmentLeafShapes = [
  "/images/shape/leaf/2a.png",
  "/images/shape/leaf/3a.png",
  "/images/shape/leaf/4a.png",
  "/images/shape/leaf/5a.png",
  "/images/shape/leaf/6a.png",
  "/images/shape/leaf/7a.png",
  "/images/shape/leaf/8a.png",
  "/images/shape/leaf/9a.png",
  "/images/shape/leaf/10a.png",
  "/images/shape/leaf/11a.png",
];

const rightTreatmentLeafShape = "/images/shape/leaf/1a.png";
const palmLeafShapes = new Set([
  "/images/shape/banner-six-shape.png",
  "/images/shape/about-right-shape.png",
  "/images/shape/leaf/9a.png",
]);

const precedingLeftFallbacks = {
  "/images/shape/about-right-shape.png":
    "/images/shape/banner-six-shape.png",
};

const treatmentImagePattern =
  /^\/images\/services\/([^/]+)\/[^/]+-(\d+)\.webp$/i;

function hashTreatmentName(name) {
  return [...name].reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0,
    0
  );
}

function getTreatmentShapeSeed(imageSrc) {
  if (typeof imageSrc !== "string") return null;

  const match = imageSrc.match(treatmentImagePattern);
  if (!match) return null;

  const [, treatmentName, imageNumber] = match;
  return hashTreatmentName(treatmentName) + Number(imageNumber) - 1;
}

function resolveLeftShape(shapeSeed, fallbackShape) {
  if (shapeSeed % 3 === 0) return fallbackShape;

  return leftTreatmentLeafShapes[
    shapeSeed % leftTreatmentLeafShapes.length
  ];
}

export function getTreatmentLeafShape(imageSrc, fallbackShape) {
  const shapeSeed = getTreatmentShapeSeed(imageSrc);
  if (shapeSeed === null) return fallbackShape;

  return resolveLeftShape(shapeSeed, fallbackShape);
}

export function getTreatmentRightLeafShape(imageSrc, fallbackShape) {
  const shapeSeed = getTreatmentShapeSeed(imageSrc);
  if (shapeSeed === null) return fallbackShape;

  const precedingLeftFallback = precedingLeftFallbacks[fallbackShape];
  if (precedingLeftFallback) {
    const precedingLeftShape = resolveLeftShape(
      shapeSeed - 1,
      precedingLeftFallback
    );

    if (
      palmLeafShapes.has(precedingLeftShape) &&
      palmLeafShapes.has(fallbackShape)
    ) {
      return rightTreatmentLeafShape;
    }
  }

  if (shapeSeed % 4 !== 0) return fallbackShape;

  return rightTreatmentLeafShape;
}
