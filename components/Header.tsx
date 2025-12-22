// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="w-full bg-transparent text-white absolute top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-20 items-center justify-between">

          {/* Left navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide opacity-90 hover:opacity-100 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Image
                src="/header_logo.svg"
                alt="Resort Logo"
                width={90}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Right navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide opacity-90 hover:opacity-100 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button aria-label="Open menu" className="text-white text-xl">
              ☰
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
