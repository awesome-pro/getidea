import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export function FundingButton() {
  return (
    <Link href={`/`}>
        <Button className='h1 bg-blue-100 text-primary text-sm rounded-full py-0 hover:bg-transparent border-2 border-primary' size={'sm'}>
            We got Funded !
        </Button>
    </Link>
  )
}

