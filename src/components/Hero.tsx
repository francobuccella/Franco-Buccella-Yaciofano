import portrait from "../assets/franco.jpg";
import { HERO, SITE } from "../content";
import { trackEvent } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-navy-soft)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 lg:pt-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft sm:text-sm">
              {HERO.eyebrow}
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
              {HERO.title}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-cream/80 lg:max-w-lg">{HERO.subtitle}</p>

            <p className="mt-3 text-sm text-gold-soft">{SITE.location}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
                className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {HERO.ctaPrimary.label}
              </a>
              <a
                href={HERO.ctaSecondary.href}
                onClick={() => trackEvent("cta_click", { location: "hero_form" })}
                className="inline-flex items-center justify-center rounded-card border border-cream/30 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                {HERO.ctaSecondary.label}
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src={portrait}
              alt={HERO.photoAlt}
              width={352}
              height={440}
              className="h-28 w-28 rounded-full border-2 border-gold/50 object-cover object-top shadow-stamp lg:h-[440px] lg:w-[352px] lg:rounded-card"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/15 pt-8 lg:grid-cols-4">
          {HERO.proof.map((item) => (
            <div key={item.label} className="text-center lg:text-left">
              <p className="text-lg font-bold text-gold-soft">{item.value}</p>
              <p className="mt-1 text-xs text-cream/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
