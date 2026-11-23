import type { CSSProperties } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { AUDIENCE_IDS } from "../i18n/servicesCopy";
import { VectorField } from "./VectorField";
import { CountUp } from "./CountUp";
import { AudienceIcon } from "./icons";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { t } = useLanguage();

  /** Re-fire hashchange when the hash is already the target, so Services still scrolls. */
  const onAudienceClick = (href: string) => {
    if (window.location.hash === href) window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow drift pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="field-mask pointer-events-none absolute inset-0" aria-hidden="true">
        <VectorField />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="max-w-3xl">
          <span
            className="enter inline-flex items-center gap-2 rounded-full border border-line bg-tint px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-body backdrop-blur-sm"
            style={delay(0)}
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1
            className="enter-title mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-bright sm:text-6xl"
            style={delay(120)}
          >
            {t.hero.titleA} <span className="text-gradient">{t.hero.titleAccent}</span> {t.hero.titleB}
          </h1>

          <p className="enter mt-7 max-w-2xl text-lg leading-relaxed text-body" style={delay(320)}>
            {t.hero.subtitle}
          </p>

          <div className="enter mt-10 flex flex-wrap items-center gap-4" style={delay(440)}>
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-bright px-7 py-3.5 text-sm font-semibold text-ink transition hover:opacity-90"
            >
              {t.hero.ctaPrimary}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/40 px-7 py-3.5 text-sm font-semibold text-bright backdrop-blur-sm transition hover:border-accent/60 hover:bg-tint"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="enter mt-12" style={delay(560)}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-body">{t.hero.audiencePrompt}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {AUDIENCE_IDS.map((id) => {
                const href = `#services/${id}`;
                return (
                  <a
                    key={id}
                    href={href}
                    onClick={() => onAudienceClick(href)}
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm font-medium text-bright backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-raised"
                  >
                    <AudienceIcon id={id} className="h-4 w-4 text-accent transition group-hover:text-accent-2" />
                    {t.services.audiences[id].label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <dl
          className="enter mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
          style={delay(700)}
        >
          {t.hero.stats.map((s, i) => (
            <div key={s.label} className="flex flex-col-reverse bg-surface/90 px-6 py-7 backdrop-blur-sm">
              <dt className="mt-2 text-sm leading-snug text-body">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-bright sm:text-4xl">
                <CountUp value={s.value} delay={700 + i * 90} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
