import ContentCard from "./content-card";

interface ContentItem {
  image: string;
  title?: string;
  paragraph: string;
  imageAlt?: string;
}

interface ContentSectionProps {
  title?: string;
  items: ContentItem[];
  className?: string;
}

export const ContentSection = ({ 
  title, 
  items, 
  className = "" 
}: ContentSectionProps) => {
  return (
    <div className={`px-4 py-14 sm:px-[12%] sm:py-24 lg:px-[12%] ${className}`}>
      {title && (
        <div className="text-center mb-16">
          <h2 className="text-primary font-ivy text-[32px] sm:text-[44px]">
            {title}
          </h2>
        </div>
      )}
      
      <div className="flex flex-col gap-16">
        {items.map((item, index) => (
          <ContentCard
            key={index}
            image={item.image}
            title={item.title}
            paragraph={item.paragraph}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}; 