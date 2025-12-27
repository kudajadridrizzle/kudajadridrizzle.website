"use client";

import AboutSession from "@/components/home/about-section";
import Amenities from "@/components/home/ameties";
import { ContentSection } from "@/components/home/content-section";
import Direction from "@/components/direction";
import GallarySession from "@/components/home/gallery-section";
import { IndividualRooms } from "@/components/home/individual-rooms";
import LocationImage from "@/components/home/location-section";
import ReviewSession from "@/components/home/review-section";
import RoomSession from "@/components/home/room-section";
import VideoBackground from "@/components/home/vedio-backgroud";
import { useContentSection } from "@/app/hooks/use-content-section";
import OurGallery from "@/components/home/our-gallery";
import GuestReviewsSection from "@/components/home/GuestReviewsSection";
import AttractionsSection from "@/components/home/AttractionsSection";
import  Header  from "@/components/Header";
import FAQSection from "@/components/home/FAQSection";
import type { AboutSectionData } from "@/lib/contentful";

export default function HomeClient({ aboutSectionData }: { aboutSectionData: AboutSectionData }) {
  const contentSection = useContentSection("home");

  return (
    <div>
      <Header />
      <VideoBackground />
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
      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <GuestReviewsSection />
      <Amenities />
      <OurGallery />
      <LocationImage />
      <Direction />
      <ContentSection
        title={contentSection?.title}
        items={contentSection?.items ?? []}
      />
      <AttractionsSection />
      <FAQSection />
    </div>
  );
}
