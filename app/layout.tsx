import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.byten.in"),
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/byten-mark.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.byten.in",
    title: "Byten | Digital Engineering & Smart POS Solutions",
    description:
      "Engineering scalable web platforms, mobile applications, and resilient retail POS systems.",
    siteName: "Byten",
    images: [
      {
        url: "/byten-logo.png",
        width: 722,
        height: 364,
        alt: "Byten Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byten | Digital Engineering & Smart POS Solutions",
    description:
      "Engineering scalable web platforms, mobile applications, and resilient retail POS systems.",
    images: ["/byten-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
