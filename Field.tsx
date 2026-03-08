import { ReactNode } from "react";

export function Field(props: {
  label: string;
  id: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  const describedBy = [
    props.hint ? `${props.id}-hint` : null,
    props.error ? `${props.id}-err` : null
  ].filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="block font-medium text-slate-900">
        {props.label}
      </label>

      {props.hint ? (
        <p id={`${props.id}-hint`} className="text-sm text-slate-600">
          {props.hint}
        </p>
      ) : null}

      <div aria-describedby={describedBy || undefined}>
        {props.children}
      </div>

      {props.error ? (
        <p id={`${props.id}-err`} className="text-sm text-brandRed" role="alert">
          {props.error}
        </p>
      ) : null}
    </div>
  );
}
