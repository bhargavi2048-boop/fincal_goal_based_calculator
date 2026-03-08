export function formatINR(amount: number) {
  if (!Number.isFinite(amount)) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(amount: number, maxFractionDigits = 2) {
  if (!Number.isFinite(amount)) return "—";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: maxFractionDigits }).format(amount);
}

export function formatPct(amount: number, digits = 2) {
  if (!Number.isFinite(amount)) return "—";
  return `${formatNumber(amount, digits)}%`;
}
