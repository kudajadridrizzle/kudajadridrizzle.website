import type { Metadata } from "next";
import Rooms from "./rooms";

export const metadata: Metadata = {
  title: "Wayanad accommodations: homestays, cottages, family rooms",
  description:
    "Discover peaceful accommodations in Wayanad with cozy homestays, spacious cottages with swimming pool, and family rooms designed for comfort and relaxation",
};

export default function RoomsPage() {
  return <Rooms />;
}
