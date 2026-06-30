import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join SGS IT Park and help shape the future of technology, research and business innovation.",
};

const openings = [
  { title: "Software Developer", type: "Full-time", location: "On-site" },
  { title: "IT Consultant", type: "Full-time", location: "Hybrid" },
  { title: "Infrastructure Engineer", type: "Full-time", location: "On-site" },
  { title: "Research Associate", type: "Full-time", location: "On-site" },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridGlow variant="orange-purple" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-orange bg-brand-orange/10">
              Careers
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink max-w-2xl">
              Build your future at SGS IT Park
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Join our team and help shape the future of technology, research and business innovation
              across the industries we serve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Open roles" title="Current openings" />

          <RevealGroup className="mt-10 space-y-4">
            {openings.map((job) => (
              <RevealItem key={job.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-white p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-purple/20 transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={15} className="text-brand-purple" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} className="text-brand-purple" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-brand-purple" />
                        Apply anytime
                      </span>
                    </div>
                  </div>
                  <Button href="/contact" variant="outline" className="shrink-0 w-full sm:w-auto justify-center">
                    Apply Now
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
