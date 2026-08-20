import { useState } from "react";
import logo from "../assets/fby-logo.png";
import { NAV_LINKS, SITE } from "../content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line-soft">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <a href="#top" aria-label={`${SITE.name} — Inicio`} className="flex items-center gap-2">
          <img src={logo} alt={SITE.name} className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-navy-deep" />
          <span className="h-0.5 w-6 bg-navy-deep" />
          <span className="h-0.5 w-6 bg-navy-deep" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line-soft bg-cream px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink-soft hover:text-navy-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
