"use client";

import { useState } from "react";

const items = [
  "Web platforms",
  "Mobile apps",
  "Retail systems",
  "Enterprise backends",
  "Offline first",
  "Design systems",
];

function Group() {
  return (
    <div className="conveyor__group">
      {items.map((item) => (
        <span key={item} className="conveyor__item">
          {item}
        </span>
      ))}
    </div>
  );
}

export function Conveyor() {
  const [paused, setPaused] = useState(false);

  return (
    <div className={`conveyor${paused ? " is-paused" : ""}`}>
      <div className="conveyor__viewport" aria-hidden="true">
        <div className="conveyor__track">
          <Group />
          <Group />
        </div>
      </div>
      <button
        type="button"
        className="conveyor__pause"
        onClick={() => setPaused((current) => !current)}
        aria-pressed={paused}
        aria-label={paused ? "Resume moving disciplines" : "Pause moving disciplines"}
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
