/* ===============================
   PAGE FAQ
================================ */

import { getContent } from "./contentful";
import { FAQItem } from "@/components/FAQSection";

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
    
    const faqs: FAQItem[] = fields.faqs
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
      .filter(Boolean) as FAQItem[];

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