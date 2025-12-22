import AboutSection from "@/components/about/about-section";
import Faq from "@/components/faq";
import RecognitionSession from "@/components/about/recognition-session";
import Direction from "@/components/direction";
import ReviewSession from "@/components/home/review-section";
import aboutFaqData from "@/data/aboutFaqs.json";
import Header from "@/components/Header";

export const metadata = {
  title: "Kalpetta homestays for families: Best rated homestays in Kalpetta",
  description:
    "Top rated Kalpetta homestays for families with comfortable rooms, swimming pools & food. Find the best homestays in Kalpetta for a peaceful, relaxing stay.",
};

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/aboutHero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-white font-staylista sm:text-[72px] h-[100vh] flex flex-col items-center justify-end mobile:text-5xl">
          <span className="text-center">Kudajdri Drizzle</span>
          <h2 className="mb-[120px] text-center">
            Your Ideal Choice for Homestays in Kalpetta
          </h2>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const faqData = aboutFaqData;

  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ReviewSession />
      {/* <RecognitionSession /> */}
      {/* <Direction
        title="Kalpetta Homestays with Pools – How to Reach"
        description="Reaching our Kudajadri Drizzle Wayanad Homestay is simple and hassle-free. The property is well-connected by road from Kozhikode, Bengaluru, and Mysuru, making travel convenient by car, taxi, or bus."
        buttonText="View on Map"
        showMap={true}
      /> */}
      <Faq {...faqData} />
    </div>
  );
}
