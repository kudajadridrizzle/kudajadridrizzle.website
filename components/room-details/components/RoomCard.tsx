"use client";

import { useRouter } from "next/navigation";

interface RoomCardProps {
  image?: string;
  title?: string;
  roomType: string;
  description: string;
  navigate?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  title,
  roomType,
  description,
  navigate,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 w-full sm:flex-1">
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-gray-100">
          <img
            src={image}
            alt={roomType || "Room image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {title && (
          <span className="text-[#000] text-lg font-albertSans">
            {title}
          </span>
        )}

        <div className="flex flex-col gap-3">
          <span className="text-[28px] sm:text-4xl font-light text-primary font-ivy">
            {roomType}
          </span>

          <span className="text-lg text-secondary font-albertSans">
            {description}
          </span>
        </div>

        {navigate && (
          <div>
            <button
              className="px-10 py-4 capitalize border rounded-full text-primary font-albertSans border-primary cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white active:scale-95"
              onClick={() => router.push(navigate)}
            >
              See room
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
