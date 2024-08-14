"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ThemeToggle from "./theme-toggle"
import Logo from "./logo"
import { Github, GithubIcon, Twitter, X } from "lucide-react"
import Image from "next/image"
import { navLinks, NavLink } from "@/data"
import { Button } from "./ui/button"


export default function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 px-5">
      <span>
        <Link className="text-3xl font-bold text-primary" href={'/'}>
          XPost
        </Link>
      </span>
      <span className="flex gap-3 py-2 px-1 text-xs ">
        {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost" size={'sm'}>
                {link.title}
              </Button>
            </Link>
        ))}
      </span>
      <div className="flex gap-1">
        <Button variant="ghost" size={'sm'}>
          Sign In
        </Button>
        <Button size={'sm'}>
          Get Started
        </Button>
      </div>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
