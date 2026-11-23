import type { ReactNode } from "react";
import type { AudienceId } from "../i18n/servicesCopy";

function Svg({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const AUDIENCE_PATHS: Record<AudienceId, ReactNode> = {
  // storefront with awning
  local: <path d="M4 10v10h16V10M3 4h18l-1.5 4.5a2.5 2.5 0 0 1-4.5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-4.5 0L3 4Zm7 16v-5h4v5" />,
  // factory
  industry: <path d="M3 21V9l6 4V9l6 4V5h4l2 16H3Zm4-4h2m4 0h2" />,
  // office building
  enterprise: <path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17m0-10h4a1 1 0 0 1 1 1v9M2 21h20M8 7h3m-3 4h3m-3 4h3" />,
  // rocket
  startup: <path d="M5 15c-1.5 1-2 4-2 4s3-.5 4-2m-2-2 4 4m-4-4 3.5-6.5C10.5 5 14.5 3 21 3c0 6.5-2 10.5-5.5 12.5L9 19m6-10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />,
};

export function AudienceIcon({ id, className }: { id: AudienceId; className?: string }) {
  return <Svg className={className}>{AUDIENCE_PATHS[id]}</Svg>;
}

const P = {
  pin: <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  browser: <path d="M3 5h18v14H3V5Zm0 4h18M6.5 7h.01M9 7h.01" />,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12ZM8.5 12h.01M12 12h.01M15.5 12h.01" />,
  calendar: <path d="M4 6h16v14H4V6Zm0 4h16M8 3v4m8-4v4m-6.5 7 2 2 4-4" />,
  repeat: <path d="M4 12a8 8 0 0 1 14-5.3L20 9m0-5v5h-5m5 3a8 8 0 0 1-14 5.3L4 15m0 5v-5h5" />,
  qr: <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h2v2h-2zm4 0h2m-6 4h2m2 0h2v2m-4 0h.01" />,
  mail: <path d="M3 5h18v14H3V5Zm0 2 9 6 9-6" />,
  megaphone: <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Zm12-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14" />,
  gauge: <path d="M12 14l4-4M3.5 17a9 9 0 1 1 17 0M12 14a1 1 0 1 0 0 .01" />,
  barcode: <path d="M4 5v14M7 5v14M11 5v14M14 5v14M17 5v14M20 5v14" />,
  eye: <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  chart: <path d="M3 3v18h18M7 15l3-3 3 2 5-6M3 9h18" />,
  clipboard: <path d="M9 4h6v3H9V4ZM7 5H5v16h14V5h-2M9 12l2 2 4-4M9 17h6" />,
  spark: <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
  flow: <path d="M4 6h6v4H4V6Zm10 8h6v4h-6v-4ZM7 10v4a2 2 0 0 0 2 2h5M14 6h3a2 2 0 0 1 2 2v6" />,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
  shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4" />,
  cloud: <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z" />,
  rocket: AUDIENCE_PATHS.startup,
  cpu: <path d="M7 7h10v10H7V7Zm3 3h4v4h-4v-4ZM9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4" />,
  compass: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z" />,
  users: <path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 9v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />,
};

/** Icon for each service card, in the same order as the copy. */
const SERVICE_ICONS: Record<AudienceId, ReactNode[]> = {
  local: [P.pin, P.browser, P.chat, P.calendar, P.repeat, P.qr, P.mail, P.megaphone],
  industry: [P.gauge, P.barcode, P.eye, P.chart, P.clipboard, P.spark],
  enterprise: [P.spark, P.flow, P.code, P.chart, P.shield, P.cloud],
  startup: [P.rocket, P.spark, P.layers, P.cpu, P.compass, P.users],
};

export function ServiceIcon({ audience, index, className }: { audience: AudienceId; index: number; className?: string }) {
  return <Svg className={className}>{SERVICE_ICONS[audience][index] ?? P.spark}</Svg>;
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42a9.36 9.36 0 0 1 6.66 2.77 9.36 9.36 0 0 1 2.76 6.66c0 5.2-4.23 9.42-9.43 9.42Zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.62l6.01-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.03Z" />
    </svg>
  );
}
