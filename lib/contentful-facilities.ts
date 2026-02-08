// lib/contentful-facilities.ts
import { createClient } from "contentful";
import { Document } from "@contentful/rich-text-types";

// Create Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Types for Content Section Item
export interface ContentSectionItem {
  title: string;
  bodyContent: Document;
}

// Types for Facilities Page
export interface FacilitiesPageData {
  internalName: string;
  meta: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    openGraphImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  hero: {
    preTitle: string;
    title: string;
    backgroundImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    ctaVisible: boolean;
    ctaLabel: string;
    ctaLink: string;
  };
  swimmingPoolSection: {
    preTitle: string;
    title: string;
    description: Document;
  };
  contentSections: ContentSectionItem[];
  faqs: {
    title: string;
    faqs: Array<{
      question: string;
      answer: Document;
    }>;
  };
}

// Fetch Facilities Page Data from Contentful
export async function getFacilitiesData(): Promise<FacilitiesPageData | null> {
  try {
    const response = await client.getEntries({
      content_type: "facilitiesPage",
      limit: 1,
      include: 10,
    });

    if (!response.items.length) {
      console.error("No Facilities page found in Contentful");
      return null;
    }

    const entry = response.items[0];
    const fields = entry.fields as any;

    // Parse Content Sections (Array of 2-4 items)
    let contentSections: ContentSectionItem[] = [];
    
    if (fields.contentSection && Array.isArray(fields.contentSection)) {
      contentSections = fields.contentSection
        .map((section: any) => ({
          title: section?.fields?.title || "",
          bodyContent: section?.fields?.bodyContent,
        }))
        .filter((section: ContentSectionItem) => section.title && section.bodyContent);
    }

    // Parse FAQs
    let faqsData = {
      title: "Frequently Asked Questions",
      faqs: [] as Array<{ question: string; answer: Document }>,
    };

    if (fields.faQs?.fields) {
      const faqFields = fields.faQs.fields;
      faqsData.title = faqFields.title || "Frequently Asked Questions";
      
      if (faqFields.faqs && Array.isArray(faqFields.faqs)) {
        faqsData.faqs = faqFields.faqs
          .map((faq: any) => {
            const question = faq?.fields?.question || faq?.question || "";
            const answer = faq?.fields?.answer || faq?.answer;
            // Ensure answer is a Document type (rich text)
            if (typeof question === "string" && answer && typeof answer === "object" && "content" in answer && "data" in answer) {
              return { question, answer: answer as Document };
            }
            return null;
          })
          .filter((faq: any): faq is { question: string; answer: Document } => faq !== null && faq.question && faq.answer);
      }
    }

    return {
      internalName: fields.InternalName || "Facilities",
      meta: {
        metaTitle: fields.meta?.fields?.metaTitle || "",
        metaDescription: fields.meta?.fields?.metaDescription || "",
        canonicalUrl: fields.meta?.fields?.canonicalUrl,
        noIndex: fields.meta?.fields?.noIndex,
        openGraphImage: fields.meta?.fields?.openGraphImage,
      },
      hero: {
        preTitle: fields.hero?.fields?.preTitle || "",
        title: fields.hero?.fields?.title || "",
        backgroundImage: fields.hero?.fields?.backgroundImage,
        ctaVisible: fields.hero?.fields?.ctaVisible ?? true,
        ctaLabel: fields.hero?.fields?.ctaLabel || "Book Now",
        ctaLink: fields.hero?.fields?.ctaLink || "/contact",
      },
      swimmingPoolSection: {
        preTitle: fields.swimmingPoolSection?.fields?.preTitle || "",
        title: fields.swimmingPoolSection?.fields?.title || "",
        description: fields.swimmingPoolSection?.fields?.description || { content: [], data: {}, nodeType: "document" },
      },
      contentSections: contentSections,
      faqs: faqsData,
    };
  } catch (error) {
    console.error("Error fetching Facilities data from Contentful:", error);
    return null;
  }
}