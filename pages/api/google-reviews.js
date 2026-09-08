import { getGoogleReviews, rotateReviews } from "@/lib/googleReviews";

let cached = null;
let cachedAt = 0;
const CACHE_TTL = 24 * 60 * 60 * 1000;

export default async function handler(req, res) {
    try {
        res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=3600");
        if (!cached || Date.now() - cachedAt > CACHE_TTL) {
            cached = await getGoogleReviews();
            cachedAt = Date.now();
        }

        const seed = typeof req.query.key === "string" ? req.query.key : "treatment";
        res.status(200).json({
            ...cached,
            reviews: rotateReviews(cached.reviews, seed),
        });
    } catch (error) {
        console.error("Google reviews API route failed:", error);
        res.status(200).json({
            isLive: false,
            reviews: [],
        });
    }
}
