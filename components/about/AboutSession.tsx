'use client'

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Document } from "@contentful/rich-text-types";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface AboutSessionProps {
  title: string;
  description: Document | string;
  imageUrl: string;
  imageAlt?: string;
}

const AboutSession = ({ title, description, imageUrl, imageAlt }: AboutSessionProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 400;

  // Convert Contentful Document to plain text string
  const descriptionText = typeof description === 'string' 
    ? description 
    : documentToPlainTextString(description);

  const isLong = descriptionText.length > maxChars;
  const preview = isLong ? descriptionText.slice(0, maxChars) + '...' : descriptionText;

  return (
    <div className="sm:px-[6%] sm:py-32 large:px-[12%] px-4 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex gap-4 sm:flex-row flex-col">
          <h1 className="block sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {title}
          </h1>

          <div className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {expanded || !isLong ? descriptionText : preview}
            </ReactMarkdown>

            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 block text-sm text-primary hover:underline focus:outline-none"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>

        <div className="h-[415px] mt-8">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="object-cover size-full rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSession;