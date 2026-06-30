import { ArrowRight, BarChart3, Sparkles, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import GridGlow from "@/components/ui/GridGlow";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <GridGlow variant="purple-green" className="h-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-brand-purple/6 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-purple">
              <Sparkles size={14} />
              Technology &middot; Research &middot; Growth
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-ink">
              Transforming Businesses Through{" "}
              <span className="text-gradient-brand">Technology, Research &amp; Innovation</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              Delivering world-class software development, IT consulting, research, publishing,
              real estate, education and business solutions.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Button href="/services" className="w-full sm:w-auto justify-center">
                Explore Services
                <ArrowRight size={17} />
              </Button>
              <Button href="/contact" variant="outline" className="w-full sm:w-auto justify-center">
                Contact Us
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-green" />
                10+ years delivering enterprise outcomes
              </span>
            </div>
          </Reveal>

          {/* Floating enterprise illustration */}
          <Reveal delay={0.12} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-purple via-brand-purple-deep to-brand-green/80 shadow-2xl shadow-brand-purple/20" />
              <div className="absolute inset-0 rounded-[28px] bg-grid opacity-20" />

              <div className="absolute inset-5 sm:inset-7 flex flex-col gap-4">
                <div className="glass rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-ink/70">Delivery Velocity</span>
                    <BarChart3 size={16} className="text-brand-purple" />
                  </div>
                  <div className="mt-4 flex items-end gap-2 h-16">
                    {[40, 65, 50, 85, 70, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-brand-purple/30 to-brand-purple"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-4 sm:p-5 shadow-lg flex-1 flex flex-col justify-between">
                  <span className="text-xs font-semibold text-ink/70">Active Engagements</span>
                  <div className="mt-3 space-y-2.5">
                    {["Software Delivery", "Infra Modernization", "Research Program"].map((row) => (
                      <div
                        key={row}
                        className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2.5"
                      >
                        <span className="text-xs sm:text-[13px] font-medium text-ink">{row}</span>
                        <span className="h-2 w-2 rounded-full bg-brand-green" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink leading-none">98.6%</p>
                    <p className="text-[11px] text-muted mt-1">Client retention rate</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
