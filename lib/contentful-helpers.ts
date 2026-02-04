/* ======================================================
   Contentful Helpers – Safe Linked Entry Resolver
   Works with REST API includes (Entry + Asset)
====================================================== */

type ContentfulSys = {
  id: string;
  type: string;
  linkType?: "Entry" | "Asset";
};

export type ContentfulEntity = {
  sys: ContentfulSys;
  fields?: Record<string, any>;
};

export type ContentfulIncludes = {
  Entry?: ContentfulEntity[];
  Asset?: ContentfulEntity[];
};

/**
 * Resolves linked entries/assets recursively
 * Prevents infinite loops using a visited set
 */
export function resolveLinkedEntries<T extends ContentfulEntity>(
  item: T,
  includes?: ContentfulIncludes,
  visited = new Set<string>()
): T {
  if (!item?.sys?.id || !includes) return item;

  if (visited.has(item.sys.id)) return item;
  visited.add(item.sys.id);

  return {
    ...item,
    fields: resolveValue(item.fields ?? {}, includes, visited),
  } as T;
}

/* ---------------------------- Internals ---------------------------- */

function resolveValue(
  value: any,
  includes: ContentfulIncludes,
  visited: Set<string>
): any {
  if (Array.isArray(value)) {
    return value.map((v) => resolveValue(v, includes, visited));
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  // Handle Contentful Link
  if (value.sys?.type === "Link" && value.sys?.linkType) {
    return resolveLink(value, includes, visited);
  }

  // Already expanded Entry or Asset
  if (value.sys?.id && value.fields) {
    if (visited.has(value.sys.id)) return value;

    visited.add(value.sys.id);

    return {
      ...value,
      fields: resolveValue(value.fields, includes, visited),
    };
  }

  // Plain object
  const resolved: Record<string, any> = {};
  for (const [key, val] of Object.entries(value)) {
    resolved[key] = resolveValue(val, includes, visited);
  }

  return resolved;
}

function resolveLink(
  link: { sys: ContentfulSys },
  includes: ContentfulIncludes,
  visited: Set<string>
): any {
  const { id, linkType } = link.sys;

  const source =
    linkType === "Asset" ? includes.Asset : includes.Entry;

  const resolved = source?.find((item) => item.sys.id === id);
  if (!resolved) return link;

  if (visited.has(id)) return resolved;
  visited.add(id);

  return {
    ...resolved,
    fields: resolveValue(resolved.fields ?? {}, includes, visited),
  };
}
