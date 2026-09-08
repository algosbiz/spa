import React from 'react'

const GoogleGlyph = () => (
    <svg className="google-review-card__glyph" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2.1 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3z" />
        <path fill="#34A853" d="M24 46c6 0 11-2 14.5-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7C7.8 41 15.3 46 24 46z" />
        <path fill="#FBBC05" d="M11.7 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8l7.4-5.7z" />
        <path fill="#EA4335" d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 30 2 24 2 15.3 2 7.8 7 4.3 14.2l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1z" />
    </svg>
)

/**
 * Rating summary card. Renders live Google data when it is available and quietly
 * falls back to a flat 5-star card when the Places API is not configured.
 *
 * The card is intentionally a non-interactive preview. The visible Google label and
 * rating keep the source clear without making the summary card a navigation control.
 */
function compact(count) {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: count >= 10000 ? 0 : 1,
    }).format(count);
}

export default function GoogleReviewCard({
    rating = 5,
    ratingLabel = "5.0",
    reviewCount = null,
    reviewCountLabel = null,
    avatars = [],
    label = "Customer Review",
}) {
    const clampedRating = Math.min(5, Math.max(0, Number(rating) || 0));
    const fillWidth = `${(clampedRating / 5) * 100}%`;
    const visibleAvatars = avatars.filter(Boolean).slice(0, 4);

    // The total already appears above the row, so the badge counts the reviewers the
    // avatars do not show rather than repeating it.
    const remaining = typeof reviewCount === "number" ? reviewCount - visibleAvatars.length : 0;
    const badgeLabel = remaining > 0 ? `+${compact(remaining)}` : null;

    return (
        <div
            className="google-review-card"
            role="group"
            aria-label={`${ratingLabel} out of 5 stars${reviewCountLabel ? ` from ${reviewCountLabel} Google reviews` : ""}`}
        >
            {/* Hidden from screen readers — the card's own aria-label already states
                the score, so repeating it here would read it twice. */}
            <span className="google-review-card__rating" aria-hidden="true">
                <span className="google-review-card__stars">
                    <span className="google-review-card__stars-track">★★★★★</span>
                    <span className="google-review-card__stars-fill" style={{ width: fillWidth }}>★★★★★</span>
                </span>
                <strong className="google-review-card__score">{ratingLabel}</strong>
            </span>

            <span className="google-review-card__meta">
                {reviewCountLabel ? (
                    <>{label}<strong>{reviewCountLabel}</strong></>
                ) : (
                    <>Rated<strong>{ratingLabel} / 5</strong></>
                )}
            </span>

            {(visibleAvatars.length > 0 || badgeLabel) && (
                <span className="google-review-card__avatars">
                    {visibleAvatars.map((avatar, index) => (
                        <span className="google-review-card__avatar" key={avatar.id || index}>
                            {/* Sits behind the photo, so a photo Google refuses to serve
                                leaves an initial rather than a broken-image icon. */}
                            <span className="google-review-card__initial">{(avatar.name || "?").charAt(0)}</span>
                            {avatar.photo && (
                                <img
                                    src={avatar.photo}
                                    alt=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                                />
                            )}
                        </span>
                    ))}
                    {badgeLabel && (
                        <span className="google-review-card__badge">{badgeLabel}</span>
                    )}
                </span>
            )}

            <span className="google-review-card__source">
                <GoogleGlyph />
                Reviews on Google
            </span>
        </div>
    )
}
