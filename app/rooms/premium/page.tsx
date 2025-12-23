import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Premium Homestay in Wayanad | Best Luxury Wayanad Homestays",
  description:
    "Best premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat.",
};

export default function PremiumRoomPage() {
  return <RoomPageClient roomId="premium" />;
}

