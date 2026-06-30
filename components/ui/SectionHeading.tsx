interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "purple" | "green" | "orange";
  light?: boolean;
}

const toneClasses: Record<string, string> = {
  purple: "text-brand-purple bg-brand-purple/8",
  green: "text-brand-green bg-brand-green/8",
  orange: "text-brand-orange bg-brand-orange/10",
};

const toneClassesLight: Record<string, string> = {
  purple: "text-purple-200 bg-white/10",
  green: "text-green-200 bg-white/10",
  orange: "text-orange-200 bg-white/10",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "purple",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${
          light ? toneClassesLight[tone] : toneClasses[tone]
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-white/60" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
