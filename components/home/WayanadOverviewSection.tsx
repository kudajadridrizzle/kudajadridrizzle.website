import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { renderRichText } from "@/lib/renderRichText";

interface WayanadOverviewSectionProps {
  preTitle?: string;
  title?: string;
  description?: Document;
}

const WayanadOverviewSection = ({
  preTitle = "Wayanad, Kerala",
  title = "Nature, Comfort, and Serenity Await",
  description,
}: WayanadOverviewSectionProps) => {
  // Default description
  const defaultDescriptionText = (
    <>
      <strong className="font-semibold">Wayanad, Kerala</strong>, is a serene
      paradise nestled in the Western Ghats, renowned for its lush green
      landscapes, misty hills, and rich biodiversity. This enchanting destination
      offers a perfect blend of nature, adventure, and culture, making it ideal
      for travelers seeking tranquility and exploration. From sprawling tea and
      spice plantations to pristine waterfalls and wildlife sanctuaries, Wayanad
      captivates every visitor. Its charming villages, historical sites, and
      vibrant local traditions add depth to the experience. Whether you are
      trekking through dense forests, visiting ancient temples, or relaxing amidst
      the scenic beauty, Wayanad promises an unforgettable journey into the heart
      of Kerala's natural and cultural heritage.
    </>
  );

  return (
    <section className="bg-primary">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:gap-16 min-h-[520px]">
          {/* Image - Hardcoded */}
          <div className="relative w-full sm:w-1/2 min-h-[280px] sm:min-h-full">
            <Image
              src="/assets/locationImage.webp"
              alt="Scenic view of Wayanad, Kerala with lush green hills and plantations"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Content - From Contentful */}
          <div className="flex w-full sm:w-1/2 items-center">
            <div className="w-full max-w-xl mx-auto py-10 sm:py-0">
              <div className="flex flex-col gap-6">
                {/* Pre-title (Location) */}
                <h2 className="font-albertSans text-sm uppercase tracking-widest text-white/80">
                  {preTitle}
                </h2>

                {/* Title */}
                <span className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {title}
                </span>

                {/* Description */}
                {description ? (
                  <div className="font-albertSans text-base sm:text-lg leading-relaxed text-secondary rich-text-content">
                    {renderRichText(description)}
                  </div>
                ) : (
                  <p className="font-albertSans text-base sm:text-lg leading-relaxed text-secondary">
                    {defaultDescriptionText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayanadOverviewSection;