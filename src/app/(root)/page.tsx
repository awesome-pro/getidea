"use client";

import HeroSection from "@/components/hero-section";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import YC from "@/components/yc";
import { useLayoutDirection } from "@/hooks/useLayoutProvider";
import Image from "next/image";

export default function Home() {
  const { toast } = useToast(); 

  return (
    <main className="flex h-[700px] flex-col items-center justify-center gap-5">
      <HeroSection />
      <div className="flex flex-col items-center justify-center">      
         <h1 className="text-6xl font-sans font-bold">XPost</h1>
        <h3 className="text-twitter">
          Posts that Speak
        </h3>
      </div>
      <div className="flex items-center justify-center gap-2 p-1 w-full">
        <Input type="email" placeholder="Email" className="w-[400px]"/>
        <Button
         onClick={() => {
          toast({
            title: "Congrats! You're on the waitlist",
            description: "We'll let you know when we're ready for you.",
          })
         }}
        >
          Join the Waitlist
        </Button>
      </div>
      <YC />
    </main>
  );
}
