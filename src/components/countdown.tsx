import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-02-18T10:00:00+05:30").getTime();

function diff(now: number) {
  const total = Math.max(0, WEDDING_DATE - now);
  const s = Math.floor(total / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function Countdown({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [t, setT] = useState(() => diff(Date.now()));

  useEffect(() => {
    const id = setInterval(() => setT(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const isDark = variant === "dark";
  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div className="w-full">
      <p
        className={
          "text-center text-xs uppercase tracking-[0.36em] mb-6 " +
          (isDark ? "text-cream/70" : "text-primary/60")
        }
      >
        Our Countdown
      </p>
      <div className="mx-auto grid max-w-2xl grid-cols-4 gap-2 sm:gap-4">
        {items.map((it) => (
          <div
            key={it.label}
            className={
              "rounded-lg border px-2 py-4 sm:py-6 text-center " +
              (isDark
                ? "border-cream/25 bg-white/5 text-cream"
                : "border-accent/25 bg-cream/60 text-primary")
            }
          >
            <div className="font-serif text-3xl sm:text-5xl tabular-nums">
              {String(it.value).padStart(2, "0")}
            </div>
            <div
              className={
                "mt-2 text-[10px] uppercase tracking-[0.24em] " +
                (isDark ? "text-cream/60" : "text-primary/50")
              }
            >
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
