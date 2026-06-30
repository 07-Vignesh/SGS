import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Operations Director",
    org: "Retail Client",
    text: "SGS transformed how we run our stores end to end. The systems they built just work, even at peak season.",
  },
  {
    name: "VP of Technology",
    org: "Finance Partner",
    text: "Their consulting and infrastructure team feels like an extension of our own. Reliable, fast and easy to work with.",
  },
  {
    name: "Research Lead",
    org: "Academic Institution",
    text: "The publication platform SGS delivered changed how our research reaches the people who need it.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-brand-purple/25 blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-green/15 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title="What our clients say"
          align="center"
          tone="purple"
          light
        />

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <RevealItem key={item.name}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 sm:p-8 backdrop-blur-sm">
                <Quote size={26} className="text-brand-orange" />
                <p className="mt-5 text-[15px] text-white/80 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-white/50 mt-0.5">{item.org}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
