"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "@/components/icons";
import { site } from "@/lib/site";

const scopes = ["Web", "Mobile", "Retail", "Enterprise", "Not sure"];

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  function buildBrief() {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const scope = String(data.get("scope") ?? "Not sure");
    const timeline = String(data.get("timeline") ?? "");
    const details = String(data.get("details") ?? "").trim();

    const subject = `Project brief${company ? ` — ${company}` : name ? ` — ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Scope: ${scope}`,
      timeline ? `Timeline: ${timeline}` : null,
      "",
      "What needs to hold:",
      details,
    ]
      .filter(Boolean)
      .join("\n");

    return { subject, body };
  }

  function markInvalid(form: HTMLFormElement) {
    form
      .querySelectorAll<HTMLElement>('[data-form-error="true"]')
      .forEach((field) => {
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
        delete field.dataset.formError;
      });

    const invalidFields = form.querySelectorAll<HTMLElement>(
      "input:invalid, textarea:invalid, select:invalid",
    );
    if (invalidFields.length === 0) return true;

    invalidFields.forEach((field) => {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", "form-error");
      field.dataset.formError = "true";
    });
    invalidFields[0].focus();
    setStatus("Complete the highlighted fields before sending the brief.");
    return false;
  }

  function onFormInput(event: React.FormEvent<HTMLFormElement>) {
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      if (target.checkValidity()) {
        target.removeAttribute("aria-invalid");
        if (target.dataset.formError) {
          target.removeAttribute("aria-describedby");
          delete target.dataset.formError;
        }
      }
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current || !markInvalid(formRef.current)) return;
    const brief = buildBrief();
    if (!brief) return;

    setStatus("Opening your email app with the brief.");
    setCopied(false);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      brief.subject,
    )}&body=${encodeURIComponent(brief.body)}`;
  }

  async function copyBrief() {
    if (!formRef.current || !markInvalid(formRef.current)) return;
    const brief = buildBrief();
    if (!brief) return;

    const text = `To: ${site.email}\nSubject: ${brief.subject}\n\n${brief.body}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setStatus("Brief copied. Paste it into an email to Byten.");
    } catch {
      setStatus(`Copy did not work. Email ${site.email} directly.`);
    }
  }

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={onSubmit}
      onInput={onFormInput}
      noValidate
    >
      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company"
        />
      </div>

      <fieldset className="scope-fieldset">
        <legend>Project scope</legend>
        <div className="scope-options">
          {scopes.map((scope, index) => (
            <label key={scope} className="scope-option">
              <input
                type="radio"
                name="scope"
                value={scope}
                defaultChecked={index === 0}
              />
              <span>{scope}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" defaultValue="1–3 months">
          <option value="Now">Now</option>
          <option value="1–3 months">1–3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="Exploring">Exploring</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="details">What needs to hold?</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="The system, the constraint, and what breaks today."
          required
        />
      </div>

      <p className="form-hint">
        Opens your email app with the brief filled in. You can also write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--paper">
          Send brief by email <ArrowUpRight size={16} />
        </button>
        <button
          type="button"
          className="btn btn--ghost-paper"
          onClick={copyBrief}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy brief"}
        </button>
      </div>

      <div
        id="form-error"
        className="form-status"
        role="status"
        aria-live="polite"
      >
        {status}
      </div>
    </form>
  );
}
