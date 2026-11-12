import { trackEvent } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribime por WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-stamp transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 print:hidden"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
