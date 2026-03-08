"use client";

import { useMemo, useState } from "react";

export function ShareBar(props: { shareUrl: string }) {
  const [copied, setCopied] = useState(false);

  const label = useMemo(() => (copied ? "Copied" : "Copy share link"), [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(props.shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between border border-slate-200 rounded-xl p-3 bg-slate-50">
      <div className="text-sm text-slate-700 break-all">
        <span className="font-medium">Share:</span> {props.shareUrl}
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center justify-center rounded-lg bg-brandBlue text-white px-3 py-2 text-sm font-medium hover:bg-[#1b3d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandRed"
        aria-label="Copy share link to clipboard"
      >
        {label}
      </button>
    </div>
  );
}
