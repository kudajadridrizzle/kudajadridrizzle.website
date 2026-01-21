import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/rooms/deluxe`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Wayanad Cottages: Private Cottages in Wayanad for Family, Group";

const META_DESCRIPTION =
  "Stay at our Wayanad cottages designed for families. Our private cottages in Wayanad offer comfort, scenic views, and a peaceful holiday experience.";

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

export default function DeluxeRoomPage() {
  return <RoomPageClient roomId="deluxe" />;
}
