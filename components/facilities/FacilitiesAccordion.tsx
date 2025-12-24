'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const facilities = [
  {
    title: 'Relax and Refresh at the Swimming Pool',
    content: `
Take a break and relax at our **swimming pool**, the perfect spot to unwind during your stay. The pool is ideal for both adults and children, offering a refreshing escape from the heat.

Spend your time swimming, floating, or just lounging by the water. Comfortable seating and shaded areas make it easy to enjoy the pool even if you prefer to stay dry.

You can also use the pool area for:
- Morning swims to start your day fresh
- Evening relaxation while watching the sunset
- Family fun and games in a safe environment

A dip in the **swimming pool** is a great way to refresh your mind and body. It adds a touch of leisure to your stay and makes your [premium homestay experience](/rooms/premium-rooms) more enjoyable.
    `,
  },
  {
    title: 'Enjoyable Experiences at Our Homestay',
    content: `
Make your stay memorable with a variety of experiences and activities designed for all ages.

Explore nearby [Wayanad cottages](/rooms/deluxe-rooms) and enjoy scenic sightseeing.

Other activities include:
- Wildlife spotting excursions
- Campfire evenings
- Indoor & outdoor games

These experiences make your [heritage homestay](/rooms/delux-heritage-rooms) stay truly refreshing.
    `,
  },
  {
    title: 'Convenience & Guest Services at Our Homestay',
    content: `
We ensure a comfortable stay with daily housekeeping, laundry service, and pick-up & drop-off assistance.

Enjoy private parking and thoughtful guest support, making your stay at our [affordable homestay](/rooms/classic-rooms) worry-free.
    `,
  },
  {
    title: 'Security & Supportive Services at Our Homestay',
    content: `
Your safety matters. Our homestay features CCTV security and local guidance for exploring nearby attractions.

With trusted support and personal care, you can relax and enjoy your stay.
    `,
  },
];

const FacilitiesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-12 lg:px-[12%] 2xl:px-[12%]">
      <h2 className="text-3xl sm:text-4xl font-ivy text-center text-primary mb-10">
        Facilities & Services at Kudajadri Drizzle
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Accordion */}
        <div className="space-y-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-ivy text-xl sm:text-2xl text-black">
                  {facility.title}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 space-y-4">
                  <ReactMarkdown
                    components={{
                      a: ({ href = '', children }) => (
                        <Link
                          href={href}
                          className="text-primary underline"
                        >
                          {children}
                        </Link>
                      ),
                      p: ({ children }) => (
                        <p className="text-secondary font-albertSans text-base sm:text-lg leading-relaxed">
                          {children}
                        </p>
                      ),
                      li: ({ children }) => (
                        <li className="ml-4 list-disc text-secondary font-albertSans">
                          {children}
                        </li>
                      ),
                    }}
                  >
                    {facility.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Image */}
        <div className="w-full h-full">
          <div className="sticky top-24 aspect-square relative">
            <Image
              src="/images/pool34.jpg"
              alt="Facilities at Kudajadri Drizzle"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesAccordion;
