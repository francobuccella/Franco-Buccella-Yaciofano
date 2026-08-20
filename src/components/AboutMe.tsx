import portrait from "../assets/franco.jpg";
import { ABOUT, SITE } from "../content";

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {ABOUT.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{ABOUT.title}</h2>

          <div className="mt-6 space-y-4 text-ink-soft">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {ABOUT.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-card border border-line bg-paper px-4 py-3 shadow-card"
              >
                <p className="font-semibold text-navy-deep">{card.title}</p>
                <p className="text-sm text-ink-soft">{card.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={portrait}
            alt={`Retrato ilustrado de ${SITE.name}`}
            className="w-full max-w-sm rounded-card border border-line shadow-card"
          />
          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-navy-deep">{SITE.name}</p>
            <p className="text-sm uppercase tracking-wide text-ink-soft">{SITE.role}</p>
            <p className="mt-2 text-sm text-ink-soft">{SITE.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
