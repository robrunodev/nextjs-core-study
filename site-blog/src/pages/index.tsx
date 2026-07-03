import { FeatureSection } from "../components/featureSection";
import { Header } from "../components/header";
import { HeroSection } from "../components/heroSection";

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
    </article>
  );
}
