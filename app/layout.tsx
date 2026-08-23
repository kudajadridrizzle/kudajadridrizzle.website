import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

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
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8WKJDH');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8WKJDH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <WhatsAppFloat />
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
