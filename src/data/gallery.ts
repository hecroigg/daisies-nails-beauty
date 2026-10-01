export type LookId = "french" | "nude" | "color" | "ombre" | "glitter";

export const looks: Array<{ id: LookId; image: string; position: string }> = [
  { id: "french", image: "/images/daisies-nails-french.webp", position: "50% 55%" },
  { id: "nude", image: "/images/daisies-nails-nude.webp", position: "50% 50%" },
  { id: "color", image: "/images/daisies-nails-white.webp", position: "48% 52%" },
  { id: "ombre", image: "/images/daisies-nails-detail.webp", position: "54% 45%" },
  { id: "glitter", image: "/images/daisies-nails-detail.webp", position: "50% 50%" },
];

export const gallery = [
  { id: "manicure", image: "/images/daisies-nails-manicure.webp", className: "gallery-card--wide" },
  { id: "studio", image: "/images/daisies-nails-studio.webp", className: "gallery-card--tall" },
  { id: "detail", image: "/images/daisies-nails-detail.webp", className: "gallery-card--square" },
  { id: "process", image: "/images/daisies-nails-process.webp", className: "gallery-card--landscape" },
] as const;
