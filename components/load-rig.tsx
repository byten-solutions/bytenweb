"use client";

import { useRef, useState } from "react";

const MIN_X = 150;
const MAX_X = 470;
const CENTER_X = 310;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function LoadRig() {
  const [loadX, setLoadX] = useState(CENTER_X);
  const frame = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const distance = Math.min(1, Math.abs(loadX - CENTER_X) / (MAX_X - CENTER_X));
  const sag = 8 + 15 * (1 - distance);
  const deflection = (sag / 10).toFixed(1);
  const loadPercent = Math.round(((loadX - MIN_X) / (MAX_X - MIN_X)) * 100);
  const beamPath = `M 80 270 C ${loadX - 120} 270 ${loadX - 55} ${
    270 + sag
  } ${loadX} ${270 + sag} C ${loadX + 55} ${270 + sag} ${
    loadX + 120
  } 270 540 270`;

  function updateFromEvent(clientX: number) {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 620;
    setLoadX(clamp(x, MIN_X, MAX_X));
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (frame.current) return;
    const { clientX } = event;
    frame.current = requestAnimationFrame(() => {
      updateFromEvent(clientX);
      frame.current = null;
    });
  }

  function reset() {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    setLoadX(CENTER_X);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const step = event.shiftKey ? 40 : 16;
    setLoadX((current) =>
      clamp(
        current + (event.key === "ArrowRight" ? step : -step),
        MIN_X,
        MAX_X,
      ),
    );
  }

  return (
    <>
      <div
        ref={stageRef}
        className="hero__rig-stage"
        role="slider"
        tabIndex={0}
        aria-label="Live load on the service frame"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={loadPercent}
        aria-valuetext={`Load ${loadPercent} percent of span, deflection ${deflection} millimetres, within tolerance`}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerMove}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onPointerCancel={reset}
      >
        <svg viewBox="0 0 620 760" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="rig-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="var(--plate-foreground)"
              strokeWidth="0.5"
              opacity="0.13"
            />
          </pattern>
          <marker
            id="rig-arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 10 5 0 10Z" fill="var(--signal-bright)" />
          </marker>
        </defs>

        <rect x="0" y="0" width="620" height="760" fill="url(#rig-grid)" />

        <g
          stroke="var(--plate-line)"
          strokeWidth="1"
          fill="none"
          opacity="0.9"
        >
          <path d="M20 44V20h24M576 20h24v24M600 716v24h-24M44 740H20v-24" />
          <path d="M20 100h580" strokeDasharray="2 4" opacity="0.5" />
          <path d="M20 660h580" strokeDasharray="2 4" opacity="0.5" />
        </g>

        <text
          x="36"
          y="62"
          fill="var(--plate-muted)"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="9"
          letterSpacing="2"
        >
          FIG. 01
        </text>
        <text
          x="36"
          y="80"
          fill="var(--plate-foreground)"
          fontFamily="var(--font-archivo), sans-serif"
          fontSize="17"
          letterSpacing="0.5"
        >
          LOAD RIG / SERVICE FRAME
        </text>
        <text
          x="584"
          y="62"
          fill="var(--plate-muted)"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          letterSpacing="1.5"
          textAnchor="end"
        >
          ILLUSTRATIVE MODEL
        </text>
        <text
          x="584"
          y="79"
          fill="var(--plate-muted)"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          letterSpacing="1.5"
          textAnchor="end"
        >
          DRAG / ARROW KEYS
        </text>

        {/* service labels at the frame corners */}
        <g
          fill="var(--plate-muted)"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="8"
          letterSpacing="1.6"
        >
          <text x="86" y="228">ERP</text>
          <text x="480" y="228">MOBILE</text>
          <text x="86" y="682">WEB</text>
          <text x="460" y="682">SERVICES</text>
        </g>
        <g fill="var(--signal-bright)" aria-hidden="true">
          <rect x="86" y="238" width="6" height="6" />
          <rect x="554" y="238" width="6" height="6" />
          <rect x="86" y="692" width="6" height="6" />
          <rect x="554" y="692" width="6" height="6" />
        </g>

        {/* ground + supports */}
        <g
          stroke="var(--plate-foreground)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="square"
        >
          <path d="M60 640h500" />
          <path d="M110 270v370M510 270v370" strokeWidth="12" />
          <path d="M110 640 310 270 510 640" strokeWidth="3" opacity="0.55" />
          <path d="M110 270h400" strokeWidth="1" opacity="0.35" strokeDasharray="4 5" />
          <path d="M96 640h28M496 640h28" strokeWidth="2" />
          <path d="M110 640v18M510 640v18" />
          <path d="M96 658h28M496 658h28" strokeWidth="2" />
        </g>

        {/* beam + live load */}
        <g fill="none" strokeLinecap="round">
          <path
            d={beamPath}
            stroke="var(--plate-foreground)"
            strokeWidth="13"
            pathLength={1}
            className="rig-draw"
          />
          <path
            d={beamPath}
            stroke="var(--plate-muted)"
            strokeWidth="1"
            strokeDasharray="6 6"
            opacity="0.7"
          />
        </g>

        <g aria-hidden="true">
          <line
            x1={loadX}
            y1="120"
            x2={loadX}
            y2={270 + sag - 10}
            stroke="var(--signal-bright)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            markerEnd="url(#rig-arrow)"
          />
          <rect
            x={loadX - 5}
            y="108"
            width="10"
            height="10"
            fill="var(--signal-bright)"
          />
          <text
            x={loadX + 14}
            y="115"
            fill="var(--signal-bright)"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="8"
            letterSpacing="1.4"
          >
            LIVE LOAD
          </text>
          <circle
            cx={loadX}
            cy={270 + sag}
            r="5"
            fill="var(--signal-bright)"
            stroke="var(--plate-foreground)"
            strokeWidth="1"
          />
        </g>

        {/* deflection dimension */}
        <g>
          <path
            d={`M310 270v${sag}`}
            stroke="var(--signal-bright)"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <path
            d={`M302 ${270 + sag}h16`}
            stroke="var(--signal-bright)"
            strokeWidth="1"
          />
          <text
            x="324"
            y={278 + sag / 2}
            fill="var(--plate-foreground)"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="8"
            letterSpacing="0.6"
          >
            δ {deflection}
          </text>
        </g>

        {/* dimension lines */}
        <g
          stroke="var(--plate-line)"
          strokeWidth="1"
          fill="var(--plate-muted)"
          fontFamily="var(--font-geist-mono), monospace"
          fontSize="7"
          letterSpacing="1"
        >
          <path d="M110 710h400" />
          <path d="M110 704v12M510 704v12" />
          <text x="310" y="726" textAnchor="middle">
            SPAN 05 / SERVICE
          </text>
          <path d="M64 270v370" />
          <path d="M58 270h12M58 640h12" />
          <text x="52" y="458" textAnchor="middle" transform="rotate(-90 52 458)">
            CAPACITY 05
          </text>
        </g>

        {/* readout */}
        <g>
          <path d="M36 742h548" stroke="var(--plate-line)" />
          <text
            x="36"
            y="726"
            fill="var(--plate-muted)"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            letterSpacing="1.2"
          >
            LOAD 4.2
          </text>
          <text
            x="180"
            y="726"
            fill="var(--plate-foreground)"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            letterSpacing="1.2"
          >
            DEFLECTION {deflection} MM
          </text>
          <text
            x="396"
            y="726"
            fill="var(--signal-bright)"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="7"
            letterSpacing="1.2"
          >
            STATUS / WITHIN TOLERANCE
          </text>
        </g>
        </svg>
      </div>
      <p className="hero__rig-readout">
        Load {loadPercent}% of span / deflection δ {deflection} mm / within
        tolerance
      </p>
    </>
  );
}
