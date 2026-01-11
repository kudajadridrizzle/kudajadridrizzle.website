import { Document } from "@contentful/rich-text-types";


const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT =
  process.env.CONTENTFUL_ENVIRONMENT || "master";

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
    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=aboutSection` +
      `&limit=1`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.items?.length) return null;

    const fields = data.items[0].fields;

    if (
      !fields?.preTitle ||
      !fields?.title ||
      !fields?.description ||
      typeof fields.enableReadMore !== "boolean" ||
      !fields.ctaLabel ||
      !fields.ctaLink
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
   PAGE FAQ
================================ */

export type FAQEntry = {
  question: string;
  answer: Document;
};

export type PageFAQData = {
  title: string;
  faqs: FAQEntry[];
} | null;

export async function getPageFAQBySlug(
  slug: string
): Promise<PageFAQData> {
  try {
    // Support common homepage slug variants without relying on locale-specific filters
    const candidates = Array.from(
      new Set([
        slug,
        slug.startsWith("/") ? slug.slice(1) : `/${slug}`,
        slug === "/" ? "/" : null,
      ].filter(Boolean) as string[])
    );

    const inParam = candidates.map((v) => encodeURIComponent(v)).join(",");

    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=pageFaq` +
      `&fields.pageSlug[in]=${inParam}` +
      `&limit=1&include=10`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Contentful FAQ fetch failed");
      console.error("Status:", res.status);
      console.error("URL:", url);
      console.error("Response:", errorText);
      return null;
    }

    const data = await res.json();
    if (!data.items?.length) return null;

    const entry = data.items[0];
    const fields = entry.fields;
    const includedEntries: any[] = Array.isArray(data.includes?.Entry)
      ? data.includes.Entry
      : [];

    if (!fields?.title || !Array.isArray(fields.faqs)) {
      return null;
    }

    const faqs: FAQEntry[] = fields.faqs
      .map((ref: any) => {
        const linked = includedEntries.find(
          (e) => e.sys?.id === ref.sys?.id
        );

        if (!linked?.fields?.question || !linked?.fields?.answer) {
          return null;
        }

        return {
          question: linked.fields.question as string,
          answer: linked.fields.answer as Document,
        };
      })
      .filter(Boolean) as FAQEntry[];

    // Enforce SEO rule centrally
    if (faqs.length < 2) return null;

    return {
      title: fields.title,
      faqs,
    };
  } catch (err) {
    console.error("getPageFAQBySlug error:", err);
    return null;
  }
}
