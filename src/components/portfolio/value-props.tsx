import { BarChart, Code2, Gauge } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const cards = [
  {
    icon: BarChart,
    title: "Large-Scale Data Transformation",
    body: "Proven track record managing complex data pipelines (10M+ records processed), transforming unstructured inputs into clean, CRM-ready datasets with zero data loss.",
  },
  {
    icon: Code2,
    title: "Code-First Logic + Rapid Automation",
    body: "Leveraging custom Python scripting, webhooks, and REST APIs to handle complex data formatting and edge cases inside Zapier and GoHighLevel.",
  },
  {
    icon: Gauge,
    title: "Process & Incident Optimization",
    body: "Lean Six Sigma specialist focused on eliminating operational bottlenecks, enforcing SLA tracking, and reducing ticket backlogs by up to 75%.",
  },
];

export function ValueProps() {
  return (
    <section id="value" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Value Proposition"
          title="Enterprise skills, freelance-friendly execution"
          description="Accessible automation for growing businesses."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} index={i}>
              <article className="glass-card group h-full rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(6,182,212,0.35)]">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <card.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal index={3}>
          <p className="glass-card mt-8 rounded-lg border-l-4 border-l-secondary p-6 text-base text-muted-foreground">
            Enterprise experience at a freelance-friendly execution level. Every system is built to
            scale, documented, tested, and delivered with standard operating procedures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
