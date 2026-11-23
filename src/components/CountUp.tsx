import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "../hooks/useMotion";

const SIMPLE = /^(\d+)(.*)$/;

/** Counts up to a metric like "15+" the first time it is on screen. */
export function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const match = SIMPLE.exec(value);
  const [ref, seen] = useInView<HTMLSpanElement>("0px");
  const [shown, setShown] = useState<string | null>(null);

  useEffect(() => {
    if (!match || !seen || prefersReducedMotion()) return;
    const target = Number(match[1]);
    const suffix = match[2];
    const duration = 1400;
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now + delay;
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - Math.pow(1 - t, 4);
      setShown(t < 1 ? `${Math.round(target * eased)}${suffix}` : null);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    setShown(`0${suffix}`);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, value]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      <span aria-hidden="true">{shown ?? value}</span>
    </span>
  );
}
