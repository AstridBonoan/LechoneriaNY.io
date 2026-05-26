import { SIGNATURE_DISHES } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function SignatureDishes() {
  const ref = useFadeIn()

  return (
    <section id="dishes" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Favorites
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Signature dishes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-brown-light">
            Customer favorites and Colombian classics you have to try.
          </p>
        </div>

        <div className="mt-10 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
          {SIGNATURE_DISHES.map((dish) => (
            <article
              key={dish.name}
              className="w-72 shrink-0 snap-start overflow-hidden rounded-2xl bg-cream shadow-sm sm:w-auto"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-brown">{dish.name}</h3>
                  <span className="shrink-0 text-sm font-medium text-gold">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brown-light">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
