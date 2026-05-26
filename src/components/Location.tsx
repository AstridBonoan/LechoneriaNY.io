import { RESTAURANT } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Location() {
  const ref = useFadeIn()

  return (
    <section id="visit" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Visit Us
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Location &amp; hours
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Lechoneria New York on Google Maps"
              src={RESTAURANT.mapsEmbed}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-brown">Address</h3>
              <address className="mt-2 not-italic text-base leading-relaxed text-brown-light">
                {RESTAURANT.address}
                <br />
                {RESTAURANT.city}
              </address>
              <a
                href={RESTAURANT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center text-sm font-medium text-terracotta hover:text-terracotta-dark"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brown">Phone</h3>
              <a
                href={RESTAURANT.phoneHref}
                className="mt-2 inline-flex min-h-[44px] items-center text-base text-brown-light hover:text-terracotta"
              >
                {RESTAURANT.phone}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brown">Hours</h3>
              <ul className="mt-3 space-y-2">
                {RESTAURANT.hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex justify-between gap-4 text-sm text-brown-light sm:text-base"
                  >
                    <span className="font-medium text-brown">{entry.days}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-terracotta px-8 py-3 text-base font-medium text-white transition-colors hover:bg-terracotta-dark sm:w-auto"
            >
              Call to Order
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
