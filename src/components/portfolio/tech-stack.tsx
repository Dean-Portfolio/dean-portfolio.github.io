import {
  BadgeCheck,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Repeat,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

type Group = {
  label: string;
  tag: string;
  items: { name: string; detail?: string; icon: LucideIcon }[];
};

const primary: Group = {
  label: "Growth Automation & CRM",
  tag: "Primary Focus",
  items: [
    {
      name: "GoHighLevel",
      detail: "Custom Workflows, Sub-Accounts, Pipelines, Smart Lists, Custom Fields, Webhooks",
      icon: Workflow,
    },
    {
      name: "Zapier",
      detail: "Multi-Step Zaps, Custom Python Code Steps, Webhook Catchers, Paths, Error Handlers",
      icon: Zap,
    },
  ],
};

const groups: Group[] = [
  {
    label: "Workflow Orchestration",
    tag: "Secondary & Expanding",
    items: [
      { name: "Make.com", icon: Repeat },
      { name: "n8n", icon: GitBranch },
      { name: "Complex API integrations", icon: Boxes },
      { name: "JSON parsing", icon: Code2 },
      { name: "Error routing", icon: ShieldCheck },
    ],
  },
  {
    label: "Data & Scripting Foundation",
    tag: "Core Engineering",
    items: [
      { name: "Python (Regex, Requests, Data Cleaning)", icon: Code2 },
      { name: "Large-Scale Data Transformation", icon: Database },
      { name: "REST APIs", icon: Boxes },
      { name: "JSON Parsing", icon: Code2 },
      { name: "Crontab / Task Scheduler", icon: Repeat },
    ],
  },
  {
    label: "Infrastructure & Governance",
    tag: "Operations",
    items: [
      { name: "AWS (EC2, S3)", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "JIRA / ITSM Admin", icon: Boxes },
      { name: "Microsoft 365 / Entra ID", icon: ShieldCheck },
      { name: "Incident Management", icon: ShieldCheck },
      { name: "Monitoring", icon: Workflow },
    ],
  },
];

const certifications = [
  "Scrum Master (PSM I)",
  "Lean Six Sigma Green Belt (LSSGB)",
  "ITIL Framework",
  "Root Cause Analysis (RCA)",
];

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Core technical & operational stack"
          description="Automation-first tooling backed by six years of enterprise infrastructure practice."
        />

        <Reveal className="mt-12">
          <div className="glass-card rounded-lg border-primary/40 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
                {primary.tag}
              </span>
              <h3 className="text-xl">{primary.label}</h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {primary.items.map((item, i) => (
                <div
                  key={item.name}
                  className="float-chip rounded-lg border border-primary/60 bg-card px-6 py-3 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <p className="flex items-center gap-2 text-base font-semibold">
                    <item.icon className="size-5 text-primary" aria-hidden="true" />
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {groups.map((group, gi) => (
            <Reveal key={group.label} index={gi}>
              <div className="glass-card h-full rounded-lg p-6">
                <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                  {group.tag}
                </span>
                <h3 className="mt-2 text-lg">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item.name}
                      className="float-chip inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-foreground transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(6,182,212,0.35)]"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    >
                      <item.icon className="size-4 text-primary" aria-hidden="true" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal index={1} className="mt-8">
          <div className="glass-card rounded-lg p-6">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              Frameworks & Certifications
            </span>
            <ul className="mt-4 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary"
                >
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
