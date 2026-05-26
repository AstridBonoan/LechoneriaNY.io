import { ASSETS, RESTAURANT } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="py-10 sm:py-12" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
              About Us
            </p>
            <h2 className="mt-1 text-2xl font-bold text-brown sm:text-3xl">
              Colombian home-style cooking in Queens
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-brown-light sm:text-base">
              {RESTAURANT.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={ASSETS.lechona}
              alt="Lechona Colombiana with arepa"
              className="col-span-2 aspect-[16/10] w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src={ASSETS.storefrontPatio}
              alt="Lechoneria NY storefront with outdoor patio"
              className="aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src={ASSETS.picada}
              alt="Picada platter with grilled meats"
              className="aspect-square w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
