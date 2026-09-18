import Frangipani, { FrangipaniPetal } from "./Frangipani";
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
