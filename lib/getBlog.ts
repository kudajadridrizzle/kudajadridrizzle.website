import { resolveLinkedEntries } from "./contentful-helpers";

// Contentful REST API configuration
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

/**
 * Fetch a single blog post by slug
 */
export async function getBlogBySlug(slug: string) {
  try {
    const url = `${CONTENTFUL_API_BASE}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=blog&fields.slug=${encodeURIComponent(slug)}&limit=1&include=10`;
    
    const response = await fetch(url, {
      cache: 'no-store', // Disable caching to ensure fresh data on every request
    });

    if (!response.ok) {
      throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      return null;
    }

    const includes = data.includes || { Entry: [], Asset: [] };
    
    // Resolve linked entries/assets
    return resolveLinkedEntries(data.items[0], includes);
  } catch (error) {
    console.error("Error fetching blog by slug from Contentful:", error);
    return null;
  }
}
