'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AboutContentSections = () => {
  return (
    <section className="sm:px-[6%] large:px-[12%] px-4">

      {/* Section 1 */}
      <div className="flex gap-12 sm:py-32 py-14 flex-col sm:flex-row">
        {/* Text */}
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy">
            Welcome to Our Kalpetta Homestay
          </h2>

          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {`At Kudajadri Drizzle Homestay, we combine the charm of traditional
architecture with modern comforts. Guests enjoy spacious, airy surroundings,
panoramic views of Wayanad's misty hills, and a calm atmosphere that rejuvenates
the mind and soul.`}
            </ReactMarkdown>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 h-[415px]">
          <img
            src="/assets/corner.jpg"
            alt="Kalpetta Homestay"
            className="size-full object-cover rounded-[32px]"
          />
        </div>
      </div>

      {/* Section 2 (reverse) */}
      <div className="flex gap-12 sm:py-32 py-14 flex-col sm:flex-row-reverse">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy">
            Our Heritage – A Kalpetta Homestay with a Story
          </h2>

          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {`Kudajadri Drizzle is more than a homestay in Kalpetta; it is a
100-year-old Jain Tharavadu that preserves cultural charm while offering modern
amenities.`}
            </ReactMarkdown>
          </div>
        </div>

        <div className="flex-1 h-[415px]">
          <img
            src="/assets/imageThree.jpg"
            alt="Heritage homestay in Kalpetta"
            className="size-full object-cover rounded-[32px]"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex gap-12 sm:py-32 py-14 flex-col sm:flex-row">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-[#000] sm:text-[44px] text-[32px] font-ivy">
            Ideal for Every Traveler
          </h2>

          <div className="text-secondary sm:text-xl font-albertSans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {`Families enjoy comfort and safety, honeymoon couples appreciate
privacy and scenic views, and solo travelers find peace and inspiration in
nature.`}
            </ReactMarkdown>
          </div>
        </div>

        <div className="flex-1 h-[415px]">
          <img
            src="/assets/kalavandi.jpg"
            alt="Ideal homestay for all travelers"
            className="size-full object-cover rounded-[32px]"
          />
        </div>
      </div>

    </section>
  );
};

export default AboutContentSections;