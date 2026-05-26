import { useState } from 'react'
import { NAV_LINKS, RESTAURANT } from '../data/restaurant'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="text-lg font-semibold text-brown sm:text-xl"
          onClick={closeMenu}
        >
          {RESTAURANT.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-brown-light transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESTAURANT.phoneHref}
              className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              Call Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brown md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-beige bg-cream px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-brown transition-colors hover:bg-beige"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={RESTAURANT.phoneHref}
                className="block rounded-full bg-terracotta px-5 py-3 text-center text-base font-medium text-white"
                onClick={closeMenu}
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
