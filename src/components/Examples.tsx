import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { ExamplesCopy } from "../i18n/examplesCopy";
import { useReveal } from "../hooks/useReveal";
import { useSpotlight } from "../hooks/useMotion";
import { whatsappLink } from "../lib/contact";
import { SectionHeader } from "./SectionHeader";
import { CheckIcon, WhatsAppIcon } from "./icons";
import visionImg from "../assets/examples/vision-inspection.jpg";
import mesImg from "../assets/examples/mes-dashboard.jpg";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Chip({ children, desktopOnly = false }: { children: ReactNode; desktopOnly?: boolean }) {
  return (
    <span className={`${desktopOnly ? "hidden sm:inline-block" : ""} absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm`}>
      {children}
    </span>
  );
}

function PhotoMedia({ src, alt, label, delay }: { src: string; alt: string; label: string; delay: number }) {
  return (
    <div className="scan relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink" style={d(delay)}>
      <div className="scan-body absolute inset-0">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <Chip>{label}</Chip>
    </div>
  );
}

/** Animated diagram: devices and business systems exchanging data through one integration hub. */
function IntegrationMedia({ labels, label, title }: { labels: ExamplesCopy["labels"]; label: string; title: string }) {
  const nodes = [
    { x: 78, y: 62, name: "PLC" },
    { x: 78, y: 208, name: "IoT" },
    { x: 402, y: 62, name: "ERP" },
    { x: 402, y: 208, name: "MES" },
    { x: 240, y: 236, name: labels.alerts },
  ];
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink">
      <svg viewBox="0 0 480 270" className="h-full w-full" role="img" aria-label={title}>
        <defs>
          <linearGradient id="ex-int" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-accent)" />
            <stop offset="1" stopColor="var(--color-accent-2)" />
          </linearGradient>
        </defs>
        <g className="opacity-60" stroke="var(--color-line)" strokeWidth="1">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="270" />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 54} x2="480" y2={i * 54} />
          ))}
        </g>
        {nodes.map((n, i) => (
          <line
            key={`l${n.name}`}
            className="flow-line"
            style={{ animationDelay: `${i * -0.3}s` }}
            x1={n.x}
            y1={n.y}
            x2="240"
            y2="128"
            stroke="url(#ex-int)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle className="hub-pulse" cx="240" cy="128" r="58" fill="none" stroke="var(--color-accent-2)" strokeWidth="1.5" />
        <rect x="166" y="100" width="148" height="56" rx="14" className="fill-raised" stroke="url(#ex-int)" strokeWidth="2" />
        <text x="240" y="124" textAnchor="middle" className="fill-bright font-display" fontSize="15" fontWeight="700">API</text>
        <text x="240" y="142" textAnchor="middle" className="fill-body font-mono" fontSize="9.5">MQTT · OPC UA · REST</text>
        {nodes.map((n) => (
          <g key={n.name}>
            <rect x={n.x - 52} y={n.y - 16} width="104" height="32" rx="9" className="fill-surface stroke-line" strokeWidth="1.5" />
            <circle cx={n.x - 38} cy={n.y} r="3.5" fill="var(--color-accent-2)" className="node-blink" />
            <text x={n.x + 6} y={n.y + 4} textAnchor="middle" className="fill-bright font-sans" fontSize="11.5" fontWeight="600">
              {n.name}
            </text>
          </g>
        ))}
      </svg>
      <Chip desktopOnly>{label}</Chip>
    </div>
  );
}

/** Animated diagram: a BI dashboard with KPI tiles, bars that grow in and a trend line that draws. */
function BiMedia({ labels, label, title }: { labels: ExamplesCopy["labels"]; label: string; title: string }) {
  const bars = [42, 58, 50, 66, 61, 78, 72, 88];
  const kpis = [labels.sales, labels.operations, labels.finance];
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-ink">
      <svg viewBox="0 0 480 270" className="h-full w-full" role="img" aria-label={title}>
        <defs>
          <linearGradient id="ex-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-accent-2)" />
            <stop offset="1" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
        {kpis.map((k, i) => (
          <g key={k}>
            <rect x={24 + i * 148} y="48" width="136" height="42" rx="10" className="fill-surface stroke-line" strokeWidth="1.5" />
            <text x={38 + i * 148} y="64" className="fill-body font-sans" fontSize="11" fontWeight="600">{k}</text>
            <polyline
              className="bi-spark"
              style={d(300 + i * 150)}
              points={`${38 + i * 148},82 ${58 + i * 148},77 ${78 + i * 148},79 ${98 + i * 148},73 ${118 + i * 148},75 ${142 + i * 148},68`}
              fill="none"
              stroke="var(--color-accent-2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
            />
          </g>
        ))}
        <rect x="24" y="102" width="284" height="146" rx="10" className="fill-surface stroke-line" strokeWidth="1.5" />
        {bars.map((h, i) => (
          <rect
            key={i}
            className="bi-bar"
            style={{ ...d(200 + i * 70), "--s": `${0.78 + (i % 3) * 0.07}` } as CSSProperties}
            x={44 + i * 32}
            y={234 - h * 1.15}
            width="18"
            height={h * 1.15}
            rx="4"
            fill="url(#ex-bar)"
          />
        ))}
        <polyline
          className="bi-line"
          points="53,194 85,174 117,184 149,160 181,166 213,138 245,148 277,122"
          fill="none"
          stroke="var(--color-bright)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
        />
        <rect x="320" y="102" width="136" height="146" rx="10" className="fill-surface stroke-line" strokeWidth="1.5" />
        <circle cx="388" cy="175" r="40" fill="none" stroke="var(--color-line)" strokeWidth="12" />
        <circle
          className="bi-donut"
          cx="388"
          cy="175"
          r="40"
          fill="none"
          stroke="url(#ex-bar)"
          strokeWidth="12"
          strokeLinecap="round"
          pathLength={100}
          transform="rotate(-90 388 175)"
        />
        <text x="388" y="180" textAnchor="middle" className="fill-bright font-display" fontSize="16" fontWeight="700">KPI</text>
      </svg>
      <Chip desktopOnly>{label}</Chip>
    </div>
  );
}

export function Examples() {
  const { t, lang } = useLanguage();
  const e = t.examples;
  const ref = useReveal<HTMLElement>([lang]);
  useSpotlight(ref);

  const media = [
    <PhotoMedia key="v" src={visionImg} alt={e.imageAlt[0]} label={e.illustrative} delay={150} />,
    <PhotoMedia key="m" src={mesImg} alt={e.imageAlt[1]} label={e.illustrative} delay={250} />,
    <IntegrationMedia key="i" labels={e.labels} label={e.illustrative} title={e.items[2].title} />,
    <BiMedia key="b" labels={e.labels} label={e.illustrative} title={e.items[3].title} />,
  ];

  return (
    <section id="examples" ref={ref} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader kicker={e.kicker} title={e.title} subtitle={e.subtitle} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {e.items.map((item, i) => (
            <article
              key={item.title}
              className="reveal spotlight group flex flex-col rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-5"
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            >
              {media[i]}
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2">{item.tag}</span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-bright">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm leading-snug text-body">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href={whatsappLink(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-105 sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {e.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
