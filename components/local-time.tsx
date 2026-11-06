"use client";

import { useEffect, useState } from "react";

export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time} IST
    </span>
  );
}
