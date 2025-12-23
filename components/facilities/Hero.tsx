import Image from "next/image";
import Header from "@/components/Header";
const Hero = () => {
  return (
    <section className="relative h-screen w-full">
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
        <div className="h-full px-1 flex flex-col items-center justify-end gap-2 text-white">
          <h1 className="text-center font-staylista mobile:text-[48px] sm:text-[72px]">
            Facilities & Amenities at Kudajadri Drizzle Homestay
          </h1>

          <div className="text-[#CACACA] text-xl mb-[120px] font-albertSans flex flex-col text-center">
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
