import { useLanguage } from "../../i18n";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-switcher" role="group" aria-label={t.common.languageSwitcher}>
      <button className={language === "de" ? "is-active" : ""} onClick={() => setLanguage("de")} aria-pressed={language === "de"}>DE</button>
      <span aria-hidden="true">/</span>
      <button className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
    </div>
  );
}
