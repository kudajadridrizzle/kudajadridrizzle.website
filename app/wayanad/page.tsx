import Faq from "@/components/FAQSection";
import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import HeroSection from "@/components/HeroSection";

export default function WayanadPage() {
  return (
    <div>
     
      <HeroSection
        preTitle="Kudajadri Drizzle Homestay in Wayanad"
        title="Explore Wayanad: Nature, Serenity & Adventure"
        bgImage="/WayanadHero.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />
      <ImageContentSectionGrid />
    </div>
  );
}
