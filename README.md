# vectorial-soft.com

Landing page for **Vectorial Soft** — AI & Full-Stack Engineering Studio, founded by Luis Ángel Almazán López and Marco Sáenz.

## Stack

- React 19 + TypeScript
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vite 6

## Features

- 4 languages: English, Spanish, Portuguese, German (auto-detected from the browser, persisted in `localStorage`)
- Light & dark themes — defaults to light during the day (07:00–18:59 browser time) and dark at night; manual toggle in the navbar persisted in `localStorage` (pre-paint script in `index.html` avoids theme flash)
- Sections: Hero, Services, Selected Work, Founders, Contact
- Scroll-reveal animations (IntersectionObserver, respects `prefers-reduced-motion`)
- Fully responsive, dark "engineering studio" design

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Structure

- `src/i18n/translations.ts` — all copy in the 4 languages (single source of truth)
- `src/i18n/LanguageContext.tsx` — language provider + `useLanguage()` hook
- `src/theme/ThemeContext.tsx` — light/dark theme provider (time-of-day default); tokens flip via `html[data-theme="light"]` overrides in `src/index.css`
- `src/components/` — Navbar, Hero, Services, Work, Founders, Contact, Footer
- `src/assets/` — founder photos
- `docs/cvs/` — founder CVs (source material, not shipped)
