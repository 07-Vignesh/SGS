import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Network,
  Server,
  ArrowUpRight,
} from "lucide-react";

import GridGlow from "@/components/ui/GridGlow";
import Reveal, {
  RevealGroup,
  RevealItem,
} from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services | SGS IT Park",
  description:
    "Software Development, IT Consulting and Infrastructure Design services from SGS IT Park.",
};

const services = [
  {
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Custom web, mobile and enterprise applications engineered for growth.",
    icon: Code2,
  },

  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description:
      "Technology advisory and digital transformation strategies.",
    icon: Network,
  },

  {
    title: "Infrastructure Design",
    href: "/services/infrastructure-design",
    description:
      "Secure, scalable and cloud-ready enterprise infrastructure.",
    icon: Server,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <GridGlow variant="purple-green" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal className="max-w-3xl">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-wider
                bg-brand-purple/10
                text-brand-purple
              "
            >
              SGS IT PARK
            </span>

            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                text-ink
              "
            >
              Technology Services
              Designed For
              Modern Businesses
            </h1>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                text-muted
                max-w-2xl
                leading-relaxed
              "
            >
              From software engineering and IT consulting
              to infrastructure architecture, SGS IT Park
              delivers end-to-end solutions that help
              organizations innovate, scale and succeed.
            </p>

          </Reveal>

        </div>
      </section>

      {/* Services Cards */}

      <section className="bg-slate-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal>
            <h2 className="text-3xl font-bold text-center text-ink">
              Explore Our Services
            </h2>

            <p className="mt-4 text-center text-muted max-w-2xl mx-auto">
              Comprehensive technology solutions tailored
              to your business requirements.
            </p>
          </Reveal>

          <RevealGroup
            className="
              mt-14
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
            "
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <RevealItem key={service.title}>
                  <Link
                    href={service.href}
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:border-brand-purple/30
                    "
                  >
                    <span
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-brand-purple
                        to-brand-purple-deep
                        text-white
                      "
                    >
                      <Icon size={26} />
                    </span>

                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-bold
                        text-ink
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-muted
                        leading-relaxed
                        flex-1
                      "
                    >
                      {service.description}
                    </p>

                    <span
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-brand-purple
                        font-semibold
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      Learn More
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>

        </div>
      </section>

      {/* CTA Section */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="text-4xl font-bold text-ink">
            Need a Technology Partner?
          </h2>

          <p className="mt-4 text-muted">
            Let's discuss how SGS IT Park can help
            transform your business through innovation.
          </p>

          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              bg-brand-purple
              px-8
              py-4
              text-white
              font-semibold
              transition
              hover:bg-brand-purple-deep
            "
          >
            Contact Us
          </Link>

        </div>
      </section>
    </>
  );
}