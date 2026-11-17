import fs from "fs";
import path from "path";
import { SERIES_PLAN } from "@/content/chapters/seriesPlan";
import { chapter1 } from "@/content/chapters/chapter1";
import { ChapterDocument, ChapterMeta, ContentBlock } from "@/types/chapter";

/**
 * Static registry of rich structured chapters.
 * Adding `chapter2` here or adding `src/content/chapters/chapter2.md`
 * automatically publishes `/afterthoughts/chapter2` and updates the archive.
 */
const STATIC_CHAPTERS: Record<number, ChapterDocument> = {
  1: chapter1,
};

/**
 * Parses a loose slug like "chapter1", "chapter-01", "01", "1", "chatpter1"
 * into its integer chapter number (1..24).
 */
export function parseChapterSlug(rawSlug: string): number | null {
  if (!rawSlug) return null;
  const cleaned = decodeURIComponent(rawSlug).trim().toLowerCase();

  // Match "chapter1", "chapter-01", "chapter_1", "chatpter1", "ch1", or pure numbers "1", "01"
  const match = cleaned.match(/^(?:cha?t?p?ter[-_]?|ch[-_]?)?0*(\d+)$/);
  if (!match) return null;

  const num = parseInt(match[1], 10);
  if (Number.isNaN(num) || num < 1 || num > 100) return null;
  return num;
}

/**
 * Dynamically checks if a markdown chapter file (e.g. `src/content/chapters/chapter2.md`)
 * exists on disk and converts it into a structured ChapterDocument.
 */
function loadMarkdownChapterIfExists(chapterNumber: number): ChapterDocument | null {
  const candidates = [
    path.join(process.cwd(), "src", "content", "chapters", `chapter${chapterNumber}.md`),
    path.join(
      process.cwd(),
      "src",
      "content",
      "chapters",
      `chapter${String(chapterNumber).padStart(2, "0")}.md`
    ),
  ];

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        return parseMarkdownToChapterDocument(chapterNumber, raw);
      } catch {
        return null;
      }
    }
  }
  return null;
}

function parseMarkdownToChapterDocument(
  chapterNumber: number,
  markdown: string
): ChapterDocument {
  const planMeta = SERIES_PLAN.find((c) => c.chapterNumber === chapterNumber);
  const code = String(chapterNumber).padStart(2, "0");
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");

  let title = planMeta?.title || `Chapter ${code}`;
  let subtitle = planMeta?.subtitle || "";
  const blocks: ContentBlock[] = [];
  let sectionCounter = 0;

  let paragraphBuffer: string[] = [];
  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      const text = paragraphBuffer.join(" ").trim();
      if (text) {
        blocks.push({
          type: "paragraph",
          text,
          dropcap: blocks.filter((b) => b.type === "paragraph").length === 0,
        });
      }
      paragraphBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === "---") {
      flushParagraph();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      const h1 = line.slice(2).trim();
      if (h1.toUpperCase() !== "AFTERTHOUGHTS.") {
        title = h1;
      }
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      sectionCounter += 1;
      const rawHeading = line.slice(3).trim();
      const numberedMatch = rawHeading.match(/^(\d+)\.\s*(.+)$/);
      const numStr = numberedMatch
        ? numberedMatch[1].padStart(2, "0")
        : String(sectionCounter).padStart(2, "0");
      const headingText = numberedMatch ? numberedMatch[2] : rawHeading;
      blocks.push({
        type: "heading",
        number: numStr,
        id: `section-${numStr}`,
        text: headingText,
      });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      blocks.push({
        type: "subheading",
        text: line.slice(4).trim(),
      });
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      blocks.push({
        type: "pullquote",
        quote: line.slice(2).replace(/^\*\*|\*\*$/g, "").replace(/^\*|\*$/g, "").trim(),
      });
      continue;
    }

    if (!subtitle && line.startsWith("*") && line.endsWith("*") && blocks.length === 0) {
      subtitle = line.replace(/^\*+|\*+$/g, "").trim();
      continue;
    }

    paragraphBuffer.push(line);
  }
  flushParagraph();

  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(4, Math.round(wordCount / 240));

  return {
    chapterNumber,
    chapterCode: code,
    slug: `chapter${chapterNumber}`,
    routePath: `/afterthoughts/chapter${chapterNumber}`,
    category: planMeta?.category || "TECHNOLOGY & IDEAS",
    title,
    subtitle:
      subtitle ||
      "Exploring the questions surrounding artificial intelligence and technological progress.",
    editorialSummary:
      planMeta?.editorialSummary ||
      subtitle ||
      `Chapter ${code} of the AFTERTHOUGHTS series.`,
    publishedAt: planMeta?.publishedAt || "2026",
    readingTime: `${readingMinutes} MIN READ`,
    wordCount,
    status: "published",
    blocks,
    closingReflection: {
      quote:
        "Every tool we build reshapes not only what we can do, but what we pay attention to.",
      finalQuestion: "Where do we draw the line between assistance and understanding?",
    },
    authorNote:
      "Written for AFTERTHOUGHTS — a personal series exploring AI, computing, and what comes next.",
    hashtags: ["#Afterthoughts", "#ArtificialIntelligence", "#Technology"],
    references: [],
  };
}

/**
 * Retrieves a published chapter document by chapter number or slug.
 */
export function getChapterDocument(slugOrNumber: string | number): ChapterDocument | null {
  const chapterNumber =
    typeof slugOrNumber === "number" ? slugOrNumber : parseChapterSlug(slugOrNumber);

  if (!chapterNumber) return null;

  if (STATIC_CHAPTERS[chapterNumber]) {
    return STATIC_CHAPTERS[chapterNumber];
  }

  return loadMarkdownChapterIfExists(chapterNumber);
}

/**
 * Returns the full 24-chapter chronological archive, dynamically upgrading any
 * chapter that has a published document to status = "published".
 */
export function getAllChaptersMeta(): ChapterMeta[] {
  return SERIES_PLAN.map((item) => {
    const doc = getChapterDocument(item.chapterNumber);
    if (doc) {
      return {
        ...item,
        title: doc.title.replace(/\.$/, ""),
        subtitle: doc.subtitle,
        editorialSummary: doc.editorialSummary,
        publishedAt: doc.publishedAt,
        readingTime: doc.readingTime,
        wordCount: doc.wordCount,
        status: "published",
      };
    }
    return item;
  });
}

/**
 * Returns adjacent chapters (previous and next in the 24-chapter sequence).
 */
export function getAdjacentChapters(chapterNumber: number): {
  previous: ChapterMeta | null;
  next: ChapterMeta | null;
} {
  const all = getAllChaptersMeta();
  const idx = all.findIndex((c) => c.chapterNumber === chapterNumber);
  return {
    previous: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
  };
}
