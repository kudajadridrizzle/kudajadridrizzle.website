import { notFound } from "next/navigation";
import { getRoomPageData } from "@/lib/getRoomPageData";
import RoomPageClient from "../[id]/RoomPageClient";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const roomData = await getRoomPageData("deluxe-heritage");

  if (!roomData) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: roomData.meta.metaTitle,
    description: roomData.meta.metaDescription,
    openGraph: roomData.meta.openGraphImage
      ? {
          images: [
            {
              url: `https:${roomData.meta.openGraphImage.fields.file.url}`,
              alt: roomData.meta.openGraphImage.fields.title || roomData.meta.metaTitle,
            },
          ],
        }
      : undefined,
    ...(roomData.meta.noIndex && { robots: { index: false } }),
    ...(roomData.meta.canonicalUrl && { alternates: { canonical: roomData.meta.canonicalUrl } }),
  };
}

export default async function DeluxeHeritagePage() {
  const roomData = await getRoomPageData("deluxe-heritage");

  if (!roomData) {
    notFound();
  }

  return <RoomPageClient roomData={roomData} />;
}