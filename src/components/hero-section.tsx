import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FundingButton } from './buttons'
import { HeroTypewriter } from './hero-typewriter'

function HeroSection() {
  return (
    <div className='w-full p-1 flex flex-col items-center justify-center'>
        <Link href={`/`} className='h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight '>
            <FundingButton />
        </Link>

        <TextGenerateEffect words='XPost'/>
        
        <HeroTypewriter />
        
    </div>
  )
}

export default HeroSection