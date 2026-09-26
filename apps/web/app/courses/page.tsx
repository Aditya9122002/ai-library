import { paths } from "@/lib/path";

export default function CoursesPage() {
  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-3xl font-semibold text-ink">
        All learning paths
      </h1>
      <p className="mt-2 text-ink/60">
        Every path we're building — available now or coming soon.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {paths.map((path) => (
          <div
            key={path.title}
            className={
              path.status === "available"
                ? "rounded-lg border border-ink/10 p-6"
                : "rounded-lg border border-dashed border-ink/10 p-6 opacity-60"
            }
          >
            <h2 className="font-serif text-lg font-semibold text-ink">
              {path.title}
            </h2>
            <p className="mt-2 text-sm text-ink/60">{path.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}