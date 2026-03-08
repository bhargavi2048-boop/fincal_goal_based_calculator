import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { SkipLink } from "@/components/SkipLink";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Fincal Innovation — Goal-Based Investment Calculator",
  description: "Interactive goal-based investment calculator for investor education. Illustrative only; assumptions editable."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <SkipLink />
        <AppHeader />
        <main id="main" className="container-pad py-8">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
