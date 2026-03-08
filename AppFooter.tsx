import { MANDATORY_DISCLAIMER } from "@/content/disclaimer";

export function AppFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="container-pad py-8 space-y-3">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Disclaimer:</span> {MANDATORY_DISCLAIMER}
        </p>
        <p className="text-xs text-slate-600">
          This calculator is for information/education only. It does not recommend any scheme and does not guarantee outcomes.
        </p>
      </div>
    </footer>
  );
}
