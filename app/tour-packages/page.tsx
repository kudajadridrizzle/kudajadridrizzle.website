import type { Metadata } from "next";
import TourPackagesClient from "./TourPackagesClient";

export const metadata: Metadata = {
  title: "Wayanad holiday tour packages: Best trip deals for families & couples",
  description:
    "Discover the best Wayanad holiday tour packages with top deals for families, groups, and couples. Enjoy a perfect getaway with nature, adventure, and comfort.",
};

export default function WayanadTourPackages() {
  return <TourPackagesClient />;
}

