import { useEffect, useRef, useState } from "react";
import styles from "./FloralDecoration.module.css";

export default function FloralDecoration({ compact = false, clustered = false, interactive = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!interactive || !visible) return;
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const update = () => {
      frame = undefined;
      const top = element.closest("section").getBoundingClientRect().top;
      const offset = reducedMotion.matches ? 0 : Math.max(-10, Math.min(10, -top * 0.025));
      element.style.setProperty("--scroll-offset", `${offset}px`);
    };
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, [interactive, visible]);
  return (
    <div ref={ref} className={`${styles.flowers} ${compact ? styles.compact : ""} ${clustered ? styles.clustered : ""} ${interactive ? styles.interactive : ""}`} aria-hidden="true" style={{ animationPlayState: visible ? "running" : "paused" }}>
      {!compact && <img className={styles.petals} src="/images/shape/banner-six-shape2.png" alt="" width="170" height="100" loading="lazy" />}
      <img className={styles.blossoms} src="/images/shape/service-four-shape-right.png" alt="" width="230" height="150" loading="lazy" />
    </div>
  );
}
