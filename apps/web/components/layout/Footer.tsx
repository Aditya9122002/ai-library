export function Footer() {
  return (
    <footer className="border-t border-black/5 py-8">
      <div className="container-page text-sm text-black/60">
        © {new Date().getFullYear()} Open AI Learning — open source.
      </div>
    </footer>
  );
}