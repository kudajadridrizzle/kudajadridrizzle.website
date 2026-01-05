import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import { wayanadFaqData } from "@/data/faqs/wayanad";

export default function WayanadPage() {
  return (
    <div>
      <Header />

      <HeroSection
        preTitle="Kudajadri Drizzle Homestay in Wayanad"
        title="Explore Wayanad: Nature, Serenity & Adventure"
        bgImage="/WayanadHero.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />
      <ImageContentSectionGrid />
      <FAQSection
        title={wayanadFaqData.title}
        faqs={wayanadFaqData.faqs}
      />
    </div>
  );
}
