import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./SectionHeader";

const PROJECT_TAGS: string[][] = [
  ["FastAPI", "React 19", "PostgreSQL", "Redis", "MCP"],
  ["Qdrant", "Azure OpenAI", "Celery", "MinIO"],
  ["PyTorch", "ONNX Runtime", "Raspberry Pi", "WebSockets"],
  ["YOLO", "AWS", "MLflow", "Grounded SAM 2"],
  ["FastAPI", "PostgreSQL", "Kubernetes", "Docker"],
  ["Rust", "Axum", "OIDC", "Prometheus"],
];

export function Work() {
  const { t, lang } = useLanguage();
  const ref = useReveal<HTMLElement>([lang]);

  return (
    <section id="work" ref={ref} className="scroll-mt-20 border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader kicker={t.work.kicker} title={t.work.title} subtitle={t.work.subtitle} />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.work.projects.map((project, i) => (
            <article
              key={project.title}
              className="reveal group flex flex-col rounded-2xl border border-line bg-ink p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <span className="font-mono text-xs text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-bright">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {PROJECT_TAGS[i].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-tint px-2.5 py-1 font-mono text-[11px] text-body"
                  >
                    {tag}
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
