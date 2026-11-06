import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { WorkIndex } from "@/components/work-index";
import { REPRESENTATIVE_NOTE } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Production systems built by Byten: enterprise ERP, school management, restaurant POS, Kanban delivery, voting simulators, and client websites.",
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
              Production systems, enterprise ERPs, and client web portals, each shaped by
              real-world operational constraints. Heavy industry, education, hospitality,
              and consulting services.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">Selected production systems</span>
            <span className="mono-label">2025—2026</span>
            <span className="mono-label">Client &amp; representative work</span>
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
