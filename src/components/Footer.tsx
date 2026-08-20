import logo from "../assets/fby-logo.png";
import { FOOTER, SITE } from "../content";

export default function Footer() {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}`;

  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <img src={logo} alt={SITE.name} className="h-8 w-auto opacity-90" />
        <p className="text-sm text-ink-soft">{FOOTER.tagline}</p>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-sm font-semibold text-navy-deep hover:text-gold">
          {SITE.whatsappDisplay}
        </a>
        <p className="text-xs text-ink-soft">{SITE.location}</p>
        <p className="mt-4 max-w-2xl text-xs text-ink-soft/80">{FOOTER.legal}</p>
        <p className="text-xs text-ink-soft/80">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
