"use client";

import { Document } from "@contentful/rich-text-types";
import { renderRichText } from "@/lib/renderRichText";
import { useState } from "react";

interface SectionIntroProps {
  preTitle: string;
  title: string;
  description: Document;
  enableReadMore?: boolean;
  maxChars?: number;
  headingLevel?: "h1" | "h2";
}

export default function SectionIntro({
  preTitle,
  title,
  description,
  enableReadMore = true,
  maxChars = 400,
  headingLevel = "h1",
}: SectionIntroProps) {
  const [expanded, setExpanded] = useState(false);

  // Convert Document to plain text for character counting
  const getPlainText = (doc: Document): string => {
    return doc.content
      .map((node: any) => {
        if (node.nodeType === "paragraph") {
          return node.content
            .map((c: any) => (c.nodeType === "text" ? c.value : ""))
            .join("");
        }
        return "";
      })
      .join(" ");
  };

  const plainText = getPlainText(description);
  const isLong = plainText.length > maxChars;
  const shouldTruncate = enableReadMore && isLong && !expanded;

  // Create a truncated version of the document if needed
  const getTruncatedDocument = (doc: Document): Document => {
    if (!shouldTruncate) return doc;

    let charCount = 0;
    const truncatedContent: any[] = [];

    for (const node of doc.content) {
      if (node.nodeType === "paragraph") {
        const textContent = node.content
          .map((c: any) => (c.nodeType === "text" ? c.value : ""))
          .join("");

        if (charCount + textContent.length <= maxChars) {
          truncatedContent.push(node);
          charCount += textContent.length;
        } else {
          const remaining = maxChars - charCount;
          const truncatedText = textContent.slice(0, remaining) + "…";
          truncatedContent.push({
            ...node,
            content: [{ nodeType: "text", value: truncatedText, marks: [], data: {} }],
          });
          break;
        }
      }
    }

    return {
      ...doc,
      content: truncatedContent,
    };
  };

  const displayDocument = shouldTruncate
    ? getTruncatedDocument(description)
    : description;
  const Heading = headingLevel;

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-16 pb-10">
        {/* Left – 40% */}
        <header className="w-full sm:w-[40%]">
          <p className="mb-4 text-sm uppercase tracking-[1.6px] text-primary font-albertSans">
            {preTitle}
          </p>

          <Heading className="font-ivy text-[28px] sm:text-[44px] leading-tight">
            {title}
          </Heading>
        </header>

        {/* Right – 60% */}
        <div className="w-full sm:w-[60%] font-albertSans text-secondary text-base sm:text-xl leading-relaxed">
          <div className="rich-text-content">
            {renderRichText(displayDocument)}
          </div>

          {enableReadMore && isLong && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 text-primary font-medium underline-offset-4 hover:underline"
              aria-expanded={expanded}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
