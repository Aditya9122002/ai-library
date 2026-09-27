import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getChapterContent, parseResources } from "@/lib/content";

type PageProps = {
  params: Promise<{ book: string; chapter: string }>;
};

function ResourceIcon({ isVideo }: { isVideo: boolean }) {
  if (isVideo) {
    return (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
        <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8.2 7.3v5.4l4.6-2.7-4.6-2.7Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
      <path
        d="M8.3 11.7 11.7 8.3M8.9 6.1l.9-.9a2.6 2.6 0 0 1 3.7 3.7l-1 1M11.1 13.9l-.9.9a2.6 2.6 0 1 1-3.7-3.7l1-1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ChapterPage({ params }: PageProps) {
  const { book, chapter } = await params;
  const content = getChapterContent(book, chapter);

  if (!content) {
    notFound();
  }

  const title = (content.metadata.title as string) ?? chapter;

  return (
    <div className="container-page py-16">
      <Link
        href={`/${book}`}
        className="inline-flex items-center gap-1.5 text-sm text-ink/50 transition-colors hover:text-teal"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <path d="M12 4.5 6.5 10l5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to chapters
      </Link>

      <h1 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 h-px w-16 bg-gold" />

      <article className="prose mt-10 max-w-none">
        <MDXRemote source={content.lesson} />
      </article>

      {content.resources && (() => {
        const { intro, sections } = parseResources(content.resources);
        return (
          <div className="mt-20 rounded-lg bg-surface-muted px-6 py-10 sm:px-10">
            <h2 className="font-serif text-2xl font-semibold text-ink">Go deeper</h2>
            {intro && <p className="mt-3 max-w-2xl text-ink/60">{intro}</p>}

            {sections.map((section) => {
              const isVideo = section.heading.toLowerCase().includes("video");
              return (
                <div key={section.heading} className="mt-9 first:mt-8">
                  <h3 className="text-sm font-medium text-ink/45">{section.heading}</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-md bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                      >
                        <div className="flex items-start gap-2">
                          <ResourceIcon isVideo={isVideo} />
                          <h4 className="font-serif text-base font-semibold text-ink group-hover:text-teal">
                            {item.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })()}
    </div>
  );
}