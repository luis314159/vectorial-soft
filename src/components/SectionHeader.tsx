interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ kicker, title, subtitle }: Props) {
  return (
    <div className="reveal max-w-2xl">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-body">{subtitle}</p>}
    </div>
  );
}
