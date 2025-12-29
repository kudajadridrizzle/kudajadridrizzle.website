import FAQAccordion from "./FAQAccordion";

/**
 * Single FAQ item.
 * MUST be plain text for SEO schema correctness.
 */
export type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Props for the FAQ section.
 */
export type FAQSectionProps = {
  title: string;
  faqs: FAQItem[];
};

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  // Google ignores FAQ schema with less than 2 items
  if (!faqs || faqs.length < 2) return null;

  // Hard validation — fail fast instead of silently breaking SEO
  for (const faq of faqs) {
    if (typeof faq.question !== "string" || typeof faq.answer !== "string") {
      throw new Error(
        "FAQSection: question and answer must be plain strings for SEO schema"
      );
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO – JSON-LD FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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
