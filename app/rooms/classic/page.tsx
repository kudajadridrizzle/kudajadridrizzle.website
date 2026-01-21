import { type Metadata } from "next";
import RoomPageClient from "../[id]/RoomPageClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kudajadridrizzle.com";

const CANONICAL_URL = `${SITE_URL}/rooms/classic`;

/* ⛔ META TEXT IS UNCHANGED */
const META_TITLE =
  "Affordable homestay in Wayanad: Best budget Wayanad homestay";

const META_DESCRIPTION =
  "Best budget homestay in Wayanad with affordable rooms for families and travelers. Discover low-cost Wayanad homestays with comfort and convenience.";

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

export default function ClassicRoomPage() {
  return <RoomPageClient roomId="classic" />;
}
