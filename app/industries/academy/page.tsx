import type { Metadata } from "next";
import {
  Code2,
  BarChart3,
  Calculator,
  Sparkles,
  Video,
  Radio,
  Briefcase,
  Award,
  Users,
  Target,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import GridGlow from "@/components/ui/GridGlow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CourseCard from "@/components/academy/CourseCard";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "SGS IT Park Academy offers practical IT courses — Web Development, Data Analytics, Tally and more — with live sessions and a paid internship program.",
};

const WHATSAPP_NUMBER = "918015215995";

const courses = [
  {
    title: "Web Development",
    icon: Code2,
    badge: "Ongoing Batch",
    description: "Build real, responsive websites and web apps from the ground up — front-end to back-end.",
    highlights: [
      "HTML, CSS, JavaScript & modern frameworks",
      "Hands-on projects, not just theory",
      "API integration and deployment",
    ],
    duration: "3 Months",
    mode: "Live Online + Center",
  },
  {
    title: "Data Analyst",
    icon: BarChart3,
    badge: "Ongoing Batch",
    description: "Learn to clean, analyze and visualize real-world data using industry-standard tools.",
    highlights: [
      "Excel, SQL and Python for analysis",
      "Dashboards & data visualization",
      "Real datasets, real business cases",
    ],
    duration: "3 Months",
    mode: "Live Online + Center",
  },
  {
    title: "Tally with GST",
    icon: Calculator,
    badge: "Ongoing Batch",
    description: "Master practical accounting, GST filing and inventory management on Tally.",
    highlights: [
      "Voucher entries & financial statements",
      "GST returns and compliance basics",
      "Inventory & payroll management",
    ],
    duration: "2 Months",
    mode: "Live Online + Center",
  },
  {
    title: "More Courses",
    icon: Sparkles,
    description: "New courses are added regularly based on industry demand. Ask us what's coming up next.",
    highlights: [
      "New batches announced regularly",
      "Flexible timings for students & professionals",
      "Talk to us about upcoming sessions",
    ],
    duration: "Varies",
    mode: "Ask for Details",
  },
];

const liveFeatures = [
  {
    title: "Live Interactive Classes",
    icon: Video,
    description: "Real-time sessions with trainers — ask questions, get feedback and learn by doing, not just watching.",
  },
  {
    title: "Recorded for Revision",
    icon: Radio,
    description: "Every live session is recorded, so you can revisit any topic at your own pace.",
  },
  {
    title: "Doubt-Clearing Sessions",
    icon: Users,
    description: "Dedicated time with trainers to clear doubts and strengthen weak areas before moving ahead.",
  },
];

const internshipPoints = [
  "Work on real client projects under mentor guidance",
  "Paid stipend based on performance and contribution",
  "Hands-on experience to strengthen your resume",
  "Certificate of internship on successful completion",
  "Possibility of full-time placement for strong performers",
];

const whyUs = [
  { title: "Certified Trainers", icon: Award },
  { title: "Small Batch Sizes", icon: Users },
  { title: "Hands-on Projects", icon: Target },
  { title: "Placement Support", icon: Briefcase },
];

export default function AcademyPage() {
  const enquiryMessage = encodeURIComponent(
    "Hi SGS IT Park Academy, I'd like to know more about your courses and internship program."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridGlow variant="purple-green" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-brand-green/8 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-green">
              <Sparkles size={14} />
              SGS IT Park Academy
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
              Practical IT courses, taught live by people who build software for a living
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
              From Web Development to Data Analytics and Tally, our courses focus on real, job-ready
              skills — backed by live sessions and a paid internship program for our learners.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${enquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                Enquire on WhatsApp
              </a>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-slate-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current Courses"
            title="Courses running right now"
            description="Hands-on, project-based learning — designed to get you job-ready, not just certificate-ready."
            tone="green"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <RevealItem key={course.title}>
                <CourseCard {...course} whatsappNumber={WHATSAPP_NUMBER} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Live sessions */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GridGlow variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How You Learn"
            title="Live sessions, not just recorded videos"
            description="Every course is taught through live, interactive classes so you can ask questions as you go."
            align="center"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {liveFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <RevealItem key={feature.title}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 text-brand-purple">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink">{feature.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Paid internship */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24">
        <div className="absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-brand-green/20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-purple/20 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-green-200">
              <Briefcase size={14} />
              Paid Internship Program
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-white">
              Learn it, then get paid to practice it
            </h2>
            <p className="mt-5 text-base text-white/65 leading-relaxed">
              Strong learners get the opportunity to join our paid internship program — working
              alongside our development and consulting teams on real projects.
            </p>
            <div className="mt-7">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi SGS IT Park Academy, I'd like to know more about the paid internship program."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-green-light to-brand-green px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-green/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                Ask About Internships
                <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3.5">
              {internshipPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green-light" />
                  <span className="text-[15px] text-white/85">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why learn with us */}
      <section className="bg-white py-14 sm:py-16 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="flex flex-col items-center text-center gap-2.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/8 text-brand-green">
                    <Icon size={21} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">{item.title}</span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-light via-brand-green to-brand-purple-deep/90" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <Reveal className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to start learning?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Message us to know the next batch start date, fees and seat availability.
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
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
