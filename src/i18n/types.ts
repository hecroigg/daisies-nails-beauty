export type Language = "de" | "en";

export type Translation = {
  locale: string;
  seo: { title: string; description: string };
  common: {
    book: string;
    services: string;
    directions: string;
    call: string;
    instagram: string;
    openExternal: string;
    skipToContent: string;
    mainNavigation: string;
    languageSwitcher: string;
  };
  nav: { services: string; looks: string; studio: string; reviews: string; visit: string; menu: string; close: string };
  hero: { eyebrow: string; line1: string; line2: string; line3: string; intro: string; scroll: string; imageAlt: string; sculptureAlt: string };
  services: { eyebrow: string; title: string; intro: string; note: string };
  looks: { eyebrow: string; title: string; intro: string; galleryLabel: string };
  studio: { eyebrow: string; title: string; intro: string; imageAltPrefix: string; editorialNote: string };
  reviews: { eyebrow: string; title: string; basedOn: string; source: string; verified: string };
  booking: { eyebrow: string; title: string; intro: string; address: string; hours: string; hoursValue: string; sunday: string; sundayValue: string; contact: string; mapLabel: string };
  footer: { tagline: string; legalNote: string; imageCredit: string; backToTop: string };
  serviceItems: Record<string, { name: string; description: string }>;
  lookItems: Record<string, string>;
  reviewItems: Record<string, string>;
  galleryAlts: Record<string, string>;
};
