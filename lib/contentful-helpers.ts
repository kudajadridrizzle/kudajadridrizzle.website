/**
 * Helper function to resolve linked entries/assets from Contentful REST API response
 * The REST API returns linked entries in an 'includes' object, not embedded in fields
 */
export function resolveLinkedEntries<T extends { sys?: { id: string }; fields?: any }>(
  item: T,
  includes: {
    Entry?: any[];
    Asset?: any[];
  }
): T {
  if (!item || !item.sys) return item;

  // Recursively resolve linked entries in fields
  const resolvedFields = resolveFields(item.fields || {}, includes);
  
  return {
    ...item,
    fields: resolvedFields,
  } as T;
}

function resolveFields(fields: any, includes: { Entry?: any[]; Asset?: any[] }): any {
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) {
    return fields;
  }

  const resolved: any = {};

  for (const [key, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      resolved[key] = value.map((item) => {
        if (item && typeof item === 'object' && 'sys' in item && (item as any).sys?.type === 'Link') {
          return resolveLink(item, includes);
        }
        // Recursively resolve nested objects in arrays
        if (item && typeof item === 'object' && 'fields' in item) {
          return {
            ...item,
            fields: resolveFields((item as any).fields, includes),
          };
        }
        return item;
      });
    } else if (value && typeof value === 'object' && value !== null) {
      if ('sys' in value && (value as any).sys?.type === 'Link') {
        resolved[key] = resolveLink(value, includes);
      } else if ('fields' in value) {
        // Recursively resolve nested entries
        resolved[key] = {
          ...value,
          fields: resolveFields((value as any).fields, includes),
        };
      } else {
        resolved[key] = resolveFields(value, includes);
      }
    } else {
      resolved[key] = value;
    }
  }

  return resolved;
}

function resolveLink(link: any, includes: { Entry?: any[]; Asset?: any[] }): any {
  if (!link?.sys?.id) return link;

  const linkType = link.sys.linkType;
  const linkId = link.sys.id;

  if (linkType === 'Asset' && includes.Asset) {
    const asset = includes.Asset.find((a) => a.sys.id === linkId);
    if (asset) {
      return {
        ...asset,
        fields: resolveFields(asset.fields, includes),
      };
    }
  } else if (linkType === 'Entry' && includes.Entry) {
    const entry = includes.Entry.find((e) => e.sys.id === linkId);
    if (entry) {
      return {
        ...entry,
        fields: resolveFields(entry.fields, includes),
      };
    }
  }

  return link;
}

