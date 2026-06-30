import type { Metadata } from "next";
import { Store, GraduationCap, Building2, Car } from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description: "SGS IT Park delivers solutions across retail, academy, real estate and automobile finance.",
};

const industries = [
  {
    title: "Retail",
    slug: "retail",
    description:
      "Connected commerce platforms that unify storefronts, inventory and customer data into one reliable system.",
    icon: Store,
  },
  {
    title: "Academy",
    slug: "academy",
    description:
      "Learning management and campus systems built to scale with every new cohort and curriculum change.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Property, leasing and asset management platforms designed for transparency across every transaction.",
    icon: Building2,
  },
  {
    title: "Automobile Finance",
    slug: "automobile-finance",
    description:
      "Lending, underwriting and asset-finance systems engineered for speed, accuracy and compliance.",
    icon: Car,
  },
];

export default function IndustriesPage() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <GridGlow variant="purple-green" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-green bg-brand-green/8">
            Industries
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.08] text-ink">
            Industries we serve
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Delivering tailored solutions across the sectors that move real economies forward.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <RevealItem key={industry.slug}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-green/20">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-light to-brand-green text-white shadow-md shadow-brand-green/20">
                    <Icon size={22} />
                  </span>
                  <h2 className="mt-6 text-xl font-bold text-ink">{industry.title}</h2>
                  <p className="mt-3 text-[15px] text-muted leading-relaxed">{industry.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
