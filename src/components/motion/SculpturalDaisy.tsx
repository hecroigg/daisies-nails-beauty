import { useEffect, useRef } from "react";
import { useLanguage } from "../../i18n";

export function SculpturalDaisy() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handleMove = (event: PointerEvent) => {
      const bounds = node.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      node.style.setProperty("--pointer-x", `${x * 7}deg`);
      node.style.setProperty("--pointer-y", `${y * -7}deg`);
    };
    const reset = () => {
      node.style.setProperty("--pointer-x", "0deg");
      node.style.setProperty("--pointer-y", "0deg");
    };
    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div className="sculpture" ref={ref} aria-label={t.hero.sculptureAlt}>
      <div className="sculpture__halo" aria-hidden="true" />
      <img src="/branding/daisies-pearl-sculpture.webp" alt="" width="1100" height="1180" fetchPriority="high" />
      <span className="sculpture__orbit sculpture__orbit--one" aria-hidden="true" />
      <span className="sculpture__orbit sculpture__orbit--two" aria-hidden="true" />
    </div>
  );
}
