import { POPULAR_ITEMS } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function SignatureDishes() {
  const ref = useFadeIn()

  return (
    <section id="dishes" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Menu
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Popular items
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POPULAR_ITEMS.map((dish) => (
            <article
              key={dish.name}
              className="overflow-hidden rounded-2xl bg-cream shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
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
