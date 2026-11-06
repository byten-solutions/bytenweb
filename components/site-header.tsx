"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BytenLogo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight, Close, Menu } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      header.style.setProperty("--progress", progress.toFixed(4));
      setScrolled(window.scrollY > 16);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    setMenuOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    setMenuOpen(false);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        ref={headerRef}
        id="top"
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
      >
        <div className="site-container site-header__inner">
          <Link
            href="/"
            className="site-header__logo"
            aria-label="Byten — home"
          >
            <BytenLogo priority width={108} />
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <Link href="/contact" className="btn btn--solid">
              Start a project
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
            <button
              type="button"
              className="icon-btn menu-btn"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        <span className="site-header__progress" aria-hidden="true" />
      </header>

      <dialog
        ref={dialogRef}
        id="site-menu"
        className="menu-dialog"
        aria-label="Site menu"
        onClose={() => setMenuOpen(false)}
      >
        <div className="menu-dialog__panel">
          <div className="menu-dialog__top">
            <BytenLogo width={112} />
            <button
              type="button"
              className="icon-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <Close size={20} />
            </button>
          </div>

          <nav className="menu-dialog__nav" aria-label="Mobile">
            {site.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="menu-dialog__link"
                onClick={closeMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="mono-label">0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="btn btn--solid menu-dialog__cta"
            onClick={closeMenu}
          >
            Start a project <ArrowUpRight size={16} />
          </Link>

          <div className="menu-dialog__foot">
            <div>
              <p className="mono-label">Direct</p>
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </div>
            <div>
              <p className="mono-label">Phone</p>
              <a href={`tel:${site.phoneHref}`} className="link-line">
                {site.phone}
              </a>
            </div>
            <div className="menu-dialog__theme">
              <span className="mono-label">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
