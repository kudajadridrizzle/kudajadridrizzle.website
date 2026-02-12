import { Document } from "@contentful/rich-text-types";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_LOCALE = process.env.CONTENTFUL_LOCALE || "en-US";

const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

/* ===============================
   TYPES
================================ */

export type ContentfulSys = {
  id: string;
};

export type ContentfulLink = {
  sys: ContentfulSys;
};

export type ContentfulAsset = {
  sys: ContentfulSys;
  fields: {
    title?: string;
    file: {
      url: string;
      contentType?: string;
      details?: unknown;
      fileName?: string;
    };
  };
};

export type ContentfulEntry<TFields = Record<string, any>> = {
  sys: ContentfulSys;
  fields: TFields;
};

export type ContentfulResponse = {
  items: Array<ContentfulEntry>;
  includes?: {
    Entry?: Array<ContentfulEntry>;
    Asset?: Array<ContentfulAsset>;
  };
};

export type SeoMeta = {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  openGraphImage?: ContentfulAsset;
};

export type HeroSection = {
  internalName?: string;
  backgroundImage: ContentfulAsset;
  preTitle?: string;
  title: string;
  ctaVisible?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
};

export type SectionIntro = {
  preTitle: string;
  title: string;
  description: Document;
};

export type ImageTextSection = {
  internalName?: string;
  title: string;
  description: Document;
  image: ContentfulAsset;
  imageAlt?: string;
  ctaVisible?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
  imagePosition?: "left" | "right";
};

export type FaqItem = {
  question: string;
  answer: Document;
};

export type PageFaq = {
  internalName?: string;
  pageSlug: string;
  title: string;
  preTitle: string;
  faqs: FaqItem[];
};

export type PageTypeOne = {
  title?: string;
  meta: SeoMeta;
  hero: HeroSection;
  aboutSection: SectionIntro;
  roomsSection: SectionIntro[];
  individualRooms: ImageTextSection[];
  reviewSection: SectionIntro;
  amenitiesSection: SectionIntro;
  gallerySection: SectionIntro;
  wayanadSection: SectionIntro;
  directionSection: SectionIntro;
  featureSection: ImageTextSection[];
  attractionsSection: ImageTextSection[];
  frequentlyAskedQuestions: PageFaq;
};

export type PageTypeTwo = {
  internalName?: string;
  slug?: string;
  meta: SeoMeta;
  hero: HeroSection;
  sectionIntro: SectionIntro;
  rooms: ImageTextSection[];
  faqs: PageFaq;
};

export type AboutSectionData = {
  preTitle: string;
  title: string;
  description: Document;
  enableReadMore: boolean;
  ctaLabel: string;
  ctaLink: string;
} | null;

export type ContentfulGenericResponse = {
  items?: Array<{
    fields?: Record<string, any>;
  }>;
  includes?: {
    Entry?: any[];
    Asset?: any[];
  };
};

/* ===============================
   PAGE TYPE THREE TYPES (ROOM PAGES)
================================ */

export type ImagePreviewGrid = {
  internalName?: string;
  images: ContentfulAsset[];
};

export type RoomBookingCard = {
  internalName?: string;
  roomName?: string;
  priceLabel: string;
  pricingBadge?: string;
  extraPersonCharge?: string;
  childPricing?: string;
  agePolicy?: string;
  checkInTime?: string;
  checkOutTime?: string;
  policies?: string[];
  ctaLabel?: string;
  ctaRoute?: string;
};

export type EditorialSection = {
  internalName?: string;
  title: string;
  description: Document;
  listTitle?: string;
  listItems?: Document;
  image?: ContentfulAsset;
  imagePosition?: "left" | "right";
};

export type CallToAction = {
  internalName?: string;
  preTitle?: string;
  title: string;
  description?: Document | string;
  ctaLabel: string;
  ctaLink: string;
  backgroundImage?: ContentfulAsset;
};

export type PageTypeThree = {
  internalName: string;
  slug: string;
  meta: SeoMeta;
  heroImages: ImagePreviewGrid;
  description: SectionIntro;
  card: RoomBookingCard;
  contentSection: EditorialSection[];
  ctaSection: CallToAction;
  faQs: PageFaq;
};

/* ===============================
   PAGE TYPE FOUR TYPES (ABOUT PAGE)
================================ */

export type PageTypeFour = {
  internalName: string;
  meta: SeoMeta;
  hero: HeroSection;
  aboutSection: ImageTextSection;
  contentSection: ImageTextSection[];
  faQs: PageFaq;
};

