import React from 'react'
import { companies } from '../data'
import Image from 'next/image'

function Companies() {
  return (
    <div className='flex w-full bg-gray-50 items-center justify-around p-10'>
      {companies.map((company) => (
          <Image key={company.name} src={company.imageUrl} alt={company.name} width={100} height={20}/>
      ))}
    </div>
  )
}

export default Companies