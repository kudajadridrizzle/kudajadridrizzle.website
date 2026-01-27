import { Document, BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";

export function renderRichText(document: Document): ReactNode {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => <p className="mb-4">{children}</p>,
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{children}</a>,
    },
  };

  return documentToReactComponents(document, options);
}