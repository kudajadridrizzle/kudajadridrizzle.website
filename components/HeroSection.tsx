'use client';

import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  preTitle?: string;
  title: string;
  bgImage: string;
  showButton?: boolean;
  buttonLabel?: string;
  redirectTo?: string;
}

const HeroSection = ({
  preTitle,
  title,
  bgImage,
  showButton = false,
  buttonLabel = 'Book Now',
  redirectTo = '/',
}: HeroSectionProps) => {
  const router = useRouter();

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end">
        <div className="flex flex-col gap-5 items-center pt-28 sm:pt-[12%] px-4 text-center">
          {preTitle && (
            <div className="flex items-center justify-center gap-2.5 w-full max-w-2xl mx-auto">
              <div className="border border-white flex-1 hidden sm:block" />
              <h2 className="uppercase text-white font-ivy text-sm sm:text-3xl">
                {preTitle}
              </h2>
              <div className="border border-white flex-1 hidden sm:block" />
            </div>
          )}

          <h1 className="text-white font-staylista text-4xl sm:text-6xl lg:text-7xl max-w-3xl leading-tight">
            {title}
          </h1>
        </div>

        {showButton && (
          <div className="flex justify-center pb-16 sm:pb-24 px-4">
            <button
              className="px-6 py-3 rounded-full border text-white hover:bg-white hover:text-amber-700 transition-colors duration-300"
              onClick={() => router.push(redirectTo)}
            >
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
