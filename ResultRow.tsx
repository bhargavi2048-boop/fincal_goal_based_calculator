export function ResultRow(props: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-2 border-b border-slate-100 last:border-b-0">
      <div>
        <div className="font-medium text-slate-900">{props.label}</div>
        {props.hint ? <div className="text-sm text-slate-600">{props.hint}</div> : null}
      </div>
      <div className="font-semibold text-slate-900 text-right">{props.value}</div>
    </div>
  );
}
