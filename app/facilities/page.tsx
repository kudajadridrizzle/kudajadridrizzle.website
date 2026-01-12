import { Metadata } from "next";
import FacilitiesSession from "@/components/facilities/FacilitiesSession";
import ListSession from "@/components/facilities/ListSession";
import FacilitiesAccordion from "@/components/facilities/FacilitiesAccordion";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/getFaqs";

export const dynamic = "force-dynamic";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/facilities`;
const OG_IMAGE = `${SITE_URL}/aboutHero.jpg`;

export const metadata: Metadata = {
  title: "Swimming pool homestays in Wayanad: homestay with swimming pool",
  description:
    "Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends.",
  robots: "index, follow",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Swimming pool homestays in Wayanad: homestay with swimming pool",
    description:
      "Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends.",
    url: CANONICAL_URL,
    siteName: "Kudajadri Homestay",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kudajadri Drizzle Facilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swimming pool homestays in Wayanad: homestay with swimming pool",
    description:
      "Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends.",
    images: [OG_IMAGE],
    site: "@kudajadrihomestay",
  },
};

export default async function Facilities() {
  const faqData = await getPageFAQBySlug("facilities");

  return (
    <div>
      <Header />
      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Facilities & Amenities at Kudajadri Drizzle Homestay"
        bgImage="/FacilitiesHero.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />

      <div className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row 2xl:px-[12%] lg:px-[12%]">
        <FacilitiesSession />
      </div>

      <ListSession />
      <FacilitiesAccordion />

      {faqData && faqData.faqs.length >= 2 && (
        <FAQSection
          title={faqData.title}
          faqs={faqData.faqs}
        />
      )}
    </div>
  );
}
