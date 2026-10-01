import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { de } from "./de";
import { en } from "./en";
import type { Language, Translation } from "./types";

const dictionaries: Record<Language, Translation> = { de, en };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("daisies-language");
    return saved === "en" ? "en" : "de";
  });

  const t = dictionaries[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.seo.description);
    window.localStorage.setItem("daisies-language", language);
  }, [language, t]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
