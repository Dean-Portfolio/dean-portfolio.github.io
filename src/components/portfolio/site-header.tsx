import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "value", label: "Value" },
  { id: "stack", label: "Stack" },
  { id: "case-studies", label: "Case Studies" },
  { id: "experience", label: "Experience" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.id), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.1, rootMargin: "-40% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-cyan-500/20 bg-slate-950/85 shadow-lg shadow-cyan-950/20" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-[60px]" : "h-20"
        }`}
      >
        <a href="#hero" className="text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90">
          Dean<span className="text-cyan-400">.</span>Turing
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative text-sm transition-colors duration-300 hover:text-white ${
                active === link.id ? "font-semibold text-white" : "text-slate-400"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 ${
                  active === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-md transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] sm:inline-flex"
          >
            Book a Systems Audit
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="glass-card-sub inline-flex size-11 items-center justify-center rounded-lg text-slate-200 transition-all duration-300 hover:border-cyan-500/50 md:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card absolute inset-y-0 right-0 flex w-72 flex-col gap-6 rounded-none border-y-0 border-r-0 border-l p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="glass-card-sub self-end inline-flex size-11 items-center justify-center rounded-lg text-slate-200 hover:border-cyan-500/50"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-base transition-colors hover:text-cyan-400 ${
                    active === link.id ? "font-semibold text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-md transition-all duration-300 hover:opacity-90"
              >
                Book a Systems Audit
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
