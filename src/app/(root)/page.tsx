"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">      
        <span className="flex gap-1 items-baseline">
          <Logo />
         <h1 className="text-6xl font-sans font-bold">Post</h1>
        </span>
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
    </main>
  );
}
