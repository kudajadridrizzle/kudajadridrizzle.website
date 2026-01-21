import type { Metadata } from "next";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/wayanad`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Wayanad: Explore tourist attractions & destinations in Wayanad";

const META_DESCRIPTION =
  "Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  keywords: [""], // untouched, even though it's pointless

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    title: META_TITLE,              // SAME AS META
    description: META_DESCRIPTION,  // SAME AS META
    images: ["/WayanadHero.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,              // SAME AS META
    description: META_DESCRIPTION,  // SAME AS META
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
