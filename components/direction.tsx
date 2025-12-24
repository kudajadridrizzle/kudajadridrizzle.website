interface DirectionProps {
  title?: string;
  description?: React.ReactNode;
  buttonText?: string;
  mapUrl?: string;
  iframeMapUrl?: string;
  showMap?: boolean;
}

const GOOGLE_MAP_URL =
  "https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays";

const GOOGLE_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1912242549953!2d76.0876686!3d11.6944734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6752bf8e8c185%3A0x5bf951fa893c48b4!2sKudajadri%20Drizzle%20-%20Best%20Wayanad%20Homestays!5e0!3m2!1sen!2sin!4v1717921840000!5m2!1sen!2sin";

const Direction = ({
  title = "Getting to Our Wayanad Homestay",
  description = (
    <>
      Getting to our Kudajadri Drizzle <strong>Wayanad homestay</strong> is easy
      and convenient. Well connected by road from Kozhikode, Bengaluru, and
      Mysuru, guests can reach us comfortably by car, taxi, or bus. Surrounded by
      scenic hills and plantations, the journey itself becomes a beautiful
      introduction to Wayanad’s natural charm.
    </>
  ),
  buttonText = "Get Direction",
  mapUrl = GOOGLE_MAP_URL,
  iframeMapUrl = GOOGLE_MAP_EMBED_URL,
  showMap = true,
}: DirectionProps) => {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <header className="flex flex-col items-center gap-6 text-center">
          <span className="font-albertSans text-sm uppercase tracking-widest text-primary">
            Direction
          </span>

          <div className="max-w-3xl space-y-4">
            <h2 className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-primary">
              {title}
            </h2>

            <p className="font-albertSans text-base sm:text-lg leading-relaxed text-secondary">
              {description}
            </p>
          </div>

          {/* CTA */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full border border-primary px-6 py-3 font-albertSans text-sm sm:text-base font-medium text-primary"
          >
            {buttonText}
          </a>
        </header>

        {/* Map */}
        {showMap && (
          <div className="overflow-hidden rounded-2xl">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[480px]">
              <iframe
                src={iframeMapUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing directions to ${title}`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Direction;
