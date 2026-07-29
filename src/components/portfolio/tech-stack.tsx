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
import { Reveal } from "./reveal";

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
      detail:
        "Custom Workflows, Sub-Accounts, Pipelines, Smart Lists, Custom Fields, Webhooks",
      icon: Workflow,
    },
    {
      name: "Zapier",
      detail:
        "Multi-Step Zaps, Custom Python Code Steps, Webhook Catchers, Paths, Error Handlers",
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
        {/* Cleaned Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core technical &amp; operational stack
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Automation-first tooling backed by six years of enterprise infrastructure practice.
          </p>
        </div>

        {/* Primary Focus Card (Top Main Box) */}
        <Reveal className="mt-12">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-bold tracking-wider text-cyan-400 uppercase">
                {primary.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{primary.label}</h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {primary.items.map((item, i) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-cyan-500/30 bg-slate-950/70 p-5 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <p className="flex items-center gap-2 text-base font-bold text-white">
                    <item.icon className="size-5 text-cyan-400" aria-hidden="true" />
                    {item.name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3 Grid Column Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {groups.map((group, gi) => (
            <Reveal key={group.label} index={gi}>
              <div className="h-full rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                  {group.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-white"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    >
                      <item.icon className="size-3.5 text-cyan-400" aria-hidden="true" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications Card */}
        <Reveal index={1} className="mt-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
              Frameworks &amp; Certifications
            </span>
            <ul className="mt-4 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400"
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
