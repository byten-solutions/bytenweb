import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

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

export function StudioSection() {
  return (
    <section id="studio" className="studio section-pad">
      <div className="site-container">
        <div className="studio__grid">
          <h2 className="studio__statement reveal">
            We build the parts you will still be <em>maintaining</em> in five
            years.
          </h2>
          <div className="studio__copy reveal reveal-late">
            <p className="body-copy">
              Byten is a digital engineering company. We work with founders,
              product leaders, and retail operators who need a system built
              properly the first time.
            </p>
            <p className="body-copy">
              We are not an agency that disappears after launch. The same team
              scopes the work, writes it, and stays for the handover.
            </p>
            <Link href="/studio" className="link-line" style={{ marginTop: "1.5rem" }}>
              Read the studio notes <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.index} className="principle reveal reveal-late">
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
  );
}
