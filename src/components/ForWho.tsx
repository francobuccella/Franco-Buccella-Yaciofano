import { FOR_WHO } from "../content";

export default function ForWho() {
  return (
    <section id="para-quien" className="bg-paper py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {FOR_WHO.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{FOR_WHO.title}</h2>

        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {FOR_WHO.items.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-card border border-line bg-cream px-5 py-4 shadow-card"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-deep">
                ✓
              </span>
              <div>
                <p className="font-semibold text-navy-deep">{item.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                {"link" in item && item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-navy-deep underline decoration-gold underline-offset-4 hover:text-gold-deep"
                  >
                    {item.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
