"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Code2, Network, Server, Store, GraduationCap, Building2, Car, FlaskConical, BookOpen, FileText, Newspaper } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";

const servicesLinks = [
  { title: "Software Development", href: "/services/software-development", desc: "Custom applications built for scale", icon: Code2 },
  { title: "IT Consulting", href: "/services/it-consulting", desc: "Technology strategy and advisory", icon: Network },
  { title: "IT Infrastructure Design", href: "/services/infrastructure-design", desc: "Resilient enterprise architecture", icon: Server },
];

const industriesLinks = [
  { title: "Retail", href: "/industries/retail", icon: Store },
  { title: "Academy", href: "/industries/academy", icon: GraduationCap },
  { title: "Real Estate", href: "/industries/real-estate", icon: Building2 },
  { title: "Automobile Finance", href: "/industries/automobile-finance", icon: Car },
];

const insightsLinks = [
  { title: "Research", href: "/insights/research", icon: FlaskConical },
  { title: "ePublication", href: "/insights/epublication", icon: BookOpen },
  { title: "Case Studies", href: "/insights/case-studies", icon: FileText },
  { title: "White Papers", href: "/insights/white-papers", icon: Newspaper },
];

function DesktopDropdown({
  label,
  links,
  columns = 1,
}: {
  label: string;
  links: { title: string; href: string; desc?: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
  columns?: number;
}) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 px-1 py-2 text-[15px] font-medium text-ink/80 hover:text-brand-purple transition-colors">
        {label}
        <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
        <div
          className={`glass rounded-2xl shadow-2xl shadow-slate-900/10 p-3 ${
            columns === 2 ? "grid grid-cols-2 gap-1 min-w-[460px]" : "min-w-[280px] space-y-1"
          }`}
        >
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-start gap-3 rounded-xl p-3 hover:bg-brand-purple/6 transition-colors"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple/10 to-brand-green/10 text-brand-purple">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{item.title}</span>
                  {item.desc && <span className="block text-xs text-muted mt-0.5">{item.desc}</span>}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) =>
    setOpenSection((current) => (current === key ? null : key));

  return (
    <>
      <header className="sticky top-0 z-50 glass">
        <nav className="mx-auto flex h-24 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[15px] font-medium text-ink/80 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <DesktopDropdown label="Services" links={servicesLinks} />
            <DesktopDropdown label="Industries" links={industriesLinks} columns={2} />
            <DesktopDropdown label="Insights" links={insightsLinks} columns={2} />
            <Link href="/about" className="text-[15px] font-medium text-ink/80 hover:text-brand-purple transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="text-[15px] font-medium text-ink/80 hover:text-brand-purple transition-colors">
              Careers
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button href="/contact" className="!px-6 !py-3 text-sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-ink active:scale-95 transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer — rendered OUTSIDE the header so `fixed` is relative to the viewport,
          not to the header (which has `glass` / backdrop-filter and would otherwise become
          the containing block for fixed descendants, collapsing the drawer to header height). */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex items-center justify-between gap-3 px-5 h-18 sm:h-20 border-b border-slate-100">
                <div className="min-w-0 overflow-hidden">
                  <Logo />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 active:scale-95 transition"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                <Link
                  href="/"
                  className="block py-3.5 text-[16px] font-medium text-ink border-b border-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                {[
                  { key: "services", label: "Services", links: servicesLinks },
                  { key: "industries", label: "Industries", links: industriesLinks },
                  { key: "insights", label: "Insights", links: insightsLinks },
                ].map((section) => (
                  <div key={section.key} className="border-b border-slate-100">
                    <button
                      onClick={() => toggleSection(section.key)}
                      className="flex w-full items-center justify-between py-3.5 text-[16px] font-medium text-ink"
                    >
                      {section.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          openSection === section.key ? "rotate-180 text-brand-purple" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openSection === section.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-1 space-y-1">
                            {section.links.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 text-[15px] text-muted hover:text-brand-purple"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  href="/about"
                  className="block py-3.5 text-[16px] font-medium text-ink border-b border-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="block py-3.5 text-[16px] font-medium text-ink border-b border-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Careers
                </Link>
              </div>

              <div className="p-5 border-t border-slate-100">
                <Button href="/contact" className="w-full justify-center">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}