import { MessageCircle, CheckCircle2, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  name: string;
  icon: LucideIcon;
  specs: string[];
  price?: string;
  oldPrice?: string;
  priceNote?: string;
  badge?: string;
  whatsappNumber: string;
}

export default function ProductCard({
  name,
  icon: Icon,
  specs,
  price,
  oldPrice,
  priceNote,
  badge,
  whatsappNumber,
}: ProductCardProps) {
  const message = encodeURIComponent(
    `Hi SGS IT Park, I'm interested in the ${name}. Could you share more details and current availability?`
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-purple/10 hover:border-brand-purple/20">
      {badge && (
        <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-brand-orange-warm to-brand-orange px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-brand-orange/25">
          {badge}
        </span>
      )}

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white shadow-md shadow-brand-purple/20">
        <Icon size={22} />
      </span>

      <h3 className="mt-5 text-lg font-bold text-ink leading-snug">{name}</h3>

      <ul className="mt-4 space-y-2 flex-1">
        {specs.map((spec) => (
          <li key={spec} className="flex items-start gap-2 text-[13.5px] text-muted leading-snug">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-green" />
            {spec}
          </li>
        ))}
      </ul>

      {(price || priceNote) && (
        <div className="mt-5 flex items-baseline gap-2">
          {oldPrice && <span className="text-sm text-slate-400 line-through">{oldPrice}</span>}
          {price && <span className="text-2xl font-bold text-gradient-brand">{price}</span>}
          {priceNote && <span className="text-sm font-medium text-muted">{priceNote}</span>}
        </div>
      )}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
      >
        <MessageCircle size={17} />
        Enquire on WhatsApp
      </a>
    </div>
  );
}
