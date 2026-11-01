import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="site-container">
        <h1>404</h1>
        <p className="lede" style={{ maxWidth: "34ch", marginTop: "1.5rem" }}>
          This page has no load path. It may have moved, or it may never have
          been built.
        </p>
        <span className="mono-label" style={{ display: "block", marginTop: "1rem" }}>
          Page not found
        </span>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/" className="btn btn--solid">
            Back to the homepage <ArrowRight size={16} />
          </Link>
          <Link href="/work" className="btn btn--line">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
