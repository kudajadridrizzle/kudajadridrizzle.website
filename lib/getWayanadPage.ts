import { Document } from "@contentful/rich-text-types";
import { getContent } from "./contentful";
import { richTextToPlainText } from "./richTextToPlainText";

/* ===============================
   TYPES
================================ */

export type SeoMetaData = {
  metaTitle: string;
  metaDescription: string;
  openGraphImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export type ImageTextSectionData = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaVisible?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
  imagePosition?: "left" | "right";
};

export type WayanadPageData = {
  meta: SeoMetaData;
  imageTextSections: ImageTextSectionData[];
  faqSection?: {
    sys: {
      id: string;
    };
  };
} | null;

/* ===============================
   FETCH WAYANAD PAGE
================================ */

export async function getWayanadPage(
  slug: string = "wayanad-kerala"
): Promise<WayanadPageData> {
  try {
    // Fetch with includes to get linked entries
    const data = await getContent(slug, "wayanadPage");

    if (!data?.items?.length) {
      console.error("No Wayanad page found for slug:", slug);
      return null;
    }

    const entry = data.items[0];
    const fields = entry.fields;

    // Get included entries and assets
    const includedEntries: any[] = Array.isArray(data.includes?.Entry)
      ? data.includes.Entry
      : [];
    const includedAssets: any[] = Array.isArray(data.includes?.Asset)
      ? data.includes.Asset
      : [];

    if (!fields?.meta || !fields?.sections) {
      console.error("Missing required fields in Wayanad page");
      return null;
    }

    /* ===============================
       RESOLVE SEO META
    ================================ */
    const metaRef = fields.meta;
    const metaEntry = includedEntries.find(
      (e) => e.sys?.id === metaRef.sys?.id
    );

    if (!metaEntry?.fields?.metaTitle || !metaEntry?.fields?.metaDescription) {
      console.error("Invalid meta entry");
      return null;
    }

    let openGraphImageUrl: string | undefined;
    if (metaEntry.fields.openGraphImage) {
      const ogImageAsset = includedAssets.find(
        (a) => a.sys?.id === metaEntry.fields.openGraphImage.sys?.id
      );
      if (ogImageAsset?.fields?.file?.url) {
        // Ensure URL starts with https://
        const assetUrl = ogImageAsset.fields.file.url;
        openGraphImageUrl = assetUrl.startsWith("//") 
          ? `https:${assetUrl}` 
          : assetUrl.startsWith("http") 
          ? assetUrl 
          : `https://${assetUrl}`;
      }
    }

    const meta: SeoMetaData = {
      metaTitle: metaEntry.fields.metaTitle,
      metaDescription: metaEntry.fields.metaDescription,
      openGraphImage: openGraphImageUrl,
      canonicalUrl: metaEntry.fields.canonicalUrl,
      noIndex: metaEntry.fields.noIndex,
    };

    /* ===============================
       RESOLVE IMAGE TEXT SECTIONS
    ================================ */
    const sections = Array.isArray(fields.sections) ? fields.sections : [];
    const imageTextSections: ImageTextSectionData[] = [];
    let faqSectionRef: { sys: { id: string } } | undefined = undefined;

    for (const sectionRef of sections) {
      const sectionEntry = includedEntries.find(
        (e) => e.sys?.id === sectionRef.sys?.id
      );

      if (!sectionEntry) continue;

      // Check if it's an imageTextSection
      if (sectionEntry.sys.contentType?.sys?.id === "imageTextSection") {
        const sectionFields = sectionEntry.fields;

        if (
          !sectionFields?.title ||
          !sectionFields?.description ||
          !sectionFields?.image ||
          !sectionFields?.imageAlt
        ) {
          console.warn("Skipping invalid imageTextSection:", sectionEntry.sys.id);
          continue;
        }

        // Resolve image asset
        const imageAsset = includedAssets.find(
          (a) => a.sys?.id === sectionFields.image.sys?.id
        );

        if (!imageAsset?.fields?.file?.url) {
          console.warn("Image asset not found for section:", sectionEntry.sys.id);
          continue;
        }

        // Ensure image URL starts with https://
        const assetUrl = imageAsset.fields.file.url;
        const imageUrl = assetUrl.startsWith("//") 
          ? `https:${assetUrl}` 
          : assetUrl.startsWith("http") 
          ? assetUrl 
          : `https://${assetUrl}`;

        // Convert rich text to plain text
        const descriptionText = richTextToPlainText(sectionFields.description);

        imageTextSections.push({
          id: sectionEntry.sys.id,
          title: sectionFields.title,
          description: descriptionText,
          image: imageUrl,
          imageAlt: sectionFields.imageAlt,
          ctaVisible: sectionFields.ctaVisible,
          ctaLabel: sectionFields.ctaLabel,
          ctaLink: sectionFields.ctaLink,
          imagePosition: sectionFields.imagePosition,
        });
      }
      // Check if it's a pageFaq
      else if (sectionEntry.sys.contentType?.sys?.id === "pageFaq") {
        faqSectionRef = {
          sys: {
            id: sectionEntry.sys.id,
          },
        };
      }
    }

    return {
      meta,
      imageTextSections,
      faqSection: faqSectionRef ?? undefined,
    };
  } catch (err) {
    console.error("getWayanadPage error:", err);
    return null;
  }
}