import { createClient } from "contentful";
import { Document } from "@contentful/rich-text-types";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

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
    const res = await contentfulClient.getEntries({
      content_type: "aboutSection",
      limit: 1,
    });

    if (!res.items.length) {
      return null;
    }

    const fields = res.items[0].fields as {
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
