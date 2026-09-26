const reasons = [
  {
    title: "Completely free, forever",
    description:
      "No paywalls, no premium tier. Open source means the whole curriculum stays free for anyone who wants to learn.",
  },
  {
    title: "Structured like a real book",
    description:
      "Chapters build on each other in order — not a scattered feed of articles you have to piece together yourself.",
  },
  {
    title: "Concepts connect to each other",
    description:
      "Every topic links to the related ideas around it, so you understand how AI concepts fit together, not just isolated facts.",
  },
  {
    title: "Built by the community, in the open",
    description:
      "Every chapter lives in a public repo. Anyone can suggest edits, fix mistakes, or write the next chapter.",
  },
];

export function WhyThisPlatform() {
  return (
    <section className="bg-surface-muted">
      <div className="container-page py-16">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          Why learn here
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-serif text-lg font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}