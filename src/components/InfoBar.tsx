import { LOCATIONS, RESTAURANT } from '../data/restaurant'

export default function InfoBar() {
  return (
    <section className="border-b border-beige bg-beige/60">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-4 sm:grid-cols-3 sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            Call to Order
          </p>
          <div className="mt-1 space-y-0.5">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={loc.phoneHref}
                className="block text-sm font-medium text-brown hover:text-terracotta"
              >
                {loc.name}: {loc.phone}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            Locations
          </p>
          <p className="mt-1 text-sm text-brown-light">{RESTAURANT.locationCount}</p>
          <p className="text-sm text-brown-light">Queens &amp; Jackson Heights</p>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            Open Today
          </p>
          <p className="mt-1 text-sm text-brown-light">Queens: 8 AM – 10 PM</p>
          <p className="text-sm text-brown-light">Jackson Heights: 9 AM – 10 PM</p>
        </div>
      </div>
    </section>
  )
}
