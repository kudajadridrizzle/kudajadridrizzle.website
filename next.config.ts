import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },

  async redirects() {
    return [
      // --------------------
      // GREEN WAYANAD
      // --------------------
      {
        source: "/green-wayanad.php",
        destination: "/tour-packages/green-wayanad-tour-package",
        permanent: true,
      },
      {
        source: "/green-wayanad-tour-package",
        destination: "/tour-packages/green-wayanad-tour-package",
        permanent: true,
      },

      // --------------------
      // DREAM WAYANAD
      // --------------------
      {
        source: "/dream-wayanad",
        destination: "/tour-packages/dream-wayanad-tour-package",
        permanent: true,
      },

      // --------------------
      // VIBRANT WAYANAD
      // --------------------
      {
        source: "/Vibrant-wayanad.php",
        destination: "/tour-packages/vibrant-wayanad-tour-package",
        permanent: true,
      },
      {
        source: "/vibrant-wayanad",
        destination: "/tour-packages/vibrant-wayanad-tour-package",
        permanent: true,
      },

      // --------------------
      // GALLERY → MEDIA
      // --------------------
      {
        source: "/gallery",
        destination: "/media",
        permanent: true,
      },

      // --------------------
      // WAYANAD → WAYANAD KERALA
      // --------------------
      {
        source: "/wayanad",
        destination: "/wayanad-kerala",
        permanent: true,
      },
      {
        source: "/facilities.php",
        destination: "/facilities",
        permanent: true,
      },
      {
        source: "/room-tariff.php",
        destination: "/facilities",
        permanent: true,
      },
      {
        source: "/blog/best-time-to-visit-wayanad",
        destination: "/blog/wayanad-travel-tips",
        permanent: true,
      },
      {
        source: "/blog/kerala-traditional-homestays-%E2%80%93-live-the-local-way-in-gods-own-country",
        destination: "/blog/kerala-traditional-homestays",
        permanent: true,
      },
      {
        source: "/dream-wayanad.php",
        destination: "/tour-packages/dream-wayanad-tour-package",
        permanent: true,
      },
      {
        source: "/getting-here.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wayanad-tour-booking.php",
        destination: "/tour-packages",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/wayanad-attractions.php",
        destination: "/wayanad-kerala",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
