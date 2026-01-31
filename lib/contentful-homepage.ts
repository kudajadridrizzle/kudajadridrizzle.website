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
} from "@/types/contentful";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_LOCALE = process.env.CONTENTFUL_LOCALE || "en-US";

const CONTENTFUL_API_BASE = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

/**
 * Helper to resolve a linked entry from includes
 */
function resolveEntry<T>(
  entryId: string,
  includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
): T | null {
  if (!includes?.Entry) return null;
  const entry = includes.Entry.find((e) => e.sys.id === entryId);
  return entry ? (entry.fields as T) : null;
}

/**
 * Helper to resolve a linked asset from includes
 */
function resolveAsset(
  assetId: string,
  includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
): ContentfulAsset | null {
  if (!includes?.Asset) return null;
  return includes.Asset.find((a) => a.sys.id === assetId) || null;
}

/**
 * Helper to resolve an array of linked entries
 */
function resolveEntries<T>(
  entries: Array<{ sys: { id: string } }>,
  includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
): T[] {
  return entries
    .map((ref) => resolveEntry<T>(ref.sys.id, includes))
    .filter((item): item is T => item !== null);
}

/**
 * Fetch the homepage data (Page Type One)
 */
export async function getHomepageData(): Promise<PageTypeOne | null> {
  try {
    // Add debug logging
    console.log('=== DEBUG CONTENTFUL ===');
    console.log('Space ID:', CONTENTFUL_SPACE_ID);
    console.log('Environment:', CONTENTFUL_ENVIRONMENT);
    console.log('Has token:', !!CONTENTFUL_ACCESS_TOKEN);
    console.log('Token length:', CONTENTFUL_ACCESS_TOKEN?.length);
    console.log('Locale:', CONTENTFUL_LOCALE);
    
    // Fetch with include parameter to get all linked entries and assets
    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=pageTypeOne` +
      `&include=10` + // Include up to 10 levels of linked entries
      `&locale=${CONTENTFUL_LOCALE}` +
      `&limit=1`;

    console.log('Fetching URL:', url.replace(CONTENTFUL_ACCESS_TOKEN, '[HIDDEN]'));

    const res = await fetch(url, { 
      next: { revalidate: 3600 } // Revalidate every hour (ISR)
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("=== CONTENTFUL FETCH FAILED ===");
      console.error("Status:", res.status);
      console.error("URL:", url.replace(CONTENTFUL_ACCESS_TOKEN, '[HIDDEN]'));
      console.error("Response:", errorText);
      return null;
    }

    const data: ContentfulResponse = await res.json();

    if (!data.items?.length) {
      console.error("No homepage entry found");
      return null;
    }

    const entry = data.items[0];
    const fields = entry.fields;
    const includes = data.includes;

    // Resolve meta (seoMeta)
    const metaFields = resolveEntry<any>(fields.meta.sys.id, includes);
    const meta: SeoMeta | null = metaFields
      ? {
          metaTitle: metaFields.metaTitle,
          metaDescription: metaFields.metaDescription,
          openGraphImage: metaFields.openGraphImage
            ? resolveAsset(metaFields.openGraphImage.sys.id, includes) || undefined
            : undefined,
          canonicalUrl: metaFields.canonicalUrl,
          noIndex: metaFields.noIndex,
        }
      : null;

    if (!meta) {
      console.error("Failed to resolve meta");
      return null;
    }

    // Resolve hero (heroSection)
    const heroFields = resolveEntry<any>(fields.hero.sys.id, includes);
    const hero: HeroSection | null = heroFields
      ? {
          internalName: heroFields.internalName,
          backgroundImage: resolveAsset(heroFields.backgroundImage.sys.id, includes)!,
          preTitle: heroFields.preTitle,
          title: heroFields.title,
          ctaVisible: heroFields.ctaVisible,
          ctaLabel: heroFields.ctaLabel,
          ctaLink: heroFields.ctaLink,
        }
      : null;

    if (!hero) {
      console.error("Failed to resolve hero");
      return null;
    }

    // Resolve aboutSection (sectionIntro)
    const aboutFields = resolveEntry<any>(fields.aboutSection.sys.id, includes);
    const aboutSection: SectionIntro | null = aboutFields
      ? {
          preTitle: aboutFields.preTitle,
          title: aboutFields.title,
          description: aboutFields.description,
        }
      : null;

    if (!aboutSection) {
      console.error("Failed to resolve aboutSection");
      return null;
    }

    // Resolve roomsSection (array of sectionIntro, max 1)
    const roomsSection: SectionIntro[] = resolveEntries<any>(
      fields.roomsSection,
      includes
    ).map((item) => ({
      preTitle: item.preTitle,
      title: item.title,
      description: item.description,
    }));

    // Resolve individualRooms (array of imageTextSection)
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

    // Resolve reviewSection
    const reviewFields = resolveEntry<any>(fields.reviewSection.sys.id, includes);
    const reviewSection: SectionIntro | null = reviewFields
      ? {
          preTitle: reviewFields.preTitle,
          title: reviewFields.title,
          description: reviewFields.description,
        }
      : null;

    if (!reviewSection) {
      console.error("Failed to resolve reviewSection");
      return null;
    }

    // Resolve amenitiesSection
    const amenitiesFields = resolveEntry<any>(
      fields.amenitiesSection.sys.id,
      includes
    );
    const amenitiesSection: SectionIntro | null = amenitiesFields
      ? {
          preTitle: amenitiesFields.preTitle,
          title: amenitiesFields.title,
          description: amenitiesFields.description,
        }
      : null;

    if (!amenitiesSection) {
      console.error("Failed to resolve amenitiesSection");
      return null;
    }

    // Resolve gallerySection
    const galleryFields = resolveEntry<any>(
      fields.gallerySection.sys.id,
      includes
    );
    const gallerySection: SectionIntro | null = galleryFields
      ? {
          preTitle: galleryFields.preTitle,
          title: galleryFields.title,
          description: galleryFields.description,
        }
      : null;

    if (!gallerySection) {
      console.error("Failed to resolve gallerySection");
      return null;
    }

    // Resolve wayanadSection
    const wayanadFields = resolveEntry<any>(
      fields.wayanadSection.sys.id,
      includes
    );
    const wayanadSection: SectionIntro | null = wayanadFields
      ? {
          preTitle: wayanadFields.preTitle,
          title: wayanadFields.title,
          description: wayanadFields.description,
        }
      : null;

    if (!wayanadSection) {
      console.error("Failed to resolve wayanadSection");
      return null;
    }

    // Resolve directionSection
    const directionFields = resolveEntry<any>(
      fields.directionSection.sys.id,
      includes
    );
    const directionSection: SectionIntro | null = directionFields
      ? {
          preTitle: directionFields.preTitle,
          title: directionFields.title,
          description: directionFields.description,
        }
      : null;

    if (!directionSection) {
      console.error("Failed to resolve directionSection");
      return null;
    }

    // Resolve featureSection (array of imageTextSection)
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

    // Resolve frequentlyAskedQuestions (pageFaq)
    const faqFields = resolveEntry<any>(
      fields.frequentlyAskedQuestions.sys.id,
      includes
    );
    
    let frequentlyAskedQuestions: PageFaq | null = null;
    
    if (faqFields) {
      const faqItems: FaqItem[] = resolveEntries<any>(
        faqFields.faqs,
        includes
      ).map((item) => ({
        question: item.question,
        answer: item.answer,
      }));

      frequentlyAskedQuestions = {
        internalName: faqFields.internalName,
        pageSlug: faqFields.pageSlug,
        title: faqFields.title,
        preTitle: faqFields.preTitle,
        faqs: faqItems,
      };
    }

    if (!frequentlyAskedQuestions) {
      console.error("Failed to resolve frequentlyAskedQuestions");
      return null;
    }

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
      frequentlyAskedQuestions,
    };
  } catch (err) {
    console.error("getHomepageData error:", err);
    return null;
  }
}