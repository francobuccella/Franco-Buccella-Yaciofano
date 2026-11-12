import { ANALYTICS } from "../content";

type EventParams = Record<string, string | number>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: ((name: string, options?: { props?: EventParams }) => void) & { q?: unknown[] };
  }
}

function addScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

/** Carga Google Analytics 4 y/o Plausible, solo si hay IDs configurados en content.ts → ANALYTICS. */
export function initAnalytics() {
  if (ANALYTICS.ga4Id) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", ANALYTICS.ga4Id);
    addScript(`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`);
  }

  if (ANALYTICS.plausibleDomain) {
    window.plausible =
      window.plausible ||
      Object.assign(
        (...args: unknown[]) => {
          (window.plausible!.q = window.plausible!.q || []).push(args);
        },
        {},
      );
    addScript("https://plausible.io/js/script.js", { "data-domain": ANALYTICS.plausibleDomain });
  }
}

/** Registra un evento (clic en WhatsApp, envío del formulario, etc.). No hace nada si no hay medición configurada. */
export function trackEvent(name: string, params?: EventParams) {
  try {
    window.gtag?.("event", name, params);
    window.plausible?.(name, params ? { props: params } : undefined);
  } catch {
    // la medición nunca debe romper el sitio
  }
}
