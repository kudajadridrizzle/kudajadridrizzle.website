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


export async function getContent(slug: string,content_type: string){
  const url =
    `${CONTENTFUL_API_BASE}/entries` +
    `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
    `&content_type=${content_type}` +
    `&fields.pageSlug=${slug}`;

    const res = await fetch(url, { cache: "no-store" });
       if (!res.ok) {
      const errorText = await res.text();
      console.error("Contentful FAQ fetch failed");
      console.error("Status:", res.status);
      console.error("URL:", url);
      console.error("Response:", errorText);
      return null;
    }
    
    return await res.json();  
 
}