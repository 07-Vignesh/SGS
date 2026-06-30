import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-purple-deep to-brand-green/90" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand-orange/25 blur-[110px]" />

      <Reveal className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to Build the Future with SGS?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl mx-auto">
          Tell us about your goals and we&rsquo;ll show you how technology, research and the right
          partner can get you there faster.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" variant="white" className="text-brand-purple-deep">
            Get Started
            <ArrowRight size={17} />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
