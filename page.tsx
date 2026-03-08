import { Card } from "@/components/Card";

export default function AccessibilityPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold text-slate-900">Accessibility (WCAG 2.1 AA)</h1>

      <Card title="What we implemented">
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Semantic headings and landmarks (header, nav, main, footer).</li>
          <li>Visible keyboard focus ring.</li>
          <li>Form labels + error messages with aria-describedby and role=alert.</li>
          <li>Responsive, touch-friendly layout.</li>
          <li>Reduced motion support.</li>
        </ul>
      </Card>

      <Card title="Quick checks">
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Tab through the Goal Calculator without using a mouse.</li>
          <li>Run Lighthouse Accessibility audit.</li>
          <li>Verify each input label is announced by a screen reader.</li>
        </ul>
      </Card>
    </div>
  );
}
