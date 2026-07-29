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
  tag: "PRIMARY FOCUS",
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
    tag: "SECONDARY & EXPANDING",
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
    tag: "CORE ENGINEERING",
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
    tag: "OPERATIONS",
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
          eyebrow="STACK AUDIT"
          title="Core technical & operational stack"
          description="Automation-first tooling backed by six years of enterprise infrastructure practice."
        />

        {/* Primary Focus Card */}
        <Reveal className="mt-12">
          <div className="glass-card rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cyan-400 uppercase">
                {primary.tag}
              </span>
              <h3 className="text-xl font-bold text-slate-100">{primary.label}</h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {primary.items.map((item) => (
                <div
                  key={item.name}
                  className="glass-card-sub rounded-lg p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                >
                  <p className="flex items-center gap-2.5 text-base font-bold text-slate-100">
                    <item.icon className="size-5 text-cyan-400 shrink-0" aria-hidden="true" />
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
              <div className="glass-card flex h-full flex-col justify-between rounded-xl p-6 shadow-2xl">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                    {group.tag}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-slate-100 mb-4">{group.label}</h3>
                  <div className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="glass-card-sub flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-white"
                      >
                        <item.icon className="size-4 text-cyan-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications Card */}
        <Reveal index={1} className="mt-8">
          <div className="glass-card rounded-xl p-6 shadow-2xl">
            <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase block mb-3">
              FRAMEWORKS &amp; CERTIFICATIONS
            </span>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-4 py-2 text-xs font-semibold text-emerald-400"
                >
                  <BadgeCheck className="size-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
