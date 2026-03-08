export type GoalInputs = {
  currentCost: number;        // Present cost of goal
  yearsToGoal: number;        // Years to goal
  inflationPct: number;       // Annual inflation %
  annualReturnPct: number;    // Annual return %
};

export type GoalResult = {
  inflatedGoalValue: number;  // FV goal after inflation
  requiredMonthlySip: number; // Required SIP per month
  months: number;
  monthlyRate: number;
  inflationFactor: number;
};

export function calculateInflatedGoalValue(currentCost: number, inflationPct: number, years: number) {
  const i = inflationPct / 100;
  // Future Goal Value: FV = Present Cost × (1 + Inflation rate)^Years
  return currentCost * Math.pow(1 + i, years);
}

export function calculateRequiredMonthlySipForGoal(inputs: GoalInputs): GoalResult {
  const FV = calculateInflatedGoalValue(inputs.currentCost, inputs.inflationPct, inputs.yearsToGoal);

  // Monthly rate: r = Annual return ÷ 12
  const r = (inputs.annualReturnPct / 100) / 12;

  // Total months: n = Years × 12
  const n = Math.round(inputs.yearsToGoal * 12);

  // Required Monthly SIP:
  // Required SIP = FV × r ÷ [((1 + r)^n − 1) × (1 + r)]
  // Handle r=0 to avoid division by zero
  let requiredSip: number;
  if (r === 0) {
    requiredSip = FV / n;
  } else {
    const denom = (Math.pow(1 + r, n) - 1) * (1 + r);
    requiredSip = (FV * r) / denom;
  }

  const inflationFactor = Math.pow(1 + (inputs.inflationPct / 100), inputs.yearsToGoal);

  return {
    inflatedGoalValue: FV,
    requiredMonthlySip: requiredSip,
    months: n,
    monthlyRate: r,
    inflationFactor
  };
}
