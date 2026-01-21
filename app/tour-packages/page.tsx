import type { Metadata } from "next";
import TourPackagesClient from "./TourPackagesClient";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/packages`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Wayanad Tour Packages | Curated Nature & Experience Tours";

const META_DESCRIPTION =
  "Explore the best Wayanad tour packages including nature trails, sightseeing, and curated travel experiences. Choose the perfect Wayanad package for your trip.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
    url: CANONICAL_URL,
    siteName: "Kudajadri Drizzle",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
  },
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
