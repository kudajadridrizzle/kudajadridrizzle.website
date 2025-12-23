import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Heritage Homestay in Wayanad | Traditional Wayanad Homestays",
  description:
    "Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.",
};

export default function DeluxeHeritageRoomPage() {
  return <RoomPageClient roomId="deluxe-heritage" />;
}

