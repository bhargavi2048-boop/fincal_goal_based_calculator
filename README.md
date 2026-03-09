# fincal_goal_based_calculator
# Fincal Goal‑Based Investment Calculator (Next.js)

A multi‑page, goal‑based investment calculator built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.  
It is designed for **investor education and awareness**—helping users understand how **inflation** and **return assumptions** can impact a future goal and the estimated **required monthly SIP** (illustrative).

---

## Live Demo / Project URL

- **Repository:** `https://github.com/bhargavi2048-boop/Fincal-goal-based-calculator`

> - **Live App:** "https://fincal-goal-calculator.vercel.app"

---

## What This App Does

Given:
- **Current cost of a goal** (₹)
- **Years to goal**
- **Inflation rate** (annual %)
- **Expected annual return** (annual %)

The app computes:
- **Inflated Goal Value (FV)** using inflation compounding
- **Required Monthly SIP (illustrative)** to reach FV using a monthly return rate derived from the annual return assumption

It also provides:
- A **Formula** page (transparent math)
- A **Disclosures** page (assumptions + disclaimer)
- An **Accessibility** page (WCAG‑oriented implementation notes)

---

## Key Features (Engineering + UX)

### Product & UX
- **Editable assumptions** (inflation/return are user-controlled)
- **Responsive** layout (mobile → desktop)
- **Shareable state** via URL parameters (copy link with inputs)

### Accessibility (WCAG‑oriented)
- Semantic structure: `header`, `nav`, `main`, `footer`
- Skip link for keyboard users
- Clear form labels, hints, and error messages (`aria-describedby`, `role="alert"`)
- Visible focus styles (`:focus-visible`)
- Reduced-motion support

### Tech
- Next.js App Router (modern routing & layouts)
- Tailwind CSS for consistent UI and brand styling
- Calculation logic separated into `src/lib/finance/*` for clarity and testability

---

## Calculation Model (Transparent & Illustrative)

### 1) Inflate the Goal Value (Future Value)
**FV = Present Cost × (1 + Inflation rate)^Years**

### 2) Required Monthly SIP (Illustrative)
- Monthly rate: **r = Annual return ÷ 12**
- Total months: **n = Years × 12**

**Required SIP = FV × r ÷ [((1 + r)^n − 1) × (1 + r)]**

> Note: If the assumed annual return is **0%**, the calculator uses **FV ÷ n** to avoid division by zero (illustrative fallback).

---

## Pages

- `/` — Home / Overview
- `/goal` — Goal Calculator
- `/formula` — Formula explanation
- `/disclosures` — Disclosures & assumptions
- `/accessibility` — Accessibility notes

---

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    goal/page.tsx
    formula/page.tsx
    disclosures/page.tsx
    accessibility/page.tsx
  components/
    (UI building blocks)
  lib/
    finance/
      goal.ts
      format.ts
      validate.ts
  content/
    disclaimer.ts
```

---

## Getting Started (Local Development)

### Prerequisites
- Node.js (recommended: **20+ / 22+**)
- npm

Check:
```bash
node -v
npm -v
```

### Install & Run
From the folder containing `package.json`:
```bash
npm install
npm run dev
```

Open:
- `http://localhost:3000`

### Troubleshooting: “localhost refused to connect”
If your environment is WSL/VM/remote shell, bind to all interfaces:
```bash
HOST=0.0.0.0 PORT=3000 npm run dev
```
Then open:
- `http://localhost:3000` (same machine) or
- `http://<your-ip>:3000` (remote/VM)

---

## Disclaimer (Mandatory)

This tool has been designed for information purposes only. Actual results may vary depending on various factors involved in capital market. Investor should not consider above as a recommendation for any schemes of HDFC Mutual Fund. Past performance may or may not be sustained in future and is not a guarantee of any future returns.

---

## Author

**Bhargavi N**  
GitHub: `bhargavi2048-boop`

---

## License

MIT License. See `LICENSE`.
