import Link from "next/link";
import {
  BookOpen,
  Accessibility,
  RefreshCw,
  Sparkles,
  Check,
  Globe2,
  ArrowRight,
  FileText,
  FileCode2,
  FileType,
  Languages as LanguagesIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";

const heroTags = [
  "EPUB 2",
  "EPUB 3",
  "Accessibility",
  "PDF Conversion",
  "MathML",
  "Fixed Layout",
];

const serviceCards = [
  {
    title: "EPUB Conversion",
    icon: BookOpen,
    items: ["EPUB 2", "EPUB 3", "Reflowable EPUB", "Fixed Layout EPUB"],
  },
  {
    title: "Accessibility Services",
    icon: Accessibility,
    items: ["WCAG Compliance", "ADA Compliance", "Section 508", "Accessible EPUB", "Accessible PDF"],
  },
  {
    title: "Conversion Services",
    icon: RefreshCw,
    items: ["PDF to EPUB", "Word to EPUB", "InDesign to EPUB", "XML to EPUB", "HTML to EPUB"],
  },
  {
    title: "Advanced Publishing",
    icon: Sparkles,
    items: ["MathML Integration", "JavaScript EPUB", "Interactive EPUB", "Audio EPUB", "Media Overlays"],
  },
];

const solutionsGrid = [
  "EPUB 2 Development",
  "EPUB 3 Development",
  "Accessible EPUB",
  "Accessible PDF",
  "Fixed Layout EPUB",
  "Reflowable EPUB",
  "MathML Support",
  "JavaScript EPUB",
  "Multilingual EPUB",
  "eBook QA Testing",
  "Proofreading",
  "Content Validation",
];

const languages = [
  "English",
  "Tamil",
  "Hindi",
  "French",
  "German",
  "Spanish",
  "Arabic",
  "Japanese",
  "Chinese",
];

const workflowSteps = [
  "Content Submission",
  "Content Review",
  "Conversion",
  "Accessibility Validation",
  "Quality Assurance",
  "Final Delivery",
];

const technologies = [
  "EPUB 2",
  "EPUB 3",
  "HTML5",
  "CSS3",
  "JavaScript",
  "MathML",
  "XML",
  "DAISY",
  "WCAG",
  "PDF/UA",
];

const whyUs = [
  "Experienced Publishing Team",
  "Accessibility Expertise",
  "Fast Turnaround",
  "Global Standards Compliance",
  "Multilingual Support",
  "Quality Assurance",
];

export default function EPublicationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-brand-purple/15 to-brand-green/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
            <BookOpen size={14} />
            e-Publication Services
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
            Transforming Content Into
            <span className="block bg-gradient-to-r from-brand-purple to-brand-green bg-clip-text text-transparent">
              Accessible Digital Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted">
            Publisher-grade EPUB, PDF, and accessibility workflows built for
            publishers, educators, and content teams who can&apos;t afford to
            get the standards wrong.
          </p>

          {/* Spec strip */}
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {heroTags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=quote">
              Get Quote
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink/80 hover:text-brand-purple transition-colors"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg sm:text-xl leading-relaxed text-ink/80">
            SGS IT Park provides end-to-end digital publishing solutions for
            publishers, educational institutions, research organizations and
            content providers.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
            We specialize in EPUB creation, accessibility compliance, PDF
            conversion, multilingual publishing and interactive digital
            content.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 text-brand-purple">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {card.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-purple/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publishing Solutions Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">
              Publishing Solutions
            </h2>
            <p className="mt-3 text-muted">
              Everything required to take a manuscript from source file to a
              validated, standards-compliant publication.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {solutionsGrid.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-[15px] text-ink/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 text-brand-purple">
              <Globe2 size={20} />
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-ink">
              Multilingual Publishing
            </h2>
            <p className="mt-2 text-muted max-w-xl">
              Native-script EPUB and PDF production across the languages your
              readers actually use.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-medium text-ink/80"
                >
                  <LanguagesIcon size={13} className="text-brand-purple" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center">
            Our Workflow
          </h2>
          <p className="mt-3 text-muted text-center max-w-xl mx-auto">
            A fixed, auditable pipeline — every file passes through the same
            checks before it reaches you.
          </p>

          <div className="mt-12 relative">
            <div
              aria-hidden
              className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-slate-200"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
              {workflowSteps.map((step, i) => (
                <div key={step} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-white text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="mt-3 text-sm font-medium text-ink/80 max-w-[8rem]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink">
            Technologies &amp; Standards
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-ink/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why SGS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink">
            Why SGS
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-ink">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple to-brand-purple/80 px-8 py-14 sm:px-14 sm:py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
            />
            <h2 className="relative text-3xl sm:text-4xl font-bold text-white">
              Need Professional e-Publishing Services?
            </h2>
            <p className="relative mt-4 text-white/80 max-w-xl mx-auto text-base sm:text-lg">
              Convert your content into accessible, future-ready digital
              publications.
            </p>
            <Link
              href="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-purple hover:bg-white/90 transition-colors"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}