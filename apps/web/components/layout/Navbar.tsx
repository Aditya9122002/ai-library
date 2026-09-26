import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-surface">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-lg font-semibold text-ink">
          Open AI Learning
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-ink/70">
          <Link
            href="/ai-foundations/what-is-ai"
            className="transition hover:text-ink"
          >
            Foundations
          </Link>
          <Link
            href="https://github.com/Aditya9122002/ai-library"
            className="rounded-lg border border-ink/15 px-4 py-1.5 transition hover:bg-ink/5"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}