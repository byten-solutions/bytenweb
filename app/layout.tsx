import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// This loads the Inter font for your whole website
const inter = Inter({ subsets: ["latin"] });

// This is the SEO Data you just asked about!
export const metadata: Metadata = {
  title: "Byten | Premium Software, Web & App Development Agency",
  description: "Byten is a modern IT startup specializing in scalable custom software, high-performance web applications, next-gen mobile apps, and smart POS solutions.",
  keywords: [
    "Byten", "IT Company", "Software Development", "Web Development", 
    "App Development", "POS Solutions", "Custom Software", "Next.js Agency"
  ],
  authors: [{ name: "Byten" }],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.byten.in",
    title: "Byten | Premium Software & Digital Solutions",
    description: "Architecting digital excellence. We build cutting-edge web apps, mobile applications, and enterprise software to scale your business.",
    siteName: "Byten",
    images: [
      {
        url: "https://www.byten.in/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Byten - Modern IT Solutions",
      },
    ],
  },
};

// This function wraps your page.tsx content
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}