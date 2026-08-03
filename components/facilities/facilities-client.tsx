"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FacilitiesSession from "@/components/facilities/FacilitiesSession";
import ListSession from "@/components/facilities/ListSession";
import ContentSection from "@/components/ContentSection";
import FAQSection from "@/components/FAQSection";
import Wrapper from "@/components/layout/Wrapper";
import SectionIntro from "@/components/sectionIntro";
import { FacilitiesPageData } from "@/lib/contentful-facilities";

interface FacilitiesClientProps {
  data: FacilitiesPageData;
}

export default function FacilitiesClient({ data }: FacilitiesClientProps) {
  const { hero, swimmingPoolSection, contentSections, faqs } = data;

  return (
    <div>
      <Header />

      {/* HERO */}
      <HeroSection
        preTitle={hero.preTitle}
        title={hero.title}
        bgImage="/FacilitiesHero.jpg"
        showButton={hero.ctaVisible}
        buttonLabel={hero.ctaLabel}
        redirectTo={hero.ctaLink}
      />

      <Wrapper>
        {/* SWIMMING POOL INTRO */}
        <section className="py-10">
          <SectionIntro
            preTitle={swimmingPoolSection.preTitle}
            title={swimmingPoolSection.title}
            description={swimmingPoolSection.description}
            enableReadMore
          />
        </section>


        <ListSession />

        <FacilitiesSession />

        {/* CONTENT SECTIONS */}
        <ContentSection sections={contentSections} />
      </Wrapper>

      {/* FAQs SECTION */}
      {faqs && 
       faqs.faqs && 
       Array.isArray(faqs.faqs) && 
       faqs.faqs.length >= 2 &&
       faqs.faqs.every((faq) => faq?.question && faq?.answer) && (
        <FAQSection
          title={faqs.title}
          faqs={faqs.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}
    </div>
  );
}
