'use client'

import { useRouter } from "next/navigation";


const VideoBackground = () => {
  const router = useRouter();

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/locationImage.webp"
          alt="Aerial view of Kudajadri Drizzle Homestay in Wayanad"
          width={1920}       // Add actual image width
          height={1080}      // Add actual image height
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0" />


      {/* Mobile Background */}
      <img
        src="/assets/mobileheroimg.jpg"
        alt="Mobile view of Kudajadri Drizzle Homestay"
        width={768}
        height={1024}
        loading="eager"
        fetchPriority="high"
        className="md:hidden absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Shade Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 h-full">
        <div className="flex flex-col gap-8 h-full justify-end">
          <div className="flex flex-col gap-5 items-center pt-28 sm:pt-[18%] px-4 sm:px-0 text-center">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-2.5 w-full max-w-2xl mx-auto">
                <div className="border border-[#FFF] flex-1 hidden sm:block" />
                <h2 className="sm:text-3xl uppercase text-[#FFF] font-ivy text-sm text-center">
                  Kudajadri Drizzle Homestay in Wayanad
                </h2>
                <div className="border border-[#FFF] flex-1 hidden sm:block" />
              </div>
              <span className="sm:text-7xl text-[#FFF] font-staylista text-4xl sm:text-6xl lg:text-7xl max-w-3xl text-center m-auto leading-tight">
                Experience True Serenity
              </span>
            </div>
          </div>
          <div className="flex justify-center pb-16 sm:pb-24 px-4">
            <button
              className="px-6 py-3 rounded-full border text-[#FFF] hover:bg-white hover:text-amber-700 transition-colors duration-300"
              onClick={() => router.push("/contact")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
