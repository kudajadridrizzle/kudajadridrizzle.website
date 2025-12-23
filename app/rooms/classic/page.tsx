import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Affordable homestay in Wayanad: Best budget Wayanad homestay",
  description:
    "Best budget homestay in Wayanad with affordable rooms for families and travelers. Discover low-cost Wayanad homestays with comfort and convenience.",
};

export default function ClassicRoomPage() {
  return <RoomPageClient roomId="classic" />;
}

