'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Document } from '@contentful/rich-text-types';

interface ContentSectionItem {
  title: string;
  bodyContent: Document;
}

interface ContentSectionProps {
  sections: ContentSectionItem[];
}

export default function ContentSection({ sections }: ContentSectionProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-2xl font-ivy mt-14 mb-4 text-gray-900">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-xl font-ivy mt-10 mb-3 text-gray-900">
          {children}
        </h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-gray-600 leading-relaxed mb-6">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="mb-6">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="mb-6 list-decimal ml-5">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="text-gray-600 ml-5 list-disc mb-1 [&>p]:mb-1">
          {children}
        </li>
      ),
    },
  };

  return (
    <section className="mx-auto py-16 md:py-24">
      {sections.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-16' : ''}>
          {section.title && (
            <h2 className="text-2xl md:text-2xl font-ivy mb-8 text-gray-900">
              {section.title}
            </h2>
          )}
          <div>
            {documentToReactComponents(section.bodyContent, options)}
          </div>
        </div>
      ))}
    </section>
  );
}