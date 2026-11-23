export const CONTACT_EMAIL = "lalmazan@lalmazan.com";

/** Mexico (+52) mobile, in the international format wa.me expects. */
export const WHATSAPP_NUMBER = "526145636233";
export const WHATSAPP_DISPLAY = "+52 614 563 6233";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
