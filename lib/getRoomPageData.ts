import {
  PageTypeThree,
  ContentfulResponse,
  ContentfulEntry,
  ContentfulAsset,
  SeoMeta,
  ImagePreviewGrid,
  SectionIntro,
  RoomBookingCard,
  EditorialSection,
  CallToAction,
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

function resolveAssets(
  assets: Array<{ sys: { id: string } }>,
  includes?: { Entry?: ContentfulEntry[]; Asset?: ContentfulAsset[] }
): ContentfulAsset[] {
  return assets
    .map((ref) => resolveAsset(ref.sys.id, includes))
    .filter((item): item is ContentfulAsset => item !== null);
}

/* ---------------------------- ROOM PAGE FETCH FUNCTION --------------------------- */

export async function getRoomPageData(slug: string): Promise<PageTypeThree | null> {
  try {
    const url =
      `${CONTENTFUL_API_BASE}/entries` +
      `?access_token=${CONTENTFUL_ACCESS_TOKEN}` +
      `&content_type=pageTypeThree` +
      `&fields.slug=${slug}` +
      `&include=10` +
      `&locale=${CONTENTFUL_LOCALE}` +
      `&limit=1`;

    const res = await fetch(url, { 
      cache: 'no-store', // Disable caching to ensure fresh data on every request
    });

    if (!res.ok) {
      console.error("Contentful fetch failed", {
        status: res.status,
        url,
      });
      return null;
    }

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

    /* ----------------------------- HERO IMAGES ----------------------------- */

    const heroImagesFields = resolveEntry<any>(fields.heroImages.sys.id, includes);
    if (!heroImagesFields) return null;

    const heroImages: ImagePreviewGrid = {
      internalName: heroImagesFields.internalName,
      images: resolveAssets(heroImagesFields.images, includes),
    };

    /* ---------------------------- DESCRIPTION ---------------------------- */

    const descriptionFields = resolveEntry<any>(fields.description.sys.id, includes);
    if (!descriptionFields) return null;

    const description: SectionIntro = {
      preTitle: descriptionFields.preTitle,
      title: descriptionFields.title,
      description: descriptionFields.description,
    };

    /* ---------------------------- BOOKING CARD ---------------------------- */

    const cardFields = resolveEntry<any>(fields.card.sys.id, includes);
    if (!cardFields) return null;

    const card: RoomBookingCard = {
      internalName: cardFields.internalName,
    roomName: cardFields.roomName,
      priceLabel: cardFields.priceLabel,
      pricingBadge: cardFields.pricingBadge,
      extraPersonCharge: cardFields.extraPersonCharge,
      childPricing: cardFields.childPricing,
      agePolicy: cardFields.agePolicy,
      checkInTime: cardFields.checkInTime,
      checkOutTime: cardFields.checkOutTime,
      policies: cardFields.policies,
      ctaLabel: cardFields.ctaLabel,
      ctaRoute: cardFields.ctaRoute,
    };

    /* ------------------------- CONTENT SECTIONS -------------------------- */

    const contentSection: EditorialSection[] = resolveEntries<any>(
      fields.contentSection,
      includes
    ).map((item) => ({
      internalName: item.internalName,
      title: item.title,
      description: item.description,
      listTitle: item.listTitle,
      listItems: item.listItems,
      image: item.image ? resolveAsset(item.image.sys.id, includes) || undefined : undefined,
      imagePosition: item.imagePosition,
    }));

    /* ----------------------------- CTA SECTION ----------------------------- */

    const ctaSectionFields = resolveEntry<any>(fields.ctaSection.sys.id, includes);
    if (!ctaSectionFields) return null;

    const ctaSection: CallToAction = {
      internalName: ctaSectionFields.internalName,
      preTitle: ctaSectionFields.preTitle,
      title: ctaSectionFields.title,
      description: ctaSectionFields.description,
      ctaLabel: ctaSectionFields.ctaLabel,
      ctaLink: ctaSectionFields.ctaLink,
      backgroundImage: ctaSectionFields.backgroundImage
        ? resolveAsset(ctaSectionFields.backgroundImage.sys.id, includes) || undefined
        : undefined,
    };

    /* ------------------------------- FAQS ----------------------------------- */

    const faqFields = resolveEntry<any>(fields.faQs.sys.id, includes);
    if (!faqFields) return null;

    const faqs: FaqItem[] = resolveEntries<any>(
      faqFields.faqs,
      includes
    ).map((item) => ({
      question: item.question,
      answer: item.answer,
    }));

    const faQs: PageFaq = {
      internalName: faqFields.internalName,
      pageSlug: faqFields.pageSlug,
      title: faqFields.title,
      preTitle: faqFields.preTitle,
      faqs,
    };

    /* ------------------------------- RETURN -------------------------------- */

    return {
      internalName: fields.internalName,
      slug: fields.slug,
      meta,
      heroImages,
      description,
      card,
      contentSection,
      ctaSection,
      faQs,
    };
  } catch (error) {
    console.error("getRoomPageData error:", error);
    return null;
  }
}