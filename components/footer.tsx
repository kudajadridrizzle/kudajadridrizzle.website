"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WHATSAPP_NUMBER = "+91 9946 354 511";
const EMAIL = "kudajadri@ymail.com";

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: "/assets/Facebook.svg", alt: "Facebook" },
  { href: "https://instagram.com", icon: "/assets/Insta.svg", alt: "Instagram" },
  { href: "https://youtube.com", icon: "/assets/youtube.svg", alt: "YouTube" },
];

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-primary text-secondary [&_a]:no-underline [&_a:hover]:underline">
      {/* CTA */}
      <section className="border-b border-white/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-ivy text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl">
            Book Kudajadri Drizzle Homestays in Wayanad Now
          </h2>

          <button
            onClick={() => router.push("/contact")}
            className="rounded-full bg-white px-6 py-3 font-albertSans text-sm sm:text-base font-medium text-primary transition hover:opacity-90"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Socials – Mobile */}
      <section className="border-b border-white/20 sm:hidden">
        <div className="mx-auto max-w-7xl px-4 py-6 flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-8 items-center justify-center opacity-90 transition hover:opacity-100"
            >
              <Image src={link.icon} alt={link.alt} width={32} height={32} />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact */}
          <address className="not-italic space-y-4">
            <p className="font-albertSans text-sm uppercase tracking-wide text-white">
              Contact
            </p>

            <a
              href={
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
                "https://www.google.com/maps/search/?api=1&query=Kudajadri+Drizzle+Homestay+Wayanad"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block leading-relaxed max-w-sm"
            >
              Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
              Kaniyambetta, Wayanad, Kerala – 673122, India
            </a>

            <div className="space-y-1">
              <a href={`tel:${WHATSAPP_NUMBER}`} className="block">
                {WHATSAPP_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="block">
                {EMAIL}
              </a>
            </div>
          </address>

          {/* Quick Links */}
          <FooterNav
            title="Quick Links"
            links={[
              ["/about-us", "About Us"],
              ["/rooms", "Rooms"],
              ["/media-gallery", "Gallery"],
              ["/wayanad", "Wayanad"],
              ["/facilities", "Facilities"],
              ["/contact", "Contact Us"],
              ["/blog", "Blog"],
              ["/tour-packages", "Wayanad Tour Packages"],
            ]}
          />

          {/* Important Links */}
          <FooterNav
            title="Important Links"
            links={[
              ["/", "Wayanad Homestays"],
              ["/contact", "Wayanad Homestay Bookings"],
              ["/facilities", "Homestay with Swimming Pool"],
              ["/media-gallery", "Homestay Photos"],
              ["/rooms", "Wayanad Accommodations"],
              ["/rooms/premium", "Premium Homestays"],
              ["/rooms/deluxe-heritage", "Heritage Homestays"],
            ]}
          />

          {/* Rooms */}
          <FooterNav
            title="Room & Tariff"
            links={[
              ["/rooms/classic", "Classic Rooms"],
              ["/rooms/deluxe", "Deluxe Rooms"],
              ["/rooms/deluxe-heritage", "Deluxe Heritage Rooms"],
              ["/rooms/premium", "Premium Rooms"],
              ["/contact", "Book Rooms in Wayanad"],
            ]}
          />
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden sm:flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-8 items-center justify-center opacity-90 transition hover:opacity-100"
              >
                <Image src={link.icon} alt={link.alt} width={32} height={32} />
              </a>
            ))}
          </div>

          <div className="text-sm leading-relaxed">
            © {new Date().getFullYear()} Kudajadri Drizzle Homestay. All rights reserved.
            <Link href="/terms" className="ml-4">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* ---------- Helper ---------- */

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <nav>
      <p className="font-albertSans text-sm uppercase tracking-wide text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map(([href, label]) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
