# 📊 Fincal — Goal-Based Investment Calculator

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

**A transparent, goal-based investment calculator built for investor education.**  
Understand how inflation and return assumptions shape your financial future.

[🚀 Live App](https://fincal-goal-calculator.vercel.app) · [📹 Demo Video](https://drive.google.com/file/d/1M2u-xDHvUjQdmEuqxqzkGpzCwhO6juEB/view?usp=sharing) · [💻 Repository]((https://github.com/bhargavi2048-boop/fincal_goal_based_calculator.git))

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [What It Computes](#-what-it-computes)
- [Features](#-features)
- [Calculation Model](#-calculation-model)
- [Pages](#-pages)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [Accessibility](#-accessibility-wcag-oriented)
- [Disclaimer](#-disclaimer)
- [Author](#-author)
- [License](#-license)

---

## 🔍 Overview

**Fincal** is a multi-page, goal-based investment calculator built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

It is designed for **investor education and awareness** — helping users understand how **inflation** and **return assumptions** can impact the future value of a financial goal, and estimate the **required monthly SIP** (illustrative) needed to reach it.

> ⚠️ All calculations are illustrative and for educational purposes only. See [Disclaimer](#-disclaimer).

---

## 🧮 What It Computes

Given the following user inputs:

| Input | Description |
|---|---|
| **Current Cost of Goal** | Present value of the goal in ₹ |
| **Years to Goal** | Time horizon in years |
| **Inflation Rate** | Annual inflation assumption (%) |
| **Expected Annual Return** | Expected portfolio return per year (%) |

Fincal computes:

| Output | Description |
|---|---|
| **Inflated Goal Value (FV)** | Future cost of the goal after inflation compounding |
| **Required Monthly SIP** | Illustrative monthly investment needed to reach FV |

---

## ✨ Features

### 🎯 Product & UX
- **Editable assumptions** — inflation and return rates are fully user-controlled
- **Responsive design** — optimised for mobile, tablet, and desktop
- **Shareable state via URL parameters** — copy a link that preserves all input values
- **Transparent math** — dedicated Formula page explains every calculation step

### ♿ Accessibility (WCAG-Oriented)
- Semantic HTML structure: `<header>`, `<nav>`, `<main>`, `<footer>`
- Skip link for keyboard-only users
- Clear form labels, hints, and inline error messages
- `aria-describedby` and `role="alert"` for screen reader support
- Visible `:focus-visible` styles for keyboard navigation
- Reduced-motion support via `prefers-reduced-motion`

### ⚙️ Engineering
- Calculation logic separated into `src/lib/finance/*` — clean, testable, and independent of UI
- Next.js App Router with modern file-based routing
- Type-safe inputs and outputs with TypeScript
- Tailwind CSS for consistent, responsive styling

---

## 📐 Calculation Model

All formulas are fully transparent and documented on the [Formula page](/formula).

### Step 1 — Inflate the Goal Value (Future Value)

Compounds the present cost of the goal by inflation over the time horizon:

```
FV = Present Cost × (1 + Inflation Rate)^Years
```

### Step 2 — Required Monthly SIP (Illustrative)

Converts the annual return to a monthly rate and computes the SIP needed to accumulate FV:

```
Monthly Rate  r = Annual Return ÷ 12
Total Months  n = Years × 12

Required SIP = FV × r ÷ [((1 + r)^n − 1) × (1 + r)]
```

> **Edge case:** If the assumed annual return is **0%**, the calculator uses `FV ÷ n` as an illustrative fallback to avoid division by zero.

---

## 🗂️ Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Overview, purpose, and quick-start guide |
| `/goal` | **Goal Calculator** | Interactive calculator with editable inputs |
| `/formula` | **Formula** | Step-by-step explanation of the math |
| `/disclosures` | **Disclosures** | Assumptions, limitations, and disclaimer |
| `/accessibility` | **Accessibility** | WCAG implementation notes |

---

## 📁 Project Structure

```
fincal-goal-based-calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (nav, skip link, footer)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + Tailwind base
│   │   ├── goal/
│   │   │   └── page.tsx            # Goal Calculator page
│   │   ├── formula/
│   │   │   └── page.tsx            # Formula explanation page
│   │   ├── disclosures/
│   │   │   └── page.tsx            # Disclosures & assumptions page
│   │   └── accessibility/
│   │       └── page.tsx            # Accessibility notes page
│   ├── components/
│   │   └── ...                     # Reusable UI building blocks
│   ├── lib/
│   │   └── finance/
│   │       ├── goal.ts             # Core SIP & FV calculation logic
│   │       ├── format.ts           # Currency and number formatting helpers
│   │       └── validate.ts         # Input validation utilities
│   └── content/
│       └── disclaimer.ts           # Disclaimer text content
├── public/                         # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** v20+ (v22+ recommended)
- **npm** v9+

Verify:
```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhargavi2048-boop/Fincal-goal-based-calculator.git

# 2. Navigate into the project folder
cd Fincal-goal-based-calculator

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

### 🛠️ Troubleshooting

**"localhost refused to connect"** (WSL / VM / remote shell)

Bind the dev server to all network interfaces:

```bash
HOST=0.0.0.0 PORT=3000 npm run dev
```

Then access via:
- `http://localhost:3000` — on the same machine
- `http://<your-ip>:3000` — from a remote machine or VM

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 (App Router) | Framework, routing, SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety throughout |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Utility-first responsive styling |
| [Vercel](https://vercel.com/) | — | Deployment & hosting |

---

## ♿ Accessibility (WCAG-Oriented)

Fincal is built with accessibility as a first-class concern, not an afterthought.

| Practice | Implementation |
|---|---|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<footer>` throughout |
| Skip link | Keyboard users can skip directly to main content |
| Form labels | Every input has an explicit `<label>` |
| Error messaging | Inline errors use `role="alert"` and `aria-describedby` |
| Focus styles | `:focus-visible` ensures visible keyboard focus rings |
| Motion safety | Animations respect `prefers-reduced-motion` |
| Screen reader | Tested with structure that supports assistive technology |

Full implementation notes are available on the [Accessibility page](/accessibility).

---

## ⚠️ Disclaimer

> This tool has been designed for **information and educational purposes only**. Actual results may vary depending on various factors involved in capital markets. Investors should not consider the outputs as a recommendation for any specific investment scheme or product.
>
> Past performance may or may not be sustained in future and is not a guarantee of any future returns. The SIP values shown are **illustrative** and based on the assumptions entered by the user.
>
> Please consult a qualified financial advisor before making any investment decisions.

---

## 👤 Author

**Bhargavi N**

- GitHub: [@bhargavi2048-boop](https://github.com/bhargavi2048-boop)
- Repository: [Fincal-goal-based-calculator](https://github.com/bhargavi2048-boop/Fincal-goal-based-calculator)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for full details.

---

<div align="center">

Built with ♥ by **Bhargavi N** · For investor education, not financial advice.

</div>
