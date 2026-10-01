import { business } from "../../data/business";
import { useLanguage } from "../../i18n";
import { SculpturalDaisy } from "../motion/SculpturalDaisy";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ImageReveal } from "../ui/ImageReveal";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="top">
      <Container className="hero__inner">
        <p className="hero__eyebrow eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero__title" aria-label={`${t.hero.line1} ${t.hero.line2} ${t.hero.line3}`}>
          <span>{t.hero.line1}</span>
          <span>{t.hero.line2}</span>
          <span className="hero__title-accent">{t.hero.line3}</span>
        </h1>
        <div className="hero__visual"><SculpturalDaisy /></div>
        <div className="hero__photo">
          <ImageReveal src="/images/daisies-nails-white.webp" alt={t.hero.imageAlt} loading="eager" position="50% 52%" />
          <span className="hero__photo-tag">P4 · MANNHEIM</span>
        </div>
        <div className="hero__copy">
          <p>{t.hero.intro}</p>
          <div className="hero__actions">
            <Button href={business.bookingUrl} target="_blank" rel="noreferrer" size="large">{t.common.book}</Button>
            <Button href="#services" variant="outline" size="large">{t.common.services}</Button>
          </div>
        </div>
        <a className="hero__scroll" href="#services"><span />{t.hero.scroll}</a>
      </Container>
    </section>
  );
}
