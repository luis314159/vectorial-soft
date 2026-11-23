import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { whatsappLink } from "../lib/contact";
import { WhatsAppIcon } from "./icons";

/**
 * Floating WhatsApp button. Shows once the visitor scrolls past the hero and
 * hides over the Contact section, which already has its own WhatsApp button.
 */
export function WhatsAppFloat() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.7 : false;
      setVisible(pastHero && !atContact);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href={whatsappLink(t.contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsappFloat}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`wa-float group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25d366] pl-4 pr-4 text-[#06281a] shadow-lg shadow-black/30 transition-all duration-500 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[1fr]">
        <span className="overflow-hidden whitespace-nowrap text-sm font-semibold">{t.contact.whatsappFloat}</span>
      </span>
    </a>
  );
}
