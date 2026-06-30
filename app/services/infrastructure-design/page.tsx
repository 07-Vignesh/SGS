import type { Metadata } from "next";
import { Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastructure Design",
};

export default function InfrastructureDesignPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <Server size={40} />

        <h1 className="text-5xl font-bold mt-6">
          Infrastructure Design
        </h1>

        <p className="mt-4 text-slate-600">
          Enterprise-grade infrastructure solutions.
        </p>

      </div>
    </section>
  );
}