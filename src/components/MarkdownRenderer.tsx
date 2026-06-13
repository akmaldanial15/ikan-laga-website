"use client";

import React from "react";

/* ------------------------------------------------------------------ */
/*  Utility: slugify heading text into an anchor ID                   */
/* ------------------------------------------------------------------ */
function slugify(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------------------------------------ */
/*  Inline renderer: parses **bold** and *italic* within a text line  */
/* ------------------------------------------------------------------ */
function renderInline(text: string): React.ReactNode[] {
  const regex = /\*\*(.+?)\*\*|\*([^*]+?)\*/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <React.Fragment key={key++}>
          {text.slice(lastIndex, match.index)}
        </React.Fragment>
      );
    }
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-bold text-white">
          {match[1]}
        </strong>
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <em key={key++} className="italic text-primary/80 font-serif">
          {match[2]}
        </em>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <React.Fragment key={key++}>{text.slice(lastIndex)}</React.Fragment>
    );
  }

  return nodes.length > 0 ? nodes : [text];
}

/* ------------------------------------------------------------------ */
/*  Extract headings for table-of-contents generation                 */
/* ------------------------------------------------------------------ */
export function extractHeadings(
  markdown: string
): { level: number; text: string; id: string }[] {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = markdown.split("\n");
  for (const line of lines) {
    const match = line.trim().match(/^(#{2,4})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const rawText = match[2];
      const cleanText = rawText.replace(/\*\*/g, "").replace(/\*/g, "");
      headings.push({ level, text: cleanText, id: slugify(rawText) });
    }
  }
  return headings;
}

/* ------------------------------------------------------------------ */
/*  Main component: parses markdown string → styled React JSX         */
/* ------------------------------------------------------------------ */
interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let blockKey = 0;
  let isFirstParagraph = true;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // ── Skip empty lines ──
    if (trimmed === "") {
      i++;
      continue;
    }

    // ── Horizontal rule ──
    if (trimmed === "---") {
      elements.push(
        <div key={blockKey++} className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <span className="text-primary/30 text-xs">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
      );
      i++;
      continue;
    }

    // ── Heading ──
    const headingMatch = trimmed.match(/^(#{2,4})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length as 2 | 3 | 4;
      const text = headingMatch[2];
      const id = slugify(text);

      if (level === 2) {
        elements.push(
          <h2
            key={blockKey++}
            id={id}
            className="text-2xl md:text-3xl font-black font-serif text-white mt-14 mb-6 scroll-mt-28 border-l-[3px] border-primary pl-5 leading-tight"
          >
            {renderInline(text)}
          </h2>
        );
      } else if (level === 3) {
        elements.push(
          <h3
            key={blockKey++}
            id={id}
            className="text-xl md:text-2xl font-bold font-serif text-white/90 mt-10 mb-4 scroll-mt-28"
          >
            {renderInline(text)}
          </h3>
        );
      } else {
        elements.push(
          <h4
            key={blockKey++}
            id={id}
            className="text-base md:text-lg font-bold text-zinc-200 mt-8 mb-3 scroll-mt-28 tracking-wide uppercase text-[13px]"
          >
            {renderInline(text)}
          </h4>
        );
      }
      i++;
      continue;
    }

    // ── Blockquote ──
    if (trimmed.startsWith("> ") || trimmed === ">") {
      const quoteLines: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("> ") || lines[i].trim() === ">")
      ) {
        const ql = lines[i].trim();
        quoteLines.push(ql === ">" ? "" : ql.slice(2));
        i++;
      }
      elements.push(
        <blockquote
          key={blockKey++}
          className="my-8 border-l-[3px] border-primary/50 bg-primary/[0.04] backdrop-blur-sm rounded-r-xl px-6 py-5 space-y-1"
        >
          {quoteLines.map((ql, qi) =>
            ql === "" ? (
              <div key={qi} className="h-2" />
            ) : (
              <p
                key={qi}
                className="text-sm text-zinc-300 leading-relaxed font-mono"
              >
                {renderInline(ql)}
              </p>
            )
          )}
        </blockquote>
      );
      continue;
    }

    // ── Ordered list ──
    if (trimmed.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={blockKey++} className="my-6 space-y-5 pl-0">
          {items.map((item, ii) => (
            <li key={ii} className="flex gap-4 text-sm text-zinc-300 leading-relaxed">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                {ii + 1}
              </span>
              <div className="flex-1">{renderInline(item)}</div>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // ── Unordered list ──
    if (trimmed.match(/^[-*]\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().match(/^[-*]\s/)) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={blockKey++} className="my-6 space-y-3 pl-0">
          {items.map((item, ii) => (
            <li key={ii} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-[9px]" />
              <div className="flex-1">{renderInline(item)}</div>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // ── Paragraph (collect lines until a block element or blank line) ──
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("> ") &&
      !lines[i].trim().match(/^[-*]\s/) &&
      !lines[i].trim().match(/^\d+\.\s/) &&
      lines[i].trim() !== "---"
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const text = paraLines.join(" ");

      if (isFirstParagraph) {
        isFirstParagraph = false;
        elements.push(
          <p
            key={blockKey++}
            className="text-sm md:text-base text-zinc-300 leading-relaxed md:leading-[1.9] text-justify mb-6"
          >
            <span className="float-left mr-3 text-6xl md:text-7xl font-black text-primary font-serif leading-[0.8] mt-1.5">
              {text.charAt(0)}
            </span>
            {renderInline(text.slice(1))}
          </p>
        );
      } else {
        elements.push(
          <p
            key={blockKey++}
            className="text-sm md:text-base text-zinc-300 leading-relaxed md:leading-[1.9] text-justify mb-6"
          >
            {renderInline(text)}
          </p>
        );
      }
    }
  }

  return <div className="article-body">{elements}</div>;
}
