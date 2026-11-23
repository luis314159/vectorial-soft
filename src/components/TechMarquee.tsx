import { useLanguage } from "../i18n/LanguageContext";

const STACK = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Rust",
  "PostgreSQL",
  "WhatsApp Cloud API",
  "Google Business",
  "Meta Ads",
  "Kubernetes",
  "Docker",
  "AWS",
  "Azure",
  "Kafka",
  "ClickHouse",
  "Redis",
  "PyTorch",
  "YOLO",
  "ONNX",
  "MLflow",
  "Qdrant",
  "LLMs & MCP",
  "Figma",
];

/** Endless, pausable ribbon of the stack — duplicated once so the loop is seamless. */
export function TechMarquee() {
  const { t } = useLanguage();
  const items = [...STACK, ...STACK];

  return (
    <section aria-label={t.hero.stackLabel} className="border-y border-line bg-surface/40 py-6">
      <p className="mx-auto max-w-6xl px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-body sm:px-8">
        {t.hero.stackLabel}
      </p>
      <div className="marquee mt-4 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-3">
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= STACK.length}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-tint px-4 py-1.5 font-mono text-xs text-body transition hover:border-accent/40 hover:text-bright"
            >
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
