import { business } from "../../data/business";
import { useLanguage } from "../../i18n";

export function MobileBookingCTA() {
  const { t } = useLanguage();
  return (
    <div className="mobile-booking">
      <a href={business.bookingUrl} target="_blank" rel="noreferrer">{t.common.book}</a>
      <a href={business.phoneHref} aria-label={`${t.common.call}: ${business.phoneDisplay}`}>{t.common.call}</a>
    </div>
  );
}
