import { Metadata } from "next";
import HomeClient from "@/components/home/home-client";
import FAQSection from "@/components/FAQSection";
import { getAboutSection } from "@/lib/contentful";
import { getPageFAQBySlug } from "@/lib/getFaqs";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.kudajadridrizzle.com";
const OG_IMAGE = `${SITE_URL}/images/1%20(56).jpg`;

export const metadata: Metadata = {
  title: "Wayanad homestays: Best homestay in Wayanad for family, group",
  description:
    "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",

  openGraph: {
    title: "Wayanad homestays: Best homestay in Wayanad for family, group",
    description:
      "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",
    url: SITE_URL,
    siteName: "Kudajadri Drizzle",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kudajadri Drizzle Heritage Homestay, Wayanad",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wayanad homestays: Best homestay in Wayanad for family, group",
    description:
      "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",
    images: [OG_IMAGE],
  },
};

export default async function Home() {
  const aboutSectionData = await getAboutSection();
  const faqData = await getPageFAQBySlug("home");

  return (
    <>
      <HomeClient aboutSectionData={aboutSectionData} />

      {faqData && faqData.faqs.length >= 2 && (
        <FAQSection
          title={faqData.title}
          faqs={faqData.faqs}
        />
      )}
    </>
  );  
}
