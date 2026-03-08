"use client";

import { ChangeEvent } from "react";

export function NumberInput(props: {
  id: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  inputMode?: "decimal" | "numeric";
  onChange: (next: number) => void;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(Number(e.target.value));
  }

  return (
    <input
      id={props.id}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brandBlue"
      type="number"
      value={Number.isFinite(props.value) ? props.value : ""}
      min={props.min}
      max={props.max}
      step={props.step ?? 1}
      inputMode={props.inputMode ?? "numeric"}
      onChange={handleChange}
    />
  );
}
