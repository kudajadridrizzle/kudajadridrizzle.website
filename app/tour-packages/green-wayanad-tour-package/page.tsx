import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/packages/green-wayanad-tour-package`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Green Wayanad tour package: Wild Life Sanctuaries, Edakkal Cave, Kuruva Island, Pookkode Lake";

const META_DESCRIPTION =
  "Green Wayanad Tour Package: Explore lush wildlife sanctuaries, ancient Edakkal Cave, serene Kuruva Island, and scenic Pookkode Lake for a perfect nature getaway.";

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

export default function GreenWayanadPage() {
  return <PackageDetailsClient packageTitle="Green Wayanad Tour Package" />;
}
