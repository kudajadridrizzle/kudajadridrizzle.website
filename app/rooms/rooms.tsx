'use client';

import CMSRoomSession from "@/components/about/CMSRoomSession";
import Faq from "@/components/faq";
import { IndividualRooms } from "@/components/home/individual-rooms";
import CMSHero from "@/components/rooms/cms-hero";
import aboutFaqData from "@/data/aboutFaqs.json";
import Header from "@/components/Header";


export default function Rooms() {
  return (
    <div>
      {/* <CMSHero
        title="Best Wayanad Accommodation Homestay Rooms" 
        backgroundImage="/images/5a8a9701-1-.jpg"
        overlayOpacity={0.6}
      /> */}
      <div className="relative">
        <CMSRoomSession
          heading='Best Wayanad Accommodations – Comfortable Stays at Kudajadri Drizzle'
          content='Our rooms blend the charm of a 100-year-old Jain Tharavadu with modern comforts. Choose from Premium, Deluxe, or Classic options, each offering spacious layouts, serene views, and essential amenities for a memorable stay. Experience some of the best accommodations in Wayanad at Kudajadri Drizzle, where heritage meets comfort in a tranquil setting.'
          isEditing={false}
          onContentChange={() => {}}
        />
      </div>
      <Header variant="solid" />
      <IndividualRooms/>
      {/* <Faq {...aboutFaqData} /> */}
    </div>
  );
}
