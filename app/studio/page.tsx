import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ContactSection } from "@/components/contact-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Byten is a digital engineering company working with founders, product leaders, and business operators on enterprise platforms, mobile apps, and client websites built to last.",
  alternates: { canonical: "/studio" },
};

const principles = [
  {
    index: "01",
    title: "Boring where it counts",
    body: "Proven infrastructure for the core. Spend the novelty on the problem, not on the database.",
  },
  {
    index: "02",
    title: "Own the whole path",
    body: "Design, build, deploy, hand over. No gap between the people who plan and the people who ship.",
  },
  {
    index: "03",
    title: "Leave it legible",
    body: "Typed boundaries, docs, tests, and a repository your team can run without us in the room.",
  },
  {
    index: "04",
    title: "Say the hard thing early",
    body: "Scope, risk, and tradeoffs in plain language before they turn into a change order.",
  },
];

const record = [
  { term: "Reply", detail: "Direct from the team" },
  { term: "Disciplines", detail: "ERP / Mobile / Web / Services" },
  { term: "Base", detail: "India / working worldwide" },
  { term: "Engagements", detail: "Project or embedded team" },
  { term: "Contact", detail: site.email },
  { term: "Status", detail: "Open for select projects" },
];

export default function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="section-head">
            <h1 className="h2">A digital engineering company.</h1>
            <p className="lede">
              We build software that has to keep working: enterprise platforms,
              mobile apps, client websites, and service integrations. The work
              is the argument.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">Byten / India</span>
            <span className="mono-label">ERP / Mobile / Web / Services</span>
            <span className="mono-label">Project or embedded</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <div className="studio__grid">
            <h2 className="studio__statement reveal">
              We build the parts you will still be <em>maintaining</em> in five
              years.
            </h2>
            <div className="studio__copy reveal reveal-late">
              <p className="body-copy">
                Byten works with founders, product leaders, and business
                operators who need a system built properly the first time. We
                take the whole path: the first diagram, the production release,
                and the handover.
              </p>
              <p className="body-copy">
                We keep the team close to the work. The people who scope it are
                the people who write it, which is why the estimate and the
                software tend to agree.
              </p>
              <Link href="/contact" className="link-line" style={{ marginTop: "1.5rem" }}>
                Talk to the team <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="company-record">
            <dl>
              {record.map((item) => (
                <div key={item.term}>
                  <dt className="mono-label">{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad rule">
        <div className="site-container">
          <div className="section-head">
            <h2 className="h2 reveal">Working principles</h2>
            <p className="lede reveal">
              Four rules we use to decide what to build, what to leave out, and
              what to say when the two disagree.
            </p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <article
                key={principle.index}
                className="principle reveal reveal-late"
              >
                <div className="principle__top">
                  <h3>{principle.title}</h3>
                  <span className="mono-label">{principle.index}</span>
                </div>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad rule">
        <div className="site-container">
          <div className="section-head">
            <h2 className="h2 reveal">What we do not do</h2>
            <p className="lede reveal">
              A short list, because a studio is also defined by the work it
              turns down.
            </p>
          </div>
          <div className="studio__grid">
            <p className="studio__statement reveal">
              No black-box demos. No invisible subcontractors. No launch
              without a handover.
            </p>
            <div className="studio__copy reveal reveal-late">
              <p className="body-copy">
                We do not take a project we cannot staff with the people who
                scoped it. We do not hide the tradeoffs in a slide. And we do
                not leave a team dependent on our memory of how the system was
                built.
              </p>
              <p className="body-copy">
                If that sounds like the way you want a system built, the next
                step is a short brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
