import { ContactForm } from "@/components/contact-form";
import { LocalTime } from "@/components/local-time";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="site-container">
        <div className="contact__grid">
          <div className="contact__copy">
            <h2 className="contact__title">
              Tell us what has to <em>hold.</em>
            </h2>
            <p className="contact__lede body-copy">
              A short brief is enough. We will reply with the questions that
              matter, not a sales deck.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="contact__detail">
                <span>Phone</span>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </div>
              <div className="contact__detail">
                <span>Studio</span>
                <span>India / worldwide</span>
              </div>
              <div className="contact__detail">
                <span>Local time</span>
                <LocalTime />
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            <div className="contact-form__top">
              <span className="mono-label">Project brief / 01</span>
              <span className="mono-label">No obligation</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
