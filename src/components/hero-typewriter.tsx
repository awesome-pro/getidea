"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter";


export function HeroTypewriter() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "Posts",
    },
    {
      text: "that",
    },
    {
      text: "Speak",
      className: "text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
