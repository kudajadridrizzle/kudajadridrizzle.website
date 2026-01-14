"use client";

const heading = "Our Gallery - Wayanad Homestays Visual Tour";

const content =
  "Take a visual tour of our beautiful property through our gallery and video tour. Explore images of our well-appointed rooms, traditional architecture, and serene outdoor spaces surrounded by lush greenery. See the inviting dining area where guests enjoy authentic home-cooked meals and the cozy corners perfect for relaxation. Our video tour offers a complete walkthrough, showcasing every detail that makes our homestay in Wayanad truly unique. From landscaped gardens to charming interiors, each photo captures the comfort, warmth, and natural beauty you’ll find here. Let our property gallery inspire your next stay at one of the finest homestays in Wayanad.";

export default function GalleryContent() {
  return (
    <div className="pt-14 sm:pt-32 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row gap-10">
        <h2 className="flex-1 text-primary font-ivy text-[32px] sm:text-[44px]">
          {heading}
        </h2>

        <div className="flex-1 text-secondary sm:text-xl font-albertSans">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
