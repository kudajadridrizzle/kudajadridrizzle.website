"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

/* ---------------- TYPES ---------------- */

interface HeaderProps {
  type?: "white" | "black";
}

/* ---------------- HEADER ---------------- */

export const Header = ({ type = "white" }: HeaderProps) => {
  const pathname = usePathname();

  /* Pages with hero section → header always white */
  const isHeroPage =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/rooms" ||
    pathname === "/attractions" ||
    pathname === "/wayanad" ||
    pathname === "/facilities" ||
    pathname === "/gallery";

  const isWhite = isHeroPage || type === "white";

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      {/* ---------------- Desktop ---------------- */}
      <div className="hidden sm:flex items-end justify-center gap-24 py-6">
        <NavLink href="/" white={isWhite}>
          Wayanad Homestays
        </NavLink>

        <NavLink href="/about" white={isWhite}>
          About Us
        </NavLink>

        <NavLink href="/rooms" white={isWhite}>
          Rooms
        </NavLink>

        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/kudajadriLogo.svg"
            alt="Kudajadri Drizzle Homestay Logo"
            width={120}
            height={60}
            priority
            className={isWhite ? "invert" : ""}
          />
        </Link>

        <NavLink href="/facilities" white={isWhite}>
          Facilities
        </NavLink>

        <NavLink href="/gallery" white={isWhite}>
          Gallery
        </NavLink>

        <NavLink href="/contact" white={isWhite}>
          Contact Us
        </NavLink>
      </div>

      {/* ---------------- Mobile ---------------- */}
      <MobileHeader white={isWhite} />
    </header>
  );
};

/* ---------------- NAV LINK ---------------- */

const NavLink = ({
  href,
  children,
  white,
}: {
  href: string;
  children: React.ReactNode;
  white: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 font-albertSans no-underline hover:no-underline ${
        white ? "text-white" : "text-black"
      }`}
    >
      {children}
    </Link>
  );
};

/* ---------------- MOBILE HEADER ---------------- */

const MobileHeader = ({ white }: { white: boolean }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { href: "/", label: "Wayanad Homestays" },
    { href: "/about", label: "About Us" },
    { href: "/rooms", label: "Rooms" },
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div
        className="sm:hidden flex items-center justify-between px-4 bg-transparent"
        style={{ height: "70px" }}
      >
        <button
          onClick={() => setOpen(true)}
          className={`text-2xl ${white ? "text-white" : "text-black"}`}
          aria-label="Open menu"
        >
          ☰
        </button>

        <Link href="/" aria-label="Home">
          <Image
            src="/kudajadriLogo.svg"
            alt="Kudajadri Drizzle Logo"
            width={90}
            height={40}
            className={white ? "invert" : ""}
          />
        </Link>

        <button
          aria-label="WhatsApp"
          className={white ? "text-white" : "text-black"}
          onClick={() =>
            window.open(
              "https://wa.me/919946354511?text=Hi,%20I'm%20checking%20room%20availability.",
              "_blank"
            )
          }
        >
          💬
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#292626] h-full w-full pt-24 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-3xl py-3 no-underline hover:no-underline ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
