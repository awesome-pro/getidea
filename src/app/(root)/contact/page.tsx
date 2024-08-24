import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function ContactPage() {
  return (
    <div className=' min-h-screen w-full items-center justify-center flex flex-col'>

        <h1>Contact</h1>
        <h2 className='text-6xl text-primary font-extrabold'>How Can we Help You ?</h2>

        <Card className='flex flex-col items-center justify-center p-10'>
          <Image src='/logo.svg' width={100} height={100} alt='contact' />
          <p className='text-lg text-center'>We are here to help you. If you have any questions or need help, feel free to contact us.</p>
        </Card>
    </div>
  )
}

export default ContactPage