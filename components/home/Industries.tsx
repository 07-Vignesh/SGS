import { Store, GraduationCap, Building2, Car } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const industries = [
  {
    title: "Retail",
    description: "Connected commerce experiences that bring customers and inventory closer together.",
    icon: Store,
    tone: "purple" as const,
  },
  {
    title: "Academy",
    description: "Digital learning infrastructure that scales with every cohort and curriculum.",
    icon: GraduationCap,
    tone: "green" as const,
  },
  {
    title: "Real Estate",
    description: "Property and asset platforms built for transparency across every transaction.",
    icon: Building2,
    tone: "orange" as const,
  },
  {
    title: "Automobile Finance",
    description: "Lending and asset-finance systems engineered for speed and compliance.",
    icon: Car,
    tone: "purple" as const,
  },
];

const toneClasses: Record<string, string> = {
  purple: "from-brand-purple to-brand-purple-deep shadow-brand-purple/20",
  green: "from-brand-green-light to-brand-green shadow-brand-green/20",
  orange: "from-brand-orange-warm to-brand-orange shadow-brand-orange/20",
};

export default function Industries() {
  return (
    <section className="relative bg-slate-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where we work"
          title="Industries we serve"
          description="Deep domain experience across the sectors that move real economies forward."
          align="center"
          tone="green"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <RevealItem key={industry.title}>
                <div className="group h-full rounded-2xl bg-white p-7 sm:p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${toneClasses[industry.tone]}`}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink">{industry.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{industry.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
