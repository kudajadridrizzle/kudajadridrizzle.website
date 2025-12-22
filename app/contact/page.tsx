import { Metadata } from "next";
import ContactClient from "./components/ContactClient";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Online booking of homestay, cottages, rooms in Wayanad for group",
  description:
    "Book homestays, cottages, and rooms in Wayanad online for families and groups. Enjoy comfortable stays, scenic views, and easy booking with great deals.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.kudajadridrizzle.com/contact",
  },
  openGraph: {
    title: "Contact Kudajadri Drizzle",
    description:
      "Get in touch with Kudajadri Drizzle for bookings and homestay inquiries.",
    url: "https://www.kudajadridrizzle.com/contact",
    siteName: "Kudajadri Drizzle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kudajadri Drizzle",
    description:
      "Book your stay at Kudajadri Drizzle, one of the best homestays in Wayanad.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header type="black" />
      <ContactClient />
    </>
  );
}
