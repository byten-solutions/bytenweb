import type { Metadata } from "next";
import { CapabilityGrid } from "@/components/capability-grid";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Byten's digital engineering disciplines: Enterprise ERP platforms, cross-platform Flutter mobile applications, client websites, and automated integrations.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Capabilities — Byten",
    description:
      "Enterprise ERP, Flutter mobile applications, high-performance web portals, and automated integrations.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="section-head">
            <h1 className="h2">What we build</h1>
            <p className="lede">
              Four disciplines, one system. From heavy enterprise ERP to client
              websites, we take responsibility from the first diagram to the runbook.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">Disciplines</span>
            <span className="mono-label">ERP / Mobile / Web / Services</span>
            <span className="mono-label">Full-lifecycle delivery</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <CapabilityGrid />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
