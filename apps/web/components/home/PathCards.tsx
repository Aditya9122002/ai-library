import Link from "next/link";

import { paths } from "@/lib/path";

export function PathCards() {
  return (
    <section className="border-b border-ink/5 bg-surface">
      <div className="container-page py-16">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          Learning paths
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {paths.map((path) =>
            path.status === "available" ? (
              <Link
                key={path.title}
                href={path.href!}
                className="rounded-lg border border-ink/10 p-6 transition hover:border-teal hover:shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{path.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-teal">
                  Start learning →
                </span>
              </Link>
            ) : (
              <div
                key={path.title}
                className="rounded-lg border border-dashed border-ink/10 p-6 opacity-60"
              >
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{path.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-ink/40">
                  Coming soon
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}