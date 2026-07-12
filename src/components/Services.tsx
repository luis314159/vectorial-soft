import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./SectionHeader";

const ICONS = [
  // AI & ML — spark / neural
  <path key="ai" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
  // Full-stack — code brackets
  <path key="fs" d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  // Data & cloud — layers
  <path key="dc" d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
  // Industrial — factory
  <path key="in" d="M3 21V9l6 4V9l6 4V9l6 4v8H3Zm4-4h.01M11 17h.01M15 17h.01M19 17h.01" />,
];

export function Services() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.services.items.map((item, i) => (
            <article
              key={item.title}
              className="reveal group rounded-2xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-raised text-accent transition group-hover:border-accent/40">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-bright">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p>
              <ul className="mt-6 space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-body">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
