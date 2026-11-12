import { SITE } from "../content";

/** Link a WhatsApp con el mensaje escrito de antemano (editable en content.ts → SITE.whatsappMessage). */
export function whatsappUrl(message: string = SITE.whatsappMessage) {
  return `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(message)}`;
}
