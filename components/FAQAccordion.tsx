"use client";

import { useState } from "react";
import type { FAQItem } from "./FAQSection";

type Props = {
  faqs: FAQItem[];
};

export default function FAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const isLast = index === faqs.length - 1;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={`py-6 ${!isLast ? "border-b border-black/5" : ""}`}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-start justify-between gap-6 text-left cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl leading-snug">
                {faq.question}
              </h3>

              <span
                className={`mt-1 inline-block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isOpen ? "rotate-45" : "rotate-0"}`}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`
                grid overflow-hidden
                transition-[grid-template-rows] duration-400
                ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}
              `}
            >
              <div
                className={`
                  overflow-hidden
                  transition-opacity duration-200 delay-100
                  ${isOpen ? "opacity-100" : "opacity-0"}
                `}
              >
                <p className="text-secondary leading-relaxed sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
