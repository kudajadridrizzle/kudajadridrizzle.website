import { Document } from "@contentful/rich-text-types";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_LOCALE = process.env.CONTENTFUL_LOCALE || "en-US";

const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

/* ===============================
   TYPES
================================ */

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
};

/* ===============================
   ABOUT SECTION
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
      next: { revalidate: 3600 },
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
      next: { revalidate: 3600 },
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
