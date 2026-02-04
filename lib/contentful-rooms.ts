import {
    PageTypeTwo,
    ContentfulResponse,
    ContentfulEntry,
    ContentfulAsset,
    SeoMeta,
    HeroSection,
    SectionIntro,
    ImageTextSection,
    PageFaq,
    FaqItem,
  } from "@/lib/contentful";
  
  const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
  const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
  const CONTENTFUL_LOCALE = process.env.CONTENTFUL_LOCALE || "en-US";
  
  const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;
  
  /* ---------------------------- HELPER FUNCTIONS --------------------------- */
  
  function resolveEntry<T>(
    entryId: string,
    includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
  ): T | null {
    if (!includes?.Entry) return null;
    const entry = includes.Entry.find((e) => e.sys.id === entryId);
    return entry ? (entry.fields as T) : null;
  }
  
  function resolveAsset(
    assetId: string,
    includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
  ): ContentfulAsset | null {
    if (!includes?.Asset) return null;
    return includes.Asset.find((a) => a.sys.id === assetId) || null;
  }
  
  function resolveEntries<T>(
    entries: Array<{ sys: { id: string } }>,
    includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
  ): T[] {
    return entries
      .map((ref) => resolveEntry<T>(ref.sys.id, includes))
      .filter((item): item is T => item !== null);
  }
  
  /* ---------------------------- MAIN FETCH FUNCTION --------------------------- */
  
  export async function getPageTypeTwoData(slug: string): Promise<PageTypeTwo | null> {
    try {
      const url =
        `${CONTENTFUL_API_BASE}/entries` +
        `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
        `&content_type=pageTypeTwo` +
        `&fields.slug=${slug}` +
        `&include=10` +
        `&locale=${CONTENTFUL_LOCALE}` +
        `&limit=1`;
  
      const res = await fetch(url, { 
        cache: 'no-store', // Disable caching to ensure fresh data on every request
      });
  
      if (!res.ok) {
        console.error("Failed to fetch PageTypeTwo:", res.status);
        return null;
      }
  
      const data: ContentfulResponse = await res.json();
      if (!data.items?.length) {
        console.error("No PageTypeTwo found for slug:", slug);
        return null;
      }
  
      const entry = data.items[0];
      const fields = entry.fields;
      const includes = data.includes;
  
      /* -------------------------------- META -------------------------------- */
  
      const metaFields = resolveEntry<any>(fields.meta.sys.id, includes);
      if (!metaFields) {
        console.error("Meta fields not found");
        return null;
      }
  
      const meta: SeoMeta = {
        metaTitle: metaFields.metaTitle,
        metaDescription: metaFields.metaDescription,
        canonicalUrl: metaFields.canonicalUrl,
        noIndex: metaFields.noIndex,
        openGraphImage: metaFields.openGraphImage
          ? resolveAsset(metaFields.openGraphImage.sys.id, includes) || undefined
          : undefined,
      };
  
      /* -------------------------------- HERO -------------------------------- */
  
      const heroFields = resolveEntry<any>(fields.hero.sys.id, includes);
      if (!heroFields) {
        console.error("Hero fields not found");
        return null;
      }
  
      const hero: HeroSection = {
        internalName: heroFields.internalName,
        backgroundImage: resolveAsset(heroFields.backgroundImage.sys.id, includes)!,
        preTitle: heroFields.preTitle,
        title: heroFields.title,
        ctaVisible: heroFields.ctaVisible,
        ctaLabel: heroFields.ctaLabel,
        ctaLink: heroFields.ctaLink,
      };
  
      /* ---------------------------- SECTION INTRO ---------------------------- */
  
      const sectionIntroFields = resolveEntry<any>(fields.sectionIntro.sys.id, includes);
      if (!sectionIntroFields) {
        console.error("SectionIntro fields not found");
        return null;
      }
  
      const sectionIntro: SectionIntro = {
        preTitle: sectionIntroFields.preTitle,
        title: sectionIntroFields.title,
        description: sectionIntroFields.description,
      };
  
      /* -------------------------------- ROOMS -------------------------------- */
  
      const rooms: ImageTextSection[] = resolveEntries<any>(
        fields.rooms,
        includes
      ).map((item) => ({
        internalName: item.internalName,
        title: item.title,
        description: item.description,
        image: resolveAsset(item.image.sys.id, includes)!,
        imageAlt: item.imageAlt,
        ctaVisible: item.ctaVisible,
        ctaLabel: item.ctaLabel,
        ctaLink: item.ctaLink,
        imagePosition: item.imagePosition,
      }));
  
      /* -------------------------------- FAQs -------------------------------- */
  
      const faqFields = resolveEntry<any>(fields.faqs.sys.id, includes);
      if (!faqFields) {
        console.error("FAQ fields not found");
        return null;
      }
  
      const faqItems: FaqItem[] = resolveEntries<any>(
        faqFields.faqs,
        includes
      ).map((item) => ({
        question: item.question,
        answer: item.answer,
      }));
  
      const faqs: PageFaq = {
        internalName: faqFields.internalName,
        pageSlug: faqFields.pageSlug,
        title: faqFields.title,
        preTitle: faqFields.preTitle,
        faqs: faqItems,
      };
  
      /* ------------------------------ RETURN --------------------------------- */
  
      return {
        internalName: fields.internalName,
        slug: fields.slug,
        meta,
        hero,
        sectionIntro,
        rooms,
        faqs,
      };
    } catch (error) {
      console.error("getPageTypeTwoData error:", error);
      return null;
    }
  }