export function formatPrice(price) {
  return typeof price === "string" ? price.replace(/^IDR\s*/i, "") : price;
}
