import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Premium homestay in Wayanad: Best luxury Wayanad homestays",
  description:
    "Best Premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat in Wayanad",
};

export default function PremiumRoomPage() {
  return <RoomPageClient roomId="premium" />;
}

