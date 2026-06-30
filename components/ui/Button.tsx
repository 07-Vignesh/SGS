import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98]";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-brand-purple to-brand-purple-deep text-white shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-0.5",
  outline:
    "border border-slate-300 text-ink hover:border-brand-purple hover:text-brand-purple bg-white",
  white:
    "bg-white text-brand-purple-deep shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
