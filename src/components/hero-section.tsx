import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FundingButton } from './buttons'
import { HeroTypewriter } from './hero-typewriter'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

function HeroSection() {
  return (
    <div className='w-full p-1 flex flex-col items-center justify-center'>
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Let&apos;s Get Your Idea
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Exploding beams.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Exploding beams.</span>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
        <Link href={`/`} className='h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight '>
            <FundingButton />
        </Link>
        <TextGenerateEffect words='GetIdea'/>
        <HeroTypewriter />
    </div>
  )
}

export default HeroSection