import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllChaptersMeta } from "@/lib/chapters";
import { Chapter01CoverVisual } from "@/components/EditorialVisuals";

export default function HomePage() {
  const chapters = getAllChaptersMeta();
  const featuredChapter =
    chapters.find((c) => c.chapterNumber === 1) || chapters[0];
  const publishedCount = chapters.filter((c) => c.status === "published").length;

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      {/* HERO SECTION */}
      <section className="py-16 sm:py-24 border-b border-[#DED8CE]">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#9E3B24] mb-5">
          INDEPENDENT DIGITAL PUBLICATION · SERIES I (24 CHAPTERS)
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[82px] leading-[0.98] tracking-tight text-[#181715] font-normal mb-6">
          AFTERTHOUGHTS<span className="text-[#9E3B24]">.</span>
        </h1>

        <p className="font-serif italic text-xl sm:text-3xl text-[#3D3A35] max-w-3xl leading-snug mb-10">
          A collection of thoughts on AI, technology and everything that comes next.
        </p>

        <div className="border-l-2 border-[#9E3B24] pl-5 sm:pl-7 max-w-2xl space-y-4 text-base sm:text-lg text-[#3D3A35] leading-relaxed">
          <p>
            &ldquo;Some ideas are worth exploring, some questions don&apos;t have
            straightforward answers, and some possibilities are too interesting to
            leave unexplored.
          </p>
          <p>
            Afterthoughts is my attempt to document those ideas — one article, one
            question and one thought at a time.&rdquo;
          </p>
        </div>
      </section>

      {/* FEATURED LATEST PUBLISHED CHAPTER */}
      <section className="py-16 sm:py-20 border-b border-[#DED8CE]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24]">
            FEATURED ISSUE · CHAPTER {featuredChapter.chapterCode} /{" "}
            {featuredChapter.category}
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#605C56]">
            {featuredChapter.readingTime} · {featuredChapter.publishedAt}
          </div>
        </div>

        <div className="border border-[#181715] bg-[#F5F1E8] p-6 sm:p-12">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 bg-[#2C4A3E] text-[#FBF9F5] mb-5">
            PUBLISHED · CHAPTER {featuredChapter.chapterCode}
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl leading-[1.12] text-[#181715] mb-4">
            <Link
              href={featuredChapter.routePath}
              className="hover:text-[#9E3B24] transition-colors"
            >
              {featuredChapter.title}.
            </Link>
          </h2>

          {featuredChapter.subtitle && (
            <p className="font-serif italic text-lg sm:text-2xl text-[#4A4640] mb-6 max-w-3xl">
              {featuredChapter.subtitle}
            </p>
          )}

          <p className="text-base sm:text-lg text-[#2D2B28] leading-relaxed max-w-3xl mb-8">
            {featuredChapter.editorialSummary}
          </p>

          <Chapter01CoverVisual />

          <div className="mt-8 pt-6 border-t border-[#D4CDC0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href={featuredChapter.routePath}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#181715] text-[#FBF9F5] hover:bg-[#9E3B24] transition-colors font-mono text-xs uppercase tracking-[0.18em]"
            >
              Read Chapter 01
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE CHAPTER ARCHIVE (ALL 24 PLANNED CHAPTERS) */}
      <section className="py-16 sm:py-20 border-b border-[#DED8CE]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-2">
              THE SERIES PLAN
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181715]">
              The Chapter Archive
            </h2>
          </div>

          <div className="font-mono text-xs text-[#605C56]">
            {publishedCount} Published · {chapters.length - publishedCount} Upcoming
          </div>
        </div>

        <div className="divide-y divide-[#DED8CE] border-y border-[#181715]">
          {chapters.map((ch) => {
            const isPublished = ch.status === "published";

            return (
              <div
                key={ch.chapterNumber}
                className={`py-4 sm:py-5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                  isPublished
                    ? "bg-[#F5F1E8] hover:bg-[#EFEAE0]"
                    : "bg-[#FBF9F5] opacity-85"
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span
                    className={`font-mono text-xs sm:text-sm font-semibold shrink-0 ${
                      isPublished ? "text-[#9E3B24]" : "text-[#7A7369]"
                    }`}
                  >
                    {ch.chapterCode}.
                  </span>

                  <div>
                    {isPublished ? (
                      <Link
                        href={ch.routePath}
                        className="font-serif text-lg sm:text-xl text-[#181715] hover:text-[#9E3B24] transition-colors font-medium"
                      >
                        {ch.title}
                      </Link>
                    ) : (
                      <span className="font-serif text-lg sm:text-xl text-[#4A4640]">
                        {ch.title}
                      </span>
                    )}

                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7A7369] mt-1">
                      {ch.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  {isPublished ? (
                    <Link
                      href={ch.routePath}
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 bg-[#181715] text-[#FBF9F5] hover:bg-[#9E3B24] transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Chapter
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

      {/* ABOUT THE PUBLICATION */}
      <section className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-2">
              ABOUT THE PUBLICATION
            </div>
            <h2 className="font-serif text-3xl text-[#181715]">
              A little curiosity about what comes next.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#3D3A35] leading-relaxed">
            <p>
              <strong>AFTERTHOUGHTS.</strong> is a personal space for ideas,
              questions and reflections on Artificial Intelligence, technology and
              the future. As a Computer Science and AI &amp; ML student, I&apos;m
              constantly learning about technologies that are changing the way we
              live, work and see the world.
            </p>
            <p>
              I&apos;m not here to claim expertise or predict exactly what the
              future holds. I&apos;m here to learn, explore, question and document
              that process — one article at a time.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#9E3B24] hover:text-[#181715] underline underline-offset-8"
              >
                Read Full About Page
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
