export function SearchBar() {
  return (
    <div className="container-page -mt-6 flex justify-center">
      <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-ink/10 bg-surface px-4 py-3 shadow-sm">
        <svg
          className="h-5 w-5 shrink-0 text-ink/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
          />
        </svg>
        <input
          type="text"
          disabled
          placeholder="Search topics, chapters, concepts… (coming soon)"
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}