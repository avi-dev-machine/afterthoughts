import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import {
  getAdjacentChapters,
  getAllChaptersMeta,
  getChapterDocument,
  parseChapterSlug,
} from "@/lib/chapters";
import { ChapterArticleView } from "@/components/ChapterArticleView";

export async function generateStaticParams() {
  const all = getAllChaptersMeta();
  return all.map((c) => ({
    slug: c.slug, // "chapter1", "chapter2", ..., "chapter24"
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapterNumber = parseChapterSlug(slug);
  if (!chapterNumber) {
    return { title: "Chapter Not Found" };
  }

  const doc = getChapterDocument(chapterNumber);
  if (doc) {
    return {
      title: `Chapter ${doc.chapterCode} — ${doc.title}`,
      description: doc.subtitle || doc.editorialSummary,
    };
  }

  const planned = getAllChaptersMeta().find((c) => c.chapterNumber === chapterNumber);
  if (planned) {
    return {
      title: `Chapter ${planned.chapterCode} — ${planned.title} (Upcoming)`,
      description: `Upcoming Chapter ${planned.chapterCode} in the AFTERTHOUGHTS series.`,
    };
  }

  return { title: "Chapter Not Found" };
}

export default async function AfterthoughtsChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapterNumber = parseChapterSlug(slug);

  if (!chapterNumber) {
    notFound();
  }

  const doc = getChapterDocument(chapterNumber);
  const adjacent = getAdjacentChapters(chapterNumber);

  if (doc) {
    return <ChapterArticleView chapter={doc} adjacent={adjacent} />;
  }

  // Check if it is one of the 24 planned upcoming chapters
  const planned = getAllChaptersMeta().find((c) => c.chapterNumber === chapterNumber);
  if (!planned) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="border-b border-[#DED8CE] pb-5 mb-10 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[#605C56]">
        <Link
          href="/chapters"
          className="inline-flex items-center gap-2 hover:text-[#181715] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Archive
        </Link>
        <span>AFTERTHOUGHTS · SERIES I</span>
      </div>

      <div className="border border-[#181715] bg-[#F5F1E8] p-8 sm:p-12">
        <div className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 border border-[#D4CDC0] bg-[#FBF9F5] text-[#9E3B24] mb-5">
          UPCOMING · CHAPTER {planned.chapterCode} OF 24
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#605C56] mb-2">
          {planned.category}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#181715] leading-tight mb-6">
          {planned.title}
        </h1>

        <p className="text-base text-[#4A4640] leading-relaxed mb-8 border-l-2 border-[#9E3B24] pl-4">
          This chapter is part of the 24-chapter <strong>AFTERTHOUGHTS.</strong>{" "}
          editorial plan and is currently marked as upcoming. In keeping with the
          publication standard, no placeholder or fabricated summary text is shown
          before the chapter is researched and published.
        </p>

        <div className="pt-6 border-t border-[#DED8CE] flex flex-wrap items-center gap-4">
          <Link
            href="/afterthoughts/chapter1"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#181715] text-[#FBF9F5] hover:bg-[#9E3B24] transition-colors font-mono text-xs uppercase tracking-[0.16em]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Read Published Chapter 01
          </Link>

          <Link
            href="/chapters"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#181715] text-[#181715] hover:bg-[#EFEAE0] transition-colors font-mono text-xs uppercase tracking-[0.16em]"
          >
            View All 24 Chapters
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
