import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayanad homestays: Best homestay in Wayanad for family, group | Kudajadri Drizzle",
  description: "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className="font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};
