import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full p-1 flex flex-col items-center justify-center'>
        <Link href={`/`} className='h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight '>
            XPost raises $10M+  <ChevronRightIcon className='' />
        </Link>

        <h1 className='text-6xl font-bold bg-gradient-to-r from-slate-100/80 via-slate-100 to-slate-200/80 bg-clip-text text-transparent'>
            Create Posts that speak
        </h1>
    </div>
  )
}

export default HeroSection