"use client";

import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight } from "@/components/icons";
import { WorkPreview } from "@/components/work-preview";
import { projects, REPRESENTATIVE_NOTE, type Project } from "@/lib/work";

const subscribe = () => () => {};

export function WorkIndex({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<Project | null>(null);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const previewRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  function paint() {
    const element = previewRef.current;
    if (!element) {
      frame.current = null;
      return;
    }
    const width = Math.min(480, window.innerWidth * 0.32);
    const left = Math.min(
      Math.max(pointer.current.x + 26, 24),
      window.innerWidth - width - 24,
    );
    const top = Math.min(
      Math.max(pointer.current.y - 180, 96),
      window.innerHeight - 340,
    );
    element.style.transform = `translate3d(${left}px, ${top}px, 0) rotate(-1.2deg)`;
    frame.current = null;
  }

  function move(event: React.MouseEvent) {
    pointer.current = { x: event.clientX, y: event.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(paint);
  }

  return (
    <>
      <div
        className="work-list"
        onMouseMove={move}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="work-row"
            onMouseEnter={(event) => {
              pointer.current = { x: event.clientX, y: event.clientY };
              setActive(project);
              if (frame.current) return;
              frame.current = requestAnimationFrame(paint);
            }}
            onFocus={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              pointer.current = {
                x: rect.left + rect.width * 0.62,
                y: rect.top + rect.height / 2,
              };
              setActive(project);
              if (frame.current) return;
              frame.current = requestAnimationFrame(paint);
            }}
            onBlur={() => setActive(null)}
            aria-label={`${project.name} — ${project.summary}`}
          >
            <span className="mono-label work-row__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="work-row__name">{project.name}</span>
            <span className="work-row__sector">
              {project.client}
              <br />
              {project.sector}
            </span>
            <span className="work-row__scope">
              {project.scope.join(" / ")}
            </span>
            <span className="mono-label work-row__year">{project.year}</span>
            <span className="work-row__arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
            <span className="work-row__mobile-preview" aria-hidden="true">
              <WorkPreview project={project} />
            </span>
          </Link>
        ))}
      </div>

      {mounted
        ? createPortal(
            <div
              ref={previewRef}
              className={`work-preview${active ? " is-visible" : ""}`}
              aria-hidden="true"
            >
              {active ? (
                <div className="work-preview__frame">
                  <div className="work-preview__bar">
                    <span>{active.name}</span>
                    <span>{active.sector}</span>
                  </div>
                  <WorkPreview project={active} />
                </div>
              ) : null}
            </div>,
            document.body,
          )
        : null}

      {!compact ? (
        <div className="work-note">
          <p>{REPRESENTATIVE_NOTE}</p>
          <span className="mono-label">03 representative systems / 2025—2026</span>
        </div>
      ) : null}
    </>
  );
}
