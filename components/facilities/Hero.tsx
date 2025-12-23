import Image from "next/image";
import Header from "@/components/Header";
const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh]">
      {/* Background Image */}
      <Image
        src="/images/pool34.jpg"
        alt="Facilities and amenities at Kudajadri Drizzle Homestay"
        fill
        priority
        className="object-cover"
      />
      <Header />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="h-full px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col items-center justify-end gap-4 text-white text-center">
          <h1 className="font-staylista text-[36px] sm:text-[72px] leading-tight">
            Facilities & Amenities at Kudajadri Drizzle Homestay
          </h1>

          <div className="text-[#CACACA] text-base sm:text-xl font-albertSans flex flex-col gap-2 max-w-3xl">
            <span>
              Welcome to our 100-year-old Jain Tharavadu, where tradition meets
              modern comfort.
            </span>
            <span>
              Here’s everything waiting for you at Kudajadri Drizzle Homestay.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
