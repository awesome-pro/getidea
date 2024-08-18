import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

function HeroSection() {
  return (
    <div className='w-full p-1 flex flex-col items-center justify-center'>
        <Link href={`/`} className='h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight '>
            XPost raises $10M+  <ChevronRightIcon className='' />
        </Link>

        <TextGenerateEffect words='XPost raises $10M+'
            className='h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight'
        />
    </div>
  )
}

export default HeroSection