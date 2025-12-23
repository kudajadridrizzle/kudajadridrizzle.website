import { Metadata } from "next";
import Hero from "@/components/facilities/Hero";
import FacilitiesSession from "@/components/facilities/FacilitiesSession";
import ListSession from "@/components/facilities/ListSession";
import FacilitiesAccordion from "@/components/facilities/FacilitiesAccordion";

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

export default function Facilities() {
  return (
    <div>
      <Hero />

      <div className="flex flex-col items-center self-stretch gap-16 bg-white mobile:p-4 sm:p-14 sm:flex-row 2xl:px-[18%] lg:px-[12%]">
        <FacilitiesSession />
      </div>

      <ListSession />
      <FacilitiesAccordion />
    </div>
  );
}
