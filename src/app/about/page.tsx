import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why AFTERTHOUGHTS exists — a personal technology and ideas notebook by an engineering student exploring AI and what comes next.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-24">
      <header className="border-b border-[#DED8CE] pb-8 mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-3">
          ABOUT THE PUBLICATION
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#181715] font-normal leading-tight">
          Not a lecture about artificial intelligence. Just a thought worth exploring.
        </h1>
      </header>

      <div className="space-y-6 text-[17px] sm:text-[18.5px] leading-[1.82] text-[#22201D]">
        <p className="first-letter:float-left first-letter:font-serif first-letter:text-5xl sm:first-letter:text-6xl first-letter:leading-[0.85] first-letter:pr-3.5 first-letter:pt-1 first-letter:text-[#9E3B24]">
          I started <strong>AFTERTHOUGHTS.</strong> because I wanted a place to slow
          down and think carefully about the tools we are building and using every
          day.
        </p>

        <p>
          As an engineering student learning and building alongside modern AI
          systems, I kept noticing a strange gap in how we talk about technology.
          On one side are dense academic papers that rarely leave university labs;
          on the other side are breathless LinkedIn threads and product launches
          that treat every new model like the end of human thought.
        </p>

        <p>
          Between those two extremes sit the questions that actually matter to how
          we study, write code, do research, and make decisions:
        </p>

        <blockquote className="my-8 py-5 px-6 border-l-4 border-[#9E3B24] bg-[#F5F1E8] font-serif italic text-xl text-[#181715]">
          &ldquo;Some ideas are worth exploring, some questions don&apos;t have
          straightforward answers, and some possibilities are too interesting to
          leave unexplored. Afterthoughts is my attempt to document those ideas —
          one article, one question and one thought at a time.&rdquo;
        </blockquote>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#181715] pt-6">
          What to Expect Here
        </h2>

        <p>
          I am not writing this series as an established industry veteran or claiming
          to have final answers. I am writing as a student of engineering who enjoys
          looking under the hood—combining honest first-person observations with
          accessible mathematics, visual diagrams, and primary research from people
          who studied cognition and computing long before the current hype cycle.
        </p>

        <div className="my-8 border border-[#DED8CE] bg-[#F5F1E8] p-6 space-y-3 text-sm sm:text-base">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#2C4A3E] font-semibold">
            EDITORIAL PRINCIPLES OF AFTERTHOUGHTS
          </div>
          <ul className="space-y-2 text-[#2D2B28]">
            <li>
              • <strong>Curiosity over authority:</strong> Exploring questions
              honestly rather than preaching predetermined conclusions.
            </li>
            <li>
              • <strong>Technical clarity:</strong> Using simple equations, concrete
              code examples, and visual models where they genuinely illuminate an
              idea.
            </li>
            <li>
              • <strong>Verified sources:</strong> Citing real researchers and
              separating established findings from personal hypothesis.
            </li>
            <li>
              • <strong>No filler:</strong> Every chapter is published only when it
              has been properly researched, written, and illustrated.
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-[#DED8CE] flex flex-wrap items-center gap-4">
          <Link
            href="/afterthoughts/chapter1"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#181715] text-[#FBF9F5] hover:bg-[#9E3B24] transition-colors font-mono text-xs uppercase tracking-[0.18em]"
          >
            <BookOpen className="w-4 h-4" />
            Read Chapter 01
          </Link>

          <Link
            href="/chapters"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#181715] text-[#181715] hover:bg-[#EFEAE0] transition-colors font-mono text-xs uppercase tracking-[0.18em]"
          >
            Browse All 24 Planned Chapters
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
