import { Link } from "react-router-dom";
import { RETIREMENT_TEASER } from "../content";
import { trackEvent } from "../lib/analytics";

export default function RetirementTeaser() {
  return (
    <section id="jubilacion" className="bg-navy-deep py-16 text-cream">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
          {RETIREMENT_TEASER.eyebrow}
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{RETIREMENT_TEASER.title}</h2>
        <p className="mt-4 text-cream/75">{RETIREMENT_TEASER.description}</p>

        <Link
          to={RETIREMENT_TEASER.ctaHref}
          onClick={() => trackEvent("cta_click", { location: "retirement_teaser" })}
          className="mt-8 inline-block rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5"
        >
          {RETIREMENT_TEASER.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
