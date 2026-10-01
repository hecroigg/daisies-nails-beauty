import { business } from "../../data/business";
import { useLanguage } from "../../i18n";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Booking() {
  const { t } = useLanguage();
  return (
    <section className="booking section" id="visit">
      <Container className="booking__inner">
        <Reveal className="booking__headline">
          <p className="eyebrow">{t.booking.eyebrow}</p>
          <h2>{t.booking.title}</h2>
          <p>{t.booking.intro}</p>
          <div className="booking__actions">
            <Button href={business.bookingUrl} target="_blank" rel="noreferrer" size="large" variant="light">{t.common.book}</Button>
            <Button href={business.mapsUrl} target="_blank" rel="noreferrer" size="large" variant="outline">{t.common.directions}</Button>
          </div>
        </Reveal>
        <Reveal className="booking__details" delay={100}>
          <div><span>{t.booking.address}</span><address>{business.name}<br />{business.address.street}<br />{business.address.postalCode} {business.address.city}</address></div>
          <div><span>{t.booking.hours}</span><p>{t.booking.hoursValue}<br />{t.booking.sunday} · {t.booking.sundayValue}</p></div>
          <div><span>{t.booking.contact}</span><p><a href={business.phoneHref}>{business.phoneDisplay}</a><br /><a href={business.instagramUrl} target="_blank" rel="noreferrer">{business.instagramHandle}</a></p></div>
        </Reveal>
        <div className="booking__map" aria-label={t.booking.mapLabel}>
          <div className="booking__map-grid" aria-hidden="true" />
          <div className="booking__pin"><span>D</span></div>
          <p>P4 9<br />MANNHEIM</p>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label={t.common.directions}>{t.common.directions} ↗</a>
        </div>
      </Container>
    </section>
  );
}
