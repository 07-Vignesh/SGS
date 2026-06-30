import Link from "next/link";
import { Code2, Network, Server, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const services = [
  {
    title: "Software Development",
    slug: "software-development",
    description: "Custom applications and platforms engineered for scale, security and speed.",
    icon: Code2,
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Technology strategy and advisory that aligns IT investment with business goals.",
    icon: Network,
  },
  {
    title: "IT Infrastructure Design",
    slug: "infrastructure-design",
    description: "Resilient, cloud-ready architecture built to support growth without compromise.",
    icon: Server,
  },
];

export default function Services() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="Services built for enterprise outcomes"
            description="From writing code to designing the infrastructure it runs on, we partner end-to-end."
          />
          <Link
            href="/services"
            className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-purple-deep transition-colors"
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-purple/10 hover:border-brand-purple/20"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white shadow-md shadow-brand-purple/20">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg sm:text-xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-[15px] text-muted leading-relaxed flex-1">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Link
          href="/services"
          className="sm:hidden mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-purple"
        >
          View all services
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
