import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { ProcessSection } from "@/components/process-section";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Byten builds software that holds: A four-stage loop spanning Scope, Build, Harden, and Handover. No invisible subcontractors, no demo theater.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Process — Byten",
    description:
      "A short loop, not a long handoff. Scope, build, harden, hand over.",
    url: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="section-head">
            <h1 className="h2">How a system gets built</h1>
            <p className="lede">
              A short loop, not a long handoff. The people who scope the work are
              the people who ship it.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">Four stages</span>
            <span className="mono-label">Scope / Build / Harden / Hand over</span>
            <span className="mono-label">Direct engineering</span>
          </div>
        </div>
      </section>

      <ProcessSection />
      <ContactSection />
    </>
  );
}

