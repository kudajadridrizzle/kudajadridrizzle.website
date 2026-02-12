'use client';

import {
  Wifi,
  Tv,
  Shield,
  Home,
  BedDouble,
  Snowflake,
  Droplet,
  Zap,
} from 'lucide-react';
import { SectionIntro } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const iconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  'Bunker Beds': BedDouble,
  'Air Conditioning (on request)': Snowflake,
  'Wi-Fi': Wifi,
  TV: Tv,
  'Hot Water': Droplet,
  'Electric Kettle': Zap,
  'Window Guards': Shield,
  Essentials: Home,
};

interface Props {
  description: SectionIntro;
}

// Rich text rendering options for the description
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => (
      <p className="text-secondary text-base sm:text-xl font-albertSans mb-4">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: any) => (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-primary font-albertSans">
        {children}
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: any) => {
      // Extract the text content from the list item
      const textContent = _node.content[0]?.content[0]?.value || '';
      const Icon = iconMap[textContent] || Home;

      return (
        <li className="flex items-center gap-2">
          <Icon className="w-5 h-5 shrink-0" />
          <span>{children}</span>
        </li>
      );
    },
    [BLOCKS.HEADING_2]: (_node: any, children: any) => (
      <h2 className="text-primary font-ivy text-2xl sm:text-[32px] mb-6 mt-8">
        {children}
      </h2>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
  },
};

export const RoomInfoSection = ({ description }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Pre-title */}
      {description.preTitle && (
        <p className="text-primary/60 text-sm sm:text-base font-albertSans uppercase tracking-wide">
          {description.preTitle}
        </p>
      )}

      {/* Title */}
      <div className="flex flex-col gap-3">
        <h1 className="text-primary font-ivy text-[32px] sm:text-[44px]">
          {description.title}
        </h1>

        {/* Description - renders rich text */}
        <div>
          {documentToReactComponents(description.description as any, renderOptions)}
        </div>
      </div>
    </div>
  );
};