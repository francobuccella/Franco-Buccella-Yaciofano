import { useState, type FormEvent } from "react";
import { CONTACT, SITE } from "../content";
import { trackEvent } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const whatsappHref = whatsappUrl();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(CONTACT.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        trackEvent("form_submit", { interest: String(data.get("interes") ?? "") });
        setStatus("success");
        form.reset();
      } else {
        trackEvent("form_error");
        setStatus("error");
      }
    } catch {
      trackEvent("form_error");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{CONTACT.title}</h2>
        <p className="mt-4 text-ink-soft">{CONTACT.description}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5 rounded-card border border-line bg-paper p-6 shadow-card sm:p-8"
      >
        <div>
          <label htmlFor="nombre" className="text-sm font-semibold text-navy-deep">
            Nombre*
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="¿Cómo te llamás?"
            className="mt-2 w-full rounded-card border border-line bg-cream px-4 py-3 text-ink outline-none focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="contacto" className="text-sm font-semibold text-navy-deep">
            WhatsApp o mail*
          </label>
          <input
            id="contacto"
            name="contacto"
            type="text"
            required
            placeholder="Tu teléfono o tu mail"
            className="mt-2 w-full rounded-card border border-line bg-cream px-4 py-3 text-ink outline-none focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="interes" className="text-sm font-semibold text-navy-deep">
            ¿Qué te interesa?
          </label>
          <select
            id="interes"
            name="interes"
            className="mt-2 w-full rounded-card border border-line bg-cream px-4 py-3 text-ink outline-none focus:border-gold"
          >
            {CONTACT.interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="text-sm font-semibold text-navy-deep">
            Contame un poco más (opcional)
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Tu situación, tus proyectos, lo que te preocupa hoy..."
            className="mt-2 w-full rounded-card border border-line bg-cream px-4 py-3 text-ink outline-none focus:border-gold"
          />
        </div>

        <p className="text-xs text-ink-soft">{CONTACT.responseNote}</p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : CONTACT.submitLabel}
        </button>

        {status === "success" && (
          <p className="text-sm font-medium text-navy-deep">
            ¡Gracias! Recibí tu consulta y te voy a escribir a la brevedad.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-700">
            Hubo un problema al enviar. Probá de nuevo o escribime por WhatsApp.
          </p>
        )}

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "contact_form" })}
          className="block text-center text-sm font-semibold text-navy-deep hover:text-gold-deep"
        >
          {CONTACT.whatsappLabel}
        </a>

        <p className="text-center text-xs text-ink-soft">{CONTACT.privacyNote}</p>
      </form>

      <p className="mt-8 text-center text-sm text-ink-soft">
        {CONTACT.directLabel}{" "}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "contact_direct" })}
          className="font-semibold text-navy-deep hover:text-gold-deep"
        >
          {SITE.whatsappDisplay}
        </a>
      </p>
    </section>
  );
}
