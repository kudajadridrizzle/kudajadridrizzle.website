import FAQSection from "@/components/FAQSection";
import { getPageFAQBySlug } from "@/lib/contentful";

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const data = await getPageFAQBySlug(slug);

  const hasFaqs = !!data && Array.isArray(data.faqs) && data.faqs.length >= 2;

  return (
    <main>
      {hasFaqs ? (
        <FAQSection title={data!.title} faqs={data!.faqs} />
      ) : null}
    </main>
  );
}
