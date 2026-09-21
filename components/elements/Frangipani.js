import { useId } from "react";

// A frangipani (plumeria) blossom: five asymmetric petals pinwheeled around a
// gold throat. Inline SVG rather than a PNG because the hero is the LCP screen
// -- this costs no request, stays crisp at any size, and takes its colour from
// the brand palette instead of whatever the stock cut-out happened to be.
//
// The petal is drawn with its base at the origin and its tip at y = -105, and
// the bulk of it sits to the right of that axis. That asymmetry is what makes
// five copies at 72deg read as a pinwheel rather than a daisy, so keep it if
// the shape is ever redrawn.
const PETAL =
    "M18 6C34 -12 52 -28 56 -54C60 -80 44 -103 16 -105C-12 -107 -32 -90 -31 -64C-30 -40 -16 -14 -12 6Z";

const PETAL_STROKE = "rgba(150, 118, 44, 0.28)";

// useId returns ":r1:"-style values. Colons are legal in an id but make the
// value unusable anywhere a CSS selector is parsed, so they come out here.
export const useLocalId = () => useId().replace(/:/g, "");

export function FrangipaniPetal({ className, style }) {
    const id = useLocalId();
    return (
        <svg
            className={className}
            style={style}
            viewBox="-36 -112 96 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id={`${id}-p`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-106">
                    <stop offset="0%" stopColor="#D9A52C" />
                    <stop offset="16%" stopColor="#F3D488" />
                    <stop offset="42%" stopColor="#FCF2DE" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
            </defs>
            <path d={PETAL} fill={`url(#${id}-p)`} stroke={PETAL_STROKE} strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
    );
}

// The blossom and its gradients as <defs>, for callers that want several
// copies inside one SVG -- `<use href="#{id}-b" />` places one, and a
// transform on that <use> scales and positions it.
export function FrangipaniDefs({ id }) {
    return (
        <defs>
            <linearGradient id={`${id}-p`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-106">
                <stop offset="0%" stopColor="#D9A52C" />
                <stop offset="16%" stopColor="#F3D488" />
                <stop offset="42%" stopColor="#FCF2DE" />
                <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <radialGradient id={`${id}-c`}>
                <stop offset="0%" stopColor="#C79422" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#DCAE3A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#DCAE3A" stopOpacity="0" />
            </radialGradient>
            <g id={`${id}-b`}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <path
                        key={i}
                        transform={`rotate(${i * 72})`}
                        d={PETAL}
                        fill={`url(#${id}-p)`}
                        stroke={PETAL_STROKE}
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                ))}
                <circle r="42" fill={`url(#${id}-c)`} />
            </g>
        </defs>
    );
}

export default function Frangipani({ className, style }) {
    const id = useLocalId();
    return (
        <svg
            className={className}
            style={style}
            viewBox="-120 -120 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* userSpaceOnUse so the gradient turns with each petal: the
                    yellow stays in the throat instead of washing across the
                    whole flower from one side. */}
                <linearGradient id={`${id}-p`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-106">
                    <stop offset="0%" stopColor="#D9A52C" />
                    <stop offset="16%" stopColor="#F3D488" />
                    <stop offset="42%" stopColor="#FCF2DE" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
                <radialGradient id={`${id}-c`}>
                    <stop offset="0%" stopColor="#C79422" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#DCAE3A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#DCAE3A" stopOpacity="0" />
                </radialGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((i) => (
                <path
                    key={i}
                    transform={`rotate(${i * 72})`}
                    d={PETAL}
                    fill={`url(#${id}-p)`}
                    stroke={PETAL_STROKE}
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            ))}
            <circle r="42" fill={`url(#${id}-c)`} />
        </svg>
    );
}
