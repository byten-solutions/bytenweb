import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Byten what has to hold. A short project brief is enough; we reply with the questions that matter.",
  alternates: { canonical: "/contact" },
};

const steps = [
  {
    number: "01",
    title: "Send the brief",
    body: "The system, the constraint, and what breaks today. A few lines are enough.",
  },
  {
    number: "02",
    title: "Get a real reply",
    body: "We read it and respond with the questions that matter, not a capability deck.",
  },
  {
    number: "03",
    title: "Scope the work",
    body: "If it fits, we write a short plan with architecture, estimate, and risks.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="section-head">
            <h1 className="h2">Start a project.</h1>
            <p className="lede">
              Tell us what has to hold. We will tell you honestly whether we
              are the right team to build it.
            </p>
          </div>
          <div className="page-hero__meta">
            <span className="mono-label">Project or embedded team</span>
            <span className="mono-label">India / worldwide</span>
            <span className="mono-label">No obligation</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <h2 className="sr-only">What happens next</h2>
          <div className="principles principles--three">
            {steps.map((step) => (
              <article key={step.number} className="principle">
                <div className="principle__top">
                  <h3>{step.title}</h3>
                  <span className="mono-label">{step.number}</span>
                </div>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
