import { useReveal } from "../../hooks/useReveal";

type ImageRevealProps = { src: string; alt: string; className?: string; loading?: "eager" | "lazy"; position?: string };

export function ImageReveal({ src, alt, className = "", loading = "lazy", position }: ImageRevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`image-reveal ${visible ? "is-visible" : ""} ${className}`}>
      <img src={src} alt={alt} loading={loading} decoding="async" style={{ objectPosition: position }} />
    </div>
  );
}
