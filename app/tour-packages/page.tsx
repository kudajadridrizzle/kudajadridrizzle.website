import type { Metadata } from "next";
import TourPackagesClient from "./TourPackagesClient";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

export const metadata: Metadata = {
  title: "Wayanad Tour Packages | Curated Nature & Experience Tours",
  description:
    "Explore the best Wayanad tour packages including nature trails, sightseeing, and curated travel experiences. Choose the perfect Wayanad package for your trip.",
};

export default async function WayanadTourPackages() {
  const faqData = await getPageFAQBySlug("wayanad-tour-packages");

  return (
    <>
      <TourPackagesClient />

      {faqData && (
        <FAQSection
          title={faqData.title}
          faqs={faqData.faqs}
        />
      )}
    </>
  );
}
