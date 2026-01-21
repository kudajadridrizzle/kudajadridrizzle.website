import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/packages/dream-wayanad-tour-package`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Dream Wayanad Tour Packages: Edakkal Caves, Kuruva Island, Chembra Peak, Thirunelli Temple";

const META_DESCRIPTION =
  "Dream Wayanad Tour Package: Explore mystical Edakkal Caves, lush Kuruva Island, breathtaking Chembra Peak, and the spiritual vibes of Thirunelli Temple.";

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

export default function DreamWayanadPage() {
  return <PackageDetailsClient packageTitle="Dream Wayanad Tour Package" />;
}
