import type { Metadata } from "next";
import PackageDetailsClient from "../PackageDetailsClient";

export const metadata: Metadata = {
  title: "Vibrant Wayanad Tour Package: Soochippara Water falls, Lakkidi View Point, Karapauzha Dam",
  description:
    "Vibrant Wayanad Tour Package: Explore thrilling Soochippara Waterfalls, panoramic views from Lakkidi View Point, and the tranquil charm of Karapuzha Dam.",
};

export default function VibrantWayanadPage() {
  return <PackageDetailsClient packageTitle="Vibrant Wayanad Tour Package" />;
}

