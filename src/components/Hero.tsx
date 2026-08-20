import monogram from "../assets/fby-monogram.png";
import { HERO, SITE } from "../content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-navy-soft)_0%,transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-20 text-center">
        <img
          src={monogram}
          alt={`Monograma FBY — ${SITE.name}`}
          className="mb-6 h-16 w-16 rounded-full border border-gold/40 bg-navy p-2"
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
          {HERO.eyebrow}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {HERO.title}
        </h1>

        <p className="mt-5 max-w-xl text-lg text-cream/80">{HERO.subtitle}</p>

        <p className="mt-3 text-sm text-gold-soft">{SITE.location}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={HERO.ctaPrimary.href}
            className="rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5"
          >
            {HERO.ctaPrimary.label}
          </a>
          <a
            href={HERO.ctaSecondary.href}
            className="rounded-card border border-cream/30 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            {HERO.ctaSecondary.label}
          </a>
        </div>

        <div className="mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {HERO.stamps.map((stamp, i) => (
            <div
              key={i}
              className="rounded-card border border-cream/15 bg-cream/5 px-3 py-4 text-center"
            >
              {stamp.value && (
                <p className="text-lg font-bold text-gold-soft">{stamp.value}</p>
              )}
              <p className="text-sm font-semibold text-cream">{stamp.title}</p>
              <p className="mt-1 text-xs text-cream/60">{stamp.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
