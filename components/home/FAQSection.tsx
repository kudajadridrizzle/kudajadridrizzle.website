'use client'

import { useState } from "react";
import Script from "next/script";

const faqs = [
  {
    q: "What are Wayanad homestays and how are they different from hotels?",
    a: "Wayanad homestays are accommodations hosted by local families, offering a warm, homely atmosphere and a closer connection to local culture. Unlike hotels, homestays in Wayanad focus on simplicity, personal attention, home-cooked food, and authentic hospitality, making them ideal for travelers seeking a peaceful and immersive stay in the hills."
  },
  {
    q: "Are homestays in Wayanad suitable for families, couples, and groups?",
    a: "Yes. Homestays in Wayanad are well suited for families, couples, and groups of friends. They usually offer spacious rooms, a relaxed environment, and friendly hosts, making them perfect for quality time, privacy, and comfortable group stays."
  },
  {
    q: "How can I find the best homestay in Wayanad?",
    a: "To find the best homestay in Wayanad, check genuine guest reviews, compare amenities, and look for locations close to major tourist attractions. Trusted platforms and official homestay websites often provide real photos, ratings, and verified contact details to help you book with confidence."
  },
  {
    q: "What amenities do Wayanad homestays typically offer?",
    a: "Most Wayanad homestays provide essential amenities such as clean rooms, hot water, free Wi-Fi, and home-cooked meals. Some also offer parking, campfire arrangements, plantation walks, or trekking guidance, combining comfort with the charm of a nature-focused stay."
  },
  {
    q: "Are meals included in Wayanad homestay bookings?",
    a: "Many homestays in Wayanad include breakfast with the stay, while lunch and dinner are usually available on request. Meals are typically homemade and feature authentic Kerala flavors prepared fresh with care."
  },
  {
    q: "Is it safe to stay in a homestay in Wayanad?",
    a: "Yes. Staying in a homestay in Wayanad is generally safe, as most are run by local families who prioritize guest comfort and security. Gated premises, private rooms, and attentive hosts make homestays suitable for families, solo travelers, and women as well."
  },
  {
    q: "What is the average price range for Wayanad homestays?",
    a: "The price of Wayanad homestays typically ranges from ₹1,000 to ₹5,000 per night. Budget homestays offer basic comforts, while premium options provide scenic views and added amenities. Prices may vary based on season, location, and facilities."
  },
  {
    q: "Can I book Wayanad homestays online?",
    a: "Yes. Most homestays in Wayanad can be booked online through popular travel platforms or directly via the homestay’s official website. Online booking allows you to view photos, read reviews, and select the best option for your travel dates."
  },
  {
    q: "Are there luxury or premium homestays in Wayanad?",
    a: "Yes. Wayanad has several premium and luxury homestays offering modern comforts such as private cottages, scenic mountain views, and personalized experiences. These homestays are ideal for honeymooners, weekend getaways, and guests seeking an upscale yet peaceful stay."
  },
  {
    q: "When is the best time to book a homestay in Wayanad?",
    a: "The best time to book a homestay in Wayanad is between October and May, when the weather is pleasant for sightseeing and outdoor activities. Advance booking is recommended during weekends, holidays, and peak travel seasons."
  }
];

/* FAQ JSON-LD Schema */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="px-4 py-14 sm:px-[12%] sm:py-32">
        <div className="flex flex-col sm:flex-row gap-12">

          {/* LEFT – Sticky Title */}
          <div className="sm:w-[35%]">
            <div className="sm:sticky sm:top-32">
              <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
                FAQs
              </p>

              <h2 className="sm:text-[40px] text-[30px] font-ivy text-primary leading-tight">
                Wayanad Homestays – FAQs
              </h2>
            </div>
          </div>

          {/* RIGHT – Accordion */}
          <div className="sm:w-[65%]">
            <div className="flex flex-col gap-6">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-primary/10 pb-6"
                  >
                    <button
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group w-full flex justify-between items-start gap-6 text-left cursor-pointer"
                    >
                      <h3 className="text-lg sm:text-xl text-primary leading-snug transition-colors duration-200 group-hover:text-primary/80">
                        {faq.q}
                      </h3>

                      <span className="text-primary text-2xl leading-none transition-opacity duration-200 group-hover:opacity-70">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    {/* Animated Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-secondary font-albertSans sm:text-lg leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQSection;
