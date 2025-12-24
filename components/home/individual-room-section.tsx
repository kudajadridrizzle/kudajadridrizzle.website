interface IndividualRoomsSessionProp {
  image?: string;
  title?: string;
  discription?: string;
  subTitle?: string;
  type?: "default" | "reverse";
  onClick?: () => void;
}

export const IndividualRoomSession = ({
  image,
  title,
  discription,
  type = "default",
  onClick,
}: IndividualRoomsSessionProp) => {
  const isReverse = type === "reverse";

  return (
    <section
      className={`flex flex-col gap-8 sm:flex-row ${
        isReverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="sm:flex-1">
        <img
          src={image}
          alt={title || "Room image"}
          className="w-full h-64 sm:h-[420px] lg:h-full object-cover rounded-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="sm:flex-1 sm:p-6 flex items-center">
        <div className="flex flex-col gap-6 w-full">

          {/* TITLE + DESCRIPTION */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-ivy text-primary leading-tight">
              {title}
            </h2>

            <p className="text-secondary font-albertSans leading-relaxed">
              {discription}
            </p>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={onClick}
              className="px-6 py-3 rounded-full border border-primary text-primary font-albertSans text-base hover:bg-primary hover:text-white transition"
            >
              View Room
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
