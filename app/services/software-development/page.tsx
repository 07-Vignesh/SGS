import type { Metadata } from "next";
import { Code2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development",
};

export default function SoftwareDevelopmentPage() {
  const benefits = [
    "Web Applications",
    "Mobile Applications",
    "Cloud Solutions",
    "API Development",
  ];

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <Code2 size={40} />

          <h1 className="text-5xl font-bold mt-6">
            Software Development
          </h1>

          <p className="mt-4 text-slate-600">
            Custom applications and platforms engineered for scale.
          </p>

        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {benefits.map((item) => (
              <div
                key={item}
                className="p-5 border rounded-xl"
              >
                <CheckCircle2
                  className="inline mr-2 text-green-600"
                  size={18}
                />
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}