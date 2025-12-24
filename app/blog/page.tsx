import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { getAllBlogs } from "../../lib/getBlogs";

export const metadata = {
  title: "Wayanad travel blog: Latest news, tourism updates, & insights",
  description:
    "Stay updated with the Wayanad Travel Blog. Get the latest news, tourism updates, local insights, travel tips, and experiences to help you plan your perfect trip.",
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
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
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Go to Home
              </Link>

              <Link
                href="/rooms"
                className="inline-flex items-center justify-center border border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition"
              >
                View Rooms
              </Link>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        {hasBlogs && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => {
              const fields = blog.fields;

              return (
                <article
                  key={blog.sys.id}
                  className="
                    group
                    border border-black/50
                    rounded-xl
                    overflow-hidden
                    bg-white
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-black
                    hover:shadow-xl
                  "
                >
                  {/* Image */}
                  {fields.featuredImage && (
                    <Image
                      src={`https:${fields.featuredImage.fields.file.url}`}
                      alt={fields.metaTitle}
                      width={600}
                      height={400}
                      className="
                        object-cover h-52 w-full
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 transition-colors">
                      {fields.metaTitle}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4">
                      {fields.metaDescription}
                    </p>

                    <Link
                      href={`/blog/${fields.slug}`}
                      className="inline-flex items-center font-medium text-black hover:underline"
                    >
                      Read more →
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
