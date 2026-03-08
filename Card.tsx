import { ReactNode } from "react";

export function Card(props: { title?: string; children: ReactNode; className?: string; subtitle?: string }) {
  return (
    <section className={`border border-slate-200 rounded-xl bg-white shadow-sm ${props.className ?? ""}`}>
      {props.title ? (
        <div className="px-4 sm:px-6 py-4 border-b border-slate-200">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-900">{props.title}</h2>
            {props.subtitle ? <p className="text-sm text-slate-600">{props.subtitle}</p> : null}
          </div>
        </div>
      ) : null}
      <div className="px-4 sm:px-6 py-4">{props.children}</div>
    </section>
  );
}
