import { getBookChapters } from "@/lib/content";
import Link from "next/link";

type PageProps = {
  params: Promise<{ book: string }>;
};

export default async function BookPage({ params }: PageProps) {
  const { book } = await params;
  const chapters = getBookChapters(book);

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-3xl font-semibold capitalize text-ink">
        {book.replace(/-/g, " ")}
      </h1>
      <p className="mt-2 text-ink/60">
        {chapters.length} chapters — read in any order.
      </p>

      <div className="mt-10 grid gap-4">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/${book}/${chapter.slug}`}
            className="rounded-lg border border-ink/10 p-5 transition hover:border-teal hover:shadow-sm"
          >
            <h2 className="font-serif text-lg font-semibold text-ink">
              {chapter.title}
            </h2>
{(chapter.difficulty || chapter.time) && (
  <div className="mt-2 flex items-center gap-2">
    {chapter.difficulty && (
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        chapter.difficulty.includes("Intermediate")
          ? "bg-gold/20 text-gold"
          : "bg-teal/10 text-teal"
      }`}>
        {chapter.difficulty}
      </span>
    )}
    {chapter.time && <span className="text-sm text-ink/50">{chapter.time}</span>}
  </div>
)}
          </Link>
        ))}
      </div>
    </div>
  );
}