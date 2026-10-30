import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: "before" | "today" | "after";
};

function isSameLocalDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function readCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO);
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const phase = isSameLocalDay(now, target)
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

export function useCountdown(targetISO: string): Countdown {
  const [countdown, setCountdown] = useState<Countdown>(() => readCountdown(targetISO));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(readCountdown(targetISO));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetISO]);

  return countdown;
}
