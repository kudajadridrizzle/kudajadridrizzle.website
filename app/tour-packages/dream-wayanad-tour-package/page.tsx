import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

export const metadata: Metadata = {
  title: "Dream Wayanad Tour Packages: Edakkal Caves, Kuruva Island, Chembra Peak, Thirunelli Temple",
  description:
    "Dream Wayanad Tour Package: Explore mystical Edakkal Caves, lush Kuruva Island, breathtaking Chembra Peak, and the spiritual vibes of Thirunelli Temple.",
};

export default function DreamWayanadPage() {
  return <PackageDetailsClient packageTitle="Dream Wayanad Tour Package" />;
}

