"use client";

import Header from "@/components/Header";
import AnotherRoomSession from "@/components/room-details/components/AnotherRoomSession";
import DeluxeRoomTips from "@/components/room-details/components/DeluxeRoomOverview";
import Hero from "@/components/room-details/components/Hero";
import RoomExperiences from "@/components/room-details/components/LocalExperiences";
import MorningSession from "@/components/room-details/components/MorningSession";
import RoomBookingCTA from "@/components/room-details/components/RoomBookingCTA";
import RoomExperience from "@/components/room-details/components/RoomExperience";
import RoomDetails from "@/components/room-details/components/RoomOverview";
import RoomServices from "@/components/room-details/components/RoomServices";
import RoomTips from "@/components/room-details/components/roomtips";
import WhoShouldBook from "@/components/room-details/components/WhoShouldBook";
import WhyThisRoom from "@/components/room-details/components/WhyThisRoom";
import { roomData } from "@/components/room-details/constants";
import Wrapper from "@/components/layout/Wrapper";
import { RoomPriceSession } from '@/components/room-details/components/RoomPriceSession';


type RoomId = "classic" | "premium" | "deluxe" | "deluxe-heritage" | string;

export default function RoomPageClient({ roomId }: { roomId: RoomId }) {
  const roomDataItem =
    roomData[roomId as keyof typeof roomData] || roomData["classic"];

  return (
    <div className="pt-[64px] sm:pt-[80px]">
      <Header variant="solid" />
      <Wrapper>
        <Hero />
        <RoomPriceSession />

        
      </Wrapper>
      <MorningSession roomData={roomDataItem} />
      <WhyThisRoom />
      <RoomServices />
      <RoomExperiences />
      <RoomDetails />
      <WhoShouldBook />
      <RoomExperience />
      <DeluxeRoomTips />
      <RoomTips />
      <RoomBookingCTA />

      <AnotherRoomSession
        roomType={roomDataItem.roomType}
        roomId={roomId}
      />
    </div>
  );
}
