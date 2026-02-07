import { Metadata } from "next";
import HomeClient from "@/components/home/home-client";
import FAQSection from "@/components/FAQSection";
import { getHomepageData } from "@/lib/contentful-homepage";


export const dynamic = "force-dynamic";

const SITE_URL = "https://www.kudajadridrizzle.com";

// Generate metadata from Contentful
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();

  if (!data || !data.meta) {
    // Fallback to default metadata
    return {
      title: "Kudajadri Drizzle Homestay",
      description: "Experience true serenity at Kudajadri Drizzle Homestay in Wayanad",
    };
  }

  const { meta } = data;
  const ogImageUrl = meta.openGraphImage
    ? `https:${meta.openGraphImage.fields.file.url}`
    : `${SITE_URL}/images/1%20(56).jpg`;

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,

    alternates: {
      canonical: meta.canonicalUrl || `${SITE_URL}/`,
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
      url: SITE_URL,
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

export default async function Home() {
  const data = await getHomepageData();

  // Fallback if data fetch fails
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load homepage</h1>
          <p className="text-gray-600">Please check your Contentful configuration.</p>
        </div>
      </div>
    );
  }

  const { frequentlyAskedQuestions } = data;

  return (
    <>
      <HomeClient data={data} />

      {frequentlyAskedQuestions && frequentlyAskedQuestions.faqs.length >= 2 && (
        <FAQSection
          title={frequentlyAskedQuestions.title}
          faqs={frequentlyAskedQuestions.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}
    </>
  );
}