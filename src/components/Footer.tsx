import { ASSETS, LOCATIONS, RESTAURANT, SOCIAL_LINKS } from '../data/restaurant'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-beige/20 bg-brown py-12 text-beige">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={ASSETS.logo}
              alt={RESTAURANT.name}
              className="mb-4 h-16 w-16 object-contain"
            />
            <a
              href={RESTAURANT.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-md border border-beige/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Order Online
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Business Hours
            </p>
            {LOCATIONS.map((location) => (
              <div key={location.id} className="mt-4">
                <p className="text-sm font-medium text-white">{location.address}</p>
                <ul className="mt-2 space-y-1">
                  {location.hours.map((entry) => (
                    <li key={entry.days} className="text-xs text-beige/80 sm:text-sm">
                      <span className="font-medium">{entry.days}</span>{' '}
                      {entry.time}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </p>
            {LOCATIONS.map((location) => (
              <div key={location.id} className="mt-4">
                <address className="not-italic text-sm leading-relaxed text-beige/80">
                  {location.fullAddress}
                </address>
                <a
                  href={location.phoneHref}
                  className="mt-1 inline-flex min-h-[44px] items-center text-sm text-beige/80 hover:text-white"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Social Media
            </p>
            <SocialIcons className="mt-4 text-beige/80" />
            <ul className="mt-3 space-y-1">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-beige/80 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-beige/20 pt-6 text-center text-sm text-gold">
          <p>Copyright {RESTAURANT.name} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
