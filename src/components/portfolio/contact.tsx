import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  stack: z.enum(["Zapier + GHL", "Python Scripting", "Other"], {
    errorMap: () => ({ message: "Select the primary stack you need" }),
  }),
  bottleneck: z
    .string()
    .trim()
    .min(20, "Tell me a little more (20 characters minimum)")
    .max(1000, "Please keep it under 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

const RATE_LIMIT_MS = 30_000;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const lastSubmit = useRef(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (values: FormValues) => {
    const now = Date.now();
    const elapsed = now - lastSubmit.current;
    if (lastSubmit.current && elapsed < RATE_LIMIT_MS) {
      toast.error(`Please wait ${Math.ceil((RATE_LIMIT_MS - elapsed) / 1000)}s before sending again.`);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    void values;
    setSubmitting(false);
    lastSubmit.current = Date.now();
    toast.success("Request received — I'll reply within one business day.", {
      icon: <CheckCircle2 className="size-4 text-emerald-400" aria-hidden="true" />,
    });
    reset();
  };

  const fieldClass =
    "glass-card-sub mt-2 w-full rounded-lg px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/80 focus:outline-none focus:ring-1 focus:ring-cyan-500/80";

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CONTACT"
          title="Book a systems audit"
          description="Tell me where the workflow breaks and I'll map the automation path."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card rounded-xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className={fieldClass}
                    placeholder="Jane Doe"
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p role="alert" className="mt-2 text-xs text-rose-400">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className={fieldClass}
                    placeholder="you@company.com"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p role="alert" className="mt-2 text-xs text-rose-400">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="stack" className="text-xs font-semibold text-slate-300">
                  Primary stack needed
                </label>
                <select
                  id="stack"
                  defaultValue=""
                  aria-invalid={!!errors.stack}
                  className={`${fieldClass} text-slate-300`}
                  {...register("stack")}
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">
                    Select an option
                  </option>
                  <option value="Zapier + GHL" className="bg-slate-900 text-slate-200">
                    Zapier + GHL
                  </option>
                  <option value="Python Scripting" className="bg-slate-900 text-slate-200">
                    Python Scripting
                  </option>
                  <option value="Other" className="bg-slate-900 text-slate-200">
                    Other
                  </option>
                </select>
                {errors.stack ? (
                  <p role="alert" className="mt-2 text-xs text-rose-400">
                    {errors.stack.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="bottleneck" className="text-xs font-semibold text-slate-300">
                  Project bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  rows={5}
                  aria-invalid={!!errors.bottleneck}
                  className={fieldClass}
                  placeholder="Where does the current process slow down or break?"
                  {...register("bottleneck")}
                />
                {errors.bottleneck ? (
                  <p role="alert" className="mt-2 text-xs text-rose-400">
                    {errors.bottleneck.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-slate-950" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  "Request my systems audit"
                )}
              </button>
              <p aria-live="polite" className="sr-only">
                {submitting ? "Submitting your request" : ""}
              </p>
            </form>
          </Reveal>

          <Reveal index={1}>
            <div className="glass-card flex h-full flex-col justify-between rounded-xl p-6 sm:p-8 shadow-2xl">
              <div>
                <h3 className="text-lg font-bold text-slate-100">Direct contact</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Prefer email? Send over your current workflow and I'll reply with an initial
                  automation read.
                </p>
                
                <a
                  href="mailto:hello@deanturing.com"
                  className="glass-card-sub mt-6 inline-flex w-full items-center gap-3 rounded-lg border border-cyan-500/40 px-4 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  <Mail className="size-4 text-cyan-400" aria-hidden="true" />
                  hello@deanturing.com
                </a>
              </div>

              <ul className="mt-8 space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>Available for freelance automation projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-400" />
                  <span>Typical reply time: within one business day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-400" />
                  <span>Every build ships with documentation and SOPs</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
