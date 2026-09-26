import { notFound } from "next/navigation";
import { getChapterContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ book: string; chapter: string }>;
};

export default async function ChapterPage({ params }: PageProps) {
  const { book, chapter } = await params;
  const content = getChapterContent(book, chapter);

  if (!content) {
    notFound();
  }

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-3xl font-semibold text-ink">
        {(content.metadata.title as string) ?? chapter}
      </h1>

      <pre className="mt-8 whitespace-pre-wrap text-sm text-ink/70">
        {content.lesson}
      </pre>
    </div>
  );
}