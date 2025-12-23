import Link from "next/link";

export const HeroSession = () => {
  return (
    <section className="w-full min-h-[70vh] sm:min-h-[80vh] flex justify-center items-center px-4 sm:px-12 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center max-w-5xl gap-6">
        <span className="uppercase font-albertSans text-base tracking-wider text-black">
          Gallery
        </span>

        <h1 className="font-staylista text-[32px] sm:text-[72px] leading-tight">
          Photo &amp; Video Gallery of Kudajadri Drizzle Homestay
        </h1>

        <div className="text-[#6E6E6E] font-albertSans text-base sm:text-xl leading-relaxed space-y-4">
          <p>
            Explore the <strong>Kudajadri Drizzle Homestay</strong> through our
            photos and video gallery. Each image captures the serene
            surroundings, lush greenery, and charming architecture of our
            property.
          </p>

          <p>
            Watch our videos to get a real feel of the ambiance and experiences.
            See guests enjoying the{" "}
            <Link
              href="/facilities"
              className="text-primary no-underline hover:no-underline"
            >
              swimming pool
            </Link>
            , nature walks, and recreational games.
          </p>

          <p>
            Our gallery helps you visualize your stay and plan your visit to one
            of the{" "}
            <Link
              href="/"
              className="text-primary no-underline hover:no-underline"
            >
              best Wayanad homestays
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
