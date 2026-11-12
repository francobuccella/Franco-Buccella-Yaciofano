import { FAQ as FAQ_CONTENT } from "../content";
import { trackEvent } from "../lib/analytics";

export default function FAQ() {
  return (
    <section id="preguntas" className="bg-paper py-20">
      <div className="mx-auto max-w-3xl px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {FAQ_CONTENT.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{FAQ_CONTENT.title}</h2>
      </div>

      <div className="mt-10 space-y-3">
        {FAQ_CONTENT.items.map((item) => (
          <details
            key={item.q}
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) trackEvent("faq_open", { question: item.q });
            }}
            className="group rounded-card border border-line bg-cream px-5 shadow-card"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-navy-deep [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="flex-none text-xl leading-none text-gold-deep transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-5 text-sm text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
