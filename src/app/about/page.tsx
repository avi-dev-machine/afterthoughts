import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About AFTERTHOUGHTS.",
  description:
    "A little curiosity about what comes next. AFTERTHOUGHTS. is a personal space for ideas, questions and reflections on Artificial Intelligence, technology and the future.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-24">
      <header className="border-b border-[#DED8CE] pb-8 mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E3B24] mb-3">
          ABOUT THE PUBLICATION
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#181715] font-normal leading-tight mb-4">
          About AFTERTHOUGHTS<span className="text-[#9E3B24]">.</span>
        </h1>
        <p className="font-serif italic text-xl sm:text-2xl text-[#3D3A35]">
          A little curiosity about what comes next.
        </p>
      </header>

      <div className="space-y-6 text-[17px] sm:text-[18.5px] leading-[1.82] text-[#22201D]">
        <p className="first-letter:float-left first-letter:font-serif first-letter:text-5xl sm:first-letter:text-6xl first-letter:leading-[0.85] first-letter:pr-3.5 first-letter:pt-1 first-letter:text-[#9E3B24]">
          <strong>AFTERTHOUGHTS.</strong> is a personal space for ideas, questions
          and reflections on Artificial Intelligence, technology and the future.
        </p>

        <p>
          It began with a simple habit — being curious about things I don&apos;t
          fully understand yet, wondering about possibilities that don&apos;t exist
          today, and occasionally getting lost in a thought that starts with{" "}
          <em className="font-serif">what if?</em>
        </p>

        <p>
          As a Computer Science and AI &amp; ML student, I&apos;m constantly learning
          about technologies that are changing the way we live, work and see the
          world. But beyond the code, algorithms and technical developments,
          there&apos;s a much bigger picture that I find equally interesting.
        </p>

        <blockquote className="my-8 py-6 px-6 sm:px-8 border-l-4 border-[#9E3B24] bg-[#F5F1E8] font-serif italic text-xl sm:text-2xl text-[#181715] leading-relaxed">
          What could we build? What might change? What should we be thinking about
          before the future arrives?
        </blockquote>

        <p>This space is my attempt to explore those questions.</p>

        <p>
          You&apos;ll find thoughts on AI, emerging technologies, practical
          innovations, human–technology interactions and ideas that might seem a
          little far-fetched today. Some pieces will be technical, some
          speculative, and others simply reflections on things worth thinking about.
        </p>

        <p>
          I&apos;m not here to claim expertise or predict exactly what the future
          holds. I&apos;m here to learn, explore, question and document that process
          — one article at a time.
        </p>

        <p>
          Perhaps some ideas will turn out to be right. Others might change
          completely as I learn more. And that&apos;s part of the journey.
        </p>

        <div className="my-10 pt-8 border-t border-[#DED8CE]">
          <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#181715] mb-2">
            AFTERTHOUGHTS<span className="text-[#9E3B24]">.</span>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[#4A4640]">
            Not a collection of answers, but a place for the questions that stay
            with us.
          </p>
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
