'use client';

import { ImagePreviewGrid } from '@/lib/contentful';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

/* -------------------- Image Carousel (Mobile) -------------------- */
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <div
        {...handlers}
        className="relative w-full h-full overflow-hidden rounded-lg"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={image}
                alt={`Room view ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition z-10"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition z-10"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* -------------------- Hero Section -------------------- */

type HeroProps = {
  heroImages: ImagePreviewGrid;
};

const Hero = ({ heroImages }: HeroProps) => {
  // Convert Contentful assets to image URLs
  const roomImages = heroImages.images.map(
    (asset) => `https:${asset.fields.file.url}`
  );

  if (!roomImages || roomImages.length === 0) {
    return <div>No images available</div>;
  }

  // Get first 5 images (or all if less than 5)
  const [imageOne, imageTwo, imageThree, imageFour, imageFive] = roomImages;

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block w-full h-[80vh] py-12">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-full">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img
              src={imageOne}
              alt="Room overview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Images */}
          {[imageTwo, imageThree, imageFour, imageFive]
            .filter(Boolean)
            .map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl w-full h-full"
              >
                <img
                  src={img}
                  alt={`Room view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 pt-8 pb-8 mt-4">
        <div className="relative w-full overflow-hidden rounded-xl aspect-video">
          <ImageCarousel images={roomImages} />
        </div>
      </div>
    </div>
  );
};

export default Hero;