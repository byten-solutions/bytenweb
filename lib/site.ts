export const site = {
  name: "Byten",
  legalName: "Byten",
  url: "https://www.byten.in",
  email: "bytensolution@gmail.com",
  phone: "+91 9633581368",
  phoneHref: "+919633581368",
  domain: "www.byten.in",
  description:
    "Byten is a digital engineering company building enterprise platforms, mobile apps, client websites, and service integrations that have to keep working.",
  tagline: "Software that holds.",
  location: "India",
  timeZone: "Asia/Kolkata",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Process", href: "/process" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Process", href: "/process" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const socialLinks: { label: string; href: string }[] = [];
