'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Document } from "@contentful/rich-text-types";

type AboutSectionProps = {
  preTitle: string;
  title: string;
  description: Document;
  enableReadMore: boolean;
  ctaLabel: string;
  ctaLink: string;
};

const AboutSession = ({
  preTitle,
  title,
  description,
  enableReadMore,
  ctaLabel,
  ctaLink,
}: AboutSectionProps) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-4 py-14 sm:px-[12%] sm:py-32 lg:px-[12%]">
      <div className="flex flex-col sm:flex-row gap-12">

        {/* LEFT – Sticky Title */}
        <div className="sm:w-[35%]">
          <div className="sm:sticky sm:top-32">
            <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
              {preTitle}
            </p>

            <h1 className="sm:text-[44px] text-[32px] font-ivy text-primary leading-tight">
              {title}
            </h1>
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="sm:w-[65%] flex flex-col gap-8">

          {/* RICH TEXT WITH READ MORE */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
              enableReadMore && !expanded
                ? "max-h-[420px]"
                : "max-h-[4000px]"
            }`}
          >
            <div className="text-secondary font-albertSans sm:text-xl prose prose-p:my-0 prose-strong:font-semibold prose-a:text-primary">
              {documentToReactComponents(description, {
                renderNode: {
                  [BLOCKS.HEADING_2]: (_, children) => (
                    <h2>{children}</h2>
                  ),
                  [INLINES.HYPERLINK]: (node, children) => (
                    <a
                      href={node.data.uri}
                      className="text-primary hover:underline"
                    >
                      {children}
                    </a>
                  ),
                },
              })}
            </div>

            {/* Gradient fade */}
            {enableReadMore && !expanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          {/* READ MORE */}
          {enableReadMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="self-start text-primary font-albertSans text-sm tracking-[1.6px] uppercase hover:opacity-70 transition"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}

          {/* CTA */}
          <button
            onClick={() => router.push(ctaLink)}
            className="px-6 py-3 rounded-full bg-primary text-white font-albertSans w-fit"
          >
            {ctaLabel}
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutSession;
