import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Research from "@/components/home/Research";
import WhySGS from "@/components/home/WhySGS";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Research />
      <WhySGS />
      <Testimonials />
      <CTA />
    </>
  );
}