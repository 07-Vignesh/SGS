import type { Metadata } from "next";
import { Eye, Target, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GridGlow from "@/components/ui/GridGlow";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SGS IT Park is a diversified organization operating across technology, education, research, publishing, real estate, retail and financial services.",
};

const values = [
  {
    title: "Vision",
    description:
      "To be the partner enterprises turn to first when technology, research and growth need to move together.",
    icon: Eye,
  },
  {
    title: "Mission",
    description:
      "Empowering businesses through technology, deep research and dependable execution across every industry we serve.",
    icon: Target,
  },
  {
    title: "Core Values",
    description:
      "Integrity, innovation and excellence guide every decision, from the smallest fix to the largest transformation.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridGlow variant="purple-green" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-purple bg-brand-purple/8">
              About SGS IT Park
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink max-w-3xl">
              A diversified group built around one idea: technology should move every industry forward
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              SGS IT Park is a diversified organization operating across technology, education,
              research, publishing, real estate, retail and financial services. We bring the same
              engineering discipline to every sector we touch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Vision, mission and the values behind them"
            align="center"
          />

          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white shadow-md shadow-brand-purple/20">
                      <Icon size={22} />
                    </span>
                    <h2 className="mt-6 text-xl font-bold text-ink">{item.title}</h2>
                    <p className="mt-4 text-[15px] text-muted leading-relaxed">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
