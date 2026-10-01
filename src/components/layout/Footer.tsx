import { business } from "../../data/business";
import { useLanguage } from "../../i18n";
import { Container } from "../ui/Container";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <Container className="site-footer__grid">
        <div className="wordmark wordmark--footer"><span>DAISIES</span><small>NAILS &amp; BEAUTY</small></div>
        <p>{t.footer.tagline}</p>
        <div className="site-footer__links">
          <a href={business.instagramUrl} target="_blank" rel="noreferrer">{t.common.instagram}</a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer">{t.common.directions}</a>
          <a href="#top">{t.footer.backToTop} ↑</a>
        </div>
        <p className="site-footer__fine">© {new Date().getFullYear()} Daisies Nails &amp; Beauty</p>
        <p className="site-footer__fine">{t.footer.legalNote}</p>
        <p className="site-footer__fine">{t.footer.imageCredit}</p>
      </Container>
    </footer>
  );
}
