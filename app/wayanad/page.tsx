import Faq from "@/components/faq";
import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import { EnhancedHero } from "@/components/wayand/wayand-hero";
import aboutFaqData from "@/data/aboutFaqs.json";

export default function WayanadPage() {
  return (
    <div>
      <EnhancedHero
        heroTitle="Explore Wayanad: Nature, Serenity & Adventure"
      />
      <ImageContentSectionGrid />
      <Faq {...aboutFaqData} />
    </div>
  );
}
