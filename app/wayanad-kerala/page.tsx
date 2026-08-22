import type { Metadata } from "next";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ImageContentSectionGrid } from "@/components/wayand/ImageContentSectionGrid";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";
import { getWayanadPage } from "@/lib/getWayanadPage";
import { notFound } from "next/navigation";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

/* ===============================
   GENERATE METADATA DYNAMICALLY
================================ */
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getWayanadPage("wayanad-kerala");

  if (!pageData) {
    return {
      title: "Wayanad: Explore tourist attractions & destinations in Wayanad",
      description:
        "Discover top tourist attractions and must-visit destinations in Wayanad. Plan your perfect trip to explore nature, wildlife, and cultural sites.",
    };
  }

  const { meta } = pageData;
  const canonicalUrl = meta.canonicalUrl || `${SITE_URL}/wayanad-kerala`;

  const metadata: Metadata = {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };

  // Add noIndex if specified
  if (meta.noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  // Add Open Graph data
  if (meta.openGraphImage) {
    metadata.openGraph = {
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [meta.openGraphImage],
      type: "website",
      url: canonicalUrl,
    };

    metadata.twitter = {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [meta.openGraphImage],
    };
  }

  return metadata;
}

/* ===============================
   PAGE COMPONENT
================================ */
export default async function WayanadPage() {
  // Fetch page data from Contentful
  const pageData = await getWayanadPage("wayanad-kerala");

  if (!pageData) {
    notFound(); // Return 404 if page data is not found
  }

  const faqData = await getPageFAQBySlug("wayanad-kerala");

  return (
    <div>
      <Header />

      <HeroSection
        preTitle="Kudajadri Drizzle Homestay in Wayanad"
        title="Explore Wayanad: Nature, Serenity & Adventure"
        bgImage="/WayanadHero.jpg"
        headingLevel="h1"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />

      <ImageContentSectionGrid sections={pageData.imageTextSections} />

      {/* Render FAQ section if available */}
      {faqData && <FAQSection title={faqData.title} faqs={faqData.faqs} />}
    </div>
  );
}
