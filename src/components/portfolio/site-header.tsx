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
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 backdrop-blur-lg transition-all duration-300"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.85)" }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-[60px]" : "h-20"
        }`}
      >
        <a href="#hero" className="text-base font-bold tracking-tight text-white">
          Dean<span className="text-cyan-400">.</span>Turing
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative text-sm transition-colors duration-300 hover:text-white ${
                active === link.id ? "text-white font-medium" : "text-slate-400"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-cyan-400 transition-transform duration-300 ${
                  active === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 sm:inline-flex"
          >
            Book a Systems Audit
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-700 text-slate-200 md:hidden"
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
              className="absolute inset-0 bg-slate-950/80"
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
              className="absolute inset-y-0 right-0 flex w-72 flex-col gap-6 border-l border-slate-800 bg-slate-900/95 p-6 backdrop-blur-lg"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="self-end inline-flex size-11 items-center justify-center rounded-lg border border-slate-700 text-slate-200"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="text-base text-slate-300 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
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
