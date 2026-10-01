import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Looks } from "./components/sections/Looks";
import { Studio } from "./components/sections/Studio";
import { Reviews } from "./components/sections/Reviews";
import { Booking } from "./components/sections/Booking";
import { MobileBookingCTA } from "./components/ui/BookingCTA";
import { useLanguage } from "./i18n";

export function App() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">{t.common.skipToContent}</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Looks />
        <Studio />
        <Reviews />
        <Booking />
      </main>
      <Footer />
      <MobileBookingCTA />
    </>
  );
}
