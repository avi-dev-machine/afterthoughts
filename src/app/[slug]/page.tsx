import { redirect, notFound } from "next/navigation";
import { parseChapterSlug } from "@/lib/chapters";

export default async function RootChapterRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapterNumber = parseChapterSlug(slug);

  if (chapterNumber) {
    redirect(`/afterthoughts/chapter${chapterNumber}`);
  }

  notFound();
}
