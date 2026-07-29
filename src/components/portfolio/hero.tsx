import { motion } from "framer-motion";

const badges = [
  "PSM I Certified Scrum Master",
  "Lean Six Sigma Green Belt",
  "Ex-IT Operations Lead",
];

const lines = [
  {
    key: "name",
    node: (
      <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
        <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Dean Alfred Turing
        </span>
        <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          PSM I | LSSGB
        </span>
      </h1>
    ),
  },
  {
    key: "headline",
    node: (
      <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
        Systems Reliability Meets High-Growth AI &amp; Workflow Automation.
      </p>
    ),
  },
  {
    key: "sub",
    node: (
      <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
        IT Operations Lead with 6+ years of cloud infrastructure, data transformation, and Python
        scripting experience – now applying that expertise to AI-driven automation for growing
        businesses. Available for freelance projects.
      </p>
    ),
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        {lines.map((line, i) => (
          <motion.div
            key={line.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            {line.node}
          </motion.div>
        ))}

        <motion.ul
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {badges.map((badge, i) => (
            <motion.li
              key={badge}
              className="inline-flex items-center rounded-full border border-cyan-500/50 bg-slate-800/80 px-4 py-2 text-sm text-foreground shadow-sm"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, repeat: 0 }}
            >
              {badge}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#case-studies"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            View Automated Systems
          </a>
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-emerald-500/50 bg-transparent px-6 py-3 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:text-white"
          >
            Book a Systems Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
