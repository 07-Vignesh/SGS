import type { Metadata } from "next";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Consulting",
};

export default function ITConsultingPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <Network size={40} />

        <h1 className="text-5xl font-bold mt-6">
          IT Consulting
        </h1>

        <p className="mt-4 text-slate-600">
          Technology strategy and advisory services.
        </p>

      </div>
    </section>
  );
}