"use client";

import { ChangeEvent } from "react";

export function RangeInput(props: {
  id: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (next: number) => void;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(Number(e.target.value));
  }

  return (
    <input
      id={props.id}
      className="w-full accent-brandBlue"
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step ?? 1}
      onChange={handleChange}
    />
  );
}
