import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

export const metadata: Metadata = {
  title: "Wayanad Cottages | Private Cottages in Wayanad for Family & Groups",
  description:
    "Stay at our Wayanad cottages designed for families and groups. Enjoy private cottages with comfort, scenic views, and a peaceful holiday experience.",
};

export default function DeluxeRoomPage() {
  return <RoomPageClient roomId="deluxe" />;
}

