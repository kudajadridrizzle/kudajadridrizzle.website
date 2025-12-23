import { type Metadata } from "next";
import RoomPageClient from "./RoomPageClient";

const metadataMap: Record<string, { title: string; description: string }> = {
  classic: {
    title: "Affordable Homestay in Wayanad | Best Budget Wayanad Homestay",
    description:
      "Best budget homestay in Wayanad with affordable rooms for families and travelers. Discover low-cost Wayanad homestays with comfort and convenience.",
  },
  premium: {
    title: "Premium Homestay in Wayanad | Best Luxury Wayanad Homestays",
    description:
      "Best premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat.",
  },
  deluxe: {
    title: "Wayanad Cottages | Private Cottages in Wayanad for Family & Groups",
    description:
      "Stay at our Wayanad cottages designed for families and groups. Enjoy private cottages with comfort, scenic views, and a peaceful holiday experience.",
  },
  "deluxe-heritage": {
    title: "Heritage Homestay in Wayanad | Traditional Wayanad Homestays",
    description:
      "Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return metadataMap[params.id] ?? metadataMap.classic;
}

export default function RoomPage({ params }: { params: { id: string } }) {
  return <RoomPageClient roomId={params.id} />;
}

