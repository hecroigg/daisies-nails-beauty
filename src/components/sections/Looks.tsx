import { useState } from "react";
import { looks, type LookId } from "../../data/gallery";
import { useLanguage } from "../../i18n";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Looks() {
  const { t } = useLanguage();
  const [active, setActive] = useState<LookId>("glitter");
  const selected = looks.find((look) => look.id === active) ?? looks[0];

  return (
    <section className="looks section" id="looks">
      <Container>
        <SectionTitle eyebrow={t.looks.eyebrow} title={t.looks.title} intro={t.looks.intro} />
        <div className="looks__stage">
          <div className="looks__image-wrap">
            <img key={selected.id} className="looks__image" src={selected.image} alt={`${t.looks.title} ${t.lookItems[selected.id]}`} loading="lazy" style={{ objectPosition: selected.position }} />
            <div className="looks__chrome-label" aria-hidden="true">DAISIES / {t.lookItems[selected.id]}</div>
          </div>
          <div className="looks__controls" aria-label={t.looks.galleryLabel}>
            {looks.map((look, index) => (
              <button key={look.id} className={active === look.id ? "is-active" : ""} onClick={() => setActive(look.id)} aria-pressed={active === look.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>{t.lookItems[look.id]}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
