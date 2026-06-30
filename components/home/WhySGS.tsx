import { Lightbulb, Award, Gem, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Innovation",
    description: "We invest in emerging technology so our clients stay ahead of the curve, not behind it.",
    icon: Lightbulb,
  },
  {
    title: "Industry Expertise",
    description: "A decade of domain knowledge across software, finance, education and real estate.",
    icon: Award,
  },
  {
    title: "Quality",
    description: "Rigorous engineering and review standards behind every project we deliver.",
    icon: Gem,
  },
  {
    title: "Customer Success",
    description: "Long-term partnerships measured by outcomes, not just delivery dates.",
    icon: Users,
  },
];

export default function WhySGS() {
  return (
    <section className="relative bg-slate-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SGS"
          title="A partner built for the long run"
          description="Four principles guide every engagement, from the first conversation to ongoing support."
          align="center"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title}>
                <div className="h-full rounded-2xl bg-white p-7 sm:p-8 shadow-sm border border-slate-100 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 text-brand-purple">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{pillar.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
