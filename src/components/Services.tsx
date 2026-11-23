import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { AUDIENCE_IDS } from "../i18n/servicesCopy";
import type { AudienceId } from "../i18n/servicesCopy";
import { useReveal } from "../hooks/useReveal";
import { prefersReducedMotion, useSpotlight } from "../hooks/useMotion";
import { SectionHeader } from "./SectionHeader";
import { AudienceIcon, CheckIcon, ServiceIcon, WhatsAppIcon } from "./icons";
import { CONTACT_EMAIL, whatsappLink } from "../lib/contact";
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Reads `#services/<audience>` so any page or QR code can deep-link a profile. */
function audienceFromHash(): AudienceId | null {
  const m = /^#services\/(\w+)$/.exec(window.location.hash);
  return m && (AUDIENCE_IDS as string[]).includes(m[1]) ? (m[1] as AudienceId) : null;
}

export function Services() {
  const { t, lang } = useLanguage();
  const s = t.services;
  const ref = useReveal<HTMLElement>([lang]);
  useSpotlight(ref);

  const [active, setActive] = useState<AudienceId>(() => audienceFromHash() ?? "local");
  const audience = s.audiences[active];

  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<CSSProperties>({ opacity: 0 });

  // Deep links: #services/local, #services/industry, …
  useEffect(() => {
    const onHash = () => {
      const id = audienceFromHash();
      if (!id) return;
      setActive(id);
      requestAnimationFrame(() =>
        tabsRef.current?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" }),
      );
    };
    if (audienceFromHash()) onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Sliding highlight behind the active tab.
  const measure = useCallback(() => {
    const el = tabRefs.current[active];
    if (!el) return;
    setIndicator({
      opacity: 1,
      width: el.offsetWidth,
      height: el.offsetHeight,
      transform: `translate(${el.offsetLeft}px, ${el.offsetTop}px)`,
    });
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure, lang]);

  useEffect(() => {
    const ro = new ResizeObserver(measure);
    if (tabsRef.current) ro.observe(tabsRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const select = (id: AudienceId) => {
    setActive(id);
    history.replaceState(null, "", `#services/${id}`);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const idx = AUDIENCE_IDS.indexOf(active);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % AUDIENCE_IDS.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + AUDIENCE_IDS.length) % AUDIENCE_IDS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = AUDIENCE_IDS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const id = AUDIENCE_IDS[next];
    select(id);
    tabRefs.current[id]?.focus();
  };

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Vectorial Soft · ${audience.label}`)}`;
  const whatsapp = whatsappLink(s.whatsappMessage.replace("{profile}", lang === "de" ? audience.label : audience.label.toLowerCase()));

  return (
    <section id="services" ref={ref} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader kicker={s.kicker} title={s.title} subtitle={s.subtitle} />

        {/* ── Profile selector ── */}
        <div ref={tabsRef} className="reveal mt-12 scroll-mt-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-body">{s.selectorLabel}</p>
          <div
            role="tablist"
            aria-label={s.selectorLabel}
            className="relative mt-4 grid grid-cols-2 gap-2 rounded-2xl border border-line bg-surface p-2 lg:grid-cols-4"
          >
            <span
              className="tab-indicator pointer-events-none absolute left-0 top-0 rounded-xl border border-accent/40 bg-raised"
              style={indicator}
              aria-hidden="true"
            />
            {AUDIENCE_IDS.map((id) => {
              const a = s.audiences[id];
              const isActive = id === active;
              return (
                <button
                  key={id}
                  ref={(el) => {
                    tabRefs.current[id] = el;
                  }}
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(id)}
                  onKeyDown={onTabKey}
                  className={`relative z-10 flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-300 sm:px-4 sm:py-4 ${
                    isActive ? "text-bright" : "text-body hover:text-bright"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                      isActive ? "border-accent/50 bg-accent/15 text-accent" : "border-line bg-tint text-body"
                    }`}
                  >
                    <AudienceIcon id={id} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold leading-tight sm:text-base">
                      {a.label}
                    </span>
                    <span className="mt-1 hidden text-xs leading-snug text-body sm:block">{a.hint}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active profile ── */}
        <div className="reveal">
          <div
            key={`${active}-${lang}`}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="mt-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
              <div>
                <h3
                  className="enter font-display text-2xl font-bold leading-tight tracking-tight text-bright sm:text-3xl"
                  style={delay(0)}
                >
                  {audience.headline}
                </h3>
                <p className="enter mt-4 text-base leading-relaxed text-body" style={delay(80)}>
                  {audience.intro}
                </p>
                <p className="enter mt-5 flex items-start gap-2.5 text-sm font-medium text-bright" style={delay(140)}>
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-2/15 text-accent-2">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {audience.proof}
                </p>
              </div>
              <div className="enter" style={delay(200)}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{s.forWhoLabel}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {audience.forWho.map((w, i) => (
                    <li
                      key={w}
                      className="enter rounded-full border border-line bg-tint px-3 py-1.5 text-xs font-medium text-bright"
                      style={delay(240 + i * 35)}
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <p className="enter mt-14 font-mono text-xs uppercase tracking-[0.2em] text-accent" style={delay(260)}>
              {s.servicesLabel}
            </p>
            <div
              className={`mt-5 grid gap-4 sm:grid-cols-2 ${
                audience.services.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {audience.services.map((svc, i) => (
                <article
                  key={svc.title}
                  className={`enter spotlight group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-accent/40 ${
                    i === audience.services.length - 1 && audience.services.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""
                  }`}
                  style={delay(300 + i * 55)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-raised text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:text-accent-2">
                      <ServiceIcon audience={active} index={i} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">{svc.goal}</span>
                  </div>
                  <h4 className="mt-5 font-display text-base font-semibold leading-snug text-bright">{svc.title}</h4>
                  <ul
                    className={`mt-4 space-y-2 ${
                      i === audience.services.length - 1 && audience.services.length % 3 === 1
                        ? "lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0"
                        : ""
                    }`}
                  >
                    {svc.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm leading-snug text-body">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* How to start */}
            <div className="mt-16 rounded-3xl border border-line bg-surface/60 p-5 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="enter" style={delay(380)}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{s.plansLabel}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-body">{s.quoteNote}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {audience.plans.map((plan, i) => {
                  const featured = i === 1;
                  return (
                    <div
                      key={plan.name}
                      className={`enter spotlight relative flex flex-col rounded-2xl border p-6 ${
                        featured ? "glow-border border-transparent bg-raised" : "border-line bg-ink/60"
                      }`}
                      style={delay(420 + i * 80)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-accent/80">0{i + 1}</span>
                        {featured && (
                          <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
                            {s.recommended}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold text-bright">{plan.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-body">{plan.summary}</p>
                      <ul className="mt-5 space-y-2 border-t border-line pt-5">
                        {plan.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2 text-sm text-bright">
                            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="enter mt-8 flex flex-wrap items-center gap-4" style={delay(680)}>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {s.cta}
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
                  href={mailto}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-bright transition hover:border-accent/60 hover:bg-tint"
                >
                  {s.emailCta}
                </a>
                <a
                  href="#process"
                  className="py-2 text-sm font-semibold text-body underline-offset-4 transition hover:text-bright hover:underline"
                >
                  {s.processLink} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
