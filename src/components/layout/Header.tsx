import { useEffect, useState } from "react";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const nav = [
    ["services", t.nav.services],
    ["looks", t.nav.looks],
    ["studio", t.nav.studio],
    ["reviews", t.nav.reviews],
    ["visit", t.nav.visit],
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Container className="site-header__inner">
        <a href="#top" className="wordmark" aria-label={`${business.name} – ${t.footer.backToTop}`}>
          <span>DAISIES</span><small>NAILS &amp; BEAUTY</small>
        </a>
        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label={t.common.mainNavigation}>
          {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <div className="site-nav__mobile-tools"><LanguageSwitcher /></div>
        </nav>
        <div className="site-header__tools">
          <LanguageSwitcher />
          <Button href={business.bookingUrl} target="_blank" rel="noreferrer" className="site-header__booking">{t.common.book}</Button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu}>
            <span /><span />
          </button>
        </div>
      </Container>
    </header>
  );
}
