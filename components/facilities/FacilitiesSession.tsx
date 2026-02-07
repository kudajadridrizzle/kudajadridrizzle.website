import Image from "next/image";

const FacilitiesSession = () => {
  return (
    <article className="py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-0 lg:gap-[64px]">

        {/* Left – Sticky Image */}
        <div className="w-full h-full">
          <div className="sticky top-24 aspect-square relative">
            <Image
              src="/images/pool34.jpg"
              alt="Homestay in Wayanad with swimming pool"
              fill
              priority
              className="object-cover rounded-[16px] shadow-lg"
            />
          </div>
        </div>

        {/* Right – SEO Content */}
        <div className="flex flex-col justify-center items-start w-full h-full">

          {/* Section Heading */}
          <h2 className="font-ivy sm:text-[44px] mobile:text-[32px] mb-6 text-primary">
            Homestay in Wayanad with Swimming Pool
          </h2>

          <div className="flex flex-col gap-4 font-albertSans sm:text-xl mobile:text-base text-[#6E6E6E]">

            <p>
              Welcome to Kudajadri Drizzle Homestay — a heritage Jain Tharavadu nestled in
              the green hills of Wayanad. Our poolside homestay blends traditional charm
              with modern comfort.
            </p>

            <p>
              Enjoy spacious rooms, a private swimming pool, and warm hospitality —
              making it one of the most peaceful stays in Wayanad.
            </p>

            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Why Choose Our Poolside Homestay?
            </h3>

            <ul className="list-disc list-inside pl-2">
              <li>Swimming pool with scenic views</li>
              <li>Private space for families</li>
              <li>Heritage experience with modern amenities</li>
            </ul>

            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Things to Do Nearby
            </h3>

            <ol className="list-decimal list-inside pl-2">
              <li>Visit waterfalls and tea plantations</li>
              <li>Explore wildlife sanctuaries</li>
              <li>Enjoy Wayanad cuisine and culture</li>
            </ol>

            <h3 className="font-ivy font-semibold text-black sm:text-2xl mobile:text-xl mt-6">
              Comfort Meets Nature
            </h3>

            <p>
              Whether you’re travelling as a couple, family, or solo, Kudajadri Drizzle
              offers a memorable poolside stay in Wayanad.
            </p>

          </div>
        </div>
      </div>
    </article>
  );
};

export default FacilitiesSession;
