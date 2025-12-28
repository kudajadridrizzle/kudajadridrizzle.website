import { Document } from "@contentful/rich-text-types";

// Contentful REST API configuration
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

export type AboutSectionData = {
  preTitle: string;
  title: string;
  description: Document;
  enableReadMore: boolean;
  ctaLabel: string;
  ctaLink: string;
} | null;

export async function getAboutSection(): Promise<AboutSectionData> {
  try {
    const url = `${CONTENTFUL_API_BASE}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=aboutSection&limit=1`;
    
    const res = await fetch(url, {
      cache: 'no-store', // Disable caching to ensure fresh data on every request
    });

    if (!res.ok) {
      throw new Error(`Contentful API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.items || !data.items.length) {
      return null;
    }

    const fields = data.items[0].fields as {
      preTitle?: string;
      title?: string;
      description?: Document;
      enableReadMore?: boolean;
      ctaLabel?: string;
      ctaLink?: string;
    };

    // Validate required fields
    if (
      !fields.preTitle ||
      !fields.title ||
      !fields.description ||
      typeof fields.enableReadMore !== "boolean" ||
      !fields.ctaLabel ||
      !fields.ctaLink
    ) {
      console.warn("About section data is missing required fields");
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
  } catch (error) {
    console.error("Error fetching about section from Contentful:", error);
    return null;
  }
}
