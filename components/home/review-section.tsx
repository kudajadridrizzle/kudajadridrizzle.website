"use client";

import Image from "next/image";

interface ReviewSectionProps {
  rating?: number;
  title: string;
  description: React.ReactNode;
  showButton?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

const ReviewSection = ({
  rating = 4.7,
  title,
  description,
  showButton = true,
  buttonLabel = "Read More Reviews",
  buttonUrl,
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

        {children && <div className="w-full mt-6">{children}</div>}

        {showButton && buttonUrl && (
          <a
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-albertSans text-sm sm:text-base font-medium text-primary transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {buttonLabel}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
