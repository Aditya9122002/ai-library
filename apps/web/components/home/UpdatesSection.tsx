import Link from "next/link";

export function UpdatesSection() {
  return (
    <section className="bg-surface">
      <div className="container-page py-16">
        <div className="rounded-lg border border-dashed border-ink/15 p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink">
            This is an early-stage, open-source project
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/60">
            AI Foundations is being written chapter by chapter, and the
            platform itself is being built in the open. If you want to help
            write content, improve the site, or fix something you notice —
            contributions are welcome.
          </p>
          <Link
            href="https://github.com/Aditya9122002/ai-library"
            className="mt-6 inline-block rounded-lg bg-ink px-6 py-3 text-sm font-medium text-surface transition hover:bg-ink/90"
          >
            View on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}