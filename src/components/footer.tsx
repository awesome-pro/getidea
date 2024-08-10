import React from 'react'
import { FooterLink, footerLinks } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'


function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-primary p-1 text-center flex flex-col gap-0">
        <nav className="flex md:flex-row justify-center gap-0 md:gap-2 flex-col ">
            {footerLinks.map((link: FooterLink) => (
                <Link href={link.href} key={link.title}>
                    <Button variant={'link'}>{link.title}</Button>
                </Link>
            ))}
        </nav>
        <p className='text-xs'> &copy; 2024 XPost </p>
    </footer>
  )
}

export default Footer