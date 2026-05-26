import { useState } from 'react'
import { NAV_LINKS, RESTAURANT } from '../data/restaurant'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-14 w-14 sm:h-16 sm:w-16" />
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
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
              href={RESTAURANT.orderUrl}
              className="rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark"
            >
              Call to Order
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brown lg:hidden"
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
        <div className="border-t border-beige bg-cream px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-brown transition-colors hover:bg-beige"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={RESTAURANT.orderUrl}
                className="block rounded-full bg-terracotta px-5 py-2.5 text-center text-base font-medium text-white"
                onClick={closeMenu}
              >
                Call to Order
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
