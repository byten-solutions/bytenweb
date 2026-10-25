"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Smartphone,
  Store,
  Server,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  Menu,
  X,
  Layers,
  Terminal,
} from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-secondary/40 border border-border p-1">
              <Image
                src="/byten-mark.png"
                alt="Byten"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              byten
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#pos-systems"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Retail &amp; POS
            </a>
            <a
              href="#standards"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Engineering Standard
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild size="default">
              <a href="#contact">
                Initiate Project
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background px-6 py-6 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium text-base"
            >
              Services
            </a>
            <a
              href="#pos-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium text-base"
            >
              Retail &amp; POS
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium text-base"
            >
              Engineering Standard
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium text-base"
            >
              Contact
            </a>
            <Button asChild className="w-full justify-center">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Initiate Project
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <Badge variant="brand" className="mb-6 py-1 px-3 text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Production-Grade Digital Engineering
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight md:leading-[1.12] mb-6">
                Engineering Scalable Web Platforms, Mobile Apps &amp; Retail POS Systems.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-normal">
                Byten architects high-performance software systems engineered for scale. From cloud-connected Point of
                Sale infrastructures to responsive web platforms and mobile applications, we deliver clean architecture
                grounded in measurable business outcomes.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild size="lg" className="font-semibold shadow-md">
                  <a href="#contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#pos-systems">Explore POS Architecture</a>
                </Button>
              </div>
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-border/60">
              <div className="p-4 rounded-lg bg-card/40 border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-1">99.9%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  POS Reliability SLA
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/40 border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-1">&lt; 100ms</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Target API Latency
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/40 border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-1">Full-Stack</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Next.js &amp; Mobile Native
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/40 border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-1">End-to-End</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Architecture to Delivery
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <Badge variant="brand" className="mb-3">
                Core Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Software Solutions Engineered for Measurable Business Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1: Web Platforms */}
              <Card className="hover:border-primary/50 transition-colors bg-card/60">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Globe className="size-6" />
                  </div>
                  <CardTitle className="text-2xl">Modern Web Platforms</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    High-concurrency web applications built with Next.js 16, React Server Components, and TypeScript.
                    Optimized for sub-second Core Web Vitals, enterprise security, and conversion rate efficiency.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js 16</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS v4</Badge>
                    <Badge variant="outline">Edge SSR</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Service 2: Mobile Apps */}
              <Card className="hover:border-primary/50 transition-colors bg-card/60">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Smartphone className="size-6" />
                  </div>
                  <CardTitle className="text-2xl">Mobile Applications</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Fluid, native-grade mobile applications built for iOS and Android. Engineered with offline persistence,
                    biometric authentication, and frictionless user journeys that maximize long-term retention.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">iOS &amp; Android</Badge>
                    <Badge variant="outline">Offline Sync</Badge>
                    <Badge variant="outline">Push Notification Engines</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Service 3: POS Systems */}
              <Card className="hover:border-primary/50 transition-colors bg-card/60">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Store className="size-6" />
                  </div>
                  <CardTitle className="text-2xl">Point of Sale (POS) Systems</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Enterprise retail infrastructure built for high-throughput retail stores, restaurants, and retail
                    chains. Features offline transaction queues, inventory sync across outlets, and direct hardware
                    integrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Offline Resilience</Badge>
                    <Badge variant="outline">Thermal Printing</Badge>
                    <Badge variant="outline">Multi-Store Sync</Badge>
                    <Badge variant="outline">Barcode Scanning</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Service 4: Enterprise Backends */}
              <Card className="hover:border-primary/50 transition-colors bg-card/60">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Server className="size-6" />
                  </div>
                  <CardTitle className="text-2xl">Enterprise Backends &amp; APIs</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Scalable database architectures, REST &amp; GraphQL APIs, and event-driven microservices. Designed
                    for uncompromising data integrity, transactional consistency, and predictable scaling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Redis Caching</Badge>
                    <Badge variant="outline">Cloud Microservices</Badge>
                    <Badge variant="outline">Automated CI/CD</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* POS Systems Deep Dive */}
        <section id="pos-systems" className="py-24 bg-card/30 border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <Badge variant="brand" className="mb-6">
                  Specialized Retail Engineering
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                  Point of Sale Architecture Designed for Zero Downtime
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 font-normal">
                  In retail and hospitality, counter downtime is direct lost revenue. Byten POS systems are built with an
                  offline-first architecture: checkout transactions execute locally with zero latency, syncing seamlessly
                  to the central cloud ledger when connectivity permits.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">Offline Queueing &amp; Sync</h4>
                      <p className="text-sm text-muted-foreground">
                        Uninterrupted checkout during network outages. Transactions are securely cached locally and
                        automatically reconciled upon connection recovery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">Multi-Outlet Inventory Ledger</h4>
                      <p className="text-sm text-muted-foreground">
                        Centralized real-time stock management across warehouses and storefronts with automated reorder
                        alerts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">Direct Hardware Drivers</h4>
                      <p className="text-sm text-muted-foreground">
                        Native communication with ESC/POS thermal receipt printers, 2D barcode scanners, cash drawers, and
                        integrated card terminals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Terminal Card */}
              <div className="lg:col-span-6">
                <Card className="border-border bg-card shadow-2xl p-6">
                  <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Terminal className="size-4 text-primary" />
                      <span className="text-xs font-mono text-foreground font-semibold">
                        byten-pos-engine::status
                      </span>
                    </div>
                    <Badge variant="brand" className="font-mono text-[11px]">
                      v3.4-active
                    </Badge>
                  </div>

                  <div className="space-y-4 font-mono text-xs text-muted-foreground">
                    <div className="p-3.5 rounded-lg bg-background/80 border border-border/60">
                      <div className="text-primary font-semibold mb-1">Transaction Throughput</div>
                      <div className="text-foreground text-sm font-semibold">1,200+ tx/min peak bench tested</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-background/80 border border-border/60">
                      <div className="text-primary font-semibold mb-1">Network Architecture</div>
                      <div className="text-foreground font-semibold">
                        Dual-State: Cloud Connected &amp; Local Fallback
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-background/80 border border-border/60">
                      <div className="text-primary font-semibold mb-1">Hardware Protocols</div>
                      <div className="text-foreground">Serial, USB &amp; Network Socket (ESC/POS Compliant)</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Ready to modernize your retail counters?</span>
                    <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary">
                      <a href="#contact">Request POS Demo &rarr;</a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Standards */}
        <section id="standards" className="py-24 border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <Badge variant="brand" className="mb-3">
                Our Engineering Discipline
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Built on First Principles, Not Over-Engineered Bloat
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card/50">
                <CardHeader>
                  <div className="text-2xl font-bold text-primary mb-2 font-mono flex items-center gap-2">
                    <Zap className="size-5" /> 01
                  </div>
                  <CardTitle className="text-xl">Performance by Default</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every millisecond counts. We benchmark payload sizes, eliminate layout shifts, and leverage edge
                    computing so your users experience immediate responsiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <div className="text-2xl font-bold text-primary mb-2 font-mono flex items-center gap-2">
                    <ShieldCheck className="size-5" /> 02
                  </div>
                  <CardTitle className="text-xl">Typed Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Strict TypeScript and validated runtime schemas across API boundaries. Regressions are caught during
                    automated compilation, never in customer production.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <div className="text-2xl font-bold text-primary mb-2 font-mono flex items-center gap-2">
                    <Layers className="size-5" /> 03
                  </div>
                  <CardTitle className="text-xl">Minimalism (Ponytail Ladder)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The best code is the code you never wrote. We maximize native platform primitives and standard library
                    capabilities before taking on third-party package dependencies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inquiry / Contact Section */}
        <section id="contact" className="py-24 bg-card/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Contact Info */}
              <div className="lg:col-span-5">
                <Badge variant="brand" className="mb-3">
                  Contact Engineering
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                  Let&apos;s Build Your Next Digital System
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 font-normal">
                  Whether you need a custom Point of Sale deployment, a modern Next.js web application, or full-cycle
                  mobile app engineering, our engineers are ready to scope your project.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Direct Inquiries
                      </div>
                      <a
                        href="mailto:bytensolution@gmail.com"
                        className="text-foreground hover:text-primary font-medium text-base transition-colors"
                      >
                        bytensolution@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Phone Line
                      </div>
                      <a
                        href="tel:+919633581368"
                        className="text-foreground hover:text-primary font-medium text-base transition-colors"
                      >
                        +91 9633581368
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary flex-shrink-0">
                      <Globe className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Official Domain
                      </div>
                      <a
                        href="https://www.byten.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground hover:text-primary font-medium text-base transition-colors"
                      >
                        www.byten.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form with shadcn */}
              <div className="lg:col-span-7">
                <Card className="p-8 shadow-xl bg-card/90">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="size-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Inquiry Received</h3>
                      <p className="text-muted-foreground text-sm max-w-md mx-auto">
                        Thank you for reaching out. A Byten lead engineer will review your project parameters and respond
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                          Project Scope
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: "web", label: "Web Platform" },
                            { id: "mobile", label: "Mobile App" },
                            { id: "pos", label: "POS System" },
                            { id: "custom", label: "Custom Software" },
                          ].map((s) => (
                            <Button
                              key={s.id}
                              type="button"
                              variant={selectedService === s.id ? "default" : "outline"}
                              size="sm"
                              onClick={() => {
                                setSelectedService(s.id);
                                setFormData({ ...formData, service: s.id });
                              }}
                              className="text-xs h-9 justify-center"
                            >
                              {s.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="full-name"
                            className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                          >
                            Your Name
                          </label>
                          <Input
                            id="full-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Connor"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="work-email"
                            className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                          >
                            Work Email
                          </label>
                          <Input
                            id="work-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="timeline"
                          className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                        >
                          Target Timeline
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="flex h-11 w-full rounded-lg border border-input bg-card/60 px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
                        >
                          <option value="Urgent (&lt; 1 month)">Urgent (&lt; 1 month)</option>
                          <option value="1-2 months">1-2 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="details"
                          className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold"
                        >
                          Project Requirements
                        </label>
                        <Textarea
                          id="details"
                          rows={4}
                          required
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Tell us about your target features, operational volume, or architecture requirements..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full font-semibold">
                        Submit Project Inquiry
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 flex items-center justify-center rounded bg-secondary/40 border border-border p-1">
              <Image
                src="/byten-mark.png"
                alt="Byten"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-foreground tracking-tight text-lg">byten</span>
            <span className="text-muted-foreground text-xs pl-2">
              &copy; {new Date().getFullYear()} Byten. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
            </div>
            <a href="mailto:bytensolution@gmail.com" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a
              href="https://www.byten.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              byten.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
