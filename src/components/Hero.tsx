import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="vector-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-tint px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-body">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bright sm:text-6xl">
            {t.hero.titleA} <span className="text-gradient">{t.hero.titleAccent}</span> {t.hero.titleB}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-ink transition hover:opacity-85"
            >
              {t.hero.ctaPrimary}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-bright transition hover:border-accent/60 hover:bg-tint"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-7">
              <dd className="font-display text-3xl font-bold text-bright sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-sm leading-snug text-body">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
