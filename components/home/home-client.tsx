"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Amenities from "@/components/home/ameties";
import BestHomestaySection from "@/components/home/BestHomestaySection";
import Direction from "@/components/direction";
import GallerySection from "@/components/home/GallerySection";
import GuestReviewsSection from "@/components/home/GuestReviewsSection";
import WayanadOverviewSection from "@/components/home/WayanadOverviewSection";
import EditorialSlider from "@/components/home/EditorialSlider";
import ImageTextSectionComponent from "@/components/ImageTextSection";
import SectionIntro from "@/components/sectionIntro";
import Wrapper from "@/components/layout/Wrapper";

import { PageTypeOne, ImageTextSection } from "@/lib/contentful";

interface HomeClientProps {
  data: PageTypeOne;
}

export default function HomeClient({ data }: HomeClientProps) {
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
    attractionsSection,
  } = data;

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
        {/* ABOUT */}
        <section className="py-10">
          <SectionIntro
            preTitle={aboutSection.preTitle}
            title={aboutSection.title}
            description={aboutSection.description}
            enableReadMore={false}
          />
        </section>

        <BestHomestaySection />

        {/* ROOMS */}
        {individualRooms.length > 0 && (
          <section className="py-16 space-y-16">
            {roomsSection.length > 0 && (
              <SectionIntro
                preTitle={roomsSection[0].preTitle}
                title={roomsSection[0].title}
                description={roomsSection[0].description}
                enableReadMore
              />
            )}

            {individualRooms.map(
              (room: ImageTextSection, index: number) => (
                <ImageTextSectionComponent
                  key={room.internalName || index}
                  title={room.title}
                  description={room.description}
                  imageUrl={`https:${room.image.fields.file.url}`}
                  imageAlt={
                    room.imageAlt ||
                    room.image.fields.title ||
                    room.title
                  }
                  ctaVisible={room.ctaVisible}
                  ctaLabel={room.ctaLabel}
                  ctaLink={room.ctaLink}
                  imagePosition={
                    room.imagePosition ||
                    (index % 2 === 0 ? "right" : "left")
                  }
                />
              )
            )}
          </section>
        )}
      </Wrapper>

            {/* GALLERY */}
            <GallerySection
        preTitle={gallerySection.preTitle}
        title={gallerySection.title}
        description={gallerySection.description}
      />

      
      {/* AMENITIES */}
      <Amenities
        preTitle={amenitiesSection.preTitle}
        title={amenitiesSection.title}
        description={amenitiesSection.description}
      />

      {/* REVIEWS */}
      <GuestReviewsSection
        preTitle={reviewSection.preTitle}
        title={reviewSection.title}
        description={reviewSection.description}
      />

      {/* WAYANAD */}
      <WayanadOverviewSection
        preTitle={wayanadSection.preTitle}
        title={wayanadSection.title}
        description={wayanadSection.description}
      />

      {/* DIRECTION */}
      <Direction
        preTitle={directionSection.preTitle}
        title={directionSection.title}
        description={directionSection.description}
      />

      {/* FEATURES */}
      {featureSection.length > 0 && (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-16">
            {featureSection.map(
              (feature: ImageTextSection, index: number) => (
                <ImageTextSectionComponent
                  key={feature.internalName || index}
                  title={feature.title}
                  description={feature.description}
                  imageUrl={`https:${feature.image.fields.file.url}`}
                  imageAlt={
                    feature.imageAlt ||
                    feature.image.fields.title ||
                    feature.title
                  }
                  ctaVisible={feature.ctaVisible}
                  ctaLabel={feature.ctaLabel}
                  ctaLink={feature.ctaLink}
                  imagePosition={
                    feature.imagePosition ||
                    (index % 2 === 0 ? "left" : "right")
                  }
                />
              )
            )}
          </div>
        </section>
      )}

      {/* EDITORIAL / ATTRACTIONS SLIDER */}
      {attractionsSection?.length > 0 && (
        <EditorialSlider slides={attractionsSection} />
      )}
    </div>
  );
}
