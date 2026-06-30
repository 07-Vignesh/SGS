import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import Logo from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "IT Infrastructure Design", href: "/services/infrastructure-design" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Retail", href: "/industries/retail" },
      { label: "Academy", href: "/industries/academy" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Automobile Finance", href: "/industries/automobile-finance" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Research", href: "/insights/research" },
      { label: "ePublication", href: "/insights/epublication" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "White Papers", href: "/insights/white-papers" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -top-32 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Transforming businesses through technology, research and innovation across software,
              consulting, education, real estate and finance.
            </p>
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-brand-purple/40 hover:text-white hover:bg-brand-purple/20"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white tracking-wide uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/60">
              <li className="flex gap-2.5">
                <MapPin size={17} className="shrink-0 mt-0.5 text-brand-orange" />
                <span>SGS IT Park, Tech Avenue, Innovation District</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={17} className="shrink-0 mt-0.5 text-brand-orange" />
                <a href="tel:+910000000000" className="hover:text-white transition-colors">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={17} className="shrink-0 mt-0.5 text-brand-orange" />
                <a href="mailto:hello@sgsitpark.com" className="hover:text-white transition-colors break-all">
                  hello@sgsitpark.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} SGS IT Park. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/45">
            <Link href="/about" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
