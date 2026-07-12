import { useLanguage } from "../i18n/LanguageContext";
import { Logo, Wordmark } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <Wordmark />
          </div>
          <p className="text-center text-sm text-body sm:text-left">{t.footer.tagline}</p>
        </div>
        <p className="text-sm text-body">
          © {year} Vectorial Soft. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
