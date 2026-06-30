import type { Metadata } from "next";
import { FlaskConical, BookOpen, FileText, Newspaper } from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research, ePublications, case studies and white papers from SGS IT Park.",
};

const insights = [
  {
    title: "Research",
    slug: "research",
    description: "Industry-focused research and business intelligence that informs better decisions.",
    icon: FlaskConical,
  },
  {
    title: "ePublication",
    slug: "epublication",
    description: "Digital publishing and content management solutions built for modern reach.",
    icon: BookOpen,
  },
  {
    title: "Case Studies",
    slug: "case-studies",
    description: "Real-world transformation journeys, told with measurable outcomes.",
    icon: FileText,
  },
  {
    title: "White Papers",
    slug: "white-papers",
    description: "In-depth analysis on the trends shaping technology and industry.",
    icon: Newspaper,
  },
];

export default function InsightsPage() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <GridGlow variant="orange-purple" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-orange bg-brand-orange/10">
            Insights
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.08] text-ink">
            Research &amp; publications
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Insights, research and industry knowledge from our team of analysts and engineers.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.slug}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/20">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon size={22} />
                  </span>
                  <h2 className="mt-6 text-xl font-bold text-ink">{item.title}</h2>
                  <p className="mt-3 text-[15px] text-muted leading-relaxed">{item.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
