import { LOCATIONS, RESTAURANT, SOCIAL_LINKS } from '../data/restaurant'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-beige/20 bg-brown py-8 text-beige">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="mb-3 h-14 w-14 object-contain" />
            <p className="text-sm text-beige/80">
              Authentic Colombian cuisine in Queens. Two locations, open daily.
            </p>
            <a
              href={RESTAURANT.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[40px] items-center rounded-md border border-beige/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Order Online
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Business Hours
            </p>
            {LOCATIONS.map((location) => (
              <div key={location.id} className="mt-3">
                <p className="text-sm font-medium text-white">{location.address}</p>
                <ul className="mt-1 space-y-0.5">
                  {location.hours.map((entry) => (
                    <li key={entry.days} className="text-xs text-beige/80">
                      <span className="font-medium">{entry.days}</span> {entry.time}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Contact Us
            </p>
            {LOCATIONS.map((location) => (
              <div key={location.id} className="mt-3">
                <address className="not-italic text-xs leading-relaxed text-beige/80 sm:text-sm">
                  {location.fullAddress}
                </address>
                <a
                  href={location.phoneHref}
                  className="mt-0.5 inline-block text-sm text-beige/80 hover:text-white"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Social Media
            </p>
            <SocialIcons className="mt-3 text-beige/80" />
            <ul className="mt-2 space-y-0.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-beige/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-beige/20 pt-4 text-center text-xs text-gold sm:text-sm">
          <p>Copyright {RESTAURANT.name} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
