'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const AboutSession = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 lg:px-[12%]">
      <div className="flex flex-col sm:flex-row gap-12">

        {/* LEFT – Sticky Title */}
        <div className="sm:w-[35%]">
          <div className="sm:sticky sm:top-32">
            <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
              About us
            </p>

            <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary leading-tight">
              Kudajadri Drizzle – #1 in Wayanad Homestays & Top Homestays in Wayanad
            </h1>
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="sm:w-[65%] flex flex-col gap-8">

          {/* CONTENT WITH FADE */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
              expanded ? "max-h-[4000px]" : "max-h-[420px]"
            }`}
          >
            <div className="text-secondary font-albertSans sm:text-xl prose prose-p:my-0 prose-strong:font-semibold prose-a:text-primary">
              
              <h2>
                <strong>Wayanad Homestays with Heritage Charm and Modern Comfort</strong>
              </h2>

              <p>
                <strong>Wayanad Homestays</strong> offer a unique way to experience Kerala’s rich culture, and Kudajadri Drizzle stands out as one of the most authentic options available. Located in a 100-year-old Jain Tharavadu, this heritage property brings together tradition, comfort, and warm hospitality.
              </p>

              <p>
                Unlike typical hotels or cottages, this <strong>Wayanad Homestay</strong> reflects local architecture and lifestyle. Spacious wooden interiors, antique furnishings, and a serene village setting create an immersive experience for couples, families, and solo travelers alike.
              </p>

              <h2>
                <strong>Why Kudajadri Drizzle is the Best Homestay in Wayanad</strong>
              </h2>

              <p>
                Recognized among the <strong>Best Homestays in Wayanad</strong>, Kudajadri Drizzle is perfectly located near attractions like Edakkal Caves, Soochipara Waterfalls, and Banasura Sagar Dam, allowing guests to explore <a href="/wayanad">Wayanad</a> effortlessly.
              </p>

              <h2>
                <strong>Homestays in Wayanad with Authentic Kerala Cuisine</strong>
              </h2>

              <p>
                Guests enjoy freshly prepared Kerala meals, including vegetarian Jain options and traditional local dishes. Prepared using locally sourced ingredients, each meal adds warmth and authenticity to the stay.
              </p>

              <h2>
                <strong>A Peaceful Homestay in Wayanad for Every Traveler</strong>
              </h2>

              <p>
                With modern amenities like WiFi, 24/7 hot water, free parking, and tranquil surroundings, Kudajadri Drizzle blends comfort with heritage, making it ideal for both short getaways and extended stays.
              </p>

              <h2>
                <strong>Book the Best Homestay in Wayanad Today</strong>
              </h2>

              <p>
                Highly rated among <strong>Homestays in Wayanad</strong>, Kudajadri Drizzle offers more than just accommodation—it delivers an experience rooted in culture, calm, and care.
              </p>

              <p>
                Book your stay today and discover why guests call Kudajadri Drizzle the <strong>Best Homestay in Wayanad</strong>.
              </p>
            </div>

            {/* GRADIENT FADE */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          {/* READ MORE BUTTON */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start text-primary font-albertSans text-sm tracking-[1.6px] uppercase hover:opacity-70 transition"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* CTA BUTTON */}
          <button
            className="px-6 py-3 rounded-full bg-primary text-white font-albertSans w-fit"
            onClick={() => router.push('/about')}
          >
            Explore Our Story
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutSession;
