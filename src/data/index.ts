export interface NavLink{
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "You Posts",
        href: "/posts",
    },
]

export interface FooterLink{
    title: string;
    href: string;
}

export const footerLinks: FooterLink[] = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Terms of Service",
        href: "/terms",
    },
    {
        title: "Privacy Policy",
        href: "/privacy",
    },
    {
        title: "FAQ",
        href: "/faq", 
    },
    {
        title: "❤️ Donate ",
        href: "/donate",
    },
]