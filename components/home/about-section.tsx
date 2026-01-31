"use client";

import { useState } from "react";

export default function AboutSession() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-14 sm:py-32">
      <div className="flex flex-col sm:flex-row gap-12">

        {/* LEFT */}
        <div className="sm:w-[35%]">
          <div className="sm:sticky sm:top-32">
            <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
              About
            </p>

            <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary leading-tight">
              Wayanad Homestays with Heritage Charm and Modern Comfort
            </h1>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sm:w-[65%] flex flex-col gap-8">

          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              !expanded ? "max-h-[420px]" : "max-h-[5000px]"
            }`}
          >
            <div className="text-secondary font-albertSans sm:text-xl space-y-6">

              <p>
                Wayanad Homestays offer a unique way to experience Kerala’s rich
                culture, and Kudajadri Drizzle stands out as one of the most
                authentic options available. Located in a 100-year-old Jain
                Tharavadu, this heritage property brings together tradition,
                comfort, and warm hospitality. Set in a peaceful village, it's a
                perfect escape from city life and a great place to unwind in
                nature.
              </p>

              <p>
                Unlike typical hotels or cottages, this Wayanad Homestay is
                designed to reflect local architecture and lifestyle. Spacious
                wooden interiors, antique furnishings, and a serene atmosphere
                create an immersive experience. Whether you're visiting with
                family, your partner, or exploring solo, the homestay makes
                everyone feel at home with its personal touch and attention to
                detail.
              </p>

              <h2 className="font-semibold text-primary">
                Why Kudajadri Drizzle is the Best Homestay in Wayanad
              </h2>

              <p>
                Recognized among the Best Homestays in Wayanad, Kudajadri Drizzle
                is centrally located for easy access to popular sites like
                Edakkal Caves, Soochipara Waterfalls, and Banasura Sagar Dam. This
                ideal location allows travelers to explore the best of Wayanad
                without long travel times. The hosts offer expert travel advice
                and help you make the most of your trip.
              </p>

              <h2 className="font-semibold text-primary">
                Homestays in Wayanad That Serve Authentic Kerala Cuisine
              </h2>

              <p>
                One of the highlights of staying at Kudajadri Drizzle is the
                food. Guests enjoy home-cooked Kerala meals, with both
                vegetarian Jain options and traditional local flavors. Meals
                are prepared with fresh, local ingredients and served in a
                homely setting that enhances the experience.
              </p>

              <h2 className="font-semibold text-primary">
                A Peaceful Homestay in Wayanad for All Types of Travelers
              </h2>

              <p>
                From reliable WiFi and 24/7 hot water to free parking and
                peaceful surroundings, Kudajadri Drizzle provides modern
                comforts without losing its traditional touch. This Homestay
                in Wayanad is ideal for anyone seeking a blend of nature,
                culture, and comfort in one place.
              </p>

              <h2 className="font-semibold text-primary">
                Book the Best Homestay in Wayanad Today
              </h2>

              <p>
                Highly rated among Homestays in Wayanad, Kudajadri Drizzle is
                more than just a place to stay—it's a place to experience.
                Whether you're here for a weekend getaway or a longer
                vacation, this property offers everything you need for a
                memorable trip.
              </p>

              <p>
                Book your stay today and discover why Kudajadri Drizzle is
                loved by guests as the Best Homestay in Wayanad.
              </p>

            </div>

            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start text-primary font-albertSans text-sm tracking-[1.6px] uppercase"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

        </div>
      </div>
    </div>
  );
}
