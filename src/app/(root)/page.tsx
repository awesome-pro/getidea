"use client";

import Attraction from "@/components/attraction";
import Companies from "@/components/companies";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import YC from "@/components/yc";

export default function Home() {
  const { toast } = useToast(); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-primary/10">
      <HeroSection />
      <Companies />
      <Testimonial />
      <Pricing />
      <Attraction />
    </main>
  );
}
