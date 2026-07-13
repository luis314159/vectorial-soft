import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const EMAILS = [
  { name: "Luis Almazán", address: "lalmazan@lalmazan.com" },
  { name: "Marco Sáenz", address: "marcosaenz31@hotmail.com" },
];

export function Contact() {
  const { t, lang } = useLanguage();
  const ref = useReveal<HTMLElement>([lang]);

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 border-t border-line">
      <div className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0 rotate-180" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {t.contact.kicker}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-bright sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              {t.contact.subtitle}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {EMAILS.map((e) => (
                <a
                  key={e.address}
                  href={`mailto:${e.address}`}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-medium text-bright transition hover:border-accent/50 hover:bg-raised sm:w-auto"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span className="text-body transition group-hover:text-bright">{e.name}</span>
                  <span className="hidden font-mono text-xs text-body sm:inline">·</span>
                  <span className="hidden font-mono text-xs sm:inline">{e.address}</span>
                </a>
              ))}
            </div>

            <p className="mt-10 flex items-center justify-center gap-2 text-sm text-body">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent-2" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {t.contact.location} — {t.contact.remote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
