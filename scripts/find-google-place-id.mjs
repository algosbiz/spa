// One-off helper to look up the GOOGLE_PLACE_ID for .env.local.
//
// Usage — put GOOGLE_PLACES_API_KEY in .env.local first, then:
//   node scripts/find-google-place-id.mjs "Spa Bali Moon Seminyak"
//
// Prints every match with its place id and address — copy the id of the right one
// into GOOGLE_PLACE_ID. You only need to run this once.

import { createRequire } from "node:module";

// @next/env is CommonJS-only, so pull it through require. It reads .env.local the
// same way `next build` does, which keeps the key out of your shell history.
createRequire(import.meta.url)("@next/env").loadEnvConfig(process.cwd(), true, { info: () => {}, error: console.error });

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const query = process.argv.slice(2).join(" ").trim();

if (!apiKey) {
    console.error("Missing GOOGLE_PLACES_API_KEY — add it to .env.local, then run:");
    console.error('  node scripts/find-google-place-id.mjs "Spa Bali Moon Seminyak"');
    process.exit(1);
}

if (!query) {
    console.error('Missing search query, e.g. node scripts/find-google-place-id.mjs "Spa Bali Moon Seminyak"');
    process.exit(1);
}

const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount",
    },
    body: JSON.stringify({ textQuery: query }),
});

if (!response.ok) {
    console.error(`Request failed (${response.status}):`, await response.text());
    process.exit(1);
}

const { places = [] } = await response.json();

if (places.length === 0) {
    console.log(`No places matched "${query}". Try including the city or street name.`);
    process.exit(0);
}

for (const place of places) {
    const name = place.displayName?.text || "(unnamed)";
    const rating = place.rating ? `${place.rating}★ (${place.userRatingCount ?? 0} reviews)` : "no rating yet";
    console.log(`\n${name} — ${rating}`);
    console.log(`  ${place.formattedAddress || ""}`);
    console.log(`  GOOGLE_PLACE_ID=${place.id}`);
}

console.log("");
