# Dean's Automation Hub

Tech Stack & Architecture:

Build a modern, high-converting 1-page portfolio website for Dean Alfred Turing: "Systems Operations Specialist & AI / CRM Automation Architect" using React + TypeScript + Vite with Tailwind CSS. Use Framer Motion for animations, React Hook Form + Zod for validation, and Lucide React for icons. All components must be mobile-first, fully responsive, and achieve a Lighthouse score > 95.

Context & Portfolio Strategy:

This portfolio represents a career transition. I am moving from 6+ years of enterprise IT operations into freelance AI and CRM automation consulting. The case studies showcase my enterprise experience, while the portfolio design reflects my readiness to serve small and medium businesses. I am starting fresh and building my freelance practice from the ground up.

- Do NOT include a testimonials section (I am building my freelance practice from zero).

- Do NOT include a "clients" or "logos" section.

- Do NOT include LinkedIn or GitHub links anywhere on the site.

- Position me as a highly experienced operator transitioning into freelance automation consulting, not an established agency.

- Frame case studies as "Enterprise Experience" – systems I managed and built in my previous roles.

- The core value proposition should highlight: "Enterprise skills, freelance-friendly execution. Accessible automation for growing businesses."

Design System:

- Colors: Background: #0F172A (Slate 900), Cards: #1E293B (Slate 800), Primary Accent: #06B6D4 (Cyan 500), Secondary Accent: #10B981 (Emerald 500), Text Primary: #F8FAFC (Slate 50), Text Secondary: #94A3B8 (Slate 400).

- Typography: 'Inter' from Google Fonts. Headers: font-weight 700, Body: font-weight 400. Fluid type scale (min 16px, max 24px for body).

- Spacing: Consistent spacing based on an 8px grid system (8, 16, 24, 32, 48, 64, 80, 120).

- Border Radius: rounded-lg (8px) for cards, rounded-full for badges and avatars.

- Effects: Glass-morphism effects on cards (backdrop-blur-sm), subtle box-shadows (shadow-lg), and hover transitions (0.3s ease).

- Theme: Dark mode is the ONLY theme. No light mode toggle.

Animations & Interactions:

- Hero: Staggered fade-in (each word/line appears sequentially with 0.1s delay)

- Value cards: Scale up (1.05) with cyan glow on hover, scroll-triggered fade-up

- Tech stack: Float animation (y-axis, ±5px) with staggered delays, glow on hover

- Case studies: Expandable cards on click (smooth height transition, 0.4s ease)

- Experience: Vertical timeline with glowing connector lines and animated milestone dots

- All scroll animations use Intersection Observer (threshold 0.1)

- Page loads: Fade in (opacity 0 → 1) over 0.8s

- Images: Show shimmer skeleton while loading

- Hero Badges: Pulse animation on first load (only once)

Navigation:

- Sticky header (shrinks from 80px to 60px on scroll) with backdrop-blur-lg

- Smooth anchor scrolling to: #hero, #value, #stack, #case-studies, #experience, #contact

- Active section highlighting with cyan underline

- "Book a Systems Audit" CTA in nav (emerald green button, prominent)

- Mobile: Collapsible hamburger with right slide-in menu (backdrop-blur-lg)

- Mobile menu closes automatically on link click

Sections:

1. HERO SECTION:

- Full viewport height, centered content

- Name: "Dean Alfred Turing, PSM I | LSSGB" (large, bold, gradient text: cyan to emerald)

- Headline: "Systems Reliability Meets High-Growth AI & Workflow Automation."

- Subtitle: "IT Operations Lead with 6+ years of cloud infrastructure, data transformation, and Python scripting experience – now applying that expertise to AI-driven automation for growing businesses. Available for freelance projects."

- Badges: ["PSM I Certified Scrum Master", "Lean Six Sigma Green Belt", "Ex-IT Operations Lead"] (rounded-full, slate-800 bg, cyan border, inline-flex)

- Primary CTA: "View Automated Systems" (cyan gradient button, hover: scale-105, hover:shadow-[0_0_20px_rgba(6,182,212,0.5)], hover:brightness-110)

- Secondary CTA: "Book a Systems Audit" (outline button, emerald hover → solid emerald bg + white text + scale-105)

- Both CTAs: Transition 0.3s ease, cursor pointer

- Background: Subtle animated tech grid pattern (opacity 5%)

2. VALUE PROPOSITION:

- 3-column grid (desktop), stacked on mobile (padding: 80px 0)

- Card 1: "Large-Scale Data Transformation" -> Proven track record managing complex data pipelines (10M+ records processed), transforming unstructured inputs into clean, CRM-ready datasets with zero data loss. (Icon: BarChart from lucide-react)

- Card 2: "Code-First Logic + Rapid Automation" -> Leveraging custom Python scripting, webhooks, and REST APIs to handle complex data formatting and edge cases inside Zapier and GoHighLevel. (Icon: Code2 from lucide-react)

- Card 3: "Process & Incident Optimization" -> Lean Six Sigma specialist focused on eliminating operational bottlenecks, enforcing SLA tracking, and reducing ticket backlogs by up to 75%. (Icon: Gauge from lucide-react)

- Additional Value Statement banner below grid: "Enterprise experience at a freelance-friendly execution level. Every system is built to scale, documented, tested, and delivered with standard operating procedures."

