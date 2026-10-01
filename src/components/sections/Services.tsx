import { services } from "../../data/services";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Services() {
  const { t } = useLanguage();
  return (
    <section className="services section" id="services">
      <Container>
        <div className="services__header">
          <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <Reveal className="services__note" delay={120}><span className="services__note-dot" />{t.services.note}</Reveal>
        </div>
        <div className="service-list">
          {services.map((service, index) => {
            const content = t.serviceItems[service.id];
            return (
              <Reveal key={service.id} className={`service-row service-row--${service.accent}`} delay={index * 70}>
                <span className="service-row__number">{service.number}</span>
                <h3>{content.name}</h3>
                <p>{content.description}</p>
                <span className="service-row__disc" aria-hidden="true" />
              </Reveal>
            );
          })}
        </div>
        <Reveal className="services__cta"><Button href={business.bookingUrl} target="_blank" rel="noreferrer" variant="outline">{t.common.book}</Button></Reveal>
      </Container>
    </section>
  );
}
