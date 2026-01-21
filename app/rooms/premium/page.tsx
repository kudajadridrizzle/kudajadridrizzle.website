import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/rooms/premium`;

const META_TITLE =
  "Premium homestay in Wayanad: Best luxury Wayanad homestays";

const META_DESCRIPTION =
  "Best Premium homestay in Wayanad offering deluxe and luxury stays with top-tier amenities. Enjoy elegant rooms, scenic views, and a peaceful retreat in Wayanad";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: CANONICAL_URL,
  },

  openGraph: {
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
    url: CANONICAL_URL,
    siteName: "Kudajadri Drizzle",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,             // SAME AS META
    description: META_DESCRIPTION, // SAME AS META
  },
};

export default function PremiumRoomPage() {
  return <RoomPageClient roomId="premium" />;
}
