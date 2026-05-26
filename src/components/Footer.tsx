import { RESTAURANT } from '../data/restaurant'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Yelp', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-beige bg-brown py-12 text-beige">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">{RESTAURANT.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-beige/80">
              Authentic Colombian cuisine in Maspeth, Queens.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Address
            </p>
            <address className="mt-2 not-italic text-sm leading-relaxed text-beige/80">
              {RESTAURANT.fullAddress}
            </address>
            <a
              href={RESTAURANT.phoneHref}
              className="mt-2 inline-block text-sm text-beige/80 hover:text-white"
            >
              {RESTAURANT.phone}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Follow Us
            </p>
            <ul className="mt-2 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-beige/80 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-beige/20 pt-6 text-center text-sm text-beige/60">
          <p>&copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
