import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { ChapterDocument, ChapterMeta, ContentBlock } from "@/types/chapter";
import { ReadingProgressBar } from "./ReadingProgressBar";
import {
  Chapter01CoverVisual,
  RenderEditorialVisual,
} from "./EditorialVisuals";

function renderTextWithCitations(text: string) {
  // Split by patterns like [1], [12]
  const parts = text.split(/(\[\d+\])/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (match) {
      const refNum = match[1];
      return (
        <a
          key={index}
          href={`#ref-${refNum}`}
          className="font-mono text-[11px] text-[#9E3B24] hover:underline ml-0.5 align-super font-semibold"
          title={`Jump to Reference [${refNum}]`}
        >
          [{refNum}]
        </a>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function ChapterArticleView({
  chapter,
  adjacent,
}: {
  chapter: ChapterDocument;
  adjacent: { previous: ChapterMeta | null; next: ChapterMeta | null };
}) {
  const headings = chapter.blocks.filter(
    (b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading"
  );

  return (
    <>
      <ReadingProgressBar />

      <article className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-20">
        {/* Top Breadcrumb / Return Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DED8CE] pb-5 mb-10 font-mono text-xs uppercase tracking-[0.15em] text-[#605C56]">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#181715] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
            <span className="text-[#D4CDC0]">/</span>
            <Link
              href="/chapters"
              className="hover:text-[#181715] transition-colors"
            >
              Archive
            </Link>
          </div>

          <div className="text-[#9E3B24] font-medium">
            {chapter.readingTime} · AFTERTHOUGHTS · CHAPTER {chapter.chapterCode}
          </div>
        </div>

        {/* Editorial Masthead / Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#9E3B24] mb-4">
            <span>
              {chapter.chapterCode} / {chapter.category}
            </span>
            {chapter.publishedAt && (
              <>
                <span className="text-[#D4CDC0]">•</span>
                <span className="text-[#605C56]">{chapter.publishedAt}</span>
              </>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#181715] font-normal mb-6">
            {chapter.title}
          </h1>

          {chapter.subtitle && (
            <p className="font-serif text-lg sm:text-2xl leading-relaxed text-[#4A4640] italic max-w-3xl">
              {chapter.subtitle}
            </p>
          )}

          {/* Cover Visual for Chapter 01 */}
          {chapter.chapterNumber === 1 && (
            <div className="mt-10">
              <Chapter01CoverVisual />
              {chapter.coverCaption && (
                <p className="font-mono text-[11px] text-[#6E685F] tracking-wide mt-2">
                  {chapter.coverCaption}
                </p>
              )}
            </div>
          )}

          {/* Section Index / Storyboard Strip */}
          {headings.length > 0 && (
            <details className="mt-8 border border-[#DED8CE] bg-[#F5F1E8] p-4 group">
              <summary className="cursor-pointer font-mono text-xs uppercase tracking-[0.16em] text-[#181715] flex items-center justify-between select-none">
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#9E3B24]" />
                  Chapter Outline ({headings.length} Sections)
                </span>
                <span className="text-[#605C56] group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <ol className="mt-4 pt-3 border-t border-[#DED8CE] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="flex items-baseline gap-2.5 py-1 text-[#3D3A35] hover:text-[#9E3B24] transition-colors"
                    >
                      <span className="font-mono text-[11px] text-[#9E3B24] shrink-0">
                        {h.number}.
                      </span>
                      <span>{h.text}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          )}
        </header>

        {/* Main Long-Form Editorial Body */}
        <div className="space-y-6 text-[17px] sm:text-[18.5px] leading-[1.82] text-[#22201D]">
          {chapter.blocks.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <section
                    key={index}
                    id={block.id}
                    className="pt-12 pb-3 border-t border-[#DED8CE] mt-14 scroll-mt-24"
                  >
                    {block.number && (
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-2">
                        SECTION {block.number}
                      </div>
                    )}
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-[1.2] text-[#181715] font-normal">
                      {block.text}
                    </h2>
                    {block.subtitle && (
                      <p className="font-serif italic text-base sm:text-lg text-[#605C56] mt-2">
                        {block.subtitle}
                      </p>
                    )}
                  </section>
                );

              case "subheading":
                return (
                  <h3
                    key={index}
                    className="font-serif text-xl sm:text-2xl text-[#181715] pt-6 pb-1 font-normal"
                  >
                    {block.text}
                  </h3>
                );

              case "paragraph":
                return (
                  <p
                    key={index}
                    className={`max-w-[68ch] ${
                      block.dropcap
                        ? "first-letter:float-left first-letter:font-serif first-letter:text-5xl sm:first-letter:text-6xl first-letter:leading-[0.85] first-letter:pr-3.5 first-letter:pt-1 first-letter:text-[#9E3B24] first-letter:font-normal"
                        : ""
                    }`}
                  >
                    {renderTextWithCitations(block.text)}
                  </p>
                );

              case "pullquote":
                return (
                  <blockquote
                    key={index}
                    className="my-10 py-7 px-6 sm:px-10 border-y-2 border-[#181715] bg-[#F5F1E8]"
                  >
                    <p className="font-serif text-xl sm:text-2xl lg:text-[26px] leading-[1.4] text-[#181715] italic">
                      &ldquo;{block.quote}&rdquo;
                    </p>
                    {block.attribution && (
                      <footer className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-[#9E3B24]">
                        — {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                );

              case "highlight":
                return (
                  <div
                    key={index}
                    className="my-9 border-l-4 border-[#9E3B24] bg-[#F5F1E8] p-5 sm:p-7 max-w-[68ch]"
                  >
                    {block.label && (
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9E3B24] mb-2">
                        {block.label}
                      </div>
                    )}
                    <p className="font-serif text-xl sm:text-2xl leading-snug text-[#181715]">
                      {block.text}
                    </p>
                  </div>
                );

              case "list":
                return (
                  <div
                    key={index}
                    className="my-6 max-w-[68ch] bg-[#F6F3EB] border border-[#E2DDD2] p-5 sm:p-6"
                  >
                    {block.intro && (
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#5A554E] mb-4">
                        {block.intro}
                      </p>
                    )}
                    {block.ordered ? (
                      <ol className="space-y-3.5 list-decimal list-inside">
                        {block.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-base sm:text-[17px] leading-relaxed text-[#22201D]"
                          >
                            {item.title && (
                              <strong className="font-semibold text-[#181715]">
                                {item.title}{" "}
                              </strong>
                            )}
                            <span className="text-[#3D3A35]">{item.body}</span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="space-y-3">
                        {block.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-baseline gap-3 text-base sm:text-[17px] leading-relaxed"
                          >
                            <span className="font-mono text-xs text-[#9E3B24] shrink-0">
                              —
                            </span>
                            <div>
                              {item.title && (
                                <strong className="font-semibold text-[#181715]">
                                  {item.title}:{" "}
                                </strong>
                              )}
                              <span className="text-[#3D3A35]">{item.body}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );

              case "math":
                return (
                  <div
                    key={index}
                    className="my-10 border border-[#181715] bg-[#FBF9F5] p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DED8CE] pb-3 mb-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2C4A3E] font-semibold">
                        {block.label}
                      </span>
                      {block.isHypothetical && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#F5F1E8] border border-[#D4CDC0] text-[#605C56]">
                          Hypothetical Illustrative Model
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl text-[#181715] mb-4">
                      {block.title}
                    </h4>

                    {/* Equation Display Box */}
                    <div className="my-4 p-4 bg-[#F3EFE6] border border-[#D4CDC0] font-mono text-sm sm:text-base text-[#181715] overflow-x-auto text-center font-semibold">
                      {block.formulaDisplay}
                    </div>

                    {/* Variables */}
                    <div className="mt-5">
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#605C56] mb-2">
                        Where the variables represent:
                      </div>
                      <dl className="grid grid-cols-1 gap-2 text-xs sm:text-sm border-l-2 border-[#D4CDC0] pl-4">
                        {block.variables.map((v, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:gap-3">
                            <dt className="font-mono font-semibold text-[#9E3B24] min-w-[140px] shrink-0">
                              {v.symbol}
                            </dt>
                            <dd className="text-[#3D3A35]">{v.meaning}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Walkthrough steps */}
                    <div className="mt-5 pt-4 border-t border-[#EAE4D8]">
                      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#605C56] mb-2">
                        Step-by-Step Walkthrough:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#22201D]">
                        {block.walkthrough.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {block.conclusion && (
                      <p className="mt-5 pt-4 border-t border-[#DED8CE] text-sm sm:text-base text-[#181715] font-medium leading-relaxed">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#2C4A3E] mr-2">
                          Takeaway:
                        </span>
                        {block.conclusion}
                      </p>
                    )}
                  </div>
                );

              case "visual":
                return (
                  <RenderEditorialVisual
                    key={index}
                    visualId={block.visualId}
                    figureNumber={block.figureNumber}
                    title={block.title}
                    caption={block.caption}
                    disclaimer={block.disclaimer}
                  />
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Closing Reflection & Open Question */}
        <section className="mt-14 pt-10 border-t-2 border-[#181715]">
          <blockquote className="font-serif text-2xl sm:text-3xl leading-[1.38] text-[#181715] italic mb-8">
            &ldquo;{chapter.closingReflection.quote}&rdquo;
          </blockquote>

          <div className="border border-[#181715] bg-[#F5F1E8] p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#9E3B24] mb-2">
              A QUESTION FOR YOU · LEAVE WITH A THOUGHT
            </div>
            <p className="font-serif text-xl sm:text-2xl text-[#181715] leading-snug">
              {chapter.closingReflection.finalQuestion}
            </p>
          </div>
        </section>

        {/* Author Note & Hashtags */}
        <section className="mt-12 p-6 sm:p-8 border border-[#DED8CE] bg-[#FBF9F5]">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#605C56] mb-2">
            AUTHOR&apos;S NOTE · AFTERTHOUGHTS SERIES
          </div>
          <p className="text-sm sm:text-base text-[#3D3A35] leading-relaxed mb-5">
            {chapter.authorNote}
          </p>
          <div className="flex flex-wrap gap-2 pt-3 border-t border-[#EAE4D8]">
            {chapter.hashtags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-[#5A554E] bg-[#F3EFE6] px-2.5 py-1 border border-[#DED8CE]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Verified References & Further Reading */}
        {chapter.references.length > 0 && (
          <section
            id="references"
            className="mt-16 pt-10 border-t border-[#DED8CE]"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#9E3B24] mb-2">
              VERIFIED SOURCES
            </div>
            <h3 className="font-serif text-2xl text-[#181715] mb-6">
              References &amp; Further Reading
            </h3>

            <ol className="space-y-4 text-xs sm:text-sm text-[#3D3A35]">
              {chapter.references.map((ref) => (
                <li
                  key={ref.id}
                  id={`ref-${ref.id}`}
                  className="p-3.5 border border-[#E5DFD3] bg-[#FBF9F5] scroll-mt-24 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#9E3B24] mr-2">
                      [{String(ref.id).padStart(2, "0")}]
                    </span>
                    <strong className="text-[#181715]">
                      {ref.authors} ({ref.year}).
                    </strong>{" "}
                    <span className="italic">{ref.title}.</span>{" "}
                    <span className="text-[#605C56]">{ref.publication}.</span>
                  </div>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-[#2C4A3E] hover:text-[#9E3B24] shrink-0 underline underline-offset-4"
                  >
                    {ref.doi ? `DOI: ${ref.doi}` : "Source"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Previous / Next Chapter Navigation */}
        <nav
          aria-label="Chapter pagination"
          className="mt-16 pt-10 border-t-2 border-[#181715] grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {adjacent.previous ? (
            <Link
              href={adjacent.previous.routePath}
              className="border border-[#D4CDC0] bg-[#FBF9F5] hover:bg-[#F5F1E8] p-5 transition-colors flex flex-col justify-between"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#605C56] inline-flex items-center gap-1.5 mb-2">
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous · Chapter {adjacent.previous.chapterCode}
              </span>
              <span className="font-serif text-lg text-[#181715]">
                {adjacent.previous.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/chapters"
              className="border border-[#D4CDC0] bg-[#FBF9F5] hover:bg-[#F5F1E8] p-5 transition-colors flex flex-col justify-between"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#605C56] inline-flex items-center gap-1.5 mb-2">
                <ArrowLeft className="w-3.5 h-3.5" />
                Series Index
              </span>
              <span className="font-serif text-lg text-[#181715]">
                View All 24 Planned Chapters
              </span>
            </Link>
          )}

          {adjacent.next && (
            <Link
              href={
                adjacent.next.status === "published"
                  ? adjacent.next.routePath
                  : "/chapters"
              }
              className="border border-[#D4CDC0] bg-[#FBF9F5] hover:bg-[#F5F1E8] p-5 transition-colors flex flex-col justify-between sm:text-right"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9E3B24] inline-flex items-center sm:justify-end gap-1.5 mb-2">
                Next · Chapter {adjacent.next.chapterCode} (
                {adjacent.next.status === "published" ? "Published" : "Upcoming"})
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-serif text-lg text-[#181715]">
                {adjacent.next.title}
              </span>
            </Link>
          )}
        </nav>
      </article>
    </>
  );
}
