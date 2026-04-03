import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Script from "next/script"; // <-- YOU MISSED THIS
import "./globals.css";
import Footer from "../components/footer";

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayanad homestays: Best homestay in Wayanad for family, group | Kudajadri Drizzle",
  description:
    "Kudajadri Drizzle home stay in Wayanad: 100+ years old #1 heritage Wayanad Homestay. Book top rated nature friendly homestays in Wayanad for family & group.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={albertSans.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QY0L3JB4LD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QY0L3JB4LD');
          `}
        </Script>
      </head>

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