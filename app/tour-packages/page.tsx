import type { Metadata } from "next";
import TourPackagesClient from "./TourPackagesClient";

export const metadata: Metadata = {
  title: "Wayanad Tour Packages | Curated Nature & Experience Tours",
  description:
    "Explore the best Wayanad tour packages including nature trails, sightseeing, and curated travel experiences. Choose the perfect Wayanad package for your trip.",
};

export default function WayanadTourPackages() {
  return <TourPackagesClient />;
}

