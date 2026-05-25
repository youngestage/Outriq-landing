import { Preloader } from "@/components/layout/Preloader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeEffects } from "@/components/layout/ThemeEffects";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AppIntegration } from "@/components/sections/AppIntegration";
import { Feedback } from "@/components/sections/Feedback";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FancyBanner } from "@/components/sections/FancyBanner";
import { ScrollTop } from "@/components/ui/ScrollTop";

export default function Home() {
  return (
    <div className="main-page-wrapper dark-bg-three">
      <ThemeEffects />
      <Preloader />
      <Header />
      <Hero />
      <Features />
      <AppIntegration />
      <Feedback />
      <Pricing />
      <FAQ />
      <FancyBanner />
      <Footer />
      <ScrollTop />
    </div>
  );
}
