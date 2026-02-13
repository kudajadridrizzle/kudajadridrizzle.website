'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Document } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

interface AboutSessionProps {
  title: string;
  description: Document | string;
  imageUrl: string;
  imageAlt?: string;
}

const AboutSession = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: AboutSessionProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 500;

  // Convert Contentful Document to plain text
  const descriptionText =
    typeof description === 'string'
      ? description
      : documentToPlainTextString(description);

  const isLong = descriptionText.length > maxChars;
  const preview = isLong
    ? descriptionText.slice(0, maxChars) + '...'
    : descriptionText;

  return (
    <div className="sm:py-32 py-14">
      <div className="flex flex-col gap-12">
        {/* TEXT SECTION */}
        <div className="flex gap-4 sm:flex-row flex-col">
          <h1 className="sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            {title}
          </h1>

          <div className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {expanded || !isLong ? descriptionText : preview}
            </ReactMarkdown>

            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-sm text-primary hover:underline focus:outline-none"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>

        {/* IMAGE SECTION — 16:9 */}
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-[32px]">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSession;