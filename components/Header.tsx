"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background + text color
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"}
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-20 items-center justify-between">

          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:opacity-70 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Image
                src={
                  scrolled
                    ? "/HeaderLogoBlack.svg"
                    : "/header_logo.svg"
                }
                alt="Chembarathi Wayanad Resort"
                width={90}
                height={90}
                priority
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:opacity-70 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-xl cursor-pointer">
            ☰
          </div>

        </div>
      </div>
    </header>
  );
}
