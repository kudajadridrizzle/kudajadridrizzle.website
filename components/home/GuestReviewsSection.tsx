'use client';

import ReviewCard from "./ReviewCard";

const GuestReviewsSection = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background */}
      <img
        src="/assets/drone1.jpg"
        alt="Aerial view of Kudajadri Drizzle Homestay in Wayanad"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-xl sm:max-w-2xl flex flex-col gap-4 sm:gap-6">

          <ReviewCard
            title="Best Homestay in Wayanad! Loved It!"
            review="This place... we have fallen in love with. Truly! This homestay is clean and well maintained. Hygiene is given importance. Food is awesome with all the Kerala delicacies served as..."
            author="Uma Vijay, Bangalore, India"
          />

          <ReviewCard
            title="Cool Homestays for Family :)"
            review="Kudajadri is the best homestay which I have seen so far. I have stayed here for two times and it was an awesome experience. The accommodation, food and hospitality exceeded all expectations."
            author="Anantha Acharya, Bangalore, India"
          />

          <ReviewCard
            title="Rejuvenating Experience in #1 Home Stay in Wayanad!"
            review="Here's the real 'Home stay'. You feel like you are at home and people around are taking care...making you feel at home. Thanks Vinoop, Ganesh uncle and family for making our stay pleasant and very comfortable. The location of Kudajadri Drizzles is ideal - almost at the center of Waynad district and easily you can reach the major attractions/tourist spots. Make sure you get route/directions from Vinoop. That would be better than just following the google maps."
            author="Ashok Karinghat, Bangalore, India"
          />

        </div>
      </div>
    </section>
  );
};

export default GuestReviewsSection;
