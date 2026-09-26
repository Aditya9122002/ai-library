import Link from "next/link";

export function HeroSection() {
  return (
    <section className="border-b border-black/5 bg-surface-muted">
      <div className="container-page flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="rounded-full bg-gold-light px-4 py-1 text-sm font-medium text-ink">
          Free & Open Source
        </span>

        <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Learn AI from the ground up — structured, connected, and free.
        </h1>

        <p className="max-w-xl text-lg text-black/60">
          A community-built curriculum that takes you from AI basics to
          advanced topics, with every concept linked to how it actually
          connects.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/ai-foundations/chapter-01-what-is-ai"
            className="rounded-lg bg-teal px-6 py-3 font-medium text-surface transition hover:bg-teal-dark"
          >
            Start with AI Foundations →
          </Link>
          <Link
            href="/courses"
            className="rounded-lg border border-ink/15 px-6 py-3 font-medium text-ink transition hover:bg-ink/5"
          >
            Browse all paths
          </Link>
        </div>
      </div>
    </section>
  );
}