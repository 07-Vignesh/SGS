import { FlaskConical, BookOpen, FileText, Newspaper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import GridGlow from "@/components/ui/GridGlow";

const items = [
  {
    title: "Research",
    description: "Industry-focused research and business intelligence that informs better decisions.",
    icon: FlaskConical,
  },
  {
    title: "ePublication",
    description: "Digital publishing and content management built for modern reach.",
    icon: BookOpen,
  },
  {
    title: "Case Studies",
    description: "Real-world transformation journeys, told with measurable outcomes.",
    icon: FileText,
  },
  {
    title: "White Papers",
    description: "In-depth analysis on the trends shaping technology and industry.",
    icon: Newspaper,
  },
];

export default function Research() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <GridGlow variant="subtle" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Knowledge"
          title="Research & publications"
          description="Insights, reports and industry knowledge from our research practice."
          align="center"
          tone="orange"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.title}>
                <div className="group h-full rounded-2xl border border-slate-100 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-orange/20">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
