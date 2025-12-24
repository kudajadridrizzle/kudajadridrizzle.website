import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { getBlogBySlug } from "@/lib/getBlog";
import { Button } from "@/components/button";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

/* ---------- Rich Text Rendering Options ---------- */
const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_: any, children: any) => (
      <h2 className="text-3xl font-semibold mt-12 mb-6">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: any) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: any) => (
      <h3 className="text-xl font-semibold mt-8 mb-3">
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className="list-disc pl-6 mb-4">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol className="list-decimal pl-6 mb-4">
        {children}
      </ol>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return {};

  const fields: any = blog.fields;

  return {
    title: fields.metaTitle,
    description: fields.metaDescription,
    openGraph: {
      title: fields.metaTitle,
      description: fields.metaDescription,
      images: fields.featuredImage
        ? [`https:${fields.featuredImage.fields.file.url}`]
        : [],
    },
  };
}

/* ---------- Page Component ---------- */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const fields: any = blog.fields;

  return (
    <>
      {/* Header */}
      <Header variant="solid" />

<article className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Featured Image */}
        {fields.featuredImage && (
          <Image
            src={`https:${fields.featuredImage.fields.file.url}`}
            alt={fields.metaTitle}
            width={1200}
            height={600}
            className="rounded-xl mb-8"
            priority
          />
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          {fields.metaTitle}
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-10">
          {fields.intro}
        </p>

        {/* Rich Text Sections */}
        <div className="prose max-w-none">
          {documentToReactComponents(fields.sections, richTextOptions)}
        </div>

      </article>
    </>
  );
}
