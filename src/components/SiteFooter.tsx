import React from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#DED8CE] bg-[#F5F1E8] mt-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#DED8CE] pb-8">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-[#181715]"
            >
              AFTERTHOUGHTS<span className="text-[#9E3B24]">.</span>
            </Link>
            <p className="text-sm text-[#5A554E] mt-1.5 italic font-serif">
              One thought at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.16em] text-[#5A554E]">
            <Link href="/" className="hover:text-[#181715] transition-colors">
              Home
            </Link>
            <Link href="/chapters" className="hover:text-[#181715] transition-colors">
              Archive (24)
            </Link>
            <Link
              href="/afterthoughts/chapter1"
              className="hover:text-[#181715] transition-colors"
            >
              Chapter 01
            </Link>
            <Link href="/about" className="hover:text-[#181715] transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#7A7369]">
          <p>
            AFTERTHOUGHTS · An independent personal technology &amp; ideas publication.
          </p>
          <p>
            Not a lecture about artificial intelligence. Just a thought worth exploring.
          </p>
        </div>
      </div>
    </footer>
  );
}
