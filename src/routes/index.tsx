import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SectionBoundary } from "@/components/portfolio/section-boundary";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Hero } from "@/components/portfolio/hero";
import { ValueProps } from "@/components/portfolio/value-props";
import { TechStack } from "@/components/portfolio/tech-stack";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { SiteFooter } from "@/components/portfolio/site-footer";

const title = "Dean Alfred Turing — AI & CRM Automation Architect";
const description =
  "Systems Operations Specialist building GoHighLevel, Zapier and Python automation for growing businesses. Enterprise skills, freelance-friendly execution.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

export default function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground animate-[fade-in_0.8s_ease-out] relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SectionBoundary section="navigation">
        <SiteHeader />
      </SectionBoundary>

      <main id="main">
        <SectionBoundary section="hero">
          <Hero />
        </SectionBoundary>
        <SectionBoundary section="value proposition">
          <ValueProps />
        </SectionBoundary>
        <SectionBoundary section="tech stack">
          <TechStack />
        </SectionBoundary>
        <SectionBoundary section="case studies">
          <CaseStudies />
        </SectionBoundary>
        <SectionBoundary section="experience">
          <Experience />
        </SectionBoundary>
        <SectionBoundary section="contact">
          <Contact />
        </SectionBoundary>
      </main>

      <SiteFooter />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground animate-[fade-in_0.8s_ease-out] relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SectionBoundary section="navigation">
        <SiteHeader />
      </SectionBoundary>

      <main id="main">
        <SectionBoundary section="hero">
          <Hero />
        </SectionBoundary>
        <SectionBoundary section="value proposition">
          <ValueProps />
        </SectionBoundary>
        <SectionBoundary section="tech stack">
          <TechStack />
        </SectionBoundary>
        <SectionBoundary section="case studies">
          <CaseStudies />
        </SectionBoundary>
        <SectionBoundary section="experience">
          <Experience />
        </SectionBoundary>
        <SectionBoundary section="contact">
          <Contact />
        </SectionBoundary>
      </main>

      <SiteFooter />
      <Toaster position="bottom-right" />
    </div>
  );
}
