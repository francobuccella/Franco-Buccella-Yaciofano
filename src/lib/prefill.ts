/**
 * Permite que un botón (una tarjeta de Soluciones, una calculadora) deje el formulario de contacto
 * con el interés y el mensaje ya completados. Se guarda en sessionStorage para que también funcione
 * si el botón está en otra página (por ejemplo, la calculadora de jubilación).
 */

const KEY = "contact-prefill";
export const PREFILL_EVENT = "contact-prefill";

export type Prefill = { interest?: string; message?: string };

export function setPrefill(prefill: Prefill) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(prefill));
  } catch {
    // sin sessionStorage el formulario simplemente queda vacío
  }
  window.dispatchEvent(new Event(PREFILL_EVENT));
}

export function readPrefill(): Prefill {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Prefill) : {};
  } catch {
    return {};
  }
}

export function clearPrefill() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // nada que limpiar
  }
}
