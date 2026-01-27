import React from "react";
import { ImageContentSection } from "./ImageContentSection";
import { ImageTextSectionData } from "@/lib/getWayanadPage";
import Wrapper from "../layout/Wrapper";

type ImageContentSectionGridProps = {
  sections: ImageTextSectionData[];
};

export const ImageContentSectionGrid: React.FC<ImageContentSectionGridProps> = ({
  sections,
}) => {
  return (
    <Wrapper>
      <div className="flex flex-col space-y-24 py-24">
        {sections.map((section, index) => (
          <ImageContentSection
            key={section.id}
            image={section.image}
            imageAlt={section.imageAlt}
            title={section.title}
            paragraph={section.description}
            reverse={
              section.imagePosition === "right"
                ? false
                : section.imagePosition === "left"
                ? true
                : index % 2 === 1
            }
          />
        ))}
      </div>
    </Wrapper>
  );
};
