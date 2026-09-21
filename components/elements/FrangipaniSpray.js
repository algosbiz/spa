import Frangipani, { FrangipaniPetal, FrangipaniDefs, useLocalId } from "./Frangipani";
import styles from "./FrangipaniSpray.module.css";

// The cluster that carries the homepage hero. On desktop it sits in the right
// margin where the theme's magenta cut-outs used to be; on phones, where the
// banner photos are hidden, it spreads across the whole section so the
// headline is not floating on an empty cream field.
export default function FrangipaniSpray() {
    return (
        <div className={styles.spray} aria-hidden="true">
            <span className={styles.glow} />
            <Frangipani className={`${styles.bloom} ${styles.one}`} />
            <Frangipani className={`${styles.bloom} ${styles.two}`} />
            <Frangipani className={`${styles.bloom} ${styles.three}`} />
            <FrangipaniPetal className={`${styles.petal} ${styles.petalA}`} />
            <FrangipaniPetal className={`${styles.petal} ${styles.petalB}`} />
        </div>
    );
}

// Opening ornament above the H1, in the same gold-rule language the section
// sub-titles use further down the page.
export function FrangipaniMark() {
    return (
        <span className={styles.mark} aria-hidden="true">
            <i className={styles.rule} />
            <Frangipani className={styles.markBud} />
            <Frangipani className={styles.markBloom} />
            <Frangipani className={styles.markBud} />
            <i className={`${styles.rule} ${styles.ruleFlip}`} />
        </span>
    );
}

// Fills the empty panel below the offcanvas contact details, where the social
// icons used to be.
//
// One SVG with all three blossoms inside its viewBox, rather than three
// absolutely positioned ones: a phone that leaves less room than expected
// used to crop whichever blossom reached the panel edge. Here the whole
// arrangement is laid out in viewBox units and scaled to fit whatever space
// is left -- `meet` guarantees the entire viewBox is visible, so no blossom
// can ever be cut, and YMax settles the group on the floor of that space
// instead of floating it in the middle of a tall one.
//
// A blossom reaches 107 units from its centre (the 105 tip plus the stroke),
// so each one below sits at least 107 * its own scale clear of every edge of
// the ART_W x ART_H box these placements were measured in.
const ART_W = 360;
const ART_H = 190;
const SIDEBAR_BLOSSOMS = [
    { x: 78, y: 121, scale: 0.63, opacity: 0.8 },
    { x: 291, y: 60, scale: 0.35, opacity: 0.55 },
    { x: 197, y: 150, scale: 0.2, opacity: 0.45 },
];

export function FrangipaniSidebar() {
    const id = useLocalId();
    return (
        <div className={`sidebar-bloom ${styles.sidebarBloom}`} aria-hidden="true">
            <div className={styles.sidebarInner}>
                <svg
                    className={styles.sidebarArt}
                    viewBox={`0 0 ${ART_W} ${ART_H}`}
                    preserveAspectRatio="xMidYMax meet"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <FrangipaniDefs id={id} />
                    {SIDEBAR_BLOSSOMS.map((b) => (
                        <use
                            key={`${b.x}-${b.y}`}
                            href={`#${id}-b`}
                            transform={`translate(${b.x} ${b.y}) scale(${b.scale})`}
                            opacity={b.opacity}
                        />
                    ))}
                </svg>
            </div>
            {/* Lives here rather than in the CSS module because a module
                cannot carry a rule made only of :global selectors, and the
                element it applies to is this one's parent. The offcanvas
                panel is already a flex column; making its body one too is
                what lets the `flex: 0 1 210px` above resolve against the
                space actually left over on any given phone. */}
            <style jsx global>{`
                .sidebar-area .offcanvas-body {
                    display: flex;
                    flex-direction: column;
                }

                /* Flex items shrink by default, and the menu carries
                   overflow:hidden -- which drops its automatic minimum size
                   to zero. Without this the menu was squeezed to make room
                   for the decoration and its last links were clipped away
                   on a short phone. Only the decoration may give ground. */
                .sidebar-area .offcanvas-body > *:not(.sidebar-bloom) {
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    );
}
