import { reviewSummary, reviews } from "../../data/reviews";
import { useLanguage } from "../../i18n";
import { Reveal } from "../motion/Reveal";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function Reviews() {
  const { t, language } = useLanguage();
  return (
    <section className="reviews section" id="reviews">
      <Container>
        <div className="reviews__top">
          <SectionTitle eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
          <Reveal className="rating-card">
            <strong>{reviewSummary.rating}</strong>
            <div><span className="rating-card__stars" aria-label={`${reviewSummary.rating} / 5`}>★★★★★</span><p>{t.reviews.basedOn}</p><a href={reviewSummary.sourceUrl} target="_blank" rel="noreferrer">{t.reviews.source} ↗</a></div>
          </Reveal>
        </div>
        <div className="review-grid">
          {reviews.map((review, index) => (
            <Reveal className="review-card" key={review.id} delay={index * 90}>
              <span className="review-card__quote">“</span>
              <blockquote>{t.reviewItems[review.id]}</blockquote>
              <footer><strong>{review.author}</strong><span>{review.treatment[language]} · {t.reviews.verified}</span></footer>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
