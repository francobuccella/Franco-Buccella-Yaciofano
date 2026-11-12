import { SOLUTIONS } from "../content";

export default function Solutions() {
  return (
    <section id="soluciones" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {SOLUTIONS.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{SOLUTIONS.title}</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SOLUTIONS.items.map((item) => (
          <div
            key={item.tag}
            className="flex flex-col rounded-card border border-line bg-paper p-6 shadow-card"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-deep">
              {item.tag}
            </span>
            <h3 className="mt-2 text-xl font-bold text-navy-deep">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm text-ink-soft">{item.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {item.products.map((product) => (
                <li
                  key={product}
                  className="rounded-full border border-line-soft bg-cream px-3 py-1 text-xs font-medium text-ink"
                >
                  {product}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="mt-6 text-sm font-semibold text-navy-deep hover:text-gold-deep"
            >
              {SOLUTIONS.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
