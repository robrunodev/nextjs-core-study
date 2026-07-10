import { FeatureSection } from "../components/featureSection";
import { HeroSection } from "../components/heroSection";
import { SupportSection } from "../components/supportSection";

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
    </article>
  );
}
