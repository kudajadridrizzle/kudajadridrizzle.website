import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

export const metadata: Metadata = {
  title: "Green Wayanad tour package: Wild Life Sanctuaries, Edakkal Cave, Kuruva Island, Pookkode Lake",
  description:
    "Green Wayanad Tour Package: Explore lush wildlife sanctuaries, ancient Edakkal Cave, serene Kuruva Island, and scenic Pookkode Lake for a perfect nature getaway.",
};

export default function GreenWayanadPage() {
  return <PackageDetailsClient packageTitle="Green Wayanad Tour Package" />;
}

