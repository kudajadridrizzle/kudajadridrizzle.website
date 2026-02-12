'use client';

import React from 'react';
import { EditorialSection as EditorialSectionType } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

type EditorialSectionProps = {
  sections: EditorialSectionType[];
};

// Render options for description (paragraphs only)
const descriptionRenderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="mb-4 text-gray-700 text-lg leading-relaxed">{children}</p>
    ),
    [INLINES.HYPERLINK]: (_node: any, children: any) => (
      <a 
        href={_node.data.uri} 
        className="text-blue-600 underline hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
  },
};

// Render options for list items
const listRenderOptions = {
  renderNode: {
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="list-disc pl-6 space-y-3 text-gray-700">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => (
      <li className="text-gray-700">{children}</li>
    ),
    [INLINES.HYPERLINK]: (_node: any, children: any) => (
      <a 
        href={_node.data.uri} 
        className="text-blue-600 underline hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
  },
};

const EditorialSection: React.FC<EditorialSectionProps> = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto space-y-16">
        {sections.map((section, index) => {
          const imageUrl = section.image 
            ? `https:${section.image.fields.file.url}` 
            : null;

          const isImageLeft = section.imagePosition === 'left';

          return (
            <div key={index} className="mb-12">
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl mb-6 font-ivy">
                {section.title}
              </h2>

              {/* Content with optional image */}
              {imageUrl ? (
                // Layout with image
                <div className={`grid md:grid-cols-2 gap-8 items-start ${
                  isImageLeft ? 'md:grid-flow-col-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={isImageLeft ? 'md:order-1' : 'md:order-2'}>
                    <img
                      src={imageUrl}
                      alt={section.title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`text-gray-700 ${
                    isImageLeft ? 'md:order-2' : 'md:order-1'
                  }`}>
                    {/* Description (paragraphs) */}
                    {documentToReactComponents(section.description as any, descriptionRenderOptions)}

                    {/* List Title */}
                    {section.listTitle && (
                      <h3 className="text-xl font-ivy mb-4 mt-6">
                        {section.listTitle}
                      </h3>
                    )}

                    {/* List Items */}
                    {section.listItems && documentToReactComponents(section.listItems as any, listRenderOptions)}
                  </div>
                </div>
              ) : (
                // Layout without image (full width)
                <div className="text-gray-700">
                  {/* Description (paragraphs) */}
                  {documentToReactComponents(section.description as any, descriptionRenderOptions)}

                  {/* List Title */}
                  {section.listTitle && (
                    <h3 className="text-xl font-ivy mb-4 mt-6">
                      {section.listTitle}
                    </h3>
                  )}

                  {/* List Items */}
                  {section.listItems && documentToReactComponents(section.listItems as any, listRenderOptions)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EditorialSection;