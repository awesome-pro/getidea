import React from "react";

export interface NavLink{
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Pricing",
        href: "/posts",
    },
    {
        title: "Features",
        href: "/features",
    },
    {
        title: "Contact",
        href: "/contact",
    }
]

export interface FooterLink{
    title: string;
    href: string;
}

export const footerLinks: FooterLink[] = [
    {
        title: "Privacy",
        href: "/privacy",
    },
    {
        title: "FAQ",
        href: "/faq", 
    },
    {
        title: "Support",
        href: "/support",
    },
]

export interface Company{
    name: string,
    imageUrl: string,
}

export const companies: Company[] = [
    {
        name: "Google",
        imageUrl: "/google.png",
    },
    {
        name: "BMW",
        imageUrl: "/bmw.png",
    },
    {
        name: "React Native",
        imageUrl: "/react-native.png",
    },
    {
        name: "Netflix",
        imageUrl: "/netflix.png",
    },
    {
        name: "Microsoft",
        imageUrl: "/microsoft.png",
    },
    {
        name: "Amazon",
        imageUrl: "/amazon.svg",
    },
]

export interface Tweet{
    logo?: React.ReactNode;
    username: string;
    post: string;
    content: string;
    imageUrl: string;
}

export const tweets: Tweet[] = [
    {
        username: "Guillermo Rauch",
        post: "CEO of Vercel",
        content: "The best practices built-in to their <SignIn/> and <UserProfile/> components would take months to implement in-house, yet no sacrifice is made in terms of Enterprise extensibility or customization to your brand.",
        imageUrl: "/guillermo-rauch.jpg",
    }
]