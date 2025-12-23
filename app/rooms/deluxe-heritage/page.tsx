import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Heritage homestays in Wayanad: Traditional Wayanad homestays",
  description:
    "Best Premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat in Wayanad",
};

export default function DeluxeHeritageRoomPage() {
  return <RoomPageClient roomId="deluxe-heritage" />;
}

