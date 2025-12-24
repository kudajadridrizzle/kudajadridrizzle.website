import Image from "next/image";

const LocationImage = () => {
  return (
    <section className="bg-primary">
      {/* Desktop container padding only */}
      <div className="mx-auto max-w-7xl sm:px-8 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:min-h-[520px]">
          {/* Image */}
          <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
            <Image
              src="/assets/locationImage.webp"
              alt="Scenic view of Wayanad, Kerala with lush green hills and plantations"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex w-full items-center sm:w-1/2">
            <div className="w-full px-4 py-10 sm:px-16 sm:py-0">
              <div className="flex max-w-xl flex-col gap-6 sm:justify-center">
                {/* Pre-title */}
                <span className="font-albertSans text-sm uppercase tracking-widest text-white">
                  Wayanad, Kerala
                </span>

                {/* Title */}
                <h2 className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-white">
                  Nature, Comfort, and Serenity Await
                </h2>

                {/* Description */}
                <p className="font-albertSans text-base sm:text-lg leading-relaxed text-secondary">
                  Wayanad, Kerala, is a serene paradise nestled in the Western Ghats, renowned for its lush green landscapes, misty hills, and rich biodiversity. This enchanting destination offers a perfect blend of nature, adventure, and culture, making it ideal for travelers seeking tranquility and exploration. From sprawling tea and spice plantations to pristine waterfalls and wildlife sanctuaries, Wayanad captivates every visitor. Its charming villages, historical sites, and vibrant local traditions add depth to the experience. Whether you are trekking through dense forests, visiting ancient temples, or relaxing amidst the scenic beauty, Wayanad promises an unforgettable journey into the heart of Kerala’s natural and cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationImage;
