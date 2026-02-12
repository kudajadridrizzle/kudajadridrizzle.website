"use client";

import Header from "@/components/Header";
import AnotherRoomSession from "@/components/room-details/components/AnotherRoomSession";
import Hero from "@/components/room-details/components/Hero";
import Wrapper from "@/components/layout/Wrapper";
import { RoomPriceSession } from "@/components/room-details/components/RoomPriceSession";
import EditorialSection from "@/components/room-details/components/EditorialSection";
import CallToAction from "@/components/room-details/components/CallToAction";
import { PageTypeThree } from "@/lib/contentful";

type RoomPageClientProps = {
  roomData: PageTypeThree;
};

export default function RoomPageClient({ roomData }: RoomPageClientProps) {
  return (
    <div className="pt-[64px] sm:pt-[80px]">
      <Header variant="solid" />
      <Wrapper>
        {/* Pass heroImages data to Hero component */}
        <Hero heroImages={roomData.heroImages} />

        {/* Pass card and description data to RoomPriceSession component */}
        <RoomPriceSession 
          card={roomData.card} 
          description={roomData.description}
        />

        {/* Pass contentSection array to EditorialSection component */}
        <EditorialSection sections={roomData.contentSection} />
      </Wrapper>

      {/* Pass ctaSection data to CallToAction component */}
      <CallToAction ctaData={roomData.ctaSection} />

      {/* Keep your existing AnotherRoomSession component */}
      <AnotherRoomSession
        roomType={roomData.card.roomName}
        roomId={roomData.slug}
      />
    </div>
  );
}