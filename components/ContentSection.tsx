'use client';

import ReactMarkdown from 'react-markdown';

const content = `
## Relax and Refresh at the Swimming Pool

Take a break and relax at our swimming pool, the perfect spot to unwind during your stay. The pool is ideal for both adults and children, offering a refreshing escape from the heat.
Spend your time swimming, floating, or just lounging by the water. Comfortable seating and shaded areas make it easy to enjoy the pool even if you prefer to stay dry.
You can also use the pool area for:
- Morning swims to start your day fresh
- Evening relaxation while watching the sunset
- Family fun and games in a safe environment
A dip in the swimming pool is a great way to refresh your mind and body. It adds a touch of leisure to your stay and makes your premium homestay experience more enjoyable
## Enjoyable Experiences at Our Homestay
Make your stay memorable with a variety of experiences and activities designed for all ages.
Explore nearby Wayanad cottages and enjoy scenic sightseeing.
Other activities include:
- Wildlife spotting excursions
- Campfire evenings
- Indoor & outdoor games

These experiences make your heritage homestay stay truly refreshing.

## Convenience & Guest Services at Our Homestay
We ensure a comfortable stay with daily housekeeping, laundry service, and pick-up & drop-off assistance.
Enjoy private parking and thoughtful guest support, making your stay at our affordable homestay worry-free.

## Security & Supportive Services at Our Homestay

Your safety matters. Our homestay features CCTV security and local guidance for exploring nearby attractions.
With trusted support and personal care, you can relax and enjoy your stay.
`;

export default function ContentSection() {
  return (
    <section className="max-w-4xl mx-auto py-16 md:py-24">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-ivy mt-14 mb-4 text-gray-900">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-gray-600 leading-relaxed mb-6">
              {children}
            </p>
          ),
          li: ({ children }) => (
            <li className="text-gray-600 ml-5 list-disc mb-1">
              {children}
            </li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
}
