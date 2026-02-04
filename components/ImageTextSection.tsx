"use client";

import { Document } from "@contentful/rich-text-types";
import { renderRichText } from "@/lib/renderRichText";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ImageTextSectionProps {
  title: string;
  description: Document;
  imageUrl: string;
  imageAlt: string;
  ctaVisible?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
  imagePosition?: "left" | "right";
}

export default function ImageTextSectionComponent({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaVisible = false,
  ctaLabel = "Learn More",
  ctaLink = "/",
  imagePosition = "right",
}: ImageTextSectionProps) {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image – ALWAYS 40% */}
      <div className="w-full md:w-[40%] relative aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>

      {/* Text – ALWAYS 60% */}
      <div className="w-full md:w-[60%] space-y-4">
        <h3 className="font-ivy text-2xl sm:text-3xl lg:text-4xl text-black">
          {title}
        </h3>

        <div className="font-albertSans text-base sm:text-lg text-secondary leading-relaxed rich-text-content">
          {renderRichText(description)}
        </div>

        {ctaVisible && ctaLabel && ctaLink && (
          <button
            onClick={() => router.push(ctaLink)}
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </div>
  );
}
