import { Metadata } from "next";
import ContactClient from "./components/ContactClient";
import Header from "@/components/Header";

const META_TITLE =
  "Online booking of homestay, cottages, rooms in Wayanad for group";

const META_DESCRIPTION =
  "Book homestays, cottages, and rooms in Wayanad online for families and groups. Enjoy comfortable stays, scenic views, and easy booking with great deals.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  robots: "index, follow",

  alternates: {
    canonical: "https://www.kudajadridrizzle.com/contact",
  },

  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.kudajadridrizzle.com/contact",
    siteName: "Kudajadri Drizzle",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header variant="solid" />
      <ContactClient />
    </>
  );
}
