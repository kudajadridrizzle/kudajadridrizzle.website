"use client";

import Image from "next/image";
import Link from "next/link";

const attractions = [
  {
    title: "Chembra Peak",
    location: "Wayanad",
    description:
      "The highest peak in Wayanad, standing at 2,100 m above sea level with panoramic views.",
    image: "/ChembraPeak.jpg",
  },
  {
    title: "Kuruva Island",
    location: "Wayanad",
    description:
      "A 950-acre evergreen forest island on the Kabani River — ideal for a peaceful day out.",
    image: "/kuruva.jpg",
  },
  {
    title: "Edakkal Caves",
    location: "Wayanad",
    description:
      "Home to Stone Age carvings dating back millennia, reachable via a scenic hike.",
    image: "/edakkal.webp",
  },
  {
    title: "Pookode Lake",
    location: "Wayanad",
    description:
      "A natural freshwater lake surrounded by evergreen forests and the Western Ghats.",
    image: "/Pookode.jpg",
  },
];

export default function AttractionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
        <span className="font-albertSans text-sm uppercase tracking-widest text-primary">
            Experience
          </span>

          <h2 className="text-4xl font-ivy leading-tight md:text-5xl">
            Attractions Near <br />
            <span className="font-ivy">
              Kudajadri Drizzle Homestay, Wayanad
            </span>
          </h2>

          <div className="mt-10">
            <Link
              href="/wayanad"
              className="inline-flex items-center rounded-full border border-black px-8 py-3 text-sm"
            >
              Explore Wayanad
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {attractions.map((item, index) => (
            <div key={index} className="space-y-6">
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-medium">
                  {item.title},{" "}
                  <span className="font-light">{item.location}</span>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
