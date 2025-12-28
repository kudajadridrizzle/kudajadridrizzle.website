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
    ];
  },
};

export default nextConfig;
