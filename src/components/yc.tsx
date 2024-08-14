import Image from 'next/image'
import React from 'react'

function YC() {
  return (
    <span className='flex gap-1 text-sm bg-red-600/10 px-2 py-1 rounded-3xl'>
        <p>Backed by</p>
        <Image src="/yc.svg" width={17} height={17} alt="image" className='ml-1'/>
        <h3>Combinator</h3>
    </span>
  )
}

export default YC