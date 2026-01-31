"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Amenities from "@/components/home/ameties";
import { ContentSection } from "@/components/home/content-section";
import Direction from "@/components/direction";
import { IndividualRooms } from "@/components/home/individual-rooms";
import WayanadOverviewSection from "@/components/home/WayanadOverviewSection";
import { useContentSection } from "@/app/hooks/use-content-section";
import GuestReviewsSection from "@/components/home/GuestReviewsSection";
import GallerySection from "@/components/home/GallerySection";
import AttractionsSection from "@/components/home/AttractionsSection";
import Wrapper from "../layout/Wrapper";
import SectionIntro from "../sectionIntro";
import EditorialSlider from "../home/EditorialSlider";
import ImageTextSectionComponent from "../ImageTextSection";
import { PageTypeOne } from "@/types/contentful";

interface HomeClientProps {
  data: PageTypeOne;
}

export default function HomeClient({ data }: HomeClientProps) {
  const contentSection = useContentSection("home");

  const {
    hero,
    aboutSection,
    roomsSection,
    individualRooms,
    reviewSection,
    amenitiesSection,
    gallerySection,
    wayanadSection,
    directionSection,
    featureSection,
  } = data;

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <HeroSection
        preTitle={hero.preTitle}
        title={hero.title}
        bgImage={`https:${hero.backgroundImage.fields.file.url}`}
        showButton={hero.ctaVisible}
        buttonLabel={hero.ctaLabel}
        redirectTo={hero.ctaLink}
      />

      <Wrapper>

        <section className="py-10">
          <SectionIntro
            preTitle={aboutSection.preTitle}
            title={aboutSection.title}
            description={aboutSection.description}
            enableReadMore={true}
          />
        </section>




        {individualRooms.length > 0 && (
          <section className="py-16">
            {roomsSection.length > 0 && (
              <SectionIntro
                preTitle={roomsSection[0].preTitle}
                title={roomsSection[0].title}
                description={roomsSection[0].description}
                enableReadMore={true}
              />
            )}
            <div className="space-y-16">
              {individualRooms.map((room, index) => (
                <ImageTextSectionComponent
                  key={room.internalName || index}
                  title={room.title}
                  description={room.description}
                  imageUrl={`https:${room.image.fields.file.url}`}
                  imageAlt={room.imageAlt}
                  ctaVisible={room.ctaVisible}
                  ctaLabel={room.ctaLabel}
                  ctaLink={room.ctaLink}
                  imagePosition={room.imagePosition || (index % 2 === 0 ? "right" : "left")}
                />
              ))}
            </div>
          </section>
        )}

      </Wrapper>

      <GuestReviewsSection
        preTitle={reviewSection.preTitle}
        title={reviewSection.title}
        description={reviewSection.description}
      />

      <Amenities
        preTitle={amenitiesSection.preTitle}
        title={amenitiesSection.title}
        description={amenitiesSection.description}
      />

      <GallerySection
        preTitle={gallerySection.preTitle}
        title={gallerySection.title}
        description={gallerySection.description}
      />

      <WayanadOverviewSection
        preTitle={wayanadSection.preTitle}
        title={wayanadSection.title}
        description={wayanadSection.description}
      />

      <Direction
        preTitle={directionSection.preTitle}
        title={directionSection.title}
        description={directionSection.description}
      />

      {featureSection.length > 0 && (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-16">
            {featureSection.map((feature, index) => (
              <ImageTextSectionComponent
                key={feature.internalName || index}
                title={feature.title}
                description={feature.description}
                imageUrl={`https:${feature.image.fields.file.url}`}
                imageAlt={feature.imageAlt}
                ctaVisible={feature.ctaVisible}
                ctaLabel={feature.ctaLabel}
                ctaLink={feature.ctaLink}
                imagePosition={feature.imagePosition || (index % 2 === 0 ? "left" : "right")}
              />
            ))}
          </div>
        </section>
      )}
      <AttractionsSection />
      <EditorialSlider/>
    </div>
  );
}