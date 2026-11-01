import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { WorkPreview } from "@/components/work-preview";
import {
  getNextProject,
  getProject,
  projects,
  REPRESENTATIVE_NOTE,
} from "@/lib/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Byten`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);

  return (
    <article>
      <div className="site-container">
        <div className="case-hero">
          <div className="case-hero__grid">
            <div className="case-hero__lead">
              <Link href="/work" className="back-link">
                <ArrowLeft size={15} /> All work
              </Link>
              <h1 className="case-hero__title">{project.name}</h1>
            </div>
            <p className="case-hero__summary">{project.summary}</p>
          </div>

          <div className="case-hero__meta">
            <span className="mono-label">Representative engagement</span>
            <span className="mono-label">Context / {project.client}</span>
            <span className="mono-label">{project.sector}</span>
            <span className="mono-label">{project.year}</span>
          </div>

          <div className="case-art">
            <WorkPreview project={project} />
          </div>
        </div>

        <div className="case-body">
          <aside className="case-body__aside" aria-label="Project specification">
            <span className="mono-label">Specification</span>
            <dl className="spec-list">
              <div>
                <dt>Context</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{project.sector}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{project.scope.join(", ")}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            </dl>
            <p className="case-note">{REPRESENTATIVE_NOTE}</p>
          </aside>

          <div className="case-body__main">
            <section className="case-section" aria-labelledby="the-load">
              <h2 id="the-load">The load</h2>
              <p>{project.brief}</p>
              <p className="mono-label" style={{ marginTop: "1.5rem" }}>
                Brief constraints, not measured results
              </p>
              <div className="case-loads" aria-label="Engagement constraints">
                {project.loads.map((load) => (
                  <div key={load.label} className="case-load">
                    <strong>{load.value}</strong>
                    <span>
                      {load.label} / {load.note}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mono-label" style={{ marginTop: "0.9rem" }}>
                Constraint / {project.constraint}
              </p>
            </section>

            <section className="case-section" aria-labelledby="the-structure">
              <h2 id="the-structure">The structure</h2>
              <p>
                The build followed the constraint, not the other way around.
                These are the decisions that carry the weight.
              </p>
              <ol className="case-steps">
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="what-holds">
              <h2 id="what-holds">What holds</h2>
              <p>{project.outcome}</p>
            </section>

            <section className="case-section" aria-labelledby="what-we-traded">
              <h2 id="what-we-traded">What we traded</h2>
              <p>{project.tradeoff}</p>
            </section>

            <section className="case-section" aria-labelledby="stack">
              <h2 id="stack">Stack</h2>
              <ul className="capability__list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="case-cta">
          <p>Have a similar constraint?</p>
          <Link href="/contact" className="link-line">
            Send the brief <ArrowUpRight size={15} />
          </Link>
        </div>

        <Link href={`/work/${next.slug}`} className="next-project">
          <div>
            <span className="mono-label">Next system</span>
            <h2>{next.name}</h2>
          </div>
          <ArrowUpRight size={30} />
        </Link>
      </div>
    </article>
  );
}
