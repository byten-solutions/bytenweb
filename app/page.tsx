import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "@/components/icons";
import { CapabilityGrid } from "@/components/capability-grid";
import { ContactSection } from "@/components/contact-section";
import { Conveyor } from "@/components/conveyor";
import { LoadRig } from "@/components/load-rig";
import { ProcessSection } from "@/components/process-section";
import { StudioSection } from "@/components/studio-section";
import { WorkIndex } from "@/components/work-index";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="site-container hero__grid">
          <div className="hero__copy">
            <h1
              id="hero-title"
              className="display hero__title"
              aria-label="Software that holds."
            >
              <span className="hero__line">
                <span>Software</span>
              </span>
              <span className="hero__line">
                <span>that</span>
              </span>
              <span className="hero__line">
                <span>
                  <span className="hero__holds">holds</span>
                  <span className="hero__dot">.</span>
                </span>
              </span>
            </h1>

            <p className="hero__lede">
              Byten is a digital engineering company. We design and build
              enterprise platforms, mobile apps, client websites, and service
              integrations that have to keep working.
            </p>

            <div className="hero__actions">
              <Link href="/work" className="btn btn--solid">
                See the work
                <ArrowRight size={16} className="btn-arrow" />
              </Link>
              <Link href="/contact" className="btn btn--line">
                Start a project
                <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
            </div>

            <dl className="hero__specs">
              <div>
                <dt className="mono-label">Disciplines</dt>
                <dd>ERP / Mobile / Web / Services</dd>
              </div>
              <div>
                <dt className="mono-label">Base</dt>
                <dd>India / worldwide</dd>
              </div>
              <div>
                <dt className="mono-label">Status</dt>
                <dd>Open for select projects</dd>
              </div>
            </dl>
          </div>

          <div className="hero__rig">
            <div className="hero__rig-frame">
              <div className="hero__rig-meta">
                <span className="plate-note">Fig. 01 / service frame</span>
                <span className="plate-note">Load / live</span>
              </div>
              <LoadRig />
              <div className="hero__rig-help">
                <span className="mono-label hero__rig-help-desktop">
                  Move pointer or use arrow keys
                </span>
                <span className="mono-label hero__rig-help-mobile">
                  Drag or use arrow keys
                </span>
                <span className="hero__scroll">
                  Scroll to inspect <ArrowDown size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Conveyor />

      <section id="work" className="work-index section-pad">
        <div className="site-container">
          <div className="section-head">
            <h2 className="h2 reveal">Selected work</h2>
            <p className="lede reveal">
              Enterprise platforms, mobile apps, and client websites shaped by
              real operational constraints across mining, education, hospitality,
              and consulting.
            </p>
          </div>
          <WorkIndex isHome />
        </div>
      </section>

      <section id="capabilities" className="section-pad">
        <div className="site-container">
          <div className="section-head">
            <h2 className="h2 reveal">What we build</h2>
            <p className="lede reveal">
              Five disciplines, one system. From enterprise ERP to client
              websites, we take responsibility from the first diagram to the
              runbook.
            </p>
          </div>
          <CapabilityGrid />
        </div>
      </section>

      <ProcessSection />
      <StudioSection />
      <ContactSection />
    </>
  );
}
