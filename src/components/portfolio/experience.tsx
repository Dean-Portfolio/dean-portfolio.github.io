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
          eyebrow="Track Record"
          title="Professional experience"
          description="Six-plus years running operations, infrastructure, and delivery at enterprise scale."
        />

        <ol className="relative mt-12 space-y-10 border-l border-primary/40 pl-8">
          <span
            className="pointer-events-none absolute top-0 -left-px h-full w-px bg-primary/60 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            aria-hidden="true"
          />
          {roles.map((role, i) => (
            <li key={role.title} className="relative">
              <span
                className="absolute top-2 -left-[41px] size-3 rounded-full bg-primary shadow-[0_0_14px_rgba(6,182,212,0.8)]"
                aria-hidden="true"
              />
              <Reveal index={i}>
                <div className="glass-card rounded-lg p-6">
                  <p className="text-sm font-semibold text-secondary">{role.period}</p>
                  <h3 className="mt-2 text-lg">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {point}
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
