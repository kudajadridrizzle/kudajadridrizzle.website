import type { Metadata } from "next";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionIntro from "@/components/sectionIntro";
import ImageTextSectionComponent from "@/components/ImageTextSection";
import Wrapper from "@/components/layout/Wrapper";
import FAQSection from "@/components/FAQSection";

import { getPageTypeTwoData } from "@/lib/contentful-rooms";
import { ImageTextSection } from "@/lib/contentful";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

// Generate dynamic metadata from CMS
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageTypeTwoData("rooms");

  // Fallback metadata if CMS fetch fails
  if (!data || !data.meta) {
    return {
      title: "Wayanad accommodations: homestays, cottages, family rooms",
      description:
        "Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation",
      alternates: {
        canonical: `${SITE_URL}/rooms`,
      },
    };
  }

  const { meta, slug } = data;
  const canonicalUrl = meta.canonicalUrl || `${SITE_URL}/${slug}`;
  const ogImageUrl = meta.openGraphImage
    ? `https:${meta.openGraphImage.fields.file.url}`
    : `${SITE_URL}/images/default-og.jpg`;

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    ...(meta.noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),

    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: canonicalUrl,
      siteName: "Kudajadri Drizzle",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: meta.metaTitle,
        },
      ],
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function RoomsPage() {
  const data = await getPageTypeTwoData("rooms");

  // Fallback UI if data fetch fails
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load rooms page</h1>
          <p className="text-gray-600">
            Please check your Contentful configuration.
          </p>
        </div>
      </div>
    );
  }

  const { hero, sectionIntro, rooms, faqs } = data;

  return (
    <>
      <Header />

      {/* HERO */}
      <HeroSection
        preTitle={hero.preTitle}
        title={hero.title}
        bgImage={`https:${hero.backgroundImage.fields.file.url}`}
        showButton={hero.ctaVisible}
        buttonLabel={hero.ctaLabel}
        redirectTo={hero.ctaLink}
      />

      <Wrapper>
        {/* INTRO */}
        <section className="py-10">
          <SectionIntro
            preTitle={sectionIntro.preTitle}
            title={sectionIntro.title}
            description={sectionIntro.description}
            enableReadMore
          />
        </section>

        {/* ROOMS */}
        {rooms.length > 0 && (
          <section className="py-16 space-y-16">
            {rooms.map((room: ImageTextSection, index: number) => (
              <ImageTextSectionComponent
                key={room.internalName || index}
                title={room.title}
                description={room.description}
                imageUrl={`https:${room.image.fields.file.url}`}
                imageAlt={
                  room.imageAlt || room.image.fields.title || room.title
                }
                ctaVisible={room.ctaVisible}
                ctaLabel={room.ctaLabel}
                ctaLink={room.ctaLink}
                imagePosition={
                  room.imagePosition || (index % 2 === 0 ? "right" : "left")
                }
              />
            ))}
          </section>
        )}
      </Wrapper>

      {/* FAQ */}
      {faqs && faqs.faqs.length > 0 && (
        <FAQSection
          title={faqs.title}
          faqs={faqs.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}
    </>
  );
}