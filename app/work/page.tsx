import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { WorkIndex } from "@/components/work-index";
import { REPRESENTATIVE_NOTE } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Representative systems built by Byten: offline-first retail POS, B2B commerce, and field operations.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="section-head">
            <h1 className="h2">Work</h1>
            <p className="lede">
              Representative engagements, each shaped by a different
              constraint. Retail, commerce, and field operations.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">03 representative systems</span>
            <span className="mono-label">2025—2026</span>
            <span className="mono-label">Synthetic briefs</span>
          </div>
        </div>
      </section>

      <section className="section-pad work-page-list">
        <div className="site-container">
          <WorkIndex compact />
          <div className="work-note">
            <p>{REPRESENTATIVE_NOTE}</p>
            <Link href="/contact" className="link-line">
              Discuss a similar constraint <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
