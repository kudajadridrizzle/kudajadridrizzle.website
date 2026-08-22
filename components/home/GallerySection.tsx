import { Document } from "@contentful/rich-text-types";
import GalleryMasonry from "./GalleryMasonry";
import Wrapper from "../layout/Wrapper";
import SectionIntro from "../sectionIntro";

interface GallerySectionProps {
  preTitle: string;
  title: string;
  description: Document; // ✅ REQUIRED
}

export default function GallerySection({
  preTitle,
  title,
  description,
}: GallerySectionProps) {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col gap-12 sm:gap-20">
          <SectionIntro
            preTitle={preTitle}
            title={title}
            description={description}
            enableReadMore
            headingLevel="h2"
          />
          <GalleryMasonry />
        </div>
      </Wrapper>
    </section>
  );
}
