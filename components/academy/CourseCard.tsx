import { CheckCircle2, Clock, Laptop, MessageCircle, type LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  duration: string;
  mode: string;
  badge?: string;
  whatsappNumber: string;
}

export default function CourseCard({
  title,
  icon: Icon,
  description,
  highlights,
  duration,
  mode,
  badge,
  whatsappNumber,
}: CourseCardProps) {
  const message = encodeURIComponent(
    `Hi SGS IT Park Academy, I'd like to know more about the ${title} course.`
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-green/10 hover:border-brand-green/20">
      {badge && (
        <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-brand-green-light to-brand-green px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-brand-green/25">
          {badge}
        </span>
      )}

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-light to-brand-green text-white shadow-md shadow-brand-green/20">
        <Icon size={22} />
      </span>

      <h3 className="mt-5 text-lg font-bold text-ink leading-snug">{title}</h3>
      <p className="mt-2.5 text-sm text-muted leading-relaxed">{description}</p>

      <ul className="mt-4 space-y-2 flex-1">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13.5px] text-muted leading-snug">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-green" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-muted">
        <span className="flex items-center gap-1.5">
          <Clock size={14} className="text-brand-green" />
          {duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Laptop size={14} className="text-brand-green" />
          {mode}
        </span>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
      >
        <MessageCircle size={17} />
        Enquire Now
      </a>
    </div>
  );
}
