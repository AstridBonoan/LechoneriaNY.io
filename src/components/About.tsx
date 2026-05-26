import { ASSETS, RESTAURANT } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown sm:text-3xl">
            {RESTAURANT.welcome}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-brown" aria-hidden="true" />
          <p className="mt-3 text-lg text-brown-light">{RESTAURANT.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={ASSETS.food1}
              alt="Lechona Colombiana with arepa on a plate"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={ASSETS.food2}
              alt="Lechona takeout with arepa and crispy pork skin"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-brown-light">
          Colombian home-style cooking with traditional dishes like lechona,
          tamales, and bandeja paisa. A family-friendly neighborhood restaurant
          serving Queens with authentic flavors and generous portions.
        </p>
      </div>
    </section>
  )
}
