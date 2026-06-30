import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Clients Worldwide" },
  { value: 50, suffix: "+", label: "In-House Experts" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-slate-100 bg-white py-14 sm:py-16">
      <RevealGroup className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {stats.map((stat) => (
          <RevealItem key={stat.label} className="text-center lg:border-r lg:last:border-r-0 border-slate-100">
            <p className="text-4xl sm:text-5xl font-bold text-gradient-brand tracking-tight">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2.5 text-sm sm:text-[15px] font-medium text-muted">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
