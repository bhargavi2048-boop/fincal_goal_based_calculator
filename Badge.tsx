export function Badge(props: { children: React.ReactNode; tone?: "blue" | "grey" | "red" }) {
  const tone = props.tone ?? "grey";
  const cls =
    tone === "blue"
      ? "bg-blue-50 text-brandBlue border-blue-200"
      : tone === "red"
        ? "bg-red-50 text-brandRed border-red-200"
        : "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
      {props.children}
    </span>
  );
}
