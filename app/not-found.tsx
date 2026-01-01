import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "404 – Page Not Found | Kudajadri Drizzle",
  description:
    "The page you are looking for does not exist or may have been moved. Return to Kudajadri Drizzle to explore homestays and tour packages in Wayanad.",
};

export default function NotFound() {
  return (
    <>
      <Header variant="solid" />

      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-[80px] sm:text-[120px] font-ivy text-primary leading-none mb-6">
            404
          </h1>

          <p className="text-primary font-albertSans text-sm tracking-[1.6px] uppercase mb-4">
            Page Not Found
          </p>

          <h2 className="sm:text-[44px] text-[32px] font-ivy text-primary leading-tight mb-6">
            Oops! This page doesn&apos;t exist
          </h2>

          <p className="text-secondary font-albertSans sm:text-xl mb-8">
            The page you&apos;re looking for might have been moved, deleted, or
            never existed.
          </p>

          <Link href="/" passHref>
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-primary text-white font-albertSans font-medium hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
