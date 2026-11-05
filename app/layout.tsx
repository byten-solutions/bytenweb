import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e9e4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0c" },
  ],
};

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Byten — Software that holds | Digital Engineering & ERP",
    template: "%s — Byten",
  },
  description: site.description,
  keywords: [
    "Byten",
    "Byten engineering",
    "digital engineering company",
    "enterprise ERP software",
    "quarry crusher mining ERP",
    "byteSTRATA",
    "EduByte school management software",
    "student fee billing WhatsApp automation",
    "restaurant POS Flutter",
    "bytePOS mobile POS",
    "byteFlow kanban delivery platform",
    "Kerala software development company",
    "India digital engineering studio",
    "Next.js web platforms",
    "offline-first mobile apps",
    "ESC POS thermal printing",
    "custom software development",
    "voting simulator EVM byteBallot",
    "Cuplana restaurant consulting",
    "KidsCove school web portal",
    "Skyra education consultancy",
  ],
  authors: [{ name: "Byten", url: site.url }],
  creator: "Byten",
  publisher: "Byten",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/byten-mark.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Byten — Software that holds | Digital Engineering & ERP",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Byten — software that holds.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byten — Software that holds | Digital Engineering & ERP",
    description: site.description,
    images: ["/og.png"],
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon.png`,
        width: "512",
        height: "512",
      },
      image: `${site.url}/og.png`,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postalCode,
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        email: site.email,
        availableLanguage: ["English", "Malayalam"],
      },
      sameAs: [site.url, site.instagram],
      knowsAbout: [
        "Enterprise ERP Software Development",
        "Stone Crusher & Mining Operating Systems (byteSTRATA)",
        "School Management & Fee Engines (EduByte)",
        "Real-Time Delivery & Kanban Platforms (byteFlow)",
        "Restaurant POS & Kitchen Order Tickets (bytePOS)",
        "Flutter Cross-Platform Mobile Applications",
        "Next.js Web Applications & Client Portals",
        "WhatsApp Automation & Payment Gateway Integrations",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Byten Digital Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise ERP & SaaS Platforms",
              description:
                "Industrial quarry ERP, school management systems with fee billing engines, and Kanban delivery orchestration platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Platform Mobile Applications",
              description:
                "Native-grade Flutter and React Native apps for iOS & Android with offline-first local persistence and hardware ESC/POS thermal printing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Websites & Client Brand Portals",
              description:
                "High-performance Next.js marketing websites and portals for schools, culinary consulting brands, and career advisories.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & Service Integrations",
              description:
                "Automated WhatsApp receipt dispatch, double-entry accounts, hardware scale telemetry, and civic EVM simulation systems.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "Byten",
      description: site.description,
      publisher: {
        "@id": `${site.url}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${hanken.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollReveal />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
