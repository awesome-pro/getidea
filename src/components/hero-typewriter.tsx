"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter";


export function HeroTypewriter() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Your",
    },
    {
      text: "Awesome",
      className: "text-pink-500",
    },
    {
      text: "Idea",
      className: "text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
