export type ServiceId = "gel" | "powder" | "shellac" | "care";

export const services: Array<{ id: ServiceId; number: string; accent: string }> = [
  { id: "gel", number: "01", accent: "pearl" },
  { id: "powder", number: "02", accent: "chrome" },
  { id: "shellac", number: "03", accent: "butter" },
  { id: "care", number: "04", accent: "lilac" },
];
