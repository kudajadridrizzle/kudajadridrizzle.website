import { contentfulClient } from "./contentful";

export async function getAllBlogs() {
  const res = await contentfulClient.getEntries({
    content_type: "blog",
    order: ["-sys.createdAt"],
  });

  return res.items;
}
