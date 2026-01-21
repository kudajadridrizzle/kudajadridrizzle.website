import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type ImageTextSectionProps = {
  section: any;
};

export default function ImageTextSection({ section }: ImageTextSectionProps) {
  const {
    title,
    description,
    image,
    imageAlt,
    ctaVisible,
    ctaLabel,
    ctaLink,
  } = section.fields;

  const showCTA =
    ctaVisible === true &&
    typeof ctaLabel === "string" &&
    ctaLabel.trim() !== "" &&
    typeof ctaLink === "string" &&
    ctaLink.trim() !== "";

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl grid gap-16 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            {title}
          </h2>

          <div className="prose prose-neutral mb-6">
            {documentToReactComponents(description)}
          </div>

          {showCTA && (
            <Link
              href={ctaLink}
              className="inline-block px-6 py-3 bg-black text-white"
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[420px]">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
