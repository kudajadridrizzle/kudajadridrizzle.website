import { Metadata } from "next";
import FacilitiesClient from "@/components/facilities/facilities-client";
import { getFacilitiesData } from "@/lib/contentful-facilities";

export const dynamic = "force-dynamic";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFacilitiesData();

  if (!data || !data.meta) {
    return {
      title: "Swimming pool homestays in Wayanad: homestay with swimming pool",
      description:
        "Homestays in Wayanad with swimming pools offer the best facilities, comfort, and scenic views for a perfect relaxing getaway with family and friends.",
      alternates: {
        canonical: `${SITE_URL}/facilities`,
      },
    };
  }

  const { meta } = data;
  const ogImageUrl = meta.openGraphImage
    ? `https:${meta.openGraphImage.fields.file.url}`
    : `${SITE_URL}/aboutHero.jpg`;

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,

    robots: meta.noIndex ? "noindex, nofollow" : "index, follow",

    alternates: {
      canonical: meta.canonicalUrl || `${SITE_URL}/facilities`,
    },

    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: `${SITE_URL}/facilities`,
      siteName: "Kudajadri Drizzle",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: meta.metaTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function Facilities() {
  const data = await getFacilitiesData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load Facilities page</h1>
          <p className="text-gray-600">
            Please check your Contentful configuration.
          </p>
        </div>
      </div>
    );
  }

  return <FacilitiesClient data={data} />;
}