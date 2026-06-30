interface GridGlowProps {
  variant?: "purple-green" | "orange-purple" | "subtle";
  className?: string;
}

/**
 * Shared backdrop: a faint enterprise grid plus soft brand-color glows.
 * Drop into any section with `absolute inset-0 -z-10` positioning handled by the caller.
 */
export default function GridGlow({ variant = "purple-green", className = "" }: GridGlowProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      {variant === "purple-green" && (
        <>
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-purple/10 blur-[110px]" />
          <div className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-brand-green/10 blur-[110px]" />
        </>
      )}

      {variant === "orange-purple" && (
        <>
          <div className="absolute -top-20 right-0 h-[360px] w-[360px] rounded-full bg-brand-orange/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-brand-purple-deep/10 blur-[100px]" />
        </>
      )}

      {variant === "subtle" && (
        <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-purple/[0.06] blur-[120px]" />
      )}
    </div>
  );
}
