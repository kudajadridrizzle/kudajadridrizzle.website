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
import CardSection from "@/components/home/card-section";
import OurGallery from "@/components/home/our-gallery";
import GuestReviewsSection from "@/components/home/GuestReviewsSection";
import AttractionsSection from "@/components/home/AttractionsSection";
import  Header  from "@/components/Header";
export default function HomeClient() {
  const contentSection = useContentSection("home");

  return (
    <div>
      <Header />
      <VideoBackground />
      <AboutSession />
      <GallarySession />
      <RoomSession />
      <IndividualRooms />
      <GuestReviewsSection />
      <Amenities />
      <OurGallery />
      <ReviewSession />
      <LocationImage />
      <Direction />
      <ContentSection
        title={contentSection?.title}
        items={contentSection?.items ?? []}
      />
      <AttractionsSection />
    </div>
  );
}
