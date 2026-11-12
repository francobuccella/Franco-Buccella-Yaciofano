import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fby-logo.png";
import { NAV_CTA_LABEL, NAV_LINKS, SITE } from "../content";
import { trackEvent } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  if (href.includes("#")) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line-soft">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5"
      >
        <a href="/#top" aria-label={`${SITE.name} — Inicio`} className="flex items-center gap-2">
          <img src={logo} alt={SITE.name} className="h-10 w-auto" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-deep"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "navbar" })}
            className="inline-flex items-center gap-2 rounded-card bg-gold px-3.5 py-2 text-sm font-semibold text-navy-deep shadow-card transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {NAV_CTA_LABEL}
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-6 bg-navy-deep" />
            <span className="h-0.5 w-6 bg-navy-deep" />
            <span className="h-0.5 w-6 bg-navy-deep" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line-soft bg-cream px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink-soft hover:text-navy-deep"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
