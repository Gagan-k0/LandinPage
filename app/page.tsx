import Hero, { BrandMarquee } from "@/components/sections/Hero";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import Features from "@/components/sections/Features";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <ProductSpotlight />
      <Features />
      <Metrics />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}