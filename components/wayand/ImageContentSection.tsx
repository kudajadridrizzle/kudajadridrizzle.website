import React from "react";

interface ImageContentSectionProps {
  image: string;
  imageAlt?: string;
  title: string;
  paragraph: string;
  reverse?: boolean;
}

export const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  image,
  imageAlt = "Image",
  title,
  paragraph,
  reverse = false,
}) => {
  return (
    <div className="py-16">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {title}
          </h2>

          <p className="text-secondary sm:text-xl font-albertSans leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};
