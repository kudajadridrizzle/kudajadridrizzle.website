import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/about/about-section";
import FAQSection from "@/components/FAQSection";
import ReviewSection from "@/components/home/review-section";

import { getPageFAQBySlug } from "@/lib/getFaqs";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944734,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu";

const META_TITLE =
  "Kalpetta homestays for families: Best rated homestays in Kalpetta";

const META_DESCRIPTION =
  "Top rated Kalpetta homestays for families with comfortable rooms, swimming pools & food. Find the best homestays in Kalpetta for a peaceful, relaxing stay.";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: "https://www.kudajadridrizzle.com/about",
  },

  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.kudajadridrizzle.com/about",
    siteName: "Kudajadri Drizzle",
    type: "website",
    locale: "en_IN",
  },
};

export default async function About() {
  const faqData = await getPageFAQBySlug("about");

  return (
    <div>
      <Header />

      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Your Ideal Choice for Homestays in Kalpetta"
        bgImage="/AboutHero.jpg"
        showButton
        buttonLabel="Book Now"
        redirectTo="/contact"
      />

      <AboutSection />

      <ReviewSection
        rating={4.6}
        title="Why Guests Choose Our Kalpetta Homestay"
        description={
          <>
            Discover why guests recommend us among the best{" "}
            <strong>homestays in Wayanad</strong>. From warm welcomes to peaceful
            surroundings, guests often mention our hospitality and care.
          </>
        }
        buttonUrl={GOOGLE_REVIEWS_URL}
      />

      {faqData && faqData.faqs.length >= 2 && (
        <FAQSection title={faqData.title} faqs={faqData.faqs} />
      )}
    </div>
  );
}
