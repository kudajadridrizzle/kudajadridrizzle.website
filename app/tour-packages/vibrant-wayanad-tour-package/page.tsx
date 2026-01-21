import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/packages/vibrant-wayanad-tour-package`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Vibrant Wayanad Tour Package: Soochippara Water falls, Lakkidi View Point, Karapauzha Dam";

const META_DESCRIPTION =
  "Vibrant Wayanad Tour Package: Explore thrilling Soochippara Waterfalls, panoramic views from Lakkidi View Point, and the tranquil charm of Karapuzha Dam.";

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

export default function VibrantWayanadPage() {
  return <PackageDetailsClient packageTitle="Vibrant Wayanad Tour Package" />;
}
