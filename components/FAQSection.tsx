import FAQAccordion from "./FAQAccordion";
import { Document } from "@contentful/rich-text-types";
import { richTextToPlainText } from "@/lib/richTextToPlainText";

export type FAQItem = {
  question: string;
  answer: Document;
};

export type FAQSectionProps = {
  title: string;
  faqs: FAQItem[];
};

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  // Build schema safely (skip invalid items)
  const mainEntity = faqs
    .map((faq) => {
      if (!faq.question || !faq.answer) return null;

      const plainAnswer = richTextToPlainText(faq.answer);
      if (!plainAnswer) return null;

      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: plainAnswer,
        },
      };
    })
    .filter(Boolean);

  // Only output schema if valid for Google
  const faqSchema =
    mainEntity.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity,
        }
      : null;

  return (
    <>
      {/* SEO – JSON-LD FAQ schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <section className="px-4 py-20 sm:px-[12%] sm:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-[35%_1fr] gap-12">
          {/* LEFT */}
          <div className="sm:sticky sm:top-32 h-fit">
            <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
              FAQs
            </p>

            <h2 className="font-ivy text-3xl sm:text-[40px]">
              {title}
            </h2>
          </div>

          {/* RIGHT */}
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
