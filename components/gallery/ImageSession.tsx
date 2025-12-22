import fs from "fs";
import path from "path";
import Image from "next/image";

const GALLERY_DIR = path.join(process.cwd(), "public/gallery");

function fileNameToAlt(fileName: string) {
  return fileName
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ImageSession() {
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

  return (
    <section className="px-4 sm:px-12 py-16">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
        {files.map((file) => (
          <figure
            key={file}
            className="mb-8 break-inside-avoid rounded-3xl overflow-hidden bg-white"
          >
            <Image
              src={`/gallery/${file}`}
              alt={fileNameToAlt(file)}
              width={1200}
              height={1600}
              className="w-full h-auto object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
