import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    className?: string
}

function Logo( { className }: LogoProps ) {
  return (
        <Link href="/">
            <Image src="/xpost.svg" width={70} height={60} alt="XPost Logo" className={className} />
        </Link>
  )
}
export default Logo