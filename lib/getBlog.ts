import { contentfulClient } from "./contentful";

/**
 * Fetch a single blog post by slug
 */
export async function getBlogBySlug(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items.length > 0 ? response.items[0] : null;
}
