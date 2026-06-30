import { MessageCircle, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  whatsappNumber: string;
}

export default function ServiceCard({ title, description, icon: Icon, whatsappNumber }: ServiceCardProps) {
  const message = encodeURIComponent(
    `Hi SGS IT Park, I'd like to enquire about your ${title} service.`
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-green/20">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-light to-brand-green text-white shadow-md shadow-brand-green/20">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
      <p className="mt-2.5 text-sm text-muted leading-relaxed">{description}</p>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
      >
        <MessageCircle size={15} />
        Get a Quote
      </a>
    </div>
  );
}
