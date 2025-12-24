import { useState } from "react";

const RoomSession = () => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 400;

  const fullText =
    "Wayanad Homestays invite you to explore our comfortable rooms, designed for a relaxing and cozy stay. Each room combines modern amenities with a warm, homely atmosphere, ensuring a memorable experience. Perfect for nature lovers and travelers seeking peace, our Wayanad homestays offer comfort, convenience, and stunning surroundings.";

  const isLong = fullText.length > maxChars;
  const preview = isLong ? fullText.slice(0, maxChars) + "..." : fullText;

  return (
    <section className="bg-white px-4 pt-14 pb-6 sm:px-[12%] sm:pt-32 sm:pb-0 xl:px-[12%]">
      <div className="flex flex-col sm:flex-row justify-center sm:py-12">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[44px] font-ivy mb-4 sm:mb-16">
          Wayanad Homestays – Explore Our Rooms
        </h2>

        {/* Paragraph */}
        <div className="w-full text-base leading-relaxed sm:w-[466px] sm:text-xl font-albertSans text-secondary sm:ml-16">
          <p>{expanded || !isLong ? fullText : preview}</p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 inline-block text-base font-medium text-primary hover:underline"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoomSession;
