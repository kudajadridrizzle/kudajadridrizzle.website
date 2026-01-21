import type { Metadata } from "next";
import { HeroSession } from "@/components/gallery/HeroSession";
import ImageSession from "@/components/gallery/ImageSession";
import Header from "@/components/Header";
import Wrapper from "@/components/layout/Wrapper";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/media`;
const OG_IMAGE = `${SITE_URL}/gallery/cover.jpg`;

/* ⛔ TEXT BELOW IS NOT MODIFIED */
const META_TITLE =
  "Photos & videos gallery - Kudajadri Drizzle Homestays";

const META_DESCRIPTION =
  "Browse stunning photos and videos of Kudajadri Drizzle Homestay in Wayanad. Get a visual glimpse of the cozy rooms, scenic surroundings, and peaceful ambiance.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    title: META_TITLE,              
    description: META_DESCRIPTION,  
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
    locale: "en_US", // unchanged from your intent unless you say otherwise
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,              
    description: META_DESCRIPTION,  
    images: [OG_IMAGE],
  },
};

export default function GalleryPage() {
  return (
    <main className="mobile:mt-12">
      <section className="sm:py-24 mobile:pt-8 mobile:pb-12">
        <Header variant="solid" />
        <HeroSession />
        <Wrapper>
          <ImageSession />
        </Wrapper>
      </section>
    </main>
  );
}
