import Pricing from '@/components/pricing'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center bg-blue-50'>
       <div>
        <h1 className="text-primary text-2xl font-inter mb-4">
          <span className='font-bold mr-2 text-4xl'>Pricing</span>
            <span data-br=":r0:" data-brr="1" className='inline-block text-wrap text-inherit'>
               that helps you get paid
            </span>
        </h1>
       </div>
        <Pricing />
    </div>
  )
}

export default page