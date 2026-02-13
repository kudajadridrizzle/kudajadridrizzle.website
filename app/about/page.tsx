import { Metadata } from "next";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSession from "@/components/about/AboutSession";
import ImageTextSectionComponent from "@/components/ImageTextSection";
import FAQSection from "@/components/FAQSection";
import Wrapper from "@/components/layout/Wrapper";

import { getAboutPageContent } from "@/lib/contentful";
import { ImageTextSection } from "@/lib/contentful";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944734,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPageContent();

  return {
    title: data.meta.metaTitle,
    description: data.meta.metaDescription,
    alternates: {
      canonical: "https://www.kudajadridrizzle.com/about",
    },
    openGraph: {
      title: data.meta.metaTitle,
      description: data.meta.metaDescription,
      url: "https://www.kudajadridrizzle.com/about",
      siteName: "Kudajadri Drizzle",
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function About() {
  const data = await getAboutPageContent();

  const { hero, aboutSection, contentSection, faQs } = data;

  // Debug logs
  console.log("FAQs data:", faQs);
  console.log("FAQ items:", faQs?.faqs);

  return (
    <div>
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
        <AboutSession
          title={aboutSection.title}
          description={aboutSection.description}
          imageUrl={`https:${aboutSection.image.fields.file.url}`}
          imageAlt={aboutSection.imageAlt || aboutSection.title}
        />

        {/* CONTENT SECTIONS */}
        {contentSection && contentSection.length > 0 && (
          <section className="">
            <div className="mx-auto space-y-16">
              {contentSection.map(
                (section: ImageTextSection, index: number) => (
                  <ImageTextSectionComponent
                    key={section.internalName || index}
                    title={section.title}
                    description={section.description}
                    imageUrl={`https:${section.image.fields.file.url}`}
                    imageAlt={
                      section.imageAlt ||
                      section.image.fields.title ||
                      section.title
                    }
                    ctaVisible={section.ctaVisible}
                    ctaLabel={section.ctaLabel}
                    ctaLink={section.ctaLink}
                    imagePosition={
                      section.imagePosition ||
                      (index % 2 === 0 ? "left" : "right")
                    }
                  />
                )
              )}
            </div>
          </section>
        )}
      </Wrapper>

      {/* FAQ SECTION */}
      {faQs && faQs.faqs && faQs.faqs.length > 0 && (
        <FAQSection title={faQs.title} faqs={faQs.faqs} />
      )}
    </div>
  );
}