"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "CHAPTERS", href: "/chapters" },
    { label: "CHAPTER 01", href: "/afterthoughts/chapter1" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#DED8CE] bg-[#FBF9F5]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#181715] hover:opacity-80 transition-opacity"
        >
          AFTERTHOUGHTS<span className="text-[#9E3B24]">.</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-7">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase transition-colors ${
                  isActive
                    ? "text-[#9E3B24] font-semibold underline underline-offset-8 decoration-[#9E3B24]"
                    : "text-[#5A554E] hover:text-[#181715]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
