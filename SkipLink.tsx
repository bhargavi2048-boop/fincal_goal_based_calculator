export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border border-slate-300 rounded px-3 py-2"
    >
      Skip to main content
    </a>
  );
}
