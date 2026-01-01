'use client';

import CMSRoomSession from "@/components/about/CMSRoomSession";
import { IndividualRooms } from "@/components/home/individual-rooms";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Rooms() {
  return (
    <div>
      <Header />
      <HeroSection
        preTitle="Kudajadri Drizzle"
        title="Best Wayanad Accommodation Homestay Rooms"
        bgImage="RoomsHero.jpg"
        showButton={true}
        buttonLabel="Book Now"
        redirectTo="/contact"
      />

      <main className="pt-[112px] sm:pt-[88px]">
        <CMSRoomSession
          heading="Best Wayanad Accommodations – Comfortable Stays at Kudajadri Drizzle"
          content="Our rooms blend the charm of a 100-year-old Jain Tharavadu with modern comforts. Choose from Premium, Deluxe, or Classic options, each offering spacious layouts, serene views, and essential amenities for a memorable stay. Experience some of the best accommodations in Wayanad at Kudajadri Drizzle, where heritage meets comfort in a tranquil setting."
          isEditing={false}
          onContentChange={() => { }}
        />

        <IndividualRooms />
      </main>
    </div>
  );
}
