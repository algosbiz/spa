import { useEffect } from "react";

export default function useDecorationMotion(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ornaments = [...root.querySelectorAll("section > .shape1, section > .shape2, .banner-two__shape")];
    const visible = new Set();
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const update = () => {
      frame = undefined;
      visible.forEach((element) => {
        const rect = element.closest("section").getBoundingClientRect();
        const offset = preference.matches ? 0 : Math.max(-10, Math.min(10, -rect.top * 0.025));
        element.style.setProperty("--decoration-scroll", `${offset}px`);
      });
    };
    const queue = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.dataset.motionVisible = String(isIntersecting);
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
      });
      queue();
    });
    ornaments.forEach((element, index) => {
      element.dataset.decorationMotion = "true";
      element.style.setProperty("--decoration-duration", `${8 + index % 4}s`);
      observer.observe(element);
    });
    window.addEventListener("scroll", queue, { passive: true });
    preference.addEventListener("change", queue);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queue);
      preference.removeEventListener("change", queue);
      cancelAnimationFrame(frame);
      ornaments.forEach((element) => {
        delete element.dataset.decorationMotion;
        delete element.dataset.motionVisible;
        element.style.removeProperty("--decoration-scroll");
        element.style.removeProperty("--decoration-duration");
      });
    };
  }, [ref]);
}
