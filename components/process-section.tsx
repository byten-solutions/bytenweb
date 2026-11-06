const steps = [
  {
    number: "01",
    title: "Scope",
    body: "Two weeks to a written system plan: flows, data, risks, and the things we are deliberately not building.",
    deliverable: "System brief / architecture / estimate",
  },
  {
    number: "02",
    title: "Build",
    body: "One-week increments on a staging environment you can open. Working software instead of a black-box demo.",
    deliverable: "Weekly build / open staging",
  },
  {
    number: "03",
    title: "Harden",
    body: "Offline paths, error states, load, accessibility, and the boring failure cases that decide whether it survives.",
    deliverable: "Tested release candidate",
  },
  {
    number: "04",
    title: "Hand over",
    body: "Docs, runbook, and a walkthrough with the team that will own the system. No dependency on our memory.",
    deliverable: "Repository / docs / support window",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="process section-pad">
      <div className="site-container">
        <div className="process__head">
          <h2 className="h2 reveal">How a system gets built</h2>
          <p className="lede reveal">
            A short loop, not a long handoff. The people who scope the work are
            the people who ship it.
          </p>
        </div>

        <div className="process__steps">
          <span className="process__line" aria-hidden="true" />
          {steps.map((step) => (
            <div key={step.number} className="process__step reveal reveal-late">
              <span className="process__dot" aria-hidden="true" />
              <div className="process__step-head">
                <h3>{step.title}</h3>
                <span className="mono-label">Stage {step.number}</span>
              </div>
              <p>{step.body}</p>
              <span className="process__deliverable">{step.deliverable}</span>
            </div>
          ))}
        </div>

        <div className="process__quote">
          <blockquote>
            “We would rather ship a smaller system that holds than a larger one
            that does not.”
          </blockquote>
          <span className="mono-label">Byten / working principle</span>
        </div>
      </div>
    </section>
  );
}
