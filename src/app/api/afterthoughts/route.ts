import { NextResponse } from "next/server";
import { getAllChaptersMeta } from "@/lib/chapters";

export async function GET() {
  const chapters = getAllChaptersMeta();
  const publishedCount = chapters.filter((c) => c.status === "published").length;

  return NextResponse.json({
    publication: "AFTERTHOUGHTS.",
    tagline: "A collection of thoughts on AI, technology and everything that comes next.",
    totalPlannedChapters: chapters.length,
    publishedChaptersCount: publishedCount,
    routePattern: "/afterthoughts/chapter{N}",
    chapters,
  });
}
