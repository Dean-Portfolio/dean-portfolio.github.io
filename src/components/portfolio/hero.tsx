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
          PSM I | LSSGB | AWS | AZURE
        </span>
      </h1>
    ),
  },
  {
    key: "headline",
    node: (
      <p className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
        Systems Reliability Meets High-Growth AI &amp; Workflow Automation.
      </p>
    ),
  },
  {
    key: "sub",
    node: (
      <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
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
      {/* Grid Pattern Background - Fades out smoothly at the bottom */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b25_1px,transparent_1px),linear-gradient(to_bottom,#1e293b25_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)]" 
        aria-hidden="true" 
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
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
              className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm"
              animate={{ scale: [1, 1.04, 1] }}
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
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-cyan-500/20"
          >
            View Automated Systems
          </a>
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-105 hover:border-slate-600 hover:bg-slate-800"
          >
            Book a Systems Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
