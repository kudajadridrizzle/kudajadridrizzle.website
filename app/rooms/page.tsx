import type { Metadata } from "next";
import Rooms from "./rooms";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/rooms`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Wayanad accommodations: homestays, cottages, family rooms";

const META_DESCRIPTION =
  "Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation";

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

export default async function RoomsPage() {
  const faqData = await getPageFAQBySlug("rooms");

  return (
    <>
      <Rooms />

      {faqData && (
        <FAQSection
          title={faqData.title}
          faqs={faqData.faqs}
        />
      )}
    </>
  );
}
