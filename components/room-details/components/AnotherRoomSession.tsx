"use client";

import { useParams } from "next/navigation";
import { roomData } from "../constants";
import RoomCard from "./RoomCard";

interface AnotherRoomSessionProps {
  roomType?: string;
  roomId?: string;
}

const AnotherRoomSession: React.FC<AnotherRoomSessionProps> = ({
  roomType = "Classic",
  roomId,
}) => {
  const getSectionTitle = () => {
    switch (roomType.toLowerCase()) {
      case "classic rooms":
        return "More Room Options at Our Affordable Wayanad Homestays";
      case "deluxe rooms":
        return "More Room Options at Our Wayanad Cottages";
      case "deluxe heritage rooms":
        return "More Room Options at Our Heritage Wayanad Homestays";
      case "premium rooms":
        return "More Room Options at Our Premium Wayanad Homestays";
      default:
        return "More Room Options at Our Affordable Wayanad Homestays";
    }
  };

  const params = useParams<{ id: string }>();
  const id = roomId || params?.id;

  const currentRoomData = id
    ? roomData[id as keyof typeof roomData]
    : null;

  const rooms = currentRoomData
    ? [
        currentRoomData.anotherRoomOne,
        currentRoomData.anotherRoomTwo,
        currentRoomData.anotherRoomThree,
      ].filter(Boolean)
    : [];

  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 flex flex-col gap-6">
      <h2 className="text-[#000] text-[32px] sm:text-[44px] font-ivy">
        {getSectionTitle()}
      </h2>

      {rooms.length > 0 && (
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-8">
          {rooms.map((room, index) => {
            if (!room || !room.image) {
              return null;
            }
            return (
              <RoomCard
                key={`${room.roomType}-${index}`}
                image={room.image}
                title={room.title}
                roomType={room.roomType}
                description={room.description}
                navigate={room.navigate}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AnotherRoomSession;
