import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./SectionHeader";
import luisPhoto from "../assets/luis.jpg";
import marcoPhoto from "../assets/marco.jpg";

interface FounderLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "globe";
}

function LinkIcon({ icon }: { icon: FounderLink["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-3.99V9Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18" />
    </svg>
  );
}

export function Founders() {
  const { t, lang } = useLanguage();
  const ref = useReveal<HTMLElement>([lang]);

  const founders = [
    {
      name: "Luis Ángel Almazán López",
      role: t.founders.luisRole,
      bio: t.founders.luisBio,
      photo: luisPhoto,
      photoPosition: "object-center",
      links: [
        { label: t.founders.website, href: "https://lalmazan.com", icon: "globe" },
        { label: "GitHub", href: "https://github.com/luis314159", icon: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/in/luis-angel-almazan-lopez", icon: "linkedin" },
      ] as FounderLink[],
    },
    {
      name: "Marco Sáenz",
      role: t.founders.marcoRole,
      bio: t.founders.marcoBio,
      photo: marcoPhoto,
      photoPosition: "object-top",
      links: [
        { label: "GitHub", href: "https://github.com/MarcoS329612", icon: "github" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcosaenz31/", icon: "linkedin" },
      ] as FounderLink[],
    },
  ];

  return (
    <section id="founders" ref={ref} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader
          kicker={t.founders.kicker}
          title={t.founders.title}
          subtitle={t.founders.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <article
              key={f.name}
              className="reveal overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:border-accent/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid sm:grid-cols-[200px_1fr]">
                <div className="relative aspect-square sm:aspect-auto sm:h-full">
                  <img
                    src={f.photo}
                    alt={f.name}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover ${f.photoPosition}`}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent sm:bg-gradient-to-r"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-bright">{f.name}</h3>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-accent">
                    {f.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-body">{f.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-body transition hover:border-accent/50 hover:text-bright"
                      >
                        <LinkIcon icon={l.icon} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
