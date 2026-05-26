import { LOCATIONS } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Location() {
  const ref = useFadeIn()

  return (
    <section id="locations" className="bg-beige/50 py-10 sm:py-12" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Locations
          </p>
          <h2 className="mt-1 text-2xl font-bold text-brown sm:text-3xl">
            Find us in Queens
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {LOCATIONS.map((location) => (
            <article
              key={location.id}
              className="overflow-hidden rounded-xl border border-beige bg-cream shadow-sm"
            >
              <iframe
                title={`${location.name} location map`}
                src={location.mapsEmbed}
                className="h-44 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="p-4">
                <h3 className="text-base font-bold uppercase tracking-wide text-brown">
                  {location.name}
                </h3>
                <address className="mt-1 not-italic text-sm text-brown-light">
                  {location.fullAddress}
                </address>
                <a
                  href={location.phoneHref}
                  className="mt-1 inline-block text-sm font-medium text-terracotta hover:text-terracotta-dark"
                >
                  {location.phone}
                </a>

                <div className="mt-3 flex gap-2">
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] flex-1 items-center justify-center rounded-md bg-brown px-3 py-2 text-xs font-medium text-white hover:bg-brown-light sm:text-sm"
                  >
                    Pickup
                  </a>
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] flex-1 items-center justify-center rounded-md bg-brown px-3 py-2 text-xs font-medium text-white hover:bg-brown-light sm:text-sm"
                  >
                    Delivery
                  </a>
                  <a
                    href={location.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] flex-1 items-center justify-center rounded-md border border-beige px-3 py-2 text-xs font-medium text-brown hover:bg-beige sm:text-sm"
                  >
                    Directions
                  </a>
                </div>

                <ul className="mt-3 space-y-0.5 border-t border-beige pt-3">
                  {location.hours.map((entry) => (
                    <li
                      key={entry.days}
                      className="flex justify-between gap-3 text-xs text-brown-light sm:text-sm"
                    >
                      <span className="font-medium text-brown">{entry.days}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
