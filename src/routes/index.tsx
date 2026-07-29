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
