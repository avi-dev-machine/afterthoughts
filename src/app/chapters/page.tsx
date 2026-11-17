import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { getAllChaptersMeta } from "@/lib/chapters";

export const metadata: Metadata = {
  title: "The Chapter Archive (01–24)",
  description:
    "Chronological archive of all 24 planned chapters in the AFTERTHOUGHTS series.",
};

export default function ChaptersArchivePage() {
  const chapters = getAllChaptersMeta();
  const publishedChapters = chapters.filter((c) => c.status === "published");
  const upcomingChapters = chapters.filter((c) => c.status === "upcoming");

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
      <header className="border-b border-[#DED8CE] pb-10 mb-12">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-3">
          CHRONOLOGICAL INDEX · SERIES I
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#181715] font-normal mb-4">
          The Chapter Archive.
        </h1>
        <p className="font-serif italic text-lg sm:text-2xl text-[#4A4640] max-w-3xl">
          All 24 planned chapters in the AFTERTHOUGHTS series—published one article,
          one question, and one thought at a time.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.15em]">
          <span className="px-3 py-1 bg-[#2C4A3E] text-[#FBF9F5]">
            {publishedChapters.length} Published
          </span>
          <span className="px-3 py-1 border border-[#D4CDC0] bg-[#F5F1E8] text-[#5A554E]">
            {upcomingChapters.length} Upcoming
          </span>
        </div>
      </header>

      {/* Published Section */}
      <section className="mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#2C4A3E] mb-4">
          PUBLISHED CHAPTERS ({publishedChapters.length})
        </div>

        <div className="space-y-6">
          {publishedChapters.map((ch) => (
            <div
              key={ch.chapterNumber}
              className="border-2 border-[#181715] bg-[#F5F1E8] p-6 sm:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.16em] mb-3">
                <span className="text-[#9E3B24] font-semibold">
                  CHAPTER {ch.chapterCode} · {ch.category}
                </span>
                <span className="text-[#605C56]">
                  {ch.readingTime} · {ch.publishedAt}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#181715] mb-3">
                <Link
                  href={ch.routePath}
                  className="hover:text-[#9E3B24] transition-colors"
                >
                  {ch.title}
                </Link>
              </h2>

              {ch.subtitle && (
                <p className="font-serif italic text-base sm:text-xl text-[#4A4640] mb-4">
                  {ch.subtitle}
                </p>
              )}

              {ch.editorialSummary && (
                <p className="text-sm sm:text-base text-[#2D2B28] leading-relaxed max-w-3xl mb-6">
                  {ch.editorialSummary}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D4CDC0]">
                <Link
                  href={ch.routePath}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#181715] text-[#FBF9F5] hover:bg-[#9E3B24] transition-colors font-mono text-xs uppercase tracking-[0.16em]"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Chapter {ch.chapterCode}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete 01-24 Chronological Table */}
      <section>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#605C56] mb-4">
          COMPLETE 24-CHAPTER SERIES PLAN (01 – 24)
        </div>

        <div className="divide-y divide-[#DED8CE] border-y border-[#181715]">
          {chapters.map((ch) => {
            const isPublished = ch.status === "published";
            return (
              <div
                key={ch.chapterNumber}
                className={`py-4 sm:py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isPublished ? "bg-[#F5F1E8]" : "bg-[#FBF9F5]"
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span
                    className={`font-mono text-sm font-semibold w-8 shrink-0 ${
                      isPublished ? "text-[#9E3B24]" : "text-[#7A7369]"
                    }`}
                  >
                    {ch.chapterCode}.
                  </span>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7A7369] mb-0.5">
                      {ch.category}
                    </div>
                    {isPublished ? (
                      <Link
                        href={ch.routePath}
                        className="font-serif text-lg sm:text-xl text-[#181715] hover:text-[#9E3B24] font-medium transition-colors"
                      >
                        {ch.title}
                      </Link>
                    ) : (
                      <span className="font-serif text-lg sm:text-xl text-[#4A4640]">
                        {ch.title}
                      </span>
                    )}
                  </div>
                </div>

                <div className="self-end sm:self-center shrink-0">
                  {isPublished ? (
                    <Link
                      href={ch.routePath}
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 bg-[#2C4A3E] text-[#FBF9F5] hover:bg-[#181715] transition-colors"
                    >
                      Published · Read →
                    </Link>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 border border-[#DED8CE] text-[#7A7369] bg-[#F5F1E8]">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
