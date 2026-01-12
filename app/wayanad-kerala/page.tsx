import type { Metadata } from "next";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

export const metadata: Metadata = {
  title: "Wayanad: Explore tourist attractions & destinations in Wayanad",
  description:
    "Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.",
  keywords: [""],
  openGraph: {
    title: "Wayanad: Explore tourist attractions & destinations in Wayanad",
    description:
      "Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.",
    images: ["/WayanadHero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kudajadri Drizzle Homestay in Wayanad",
    description:
      "Nature, comfort, and scenic beauty — book your Wayanad stay today.",
    images: ["/WayanadHero.jpg"],
  },
};

export default async function WayanadPage() {
  const faqData = await getPageFAQBySlug("wayanad");

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

      {faqData && (
        <FAQSection
          title={faqData.title}
          faqs={faqData.faqs}
        />
      )}
    </div>
  );
}