/* ===============================
   FETCH FUNCTIONS
================================ */

export async function getAboutSection(): Promise<AboutSectionData> {
  try {
    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=aboutSection` +
      `&locale=${CONTENTFUL_LOCALE}` +
      `&limit=1`;

    const res = await fetch(url, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data: ContentfulGenericResponse = await res.json();
    const fields = data.items?.[0]?.fields;

    if (
      !fields ||
      typeof fields.preTitle !== "string" ||
      typeof fields.title !== "string" ||
      !fields.description ||
      typeof fields.enableReadMore !== "boolean" ||
      typeof fields.ctaLabel !== "string" ||
      typeof fields.ctaLink !== "string"
    ) {
      return null;
    }

    return {
      preTitle: fields.preTitle,
      title: fields.title,
      description: fields.description,
      enableReadMore: fields.enableReadMore,
      ctaLabel: fields.ctaLabel,
      ctaLink: fields.ctaLink,
    };
  } catch (err) {
    console.error("getAboutSection error:", err);
    return null;
  }
}

export async function getAboutPageContent(): Promise<PageTypeFour> {
  const url =
    `${CONTENTFUL_API_BASE}/entries` +
    `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
    `&content_type=pageTypeFour` +
    `&locale=${CONTENTFUL_LOCALE}` +
    `&include=3` +
    `&limit=1`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch About page: ${res.status}`);
    }

    const data: ContentfulResponse = await res.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('About page content not found');
    }

    const entry = data.items[0];
    const includes = data.includes || { Entry: [], Asset: [] };

    // Helper to resolve linked entries/assets
    const resolveLink = (link: ContentfulLink) => {
      const entryMatch = includes.Entry?.find((e) => e.sys.id === link.sys.id);
      if (entryMatch) return entryMatch;

      const assetMatch = includes.Asset?.find((a) => a.sys.id === link.sys.id);
      if (assetMatch) return assetMatch;

      return null;
    };

    const fields = entry.fields as any;

    // Resolve meta
    const meta = resolveLink(fields.meta) as ContentfulEntry<SeoMeta>;

    // Resolve hero
    const hero = resolveLink(fields.hero) as ContentfulEntry<HeroSection>;
    const heroFields = hero?.fields;
    const heroImage = resolveLink(heroFields.backgroundImage) as ContentfulAsset;

    // Resolve aboutSection
    const aboutSection = resolveLink(fields.aboutSection) as ContentfulEntry<ImageTextSection>;
    const aboutFields = aboutSection?.fields;
    const aboutImage = resolveLink(aboutFields.image) as ContentfulAsset;

    // Resolve contentSection array
    const contentSection = (fields.contentSection || []).map((link: ContentfulLink) => {
      const section = resolveLink(link) as ContentfulEntry<ImageTextSection>;
      const sectionFields = section?.fields;
      const sectionImage = resolveLink(sectionFields.image) as ContentfulAsset;
      return {
        ...sectionFields,
        image: sectionImage,
      };
    });

    // Resolve FAQs
    const faqsEntry = resolveLink(fields.faQs) as ContentfulEntry<any>;
    const faqsFields = faqsEntry?.fields;

    // Resolve nested FAQ items
    const faqItems = (faqsFields?.faqs || []).map((link: ContentfulLink) => {
      const faqItem = resolveLink(link) as ContentfulEntry<FaqItem>;
      return faqItem?.fields;
    });

    return {
      internalName: fields.internalName,
      meta: meta?.fields,
      hero: {
        ...heroFields,
        backgroundImage: heroImage,
      },
      aboutSection: {
        ...aboutFields,
        image: aboutImage,
      },
      contentSection,
      faQs: {
        ...faqsFields,
        faqs: faqItems,
      },
    };
  } catch (error) {
    console.error("getAboutPageContent error:", error);
    throw error;
  }
}

/* ===============================
   GENERIC CONTENT FETCH
================================ */

export async function getContent(
  slug: string,
  contentType: string
): Promise<ContentfulGenericResponse | null> {
  const fieldName = contentType === "wayanadPage" ? "slug" : "pageSlug";

  const url =
    `${CONTENTFUL_API_BASE}/entries` +
    `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
    `&content_type=${contentType}` +
    `&fields.${fieldName}=${slug}` +
    `&locale=${CONTENTFUL_LOCALE}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error("Contentful fetch failed", {
        status: res.status,
        url,
      });
      return null;
    }

    return (await res.json()) as ContentfulGenericResponse;
  } catch (error) {
    console.error("getContent error:", error);
    return null;
  }
}