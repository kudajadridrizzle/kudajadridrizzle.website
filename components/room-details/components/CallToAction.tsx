'use client';
import React from 'react';
import { CallToAction as CallToActionType } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type CallToActionProps = {
  ctaData: CallToActionType;
};

const CallToAction: React.FC<CallToActionProps> = ({ ctaData }) => {
  // Get background image URL from Contentful (if provided)
  const backgroundImage = ctaData.backgroundImage
    ? `https:${ctaData.backgroundImage.fields.file.url}`
    : '/location.webp'; // Fallback to default image

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl p-4">
        {/* Pre-title */}
        {ctaData.preTitle && (
          <a
            href={ctaData.ctaLink}
            className="inline-block mb-4 px-4 py-2 text-sm hover:bg-white"
          >
            {ctaData.preTitle}
          </a>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-ivy mb-4">
          {ctaData.title}
        </h1>

        {/* Description text - check if it's a string or rich text */}
        {ctaData.description && (
          <div className="mb-6 text-base md:text-lg text-white/80 leading-relaxed">
            {typeof ctaData.description === 'string' 
              ? ctaData.description 
              : documentToReactComponents(ctaData.description as any)}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={ctaData.ctaLink}
          className="inline-flex items-center gap-2 border text-black px-6 py-3 rounded-full font-medium transition"
        >
          {ctaData.ctaLabel} <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;