import { gallery } from "../../data/gallery";
import { useLanguage } from "../../i18n";
import { Container } from "../ui/Container";
import { ImageReveal } from "../ui/ImageReveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Studio() {
  const { t } = useLanguage();
  return (
    <section className="studio section" id="studio">
      <Container>
        <SectionTitle eyebrow={t.studio.eyebrow} title={t.studio.title} intro={t.studio.intro} />
        <div className="studio-gallery">
          {gallery.map((item) => <ImageReveal key={item.id} src={item.image} alt={t.galleryAlts[item.id]} className={`gallery-card ${item.className}`} />)}
          <div className="studio-gallery__stamp" aria-hidden="true"><span>MA</span><small>49.4868° N<br />8.4696° E</small></div>
        </div>
        <p className="studio__note">{t.studio.editorialNote}</p>
      </Container>
    </section>
  );
}
