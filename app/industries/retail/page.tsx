import type { Metadata } from "next";
import {
  Laptop,
  Monitor,
  Printer,
  Router,
  Keyboard,
  Mouse,
  Gamepad2,
  Headphones,
  Cpu,
  HardDrive,
  Zap,
  Wrench,
  Settings2,
  RefreshCw,
  Wifi,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/showroom/ProductCard";
import ServiceCard from "@/components/showroom/ServiceCard";

export const metadata: Metadata = {
  title: "Computer Showroom",
  description:
    "SGS IT Park Computer Showroom in Karaikudi — laptops, desktops, printers, routers, accessories and expert repair services.",
};

const WHATSAPP_NUMBER = "918015215995";
const PHONE_PRIMARY = "+91 80152 15995";
const PHONE_SECONDARY = "+91 63812 29889";

const categories = [
  { label: "Hot Deals", href: "#hot-deals", icon: Sparkles },
  { label: "Laptops & Desktops", href: "#laptops-desktops", icon: Laptop },
  { label: "Custom & Gaming PCs", href: "#build-pc", icon: Gamepad2 },
  { label: "Printers & Ink", href: "#printers-ink", icon: Printer },
  { label: "Networking", href: "#networking", icon: Router },
  { label: "Accessories", href: "#accessories", icon: Keyboard },
  { label: "Services", href: "#services", icon: Wrench },
];

const hotDeals = [
  {
    name: "Epson EcoTank L3250",
    icon: Printer,
    badge: "Free Ink Bottle",
    price: "₹14,999",
    specs: [
      "A4 Wi-Fi all-in-one ink tank colour printer",
      "Print, copy, scan & wireless printing",
      "33 ppm black / 15 ppm colour",
      "Refillable ink tank — high yield, low cost",
      "Free 1 bottle of Epson black ink included",
    ],
  },
  {
    name: "Zebronics Keyboard & Mouse Combo",
    icon: Keyboard,
    badge: "Limited Time",
    price: "₹449",
    specs: [
      "Full-size keyboard, comfortable typing",
      "Smooth & precise wired mouse",
      "Plug & play USB — no drivers needed",
      "1 year warranty",
    ],
  },
  {
    name: "COFE Wi-Fi 6 Router",
    icon: Router,
    badge: "Save ₹201",
    price: "₹2,299",
    oldPrice: "₹2,500",
    specs: [
      "4G/5G SIM compatible wireless router",
      "Faster internet, zero latency",
      "WPA3 security & IMEI-based protection",
      "IPv6/IPv4 ready",
    ],
  },
];

const laptopsDesktops = [
  {
    name: "New Desktop — Starter Build",
    icon: Cpu,
    badge: "Summer Sale",
    price: "₹15,900",
    specs: [
      "Intel i3 processor",
      "8 GB RAM / 256 GB SSD",
      "19-inch monitor included",
      "Keyboard, mouse & Wi-Fi included",
      "OS & installation included",
    ],
  },
  {
    name: "New HP Laptop",
    icon: Laptop,
    badge: "Summer Sale",
    price: "₹45,000",
    specs: [
      "Core 3, 14th Gen processor",
      "8 GB RAM / 512 GB SSD",
      "15.6-inch FHD display",
      "Windows 11 pre-installed",
    ],
  },
  {
    name: "Used & Refurbished Laptops",
    icon: RefreshCw,
    priceNote: "Price on enquiry",
    specs: [
      "Condition-checked, tested hardware",
      "Multiple brands & configurations in stock",
      "Budget-friendly options for students & offices",
      "Short warranty on all refurbished units",
    ],
  },
];

const printersInk = [
  {
    name: "Epson EcoTank L3250",
    icon: Printer,
    price: "₹14,999",
    specs: ["All-in-one print, copy, scan & Wi-Fi", "Refillable ink tank system", "Borderless photo printing"],
  },
  {
    name: "Printer Sales — All Brands",
    icon: Settings2,
    priceNote: "Price on enquiry",
    specs: ["HP, Canon, Epson, Brother & more", "Inkjet, laser & ink-tank options", "New & exchange offers available"],
  },
  {
    name: "Ink & Cartridge Refills",
    icon: RefreshCw,
    priceNote: "Price on enquiry",
    specs: ["Genuine & compatible ink refills", "Cartridge refilling for most brands", "Quick turnaround"],
  },
];

const networking = [
  {
    name: "COFE Wi-Fi 6 Router",
    icon: Router,
    price: "₹2,299",
    oldPrice: "₹2,500",
    specs: ["4G/5G SIM compatible", "WPA3 security, zero latency", "Wide coverage, strong signal"],
  },
  {
    name: "Wi-Fi & Networking Setup",
    icon: Wifi,
    priceNote: "Price on enquiry",
    specs: ["Home & office Wi-Fi installation", "Router configuration & range optimisation", "Multiple router brands available"],
  },
];

const accessories = [
  {
    name: "Universal Laptop Chargers",
    icon: Zap,
    priceNote: "Price on enquiry",
    specs: ["Compatible with Dell, HP, Lenovo, Asus, Acer", "All connector sizes available", "100–240V input, 100% tested"],
  },
  {
    name: "Laptop Displays & Screens",
    icon: Monitor,
    priceNote: "Price on enquiry",
    specs: ['14" to 17.3", HD & FHD options', "For dead, cracked or damaged screens", "Compatible with all major brands"],
  },
  {
    name: "Keyboards, Mice & Peripherals",
    icon: Mouse,
    priceNote: "Price on enquiry",
    specs: ["Wired & wireless options", "Zebronics & other trusted brands", "Combo deals available"],
  },
  {
    name: "Gaming Peripherals",
    icon: Headphones,
    priceNote: "Price on enquiry",
    specs: ["Gaming headsets, mice & keyboards", "RGB & mechanical options", "Built for performance"],
  },
];

const buildTiers = [
  {
    title: "Everyday & Office Build",
    icon: HardDrive,
    description: "Reliable, budget-friendly desktops for browsing, billing, documents and day-to-day office work.",
  },
  {
    title: "Creator & Workstation Build",
    icon: Cpu,
    description: "Higher RAM and storage configurations tuned for editing, design and multitasking workloads.",
  },
  {
    title: "Gaming Build",
    icon: Gamepad2,
    description: "Performance-first builds with dedicated graphics — up to 50% off on select components, for a limited time.",
  },
];

const services = [
  {
    title: "Laptop Repair & Service",
    icon: Laptop,
    description: "Diagnostics, hardware repair, screen replacement and software troubleshooting for all laptop brands.",
  },
  {
    title: "Desktop / PC Repair & Service",
    icon: Cpu,
    description: "Hardware upgrades, component replacement and performance tuning for desktop systems.",
  },
  {
    title: "Printer Service & Ink Refill",
    icon: Printer,
    description: "Printer servicing, head cleaning and ink/cartridge refilling for all major brands.",
  },
  {
    title: "Screen Replacement",
    icon: Monitor,
    description: 'Laptop display replacement for cracked, dead or damaged screens, 14" to 17.3".',
  },
  {
    title: "OS & Software Installation",
    icon: Settings2,
    description: "Windows installation, driver setup, software configuration and system optimisation.",
  },
  {
    title: "Wi-Fi & Networking Setup",
    icon: Wifi,
    description: "Router installation, network configuration and Wi-Fi coverage optimisation for home or office.",
  },
  {
    title: "Custom PC Building",
    icon: Wrench,
    description: "Tell us your budget and use case — we'll source parts and build the right PC for you.",
  },
];

const trustBadges = [
  { label: "Best Price", icon: Sparkles },
  { label: "Best Service", icon: ShieldCheck },
  { label: "1 Year Warranty", icon: ShieldCheck },
  { label: "100% Tested", icon: ShieldCheck },
  { label: "Trusted Brands", icon: Sparkles },
  { label: "Expert Support", icon: Wrench },
];

export default function ComputerShowroomPage() {
  const enquiryMessage = encodeURIComponent(
    "Hi SGS IT Park, I'd like to know more about your products and services."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridGlow variant="purple-green" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-brand-purple/6 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-purple">
              <Sparkles size={14} />
              Best Products &middot; Best Service &middot; Best Price
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
              SGS IT Park Computer Showroom
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
              Your one-stop destination in Karaikudi for laptops, desktops, printers, networking gear
              and accessories — backed by expert sales, repair and service support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${enquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-200 hover:border-brand-purple hover:text-brand-purple"
              >
                <Phone size={17} />
                {PHONE_PRIMARY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category quick-nav */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2.5 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.label}
                  href={cat.href}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple/5"
                >
                  <Icon size={15} />
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hot deals */}
      <section id="hot-deals" className="bg-white py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Today's Offers" title="Hot deals you don't want to miss" tone="orange" />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map((item) => (
              <RevealItem key={item.name}>
                <ProductCard {...item} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Laptops & Desktops */}
      <section id="laptops-desktops" className="bg-slate-50/60 py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Laptops & Desktops"
            title="New & used, ready for every budget"
            description="From brand-new HP laptops to condition-checked refurbished units — we help you find the right fit."
          />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopsDesktops.map((item) => (
              <RevealItem key={item.name}>
                <ProductCard {...item} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Build PC */}
      <section id="build-pc" className="relative overflow-hidden bg-ink py-16 sm:py-24 scroll-mt-20">
        <div className="absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-brand-orange/20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-purple/20 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Build Your Own PC"
            title="Tell us your budget. We'll build the rest."
            description="From everyday office desktops to high-performance gaming rigs, every build is configured around what you actually need."
            tone="orange"
            light
          />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {buildTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <RevealItem key={tier.title}>
                  <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur-sm">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{tier.title}</h3>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">{tier.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
          <Reveal className="mt-10 flex justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi SGS IT Park, I'd like to get a custom PC build quote."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange-warm to-brand-orange px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              Get a Custom Build Quote
              <ArrowRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Printers & Ink */}
      <section id="printers-ink" className="bg-white py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Printers & Ink" title="Printing made simple and affordable" />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {printersInk.map((item) => (
              <RevealItem key={item.name}>
                <ProductCard {...item} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Networking */}
      <section id="networking" className="bg-slate-50/60 py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Networking" title="Stay connected, stay fast" tone="green" />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {networking.map((item) => (
              <RevealItem key={item.name}>
                <ProductCard {...item} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Accessories */}
      <section id="accessories" className="bg-white py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Accessories & Parts" title="Everything that keeps your devices running" />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item) => (
              <RevealItem key={item.name}>
                <ProductCard {...item} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50/60 py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Repairs and support for everything we sell"
            description="Bring in your laptop, PC or printer — our technicians handle the rest."
            tone="green"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <ServiceCard {...service} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-14 sm:py-16 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <RevealItem key={badge.label} className="flex flex-col items-center text-center gap-2.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">{badge.label}</span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Visit & contact */}
      <section id="contact" className="relative overflow-hidden bg-white py-16 sm:py-24 scroll-mt-20">
        <GridGlow variant="purple-green" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Visit Us" title="Talk to our consultant today" align="center" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
            <Reveal className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Address</p>
                  <p className="mt-1 text-[15px] font-medium text-ink">
                    315/1, Sekkalai Road, Opp. TNSTC Shed, Karaikudi &ndash; 630001
                  </p>
                  <p className="text-sm text-muted mt-0.5">1st Floor, Sekkalai Bakery Complex</p>
                </div>
              </div>

              <a
                href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                  <Phone size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Phone</p>
                  <p className="mt-1 text-[15px] font-medium text-ink">{PHONE_PRIMARY}</p>
                  <p className="text-sm text-muted mt-0.5">{PHONE_SECONDARY}</p>
                </div>
              </a>

              <a
                href="mailto:itpark@southgrapessolutions.com"
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                  <Mail size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Email</p>
                  <p className="mt-1 text-[15px] font-medium text-ink break-all">itpark@southgrapessolutions.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple/8 text-brand-purple">
                  <Clock size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Hours</p>
                  <p className="mt-1 text-[15px] font-medium text-ink">Mon &ndash; Sat, 9:30 AM &ndash; 8:30 PM</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg min-h-[340px]">
              <iframe
                title="SGS IT Park location map"
                src="https://www.google.com/maps?q=315/1%20Sekkalai%20Road%2C%20Opp%20TNSTC%20Shed%2C%20Karaikudi%2C%20630001&output=embed"
                className="h-full w-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-purple-deep to-brand-green/90" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <Reveal className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Looking for a product or need a repair?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/75 max-w-xl mx-auto">
            Message us on WhatsApp or give us a call — our team will help you find exactly what you need.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${enquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
            <Button href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} variant="white">
              <Phone size={17} />
              Call {PHONE_PRIMARY}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
