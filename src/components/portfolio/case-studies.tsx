import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import pipelineImg from "@/assets/case-data-pipeline.jpg";
import leadsImg from "@/assets/case-lead-pipeline.jpg";
import provisioningImg from "@/assets/case-provisioning.jpg";

const studies = [
  {
    id: "banking",
    title: "Banking Record Digitalization & Data Transformation Pipeline",
    image: pipelineImg,
    alt: "Abstract visualization of scanned banking documents converting into structured digital data rows",
    tags: ["Data Transformation", "Python", "OCR Processing", "Lean Six Sigma"],
    impact:
      "In my role as IT Operations Lead, I managed multi-functional operations processing 10M+ records during a major digitalization program; structured and validated messy document inputs into digital formats.",
    detail: [
      "Methodology: mapped the end-to-end document flow with a Lean Six Sigma value-stream analysis, then removed the three handoffs responsible for most rework.",
      "Architecture: batched OCR intake → Python normalization layer (regex field extraction, checksum validation, deduplication) → staged verification queue → signed-off digital archive.",
      "Controls: reconciliation counts at every stage plus exception queues, so no record advanced without a validated match — zero data loss across the program.",
    ],
  },
  {
    id: "ghl-leads",
    title: "GoHighLevel Lead Verification & Python Data Sanitization Pipeline",
    image: leadsImg,
    alt: "Automation workflow diagram showing inbound leads passing through cleaning steps into a CRM",
    tags: ["Zapier + GHL Primary", "Python API", "Webhooks", "Data Cleaning"],
    impact:
      "Built custom Python-based Regex cleaning logic inside Zapier to auto-sanitize, format phone numbers, and structure inbound GHL leads before CRM ingestion.",
    detail: [
      "Architecture: GHL webhook → Zapier catch hook → Python code step (trim, case-normalize, E.164 phone formatting, email syntax + MX sanity check) → conditional paths for valid, suspect, and rejected leads.",
      "Edge cases handled: duplicate submissions, unicode noise, partial international numbers, and honeypot spam entries routed to a quarantine list rather than the pipeline.",
      "Outcome: sales pipelines receive only CRM-ready contacts, with a documented SOP for adding new field rules without touching the code step.",
    ],
  },
  {
    id: "provisioning",
    title: "GHL Agency Sub-Account Provisioning & Incident Monitoring System",
    image: provisioningImg,
    alt: "Dashboard-style illustration of multiple client sub-accounts being provisioned with alert indicators",
    tags: ["GoHighLevel API", "Zapier Catch Hooks", "Incident Alerts"],
    impact:
      "Automated multi-location client onboarding with built-in error handling and immediate Slack/Telegram alert fallbacks.",
    detail: [
      "Architecture: intake form → catch hook → GHL API sub-account creation → snapshot load, pipeline seeding, user invites, and custom-field mapping in a single idempotent run.",
      "Reliability: every API call wrapped with retry + backoff; a failed step halts the run, writes the payload to a recovery store, and pages via Slack and Telegram.",
      "Governance: onboarding runbook and audit log per client, so any operator can resume a partially provisioned account without duplicating records.",
    ],
  },
];

function CaseImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-xl border-b border-slate-800/80">
      {!loaded ? <div className="shimmer absolute inset-0 bg-slate-800/50" aria-hidden="true" /> : null}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-cyan-500/0 transition-colors duration-300 group-hover:bg-cyan-500/10" />
    </div>
  );
}

export function CaseStudies() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="case-studies" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ENTERPRISE EXPERIENCE"
          title="Featured systems & case studies"
          description="Systems I designed, managed, and hardened inside enterprise operations teams."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {studies.map((study, i) => {
            const expanded = open === study.id;
            return (
              <Reveal key={study.id} index={i}>
                <article className="group flex flex-col justify-between h-full overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div>
                    <CaseImage src={study.image} alt={study.alt} />
                    <div className="p-6">
                      <ul className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 border border-slate-700/50"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <h3 className="mt-4 text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        {study.impact}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : study.id)}
                      aria-expanded={expanded}
                      aria-controls={`case-detail-${study.id}`}
                      className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {expanded ? "Hide breakdown" : "View breakdown"}
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded ? (
                        <motion.div
                          id={`case-detail-${study.id}`}
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-3 border-t border-slate-800/80 pt-4 text-xs text-slate-400 leading-relaxed">
                            {study.detail.map((line) => (
                              <li key={line} className="flex items-start">
                                <span className="mr-2 text-cyan-500">•</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
