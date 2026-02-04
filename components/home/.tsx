"use client";

import ExpandableText from "../../components/ExpandableText";

const ROOM_TEXT =
  "Wayanad Homestays invite you to explore our comfortable rooms, designed for a relaxing and cozy stay. Each room combines modern amenities with a warm, homely atmosphere, ensuring a memorable experience. Perfect for nature lovers and travelers seeking peace, our Wayanad homestays offer comfort, convenience, and stunning surroundings.";

export default function RoomSession() {
  return (
    <section className="bg-white px-4 py-8 sm:px-[12%] sm:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">

        {/* Left – 40% */}
        <header className="w-full sm:w-[40%]">
          <p className="mb-4 text-sm uppercase tracking-[1.6px] text-primary font-albertSans">
            Our Rooms
          </p>

          <h2 className="font-ivy text-[28px] sm:text-[44px] leading-tight">
            Wayanad Homestays – Explore Our Rooms
          </h2>
        </header>

        <ExpandableText
          text={ROOM_TEXT}
          maxChars={400}
          className="w-full sm:w-[60%] font-albertSans text-secondary text-base sm:text-xl leading-relaxed"
        />

      </div>
    </section>
  );
}
