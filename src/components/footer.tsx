import React from 'react'
import { FooterLink, footerLinks } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'
import ThemeToggle from './theme-toggle'


function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-1 text-center flex gap-0 items-center justify-between">
        <p className='text-xs'> &copy; 2024 XPost </p>
        <nav className="flex md:flex-row justify-center gap-0 md:gap-2 flex-col ">
            {footerLinks.map((link: FooterLink) => (
                <Link href={link.href} key={link.title}>
                    <Button variant={'link'} className='text-xs'>{link.title}</Button>
                </Link>
            ))}
        </nav>
        
        <ThemeToggle />
    </footer>
  )
}

export default Footer