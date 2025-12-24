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
      {
        source: "/rooms/premium-rooms",
        destination: "/rooms/premium",
        permanent: true,
      },
      {
        source: "/rooms/classic-rooms",
        destination: "/rooms/classic",
        permanent: true,
      },
      {
        source: "/rooms/deluxe-rooms",
        destination: "/rooms/deluxe",
        permanent: true,
      },
      {
        source: "/rooms/deluxe-heritage-rooms",
        destination: "/rooms/deluxe-heritage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
