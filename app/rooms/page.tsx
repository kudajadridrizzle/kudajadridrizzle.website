import type { Metadata } from "next";
import Rooms from "./rooms";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

export const metadata: Metadata = {
  title: "Wayanad accommodations: homestays, cottages, family rooms",
  description:
    "Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation",
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
