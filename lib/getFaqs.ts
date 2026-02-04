import { getContent } from "./contentful";
import { FAQItem } from "@/components/FAQSection";
import type { Document } from "@contentful/rich-text-types";

function isRichTextDocument(value: unknown): value is Document {
  return (
    typeof value === "object" &&
    value !== null &&
    "content" in value &&
    "data" in value
  );
}

export type PageFAQData = {
  title: string;
  faqs: FAQItem[];
} | null;


export async function getPageFAQBySlug(
  slug: string
): Promise<PageFAQData> {
  try {
    
   const data = await getContent(slug,"pageFaq");
    if (!data?.items?.length) return null;
    
    const entry = data.items[0];
    const fields = entry.fields;
    const includedEntries: any[] = Array.isArray(data.includes?.Entry)
    ? data.includes.Entry
    : [];
    
    if (!fields?.title || !Array.isArray(fields.faqs)) {
      return null;
    }
    
    const faqs = fields.faqs
      .map((ref: any): FAQItem | null => {
        const linked = includedEntries.find((e) => e.sys?.id === ref.sys?.id);

        const question = linked?.fields?.question;
        const answer = linked?.fields?.answer;

        if (typeof question !== "string" || !isRichTextDocument(answer)) {
          return null;
        }

        return { question, answer };
      })
      .filter((item): item is FAQItem => item !== null);

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