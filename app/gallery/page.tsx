import type { Metadata } from "next";

import { HeroSession } from "@/components/gallery/HeroSession";
import ImageSession from "@/components/gallery/ImageSession";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/gallery`;
const OG_IMAGE = `${SITE_URL}/gallery/cover.jpg`;

export const metadata: Metadata = {
  title: "Photos & Videos Gallery | Kudajadri Drizzle Homestay",
  description:
    "Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Gallery | Kudajadri Drizzle Homestay, Wayanad",
    description:
      "Browse beautiful photos of Kudajadri Drizzle Homestay including rooms, scenic surroundings, and peaceful ambiance.",
    url: CANONICAL_URL,
    siteName: "Kudajadri Drizzle",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kudajadri Drizzle Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Kudajadri Drizzle Homestay",
    description:
      "Explore photos of Kudajadri Drizzle Homestay in Wayanad – rooms, nature, and peaceful surroundings.",
    images: [OG_IMAGE],
  },
};

export default function GalleryPage() {
  return (
    <main className="mobile:mt-12">
      <section className="sm:py-24 mobile:pt-8 mobile:pb-12">
        <HeroSession />
        <ImageSession />
      </section>
    </main>
  );
}
