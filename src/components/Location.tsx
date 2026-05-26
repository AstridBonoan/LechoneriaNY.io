import { LOCATIONS } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Location() {
  const ref = useFadeIn()

  return (
    <section id="locations" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Locations
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Lechoneria New York locations
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((location) => (
            <article
              key={location.id}
              className="rounded-2xl border border-beige bg-cream p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-terracotta"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-brown">
                    {location.name}
                  </h3>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-brown-light">
                    {location.address}
                    <br />
                    {location.city}
                  </address>
                  <a
                    href={location.phoneHref}
                    className="mt-2 inline-flex min-h-[44px] items-center text-sm font-medium text-terracotta hover:text-terracotta-dark"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl">
                <iframe
                  title={`${location.name} location map`}
                  src={location.mapsEmbed}
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-brown">Order Online:</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-brown px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brown-light"
                  >
                    Pickup
                  </a>
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-brown px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brown-light"
                  >
                    Delivery
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-brown">Hours</p>
                <ul className="mt-2 space-y-1">
                  {location.hours.map((entry) => (
                    <li
                      key={entry.days}
                      className="flex justify-between gap-4 text-xs text-brown-light sm:text-sm"
                    >
                      <span>{entry.days}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-brown-light/70">
                  Hours may vary by location.
                </p>
              </div>

              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-terracotta hover:text-terracotta-dark"
              >
                Get Directions →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
