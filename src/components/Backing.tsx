import { BACKING } from "../content";

export default function Backing() {
  return (
    <section id="respaldo" className="bg-navy-deep py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {BACKING.eyebrow}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">{BACKING.title}</h2>
          <p className="mt-4 text-cream/75">{BACKING.description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BACKING.columns.map((col) => (
            <div
              key={col.title}
              className="rounded-card border border-cream/15 bg-cream/5 p-6"
            >
              <h3 className="text-lg font-bold text-gold-soft">{col.title}</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {col.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-cream">{stat.value}</p>
                    <p className="mt-1 text-xs text-cream/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-cream/70">
          {BACKING.highlight}
        </p>

        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-wide text-gold-soft">
          {BACKING.footnote}
        </p>
      </div>
    </section>
  );
}
