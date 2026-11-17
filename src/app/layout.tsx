import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default:
      "AFTERTHOUGHTS. — A collection of thoughts on AI, technology and everything that comes next.",
    template: "%s | AFTERTHOUGHTS.",
  },
  description:
    "An independent personal technology and ideas publication exploring artificial intelligence, human intelligence, computing, and the questions surrounding technological progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#181715]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
