import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { useScrollProgressVar } from "../hooks/useMotion";
import { SectionHeader } from "./SectionHeader";

const PRINCIPLE_ICONS = [
  // key — ownership
  <path key="k" d="M15 7a3 3 0 1 1-2.8 4H4v3h2v2h3v-2h3.2A3 3 0 1 1 15 7Z" />,
  // document — written agreement
  <path key="d" d="M6 3h8l4 4v14H6V3Zm8 0v4h4M9 12h6M9 16h6" />,
  // chart — measurable
  <path key="c" d="M3 3v18h18M7 15l3-3 3 2 5-6" />,
  // lock — privacy
  <path key="l" d="M6 11h12v10H6V11Zm2 0V8a4 4 0 1 1 8 0v3m-4 4v2" />,
];

export function Process() {
  const { t, lang } = useLanguage();
  const p = t.process;
  const ref = useReveal<HTMLElement>([lang]);
  const railRef = useScrollProgressVar<HTMLOListElement>();

  return (
    <section id="process" ref={ref} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader kicker={p.kicker} title={p.title} subtitle={p.subtitle} />

        <ol ref={railRef} className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* Rail: vertical on mobile, horizontal on desktop; fills with scroll. */}
          <span className="absolute bottom-2 left-[19px] top-2 w-px bg-line lg:hidden" aria-hidden="true" />
          <span className="rail-fill-y absolute bottom-2 left-[19px] top-2 w-px lg:hidden" aria-hidden="true" />
          <span className="absolute left-5 right-[calc(25%-38px)] top-5 hidden h-px bg-line lg:block" aria-hidden="true" />
          <span className="rail-fill-x absolute left-5 right-[calc(25%-38px)] top-5 hidden h-px lg:block" aria-hidden="true" />

          {p.steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal relative flex gap-5 lg:block"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <span className="step-node relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-display text-lg font-semibold text-bright">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {p.principles.map((pr, i) => (
            <li
              key={pr}
              className="reveal flex items-start gap-3 bg-surface px-5 py-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {PRINCIPLE_ICONS[i]}
              </svg>
              <span className="text-sm font-medium leading-snug text-bright">{pr}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
