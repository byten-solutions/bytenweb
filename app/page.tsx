"use client";

import React, { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("web");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "web",
    timeline: "1-2 months",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#090D16]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg tracking-wider shadow-sm">
              B
            </span>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
              byten
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#pos-systems" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Retail &amp; POS
            </a>
            <a href="#standards" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Engineering Standard
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-sm"
            >
              Initiate Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#090D16] px-6 py-6 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium text-base"
            >
              Services
            </a>
            <a
              href="#pos-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium text-base"
            >
              Retail &amp; POS
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium text-base"
            >
              Engineering Standard
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium text-base"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full text-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium text-sm"
            >
              Initiate Project
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Production-Grade Digital Engineering
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight md:leading-[1.15] mb-6">
              Engineering Scalable Web Platforms, Mobile Apps &amp; Retail POS Systems.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
              Byten builds high-performance software systems engineered for scale. From cloud-connected Point of Sale
              infrastructures to responsive web applications and mobile platforms, we deliver clean architecture without
              fluff.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors text-center shadow-sm"
              >
                Schedule Consultation
              </a>
              <a
                href="#pos-systems"
                className="px-7 py-3.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-base transition-colors text-center"
              >
                Explore POS Architecture
              </a>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">POS Reliability SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt; 100ms</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Target API Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Full-Stack</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Next.js &amp; Mobile Native</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">End-to-End</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Architecture to Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-3">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Software Solutions Engineered for Measurable Business Impact
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Web Platforms */}
            <article className="p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Modern Web Platforms</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                High-concurrency web applications built with Next.js 16, React Server Components, and TypeScript.
                Optimized for sub-second Core Web Vitals, enterprise security, and conversion rate efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Next.js 16</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">TypeScript</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Tailwind CSS</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Edge SSR</span>
              </div>
            </article>

            {/* Service 2: Mobile Apps */}
            <article className="p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Mobile Applications</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Fluid, native-grade mobile applications built for iOS and Android. Engineered with offline persistence,
                biometric authentication, and frictionless user flows that maximize retention.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">React Native</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">iOS &amp; Android</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Offline Sync</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Push Notifications</span>
              </div>
            </article>

            {/* Service 3: POS &amp; Retail */}
            <article className="p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Point of Sale (POS) Systems</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Enterprise retail infrastructure built for high-throughput retail stores, restaurants, and chains.
                Features offline transaction queues, inventory sync across outlets, and hardware integrations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Offline Resilience</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Thermal Printing</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Multi-Store Sync</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Barcode Scanning</span>
              </div>
            </article>

            {/* Service 4: Enterprise Backends */}
            <article className="p-8 rounded-xl bg-[#111726] border border-white/10 hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Enterprise Backends &amp; APIs</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Scalable database architectures, REST &amp; GraphQL APIs, and event-driven microservices. Designed for
                uncompromising data integrity, transactional consistency, and predictable scaling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">PostgreSQL</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Redis Caching</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Cloud Microservices</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">Automated CI/CD</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* POS Systems Deep Dive */}
      <section id="pos-systems" className="py-24 bg-[#111726] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                Specialized Retail Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                Point of Sale Architecture Designed for Zero Downtime
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
                In retail and hospitality, counter downtime is lost revenue. Byten POS systems are built with an
                offline-first architecture: transactions execute instantly locally and sync seamlessly to the central cloud
                ledger when internet connectivity fluctuates.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-base">Offline Queueing &amp; Sync</h5>
                    <p className="text-sm text-slate-400">
                      Uninterrupted checkout during network loss. Transactions are encrypted locally and automatically synced upon reconnect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-base">Multi-Outlet Inventory Ledger</h5>
                    <p className="text-sm text-slate-400">
                      Centralized stock management across warehouses and storefronts with automated reorder thresholds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-base">Direct Hardware Drivers</h5>
                    <p className="text-sm text-slate-400">
                      Native communication with ESC/POS receipt printers, 2D barcode scanners, cash drawers, and card readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/10 bg-[#090D16] p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-300">byten-pos-engine::status</span>
                  </div>
                  <span className="text-xs text-blue-400 font-mono">v3.4-active</span>
                </div>

                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <div className="p-3 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400 mb-1">Transaction Throughput</div>
                    <div className="text-white text-sm font-semibold">1,200+ tx/min peak bench tested</div>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400 mb-1">Network Architecture</div>
                    <div className="text-emerald-400 font-semibold">Dual-State: Cloud Connected &amp; Local Fallback</div>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400 mb-1">Hardware Protocols</div>
                    <div className="text-white">Serial, USB &amp; Network Socket (ESC/POS Compliant)</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to modernize your retail counters?</span>
                  <a href="#contact" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    Request POS Demo &amp;rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section id="standards" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-3">Our Engineering Discipline</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Built on First Principles, Not Over-Engineered Bloat
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#111726] border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-3 font-mono">01</div>
              <h4 className="text-lg font-bold text-white mb-2">Performance by Default</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Every millisecond counts. We benchmark payload sizes, eliminate layout shifts, and leverage edge computing
                so your users experience zero lag.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111726] border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-3 font-mono">02</div>
              <h4 className="text-lg font-bold text-white mb-2">Typed Integrity</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Strict TypeScript and validated runtime schemas across API boundaries. We catch regressions during
                compilation, not in customer production.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111726] border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-3 font-mono">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Minimalism (Ponytail Ladder)</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                The best code is the code you never wrote. We maximize native platform primitives and stdlib capabilities
                before taking on third-party package dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry / Contact Section */}
      <section id="contact" className="py-24 bg-[#111726]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-3">Contact Engineering</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Let&apos;s Build Your Next Digital System
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
                Whether you need a custom Point of Sale deployment, a modern Next.js web application, or full-cycle
                mobile app engineering, our engineers are ready to scope your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Inquiries</div>
                    <a href="mailto:bytensolution@gmail.com" className="text-white hover:text-blue-400 font-medium text-base transition-colors">
                      bytensolution@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone Support</div>
                    <a href="tel:+919633581368" className="text-white hover:text-blue-400 font-medium text-base transition-colors">
                      +91 9633581368
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Official Domain</div>
                    <a href="https://www.byten.in" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 font-medium text-base transition-colors">
                      www.byten.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-xl bg-[#090D16] border border-white/10 shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Inquiry Received</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out. A Byten lead engineer will review your project parameters and respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Project Scope
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: "web", label: "Web Platform" },
                          { id: "mobile", label: "Mobile App" },
                          { id: "pos", label: "POS System" },
                          { id: "custom", label: "Custom Software" },
                        ].map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setSelectedService(s.id);
                              setFormData({ ...formData, service: s.id });
                            }}
                            className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                              selectedService === s.id
                                ? "bg-blue-600 text-white border-blue-500"
                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="full-name" className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Your Name
                        </label>
                        <input
                          id="full-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Connor"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="work-email" className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Work Email
                        </label>
                        <input
                          id="work-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#111726] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Urgent (&lt; 1 month)">Urgent (&lt; 1 month)</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Project Details &amp; Requirements
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us about your target features, operational volume, or architecture requirements..."
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-sm"
                    >
                      Submit Project Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              B
            </span>
            <span className="font-semibold text-white tracking-tight">byten</span>
            <span className="text-slate-500 text-xs pl-2">
              &amp;copy; {new Date().getFullYear()} Byten. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
            </div>
            <a href="mailto:bytensolution@gmail.com" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="https://www.byten.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              byten.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
