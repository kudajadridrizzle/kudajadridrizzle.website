import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { getAllBlogs } from "../../lib/getBlogs";

// Force dynamic rendering to ensure fresh Contentful data on every request
export const dynamic = "force-dynamic";

const META_TITLE =
  "Wayanad travel blog: Latest news, tourism updates, & insights";

const META_DESCRIPTION =
  "Stay updated with the Wayanad Travel Blog. Get the latest news, tourism updates, local insights, travel tips, and experiences to help you plan your perfect trip.";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,

  alternates: {
    canonical: "https://www.kudajadridrizzle.com/blog",
  },

  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.kudajadridrizzle.com/blog",
    siteName: "Kudajadri Drizzle",
    type: "website",
    locale: "en_IN",
  },
};

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();
  const hasBlogs = blogs && blogs.length > 0;

  return (
    <>
      <Header variant="solid" />

      {/* Page Content */}
      <section className="max-w-6xl mx-auto px-4 pt-28 sm:pt-32 pb-16">
        {/* Page Header */}
        <div className="mb-14 text-center">
          <h1 className="font-ivy text-4xl mb-4">
            Wayanad Travel Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Wayanad with our Wayanad Travel Blog, featuring travel tips, itineraries, and local insights. Discover the best accommodations, including homestays and heritage cottages, and learn about sightseeing, nature walks, and adventure activities. Perfect for families, couples, and solo travelers, the blog helps plan a memorable and enjoyable Wayanad trip.

          </p>
        </div>

        {/* EMPTY STATE */}
        {!hasBlogs && (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <h2 className="text-2xl font-semibold mb-3">
              No blog posts yet
            </h2>
            <p className="text-gray-600 max-w-md mb-6">
              We’re working on exciting travel stories and guides about Wayanad.
              Please check back soon.
            </p>

            <div className="flex gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
              >
                Go to Home
              </Link>

              <Link
                href="/rooms"
                className="inline-flex items-center justify-center border border-black px-6 py-3 rounded-xl font-medium hover:bg-black hover:text-white transition"
              >
                View Rooms
              </Link>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        {hasBlogs && (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => {
              const fields = blog.fields;

              return (
                <article
                  key={blog.sys.id}
                  className="
                    group
                    rounded-2xl
                    overflow-hidden
                    border
                    border-black/10
                    bg-white
                    transition-all
                    duration-300
                    ease-out
                    hover:border-black/30
                  "
                >
                  {/* Image */}
                  {fields.featuredImage?.fields?.file?.url && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={`https:${fields.featuredImage.fields.file.url}`}
                        alt={fields.metaTitle}
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold leading-snug mb-2 text-gray-900">
                      {fields.metaTitle}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-5">
                      {fields.metaDescription}
                    </p>

                    <Link
                      href={`/blog/${fields.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-black
                        transition-all
                        group-hover:gap-3
                      "
                    >
                      Read article
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
