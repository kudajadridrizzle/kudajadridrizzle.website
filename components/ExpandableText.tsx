"use client";

import { useMemo, useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxChars?: number;
  className?: string;
}

export default function ExpandableText({
  text,
  maxChars = 400,
  className = "",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  const { preview, isLong } = useMemo(() => {
    const long = text.length > maxChars;

    return {
      isLong: long,
      preview: long ? text.slice(0, maxChars) + "…" : text,
    };
  }, [text, maxChars]);

  return (
    <div className={className}>
      <p>{expanded || !isLong ? text : preview}</p>

      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 text-primary font-medium underline-offset-4 hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
