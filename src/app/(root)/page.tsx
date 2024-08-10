import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-sans font-bold">XPost</h1>
        <h3>
          Posts that Speak
        </h3>

      </div>
      <div className="flex items-center justify-center gap-2 p-1 w-full">
        <Input type="email" placeholder="Email" className="w-[400px]"/>
        <Button>
          Join the Waitlist
        </Button>
      </div>
    </main>
  );
}
