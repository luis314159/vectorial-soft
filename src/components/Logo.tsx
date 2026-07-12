export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" className="fill-raised" />
      <path
        d="M16 18 L32 48 L48 18"
        fill="none"
        stroke="url(#logo-g)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="18" r="5" fill="#22d3ee" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-lg font-semibold tracking-tight text-bright">
      vectorial<span className="text-gradient font-bold">soft</span>
    </span>
  );
}
