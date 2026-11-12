import { SOLUTIONS } from "../content";
import { trackEvent } from "../lib/analytics";
import { setPrefill } from "../lib/prefill";

export default function Solutions() {
  return (
    <section id="soluciones" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {SOLUTIONS.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{SOLUTIONS.title}</h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {SOLUTIONS.items.map((item) => (
          <div
            key={item.tag}
            className="flex flex-col rounded-card border border-line bg-paper p-6 shadow-card"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-deep">
              {item.tag}
            </span>
            <h3 className="mt-2 text-xl font-bold text-navy-deep">{item.title}</h3>
            <p className="mt-3 text-sm text-ink-soft">{item.description}</p>

            <ul className="mt-5 flex-1 space-y-3">
              {item.products.map((product) => (
                <li key={product.name} className="rounded-card border border-line-soft bg-cream px-4 py-3">
                  <p className="text-sm font-semibold text-navy-deep">{product.name}</p>
                  <p className="mt-0.5 text-sm text-ink">{product.text}</p>
                  <p className="mt-1 text-xs text-ink-soft">{product.meta}</p>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-ink-soft">{item.note}</p>

            <a
              href="#contacto"
              onClick={() => {
                setPrefill({ interest: item.interest });
                trackEvent("cta_click", { location: `solutions_${item.interest}` });
              }}
              className="mt-5 text-sm font-semibold text-navy-deep underline decoration-gold underline-offset-4 hover:text-gold-deep"
            >
              {item.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-ink-soft">{SOLUTIONS.disclaimer}</p>
    </section>
  );
}
