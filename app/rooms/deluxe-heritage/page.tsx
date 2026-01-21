import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/rooms/deluxe-heritage`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Heritage homestays in Wayanad: Traditional Wayanad homestays";

const META_DESCRIPTION =
  "Experience a heritage homestay in Wayanad with traditional charm and modern amenities. Enjoy a peaceful stay surrounded by nature and rich culture.";

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

export default function DeluxeHeritageRoomPage() {
  return <RoomPageClient roomId="deluxe-heritage" />;
}
