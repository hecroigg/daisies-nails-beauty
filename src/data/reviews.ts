export const reviewSummary = {
  rating: "4.4",
  count: 59,
  source: "Treatwell",
  sourceUrl: "https://www.treatwell.de/ort/daisies-nails-beauty/",
  verifiedAt: "2026-10-01",
} as const;

export const reviews = [
  { id: "mariam", author: "Mariam", treatment: { de: "Gel Maniküre", en: "Gel manicure" } },
  { id: "clara", author: "Clara", treatment: { de: "Pediküre", en: "Pedicure" } },
  { id: "carolin", author: "Carolin", treatment: { de: "Nagelverstärkung", en: "Nail strengthening" } },
] as const;
