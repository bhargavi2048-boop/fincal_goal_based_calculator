import Link from "next/link";
import { Badge } from "./Badge";

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-pad py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-brandBlue">Fincal</span>
            <span className="text-sm font-semibold text-slate-600">Investor Education</span>
          </div>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm">
          <Link href="/goal" className="text-slate-800 hover:text-brandBlue">Goal Calculator</Link>
          <Link href="/formula" className="text-slate-800 hover:text-brandBlue">Formula</Link>
          <Link href="/disclosures" className="text-slate-800 hover:text-brandBlue">Disclosures</Link>
          <Link href="/accessibility" className="text-slate-800 hover:text-brandBlue">Accessibility</Link>
        </nav>

        <div className="sm:ml-auto">
          <Badge tone="blue">Illustrative • Editable assumptions</Badge>
        </div>
      </div>
    </header>
  );
}
