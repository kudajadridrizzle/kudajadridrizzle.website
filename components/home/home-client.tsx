"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSession from "@/components/home/about-section";
import Amenities from "@/components/home/ameties";
import { ContentSection } from "@/components/home/content-section";
import Direction from "@/components/direction";
import GallarySession from "@/components/home/gallery-section";
import { IndividualRooms } from "@/components/home/individual-rooms";
import RoomSession from "@/components/home/room-section";
import WayanadOverviewSection from "@/components/home/WayanadOverviewSection";
import { useContentSection } from "@/app/hooks/use-content-section";
import OurGallery from "@/components/home/our-gallery";
import GuestReviewsSection from "@/components/home/GuestReviewsSection";
import AttractionsSection from "@/components/home/AttractionsSection";
import Wrapper from "../layout/Wrapper";
import type { AboutSectionData } from "@/lib/contentful";

export default function HomeClient({
  aboutSectionData,
}: {
  aboutSectionData: AboutSectionData;
}) {
  const contentSection = useContentSection("home");

  return (
    <div>
      <Header />
      <HeroSection
        preTitle="Kudajadri Drizzle Homestay in Wayanad"
        title="Experience True Serenity"
        bgImage="/assets/locationImage.webp"
        showButton
        buttonLabel="Book Now"
        redirectTo="/contact"
      />

      <Wrapper>
        {aboutSectionData && (
          <AboutSession
            preTitle={aboutSectionData.preTitle}
            title={aboutSectionData.title}
            description={aboutSectionData.description}
            enableReadMore={aboutSectionData.enableReadMore}
            ctaLabel={aboutSectionData.ctaLabel}
            ctaLink={aboutSectionData.ctaLink}
          />
        )}
      </Wrapper>

      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <GuestReviewsSection />
      <Amenities />
      <OurGallery />
      <WayanadOverviewSection />
      <Direction />

      <ContentSection
        title={contentSection?.title}
        items={contentSection?.items ?? []}
      />

      <AttractionsSection />
    </div>
  );
}
