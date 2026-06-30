import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="SGS IT PARK"
        width={56}
        height={56}
        className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0"
        priority
      />

      <div className="leading-tight">
        <h1 className="text-sm md:text-base font-bold text-slate-900 leading-tight whitespace-nowrap">
          SGS IT PARK
        </h1>

        <p className="hidden md:block text-[8px] tracking-[0.12em] text-slate-500 uppercase whitespace-nowrap">
          Technology • Research • Growth
        </p>
      </div>
    </Link>
  );
}