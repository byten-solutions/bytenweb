import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byten | Digital Engineering, Modern Web Platforms & POS Systems",
  description:
    "Byten builds scalable software architectures, high-performance web applications, mobile platforms, and resilient retail POS systems engineered for growth.",
  keywords: [
    "Byten",
    "Digital Engineering",
    "POS Systems",
    "Point of Sale",
    "Web Development",
    "Next.js Development",
    "Mobile App Development",
    "Enterprise Software",
  ],
  authors: [{ name: "Byten" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.byten.in",
    title: "Byten | Digital Engineering & Smart POS Solutions",
    description:
      "Engineering scalable web platforms, mobile applications, and resilient retail POS systems.",
    siteName: "Byten",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased bg-[#090D16] text-[#F8FAFC]`}>
        {children}
      </body>
    </html>
  );
}
