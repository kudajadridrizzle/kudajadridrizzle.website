import AboutSection from "@/components/about/about-section";
import Faq from "@/components/faq";
import ReviewSession from "@/components/home/review-section";
import aboutFaqData from "@/data/aboutFaqs.json";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Kalpetta homestays for families: Best rated homestays in Kalpetta",
  description:
    "Top rated Kalpetta homestays for families with comfortable rooms, swimming pools & food. Find the best homestays in Kalpetta for a peaceful, relaxing stay.",
};

export default function About() {
  const faqData = aboutFaqData;

  return (
    <div>
      <Header />
      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Your Ideal Choice for Homestays in Kalpetta"
        bgImage="/AboutHero.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />
      <AboutSection />
      <ReviewSession />
    </div>
  );
}
