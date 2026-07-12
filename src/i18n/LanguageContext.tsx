import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Lang, Translation } from "./translations";

const STORAGE_KEY = "vectorial-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const SUPPORTED: Lang[] = ["en", "es", "pt", "de"];

function detectInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(stored as Lang)) return stored as Lang;

  // navigator.languages lists the user's preferred languages in priority
  // order (from browser/OS settings); pick the first one we support.
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const base = tag.slice(0, 2).toLowerCase() as Lang;
    if (SUPPORTED.includes(base)) return base;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
