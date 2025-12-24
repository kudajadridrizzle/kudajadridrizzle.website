"use client";

import Image from "next/image";

interface ReviewSectionProps {
  rating?: number;
  title: string;
  description: React.ReactNode;
  showButton?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944734,76.0899646,17z/data=!4m11!3m10!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!9m1!1b1!16s%2Fg%2F1ptwp6yd6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

const ReviewSection = ({
  rating = 4.7,
  title,
  description,
  showButton = true,
  className = "",
  children,
}: ReviewSectionProps) => {
  return (
    <section
      aria-labelledby="reviews-heading"
      className={`bg-white px-4 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-10 text-center">
        {/* Rating */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/ReviwLeaf1.svg"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
          />

          <span
            className="font-albertSans text-primary text-5xl sm:text-7xl font-medium"
            aria-label={`${rating} out of 5 rating`}
          >
            {rating.toFixed(1)}
          </span>

          <Image
            src="/assets/ReviwLeaf2.svg"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
          />
        </div>

        {/* Heading */}
        <header className="max-w-3xl space-y-4">
          <h2
            id="reviews-heading"
            className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-primary"
          >
            {title}
          </h2>

          <p className="font-albertSans text-secondary text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </header>

        {/* Optional content */}
        {children && <div className="w-full mt-6">{children}</div>}

        {/* CTA */}
        {showButton && (
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-albertSans text-sm sm:text-base font-medium text-primary transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Read More Reviews
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default function ReviewSession() {
  return (
    <ReviewSection
      rating={4.6}
      title="Why Guests Choose Our Wayanad Homestay"
      description={
        <>
          Discover why guests recommend us among the best{" "}
          <strong>homestays in Wayanad</strong>. From warm welcomes to peaceful
          surroundings, guests often mention our hospitality, authentic
          home-cooked meals, and personal care. Read their stories and see why
          many return to relive the experience.
        </>
      }
    />
  );
}
