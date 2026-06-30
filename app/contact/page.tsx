import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SGS IT Park to discuss your project, partnership or career opportunity.",
};

const details = [
  { icon: MapPin, label: "Office", value: "SGS IT Park, Tech Avenue, Innovation District" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Mail, label: "Email", value: "hello@sgsitpark.com", href: "mailto:hello@sgsitpark.com" },
  { icon: Clock, label: "Hours", value: "Mon &ndash; Fri, 9:00 AM &ndash; 6:00 PM" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <GridGlow variant="purple-green" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-brand-purple bg-brand-purple/8">
            Get in touch
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.08] text-ink">Contact Us</h1>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Tell us about your project and a member of our team will get back to you shortly.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12">
          <Reveal delay={0.05} className="space-y-4">
            {details.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</p>
                    <p
                      className="mt-1 text-[15px] font-medium text-ink"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block hover:-translate-y-0.5 transition-transform">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-lg shadow-slate-900/5 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a bit about what you need"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purple-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-purple/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
