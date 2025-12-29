import FAQAccordion from "./FAQAccordion"

type FAQ = {
  q: string
  a: string
}

type Props = {
  title: string
  faqs: FAQ[]
}

export default function FAQSection({ title, faqs }: Props) {
  // Google ignores FAQ schema with < 2 items
  if (!faqs || faqs.length < 2) return null

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  }

  return (
    <>
      {/* SEO – server rendered FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
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
  )
}
