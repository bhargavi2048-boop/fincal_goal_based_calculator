"use client";

import { Badge } from "./Badge";

const SCENARIOS = [
  { id: "conservative", label: "Conservative", returnPct: 8 },
  { id: "moderate", label: "Moderate", returnPct: 12 },
  { id: "aggressive", label: "Aggressive", returnPct: 16 }
];

export function ScenarioPills(props: {
  selectedAnnualReturnPct: number;
  onPick: (annualReturnPct: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Return assumption presets (editable)">
      {SCENARIOS.map((s) => {
        const active = Math.abs(props.selectedAnnualReturnPct - s.returnPct) < 0.001;
        return (
          <button
            key={s.id}
            type="button"
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              active
                ? "border-brandBlue bg-blue-50 text-brandBlue"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
            onClick={() => props.onPick(s.returnPct)}
            aria-pressed={active}
          >
            {s.label} <span className="ml-1 opacity-80">({s.returnPct}%)</span>
          </button>
        );
      })}
      <Badge tone="grey">All assumptions are editable</Badge>
    </div>
  );
}
