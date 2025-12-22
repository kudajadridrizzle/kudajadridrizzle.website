import { Metadata } from "next";
import HomeClient from "@/components/home/home-client";

const SITE_URL = "https://www.kudajadridrizzle.com";
const OG_IMAGE = `${SITE_URL}/images/1%20(56).jpg`;

export const metadata: Metadata = {
  title: "Wayanad homestays: Best homestay in Wayanad for family, group",
  description:
    "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",

  openGraph: {
    title: "Best Homestay in Wayanad for Family & Group | Kudajadri Drizzle",
    description:
      "100+ years old heritage homestay in Wayanad. Nature-friendly stay perfect for families and groups.",
    url: SITE_URL,
    siteName: "Kudajadri Drizzle",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kudajadri Drizzle Heritage Homestay, Wayanad",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wayanad homestays: Best homestay in Wayanad for family, group",
    description:
      "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return <HomeClient />;
}
