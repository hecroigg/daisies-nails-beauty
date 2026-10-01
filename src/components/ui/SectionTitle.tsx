import { Reveal } from "../motion/Reveal";

type SectionTitleProps = { eyebrow: string; title: string; intro?: string; align?: "left" | "center" };

export function SectionTitle({ eyebrow, title, intro, align = "left" }: SectionTitleProps) {
  return (
    <Reveal className={`section-title section-title--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-title__intro">{intro}</p>}
    </Reveal>
  );
}
