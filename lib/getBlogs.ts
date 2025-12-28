import { resolveLinkedEntries } from "./contentful-helpers";

// Contentful REST API configuration
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

export async function getAllBlogs() {
  try {
    const url = `${CONTENTFUL_API_BASE}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=blog&order=-sys.createdAt&include=10`;
    
    const res = await fetch(url, {
      cache: 'no-store', // Disable caching to ensure fresh data on every request
    });

    if (!res.ok) {
      throw new Error(`Contentful API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const items = data.items || [];
    const includes = data.includes || { Entry: [], Asset: [] };

    // Resolve linked entries/assets for each blog item
    return items.map((item: any) => resolveLinkedEntries(item, includes));
  } catch (error) {
    console.error("Error fetching blogs from Contentful:", error);
    return [];
  }
}
