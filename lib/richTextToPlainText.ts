import { Document } from "@contentful/rich-text-types";

/**
 * Converts Contentful Rich Text document into
 * plain text safe for SEO / FAQ schema.
 */
export function richTextToPlainText(doc: Document | null | undefined): string {
  if (!doc || typeof doc !== "object") {
    return "";
  }

  let text = "";

  function walk(node: any) {
    if (!node) return;

    if (node.nodeType === "text" && typeof node.value === "string") {
      text += node.value.trim() + " ";
    }

    if (Array.isArray(node.content)) {
      node.content.forEach(walk);
    }
  }

  walk(doc);

  return text.replace(/\s+/g, " ").trim();
}
