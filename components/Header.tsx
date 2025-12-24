"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type HeaderVariant = "transparent" | "solid";

const leftNav = [
  { name: "Wayanad Homestays", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
];

const rightNav = [
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header({
  variant = "transparent",
}: {
  variant?: HeaderVariant;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (variant === "solid") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, variant]);

  const isSolid = variant === "solid";

  /* ✅ WhatsApp Auto Booking Message */
  const whatsappMessage = encodeURIComponent(
    `Hello 👋
I’m interested in booking a stay at Wayanad Homestay.

Check-in date:
Check-out date:
Number of guests:

Please share availability & tariff.`
  );

  const whatsappLink = `https://wa.me/919946354511?text=${whatsappMessage}`;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${!isSolid && hidden ? "-translate-y-full" : "translate-y-0"}
        ${
          isSolid || scrolled
            ? "bg-white text-black"
            : "bg-transparent text-white"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-20 items-center justify-between">

          {/* Desktop Left Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {leftNav.map((item) => (
              <Link key={item.name} href={item.href} className="hover:opacity-70">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <Link href="/">
              <Image
                src={
                  isSolid || scrolled
                    ? "/HeaderLogoBlack.svg"
                    : "/header_logo.svg"
                }
                alt="Wayanad Homestay"
                width={90}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {rightNav.map((item) => (
              <Link key={item.name} href={item.href} className="hover:opacity-70">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Header: MENU | LOGO | WHATSAPP */}
          <div className="relative flex w-full items-center justify-between md:hidden">

            {/* Menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src={
                    isSolid || scrolled
                      ? "/HeaderLogoBlack.svg"
                      : "/header_logo.svg"
                  }
                  alt="Wayanad Homestay"
                  width={80}
                  height={80}
                  priority
                />
              </Link>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Booking"
            >
              <FaWhatsapp className="text-2xl hover:opacity-70 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          ${isSolid || scrolled ? "bg-white text-black" : "bg-black/90 text-white"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 space-y-5 text-sm">
          {[...leftNav, ...rightNav].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="hover:opacity-70"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
