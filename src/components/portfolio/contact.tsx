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
    // TODO: Replace mock submit with EmailJS integration. Add your EmailJS credentials in a .env file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).
    await new Promise((resolve) => setTimeout(resolve, 1200));
    void values;
    setSubmitting(false);
    lastSubmit.current = Date.now();
    toast.success("Request received — I'll reply within one business day.", {
      icon: <CheckCircle2 className="size-4 text-secondary" aria-hidden="true" />,
    });
    reset();
  };

  const fieldClass =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-primary";

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Book a systems audit"
          description="Tell me where the workflow breaks and I'll map the automation path."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card rounded-lg p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
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
                    <p role="alert" className="mt-2 text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
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
                    <p role="alert" className="mt-2 text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="stack" className="text-sm font-semibold">
                  Primary stack needed
                </label>
                <select
                  id="stack"
                  defaultValue=""
                  aria-invalid={!!errors.stack}
                  className={fieldClass}
                  {...register("stack")}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Zapier + GHL">Zapier + GHL</option>
                  <option value="Python Scripting">Python Scripting</option>
                  <option value="Other">Other</option>
                </select>
                {errors.stack ? (
                  <p role="alert" className="mt-2 text-xs text-destructive">
                    {errors.stack.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="bottleneck" className="text-sm font-semibold">
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
                  <p role="alert" className="mt-2 text-xs text-destructive">
                    {errors.bottleneck.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-gradient-brand mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
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
            <div className="glass-card flex h-full flex-col gap-6 rounded-lg p-6 sm:p-8">
              <div>
                <h3 className="text-lg">Direct contact</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer email? Send over your current workflow and I&apos;ll reply with an initial
                  automation read.
                </p>
              </div>
              <a
                href="mailto:hello@deanturing.com"
                className="inline-flex items-center gap-3 rounded-lg border border-secondary/60 bg-secondary/10 px-4 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:scale-[1.02] hover:bg-secondary hover:text-secondary-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                hello@deanturing.com
              </a>
              <ul className="mt-auto space-y-2 text-sm text-muted-foreground">
                <li>Available for freelance automation projects</li>
                <li>Typical reply time: within one business day</li>
                <li>Every build ships with documentation and SOPs</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