3. CORE TECHNICAL & OPERATIONAL STACK:

Categorized grid with 5 categories:

- Category 1 (PRIMARY FOCUS): Growth Automation & CRM -> GoHighLevel (Custom Workflows, Sub-Accounts, Pipelines, Smart Lists, Custom Fields, Webhooks), Zapier (Multi-Step Zaps, Custom Python Code Steps, Webhook Catchers, Paths, Error Handlers)

- Category 2 (SECONDARY & EXPANDING): Workflow Orchestration -> Make.com, n8n (Complex API integrations, JSON parsing, error routing)

- Category 3 (CORE ENGINEERING): Data & Scripting Foundation -> Python (Regex, Requests, Data Cleaning), Large-Scale Data Transformation, REST APIs, JSON Parsing, Crontab / Task Scheduler

- Category 4 (OPERATIONS): Infrastructure & Governance -> AWS (EC2, S3), Azure, JIRA / ITSM Admin, Microsoft 365 / Entra ID, Incident Management, Monitoring

- Category 5 (FRAMEWORKS & CERTIFICATIONS): Scrum Master (PSM I), Lean Six Sigma Green Belt (LSSGB), ITIL Framework, Root Cause Analysis (RCA)

- Visual styling: Category 1 items: larger pills (padding: 12px 24px, font-weight 600) with cyan glow border. Categories 2-4: Standard pills (padding: 8px 16px, font-weight 400), slate-700 bg. Category 5: Certificate badges with emerald accent + checkmark icon from lucide-react. Use Lucide React icons across all chips.

4. FEATURED SYSTEMS & CASE STUDIES:

3 case study cards (each with 16:9 image placeholder/svg pattern at the top):

- Case Study 1: "Banking Record Digitalization & Data Transformation Pipeline"

  * Tags: [Data Transformation, Python, OCR Processing, Lean Six Sigma]

  * Impact: In my role as IT Operations Lead, I managed multi-functional operations processing 10M+ records during a major digitalization program; structured and validated messy document inputs into digital formats.

- Case Study 2: "GoHighLevel Lead Verification & Python Data Sanitization Pipeline"

  * Tags: [Zapier + GHL Primary, Python API, Webhooks, Data Cleaning]

  * Impact: Built custom Python-based Regex cleaning logic inside Zapier to auto-sanitize, format phone numbers, and structure inbound GHL leads before CRM ingestion.

- Case Study 3: "GHL Agency Sub-Account Provisioning & Incident Monitoring System"

  * Tags: [GoHighLevel API, Zapier Catch Hooks, Incident Alerts]

  * Impact: Automated multi-location client onboarding with built-in error handling and immediate Slack/Telegram alert fallbacks.

- Click to expand: Smooth accordion height animation showing detailed methodology and workflow architecture notes.

- Hover effect: Images use object-cover with cyan overlay on hover. All images have descriptive alt text.

5. PROFESSIONAL EXPERIENCE TIMELINE:

Vertical timeline with animated milestone dots:

- Role 1: Senior IT Operations Analyst / Acting Operations Manager | Software Ventures International (Mar 2021 – Feb 2025)

  * Promoted twice within 3 years; served as Acting Operations Manager directing Cloud Operations division (18 direct reports).

  * Reduced JIRA incident ticket backlogs by 75% through workflow re-engineering and SLA tracking.

  * Processed 10M+ banking records in major digitalization initiative.

- Role 2: Creative Strategist / Project Manager | Pioneer Solutions (Jul 2025 – Present)

  * Managed video editing and media projects from concept to delivery, ensuring workflow efficiency and deadline execution.

- Role 3: Technical Operations Manager | ProDG Cyber Café (Jan 2019 – Feb 2021)

  * Managed daily business operations, network infrastructure (LAN/WAN), and technical setup for 50 client workstations.

6. CONTACT & CONSULTATION BOOKING:

- Split layout: Form (left) + Direct Links/Info (right)

- Form Fields: Name (text), Email (email), Primary Stack Needed (dropdown: Zapier + GHL, Python Scripting, Other), Project Bottleneck (textarea)

- Real-time validation using React Hook Form + Zod with clear error messages.

- Submit behavior: Show loading spinner → simulated success toast (green check) → reset form. 

- IMPORTANT: Add clear comments in the form component: `// TODO: Replace mock submit with EmailJS integration. Add your EmailJS credentials in a .env file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).`

- Rate limiting: Prevent submissions within 30 seconds.

- Direct Links Section: Display ONLY an Email contact option with a mailto: link. No LinkedIn, no GitHub, no other social links.

- Footer text: "© 2026 Dean Alfred Turing. Built with React, TypeScript & Tailwind CSS."

Performance, Accessibility & Micro-Interactions:

- Custom thin cyan scrollbar in global CSS

- Visible focus indicators: Cyan outline on all interactive elements for full keyboard navigation

- WCAG 2.1 AA compliant color contrast (4.5:1 minimum)

- ARIA labels on all icons & screen reader announcements for dynamic content

- Skip-to-content link for accessibility

- Helmet meta tags included (Title, Description, Open Graph placeholder, Canonical URL)

- Structured data (JSON-LD for Person and ProfessionalService)

- React Error Boundaries for each major section with fallback UI

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/21c24359-614a-4db9-80e8-2ad0ea99ef08).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
