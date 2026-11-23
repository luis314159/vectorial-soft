import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useMotion";

/**
 * A field of small vectors behind the hero. On load they point in random
 * directions and settle into a smooth, flowing field — disorder turned into
 * structure, which is the work. The pointer bends nearby vectors into a swirl
 * and lights them up; scrolling the hero away calms the whole field.
 * Colours come from the theme tokens (accent → accent-2).
 */
export function VectorField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = prefersReducedMotion();

    let w = 0;
    let h = 0;
    let gap = 34;
    let colA = "#818cf8";
    let colB = "#22d3ee";
    let light = false;
    let seeds: number[] = [];
    const pointer = { x: -9999, y: -9999, active: 0, target: 0 };
    let damp = 0;
    const born = performance.now();

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colA = cs.getPropertyValue("--color-accent").trim() || colA;
      colB = cs.getPropertyValue("--color-accent-2").trim() || colB;
      light = document.documentElement.dataset.theme === "light";
    };

    const draw = (now: number) => {
      const t = reduce ? 4 : (now - born) / 1000;
      // 0 → 1 over the first ~1.6 s: random directions settle into the field.
      const settle = reduce ? 1 : 1 - Math.pow(Math.max(0, 1 - t / 1.6), 3);
      pointer.active += (pointer.target - pointer.active) * 0.08;

      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, w, h * 0.6);
      grad.addColorStop(0, colA);
      grad.addColorStop(1, colB);
      ctx.strokeStyle = grad;
      ctx.fillStyle = grad;
      ctx.lineCap = "round";

      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const radius = Math.min(260, w * 0.3);
      const flow = 1 - damp * 0.85;
      let k = 0;

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++, k++) {
          const x = i * gap + (j % 2 ? gap / 2 : 0);
          const y = j * gap;

          let angle =
            Math.sin(x * 0.0042 + t * 0.35 * flow) * 1.1 +
            Math.cos(y * 0.0055 - t * 0.25 * flow) * 0.9 +
            Math.sin((x + y) * 0.0018 + t * 0.15) * 0.6;
          angle = seeds[k] * (1 - settle) + angle * settle;

          let len = 7;
          let alpha = light ? 0.38 : 0.22;

          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const infl = Math.exp(-d2 / (radius * radius)) * pointer.active;
          if (infl > 0.01) {
            const swirl = Math.atan2(dy, dx) + Math.PI / 2;
            // shortest-arc blend between the field angle and the swirl
            const diff = Math.atan2(Math.sin(swirl - angle), Math.cos(swirl - angle));
            angle += diff * infl;
            len += 9 * infl;
            alpha += 0.65 * infl;
          }

          // Fade toward the bottom so the hero copy stays readable.
          alpha *= Math.max(0, 1 - (y / h) * 0.9) * (1 - damp * 0.6);
          if (alpha < 0.02) continue;

          const cx = Math.cos(angle) * len;
          const cy = Math.sin(angle) * len;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(x - cx * 0.5, y - cy * 0.5);
          ctx.lineTo(x + cx * 0.5, y + cy * 0.5);
          ctx.stroke();
          // vector head
          ctx.beginPath();
          ctx.arc(x + cx * 0.5, y + cy * 0.5, 1.15, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      gap = w < 640 ? 30 : 36;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = (Math.ceil(w / gap) + 1) * (Math.ceil(h / gap) + 1);
      seeds = Array.from({ length: count }, () => Math.random() * Math.PI * 2);
      readColors();
      draw(performance.now());
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });

    if (reduce) {
      return () => {
        ro.disconnect();
        mo.disconnect();
      };
    }

    const steer = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = clientX - r.left;
      pointer.y = clientY - r.top;
      pointer.target = pointer.y >= 0 && pointer.y <= r.height ? 1 : 0;
    };
    const onPointer = (e: PointerEvent) => steer(e.clientX, e.clientY);
    const onLeave = () => (pointer.target = 0);
    const onScroll = () => {
      const r = canvas.getBoundingClientRect();
      damp = Math.min(1, Math.max(0, -r.top / Math.max(r.height, 1)));
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    let visible = true;
    let raf = 0;
    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const startLoop = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startLoop();
      else stopLoop();
    });
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stopLoop() : startLoop());
    document.addEventListener("visibilitychange", onVisibility);
    startLoop();

    return () => {
      stopLoop();
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className={`block h-full w-full ${className}`} aria-hidden="true" />;
}
