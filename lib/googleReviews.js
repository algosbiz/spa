// Server-side helper for pulling live Google reviews via the Places API (New).
//
// Env vars (see .env.example):
//   GOOGLE_PLACES_API_KEY  server-only key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        place id of the business — run `node scripts/find-google-place-id.mjs`
//
// Notes:
//   - Google returns at most 5 reviews per place. That is a hard API limit.
//   - Google's terms allow caching Places data for 30 days at most, so callers must
//     re-fetch well inside that window. The homepage uses ISR with revalidate: 86400 (24h).
//   - Attribution is mandatory: author name, author photo and a link back to Google
//     must stay visible wherever a review is shown.

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

const FIELD_MASK = [
    "id",
    "displayName",
    "rating",
    "userRatingCount",
    "googleMapsUri",
    "reviews",
].join(",");

// Shown when the API key or place id is missing, or when the request fails, so the
// site never renders an empty review card.
export const fallbackGoogleReviews = {
    isLive: false,
    rating: 5,
    ratingLabel: "5.0",
    userRatingCount: null,
    reviewCountLabel: null,
    reviewCountCompact: null,
    reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Spa+Bali+Moon+Seminyak",
    reviews: [],
};

export function formatReviewCount(count) {
    if (typeof count !== "number" || !Number.isFinite(count)) return null;
    return new Intl.NumberFormat("en-US").format(count);
}

export function formatReviewCountCompact(count) {
    if (typeof count !== "number" || !Number.isFinite(count)) return null;
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: count >= 10000 ? 0 : 1,
    }).format(count);
}

// Author photo URLs already carry their crop options after an "=" — for example
// ".../ACg8ocJa2iB5=s128-c0x00000000-cc-rp-mo". Appending a second "=s120-c" makes
// Google answer 400, so swap the existing suffix instead of adding to it.
function sizePhoto(uri) {
    if (!uri) return null;
    return `${uri.split("=")[0]}=s120-c`;
}

function normaliseReview(review) {
    const author = review.authorAttribution || {};
    const body = (review.originalText && review.originalText.text) || (review.text && review.text.text) || "";

    return {
        id: review.name || author.displayName || body.slice(0, 40),
        name: author.displayName || "Google user",
        photo: sizePhoto(author.photoUri),
        authorUrl: author.uri || null,
        text: body,
        rating: typeof review.rating === "number" ? review.rating : 5,
        relativeTime: review.relativePublishTimeDescription || null,
        publishTime: review.publishTime || null,
        url: review.googleMapsUri || null,
    };
}

/**
 * Fetches live rating + reviews for the configured place.
 * Always resolves — on any failure it returns `fallbackGoogleReviews` so a build or
 * revalidate never breaks because Google was slow or the quota ran out.
 */
export async function getGoogleReviews({
    languageCode = "en",
    minRating = 4,
    minLength = 40,
    limit = 5,
} = {}) {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        return fallbackGoogleReviews;
    }

    try {
        const url = `${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}?languageCode=${encodeURIComponent(languageCode)}`;
        const response = await fetch(url, {
            headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": FIELD_MASK,
            },
        });

        if (!response.ok) {
            console.error(`Google Places request failed (${response.status}):`, await response.text());
            return fallbackGoogleReviews;
        }

        const place = await response.json();
        const rating = typeof place.rating === "number" ? place.rating : fallbackGoogleReviews.rating;
        const userRatingCount = typeof place.userRatingCount === "number" ? place.userRatingCount : null;

        const reviews = (place.reviews || [])
            .map(normaliseReview)
            .filter((review) => review.rating >= minRating && review.text.length >= minLength)
            .slice(0, limit);

        return {
            isLive: true,
            rating,
            ratingLabel: rating.toFixed(1),
            userRatingCount,
            reviewCountLabel: formatReviewCount(userRatingCount),
            reviewCountCompact: formatReviewCountCompact(userRatingCount),
            reviewsUrl: place.googleMapsUri || fallbackGoogleReviews.reviewsUrl,
            reviews,
        };
    } catch (error) {
        console.error("Google Places request threw:", error);
        return fallbackGoogleReviews;
    }
}
