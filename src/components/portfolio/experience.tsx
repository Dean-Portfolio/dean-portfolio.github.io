import { Reveal, SectionHeading } from "./reveal";

const roles = [
  {
    title: "Creative Strategist / Project Manager",
    company: "Pioneer Solutions",
    period: "Jul 2025 – Present",
    points: [
      "Managed video editing and media projects from concept to delivery, ensuring workflow efficiency and deadline execution.",
    ],
  },
  {
    title: "Senior IT Operations Analyst / Acting Operations Manager",
    company: "Software Ventures International",
    period: "Mar 2021 – Feb 2025",
    points: [
      "Promoted twice within 3 years; served as Acting Operations Manager directing Cloud Operations division (18 direct reports).",
      "Reduced JIRA incident ticket backlogs by 75% through workflow re-engineering and SLA tracking.",
      "Processed 10M+ banking records in major digitalization initiative.",
    ],
  },
  {
    title: "Technical Operations Manager",
    company: "ProDG Cyber Café",
    period: "Jan 2019 – Feb 2021",
    points: [
      "Managed daily business operations, network infrastructure (LAN/WAN), and technical setup for 50 client workstations.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="TRACK RECORD"
          title="Professional experience"
          description="Six-plus years running operations, infrastructure, and delivery at enterprise scale."
        />

        <ol className="relative mt-12 space-y-8 border-l border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8">
          <span
            className="pointer-events-none absolute top-0 -left-px h-full w-px bg-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            aria-hidden="true"
          />
          {roles.map((role, i) => (
            <li key={role.title} className="relative">
              {/* Timeline Node Dot */}
              <span
                className="absolute top-7 -left-[31px] sm:-left-[39px] size-3.5 rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                aria-hidden="true"
              />
              <Reveal index={i}>
                <div className="glass-card rounded-xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <span className="glass-card-sub inline-block rounded-md px-2.5 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/40">
                    {role.period}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-100">{role.title}</h3>
                  <p className="text-sm font-medium text-slate-400 mb-4">{role.company}</p>
                  
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                        <span className="leading-relaxed text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
