import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: "before" | "today" | "after";
};

const dayFormatters = new Map<string, Intl.DateTimeFormat>();

function getDayKey(date: Date, timeZone: string): string {
  let formatter = dayFormatters.get(timeZone);

  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    dayFormatters.set(timeZone, formatter);
  }

  return formatter.format(date);
}

function readCountdown(targetISO: string, timeZone: string): Countdown {
  const target = new Date(targetISO);
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const phase =
    getDayKey(now, timeZone) === getDayKey(target, timeZone)
      ? "today"
      : now.getTime() < target.getTime()
        ? "before"
        : "after";

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
    phase,
  };
}

export function useCountdown(targetISO: string, timeZone: string): Countdown {
  const [countdown, setCountdown] = useState<Countdown>(() => readCountdown(targetISO, timeZone));

  useEffect(() => {
    const update = () => setCountdown(readCountdown(targetISO, timeZone));
    update();
    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, [targetISO, timeZone]);

  return countdown;
}
