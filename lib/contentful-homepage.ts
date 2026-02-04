import {
  PageTypeOne,
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

export async function getHomepageData(): Promise<PageTypeOne | null> {
  try {
    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=pageTypeOne` +
      `&include=10` +
      `&locale=${CONTENTFUL_LOCALE}` +
      `&limit=1`;

    const res = await fetch(url, { 
      cache: 'no-store', // Disable caching to ensure fresh data on every request
    });

    if (!res.ok) return null;

    const data: ContentfulResponse = await res.json();
    if (!data.items?.length) return null;

    const entry = data.items[0];
    const fields = entry.fields;
    const includes = data.includes;

    /* -------------------------------- META -------------------------------- */

    const metaFields = resolveEntry<any>(fields.meta.sys.id, includes);
    if (!metaFields) return null;

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
    if (!heroFields) return null;

    const hero: HeroSection = {
      internalName: heroFields.internalName,
      backgroundImage: resolveAsset(heroFields.backgroundImage.sys.id, includes)!,
      preTitle: heroFields.preTitle,
      title: heroFields.title,
      ctaVisible: heroFields.ctaVisible,
      ctaLabel: heroFields.ctaLabel,
      ctaLink: heroFields.ctaLink,
    };

    /* ---------------------------- SECTION INTROS ---------------------------- */

    const aboutFields = resolveEntry<any>(fields.aboutSection.sys.id, includes);
    if (!aboutFields) return null;

    const aboutSection: SectionIntro = {
      preTitle: aboutFields.preTitle,
      title: aboutFields.title,
      description: aboutFields.description,
    };

    const roomsSection: SectionIntro[] = resolveEntries<any>(
      fields.roomsSection,
      includes
    ).map((item) => ({
      preTitle: item.preTitle,
      title: item.title,
      description: item.description,
    }));

    const reviewFields = resolveEntry<any>(fields.reviewSection.sys.id, includes);
    if (!reviewFields) return null;

    const reviewSection: SectionIntro = {
      preTitle: reviewFields.preTitle,
      title: reviewFields.title,
      description: reviewFields.description,
    };

    const amenitiesFields = resolveEntry<any>(
      fields.amenitiesSection.sys.id,
      includes
    );
    if (!amenitiesFields) return null;

    const amenitiesSection: SectionIntro = {
      preTitle: amenitiesFields.preTitle,
      title: amenitiesFields.title,
      description: amenitiesFields.description,
    };

    const galleryFields = resolveEntry<any>(
      fields.gallerySection.sys.id,
      includes
    );
    if (!galleryFields) return null;

    const gallerySection: SectionIntro = {
      preTitle: galleryFields.preTitle,
      title: galleryFields.title,
      description: galleryFields.description,
    };

    const wayanadFields = resolveEntry<any>(
      fields.wayanadSection.sys.id,
      includes
    );
    if (!wayanadFields) return null;

    const wayanadSection: SectionIntro = {
      preTitle: wayanadFields.preTitle,
      title: wayanadFields.title,
      description: wayanadFields.description,
    };

    const directionFields = resolveEntry<any>(
      fields.directionSection.sys.id,
      includes
    );
    if (!directionFields) return null;

    const directionSection: SectionIntro = {
      preTitle: directionFields.preTitle,
      title: directionFields.title,
      description: directionFields.description,
    };

    /* ------------------------- IMAGE TEXT SECTIONS -------------------------- */

    const individualRooms: ImageTextSection[] = resolveEntries<any>(
      fields.individualRooms,
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

    const featureSection: ImageTextSection[] = resolveEntries<any>(
      fields.featureSection,
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

    /* ✅ ATTRACTIONS SECTION (FIX) */

    const attractionsSection: ImageTextSection[] = resolveEntries<any>(
      fields.attractionsSection,
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

    /* ------------------------------- FAQ ----------------------------------- */

    const faqFields = resolveEntry<any>(
      fields.frequentlyAskedQuestions.sys.id,
      includes
    );
    if (!faqFields) return null;

    const faqs: FaqItem[] = resolveEntries<any>(
      faqFields.faqs,
      includes
    ).map((item) => ({
      question: item.question,
      answer: item.answer,
    }));

    const frequentlyAskedQuestions: PageFaq = {
      internalName: faqFields.internalName,
      pageSlug: faqFields.pageSlug,
      title: faqFields.title,
      preTitle: faqFields.preTitle,
      faqs,
    };


    return {
      title: fields.title,
      meta,
      hero,
      aboutSection,
      roomsSection,
      individualRooms,
      reviewSection,
      amenitiesSection,
      gallerySection,
      wayanadSection,
      directionSection,
      featureSection,
      attractionsSection, 
      frequentlyAskedQuestions,
    };
  } catch (error) {
    console.error("getHomepageData error:", error);
    return null;
  }
}
