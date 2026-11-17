import { NextRequest, NextResponse } from "next/server";
import {
  getAdjacentChapters,
  getAllChaptersMeta,
  getChapterDocument,
  parseChapterSlug,
} from "@/lib/chapters";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const chapterNumber = parseChapterSlug(slug);

  if (!chapterNumber) {
    return NextResponse.json(
      {
        error: "Invalid chapter route identifier",
        expectedPattern: "/afterthoughts/chapter1",
      },
      { status: 404 }
    );
  }

  const document = getChapterDocument(chapterNumber);
  const adjacent = getAdjacentChapters(chapterNumber);

  if (!document) {
    const meta = getAllChaptersMeta().find((c) => c.chapterNumber === chapterNumber);
    if (meta) {
      return NextResponse.json(
        {
          status: "upcoming",
          chapter: meta,
          adjacent,
          message: `Chapter ${meta.chapterCode} ("${meta.title}") is part of the AFTERTHOUGHTS 24-chapter plan and is marked as upcoming.`,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: `Chapter ${chapterNumber} not found in series archive.` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "published",
    chapter: document,
    adjacent,
  });
}
