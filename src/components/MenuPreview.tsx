import { MENU_CATEGORIES, POPULAR_ITEMS, RESTAURANT } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function MenuPreview() {
  const ref = useFadeIn()

  return (
    <section id="menu" className="bg-beige/50 py-10 sm:py-12" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
              Menu
            </p>
            <h2 className="mt-1 text-2xl font-bold text-brown sm:text-3xl">
              Explore our menu
            </h2>
            <p className="mt-2 max-w-xl text-sm text-brown-light sm:text-base">
              Traditional Colombian dishes for breakfast, lunch, and dinner.
              Order online for pickup or delivery.
            </p>
          </div>
          <a
            href={RESTAURANT.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-white hover:bg-terracotta-dark"
          >
            View Full Menu
          </a>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-brown">Popular items</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {POPULAR_ITEMS.map((dish) => (
              <article
                key={dish.name}
                className="flex gap-3 rounded-xl border border-beige bg-cream p-3"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-brown">{dish.name}</h4>
                    <span className="shrink-0 text-sm font-medium text-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-brown-light">
                    {dish.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-xl bg-cream shadow-sm"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brown">{category.title}</h3>
                <p className="mt-1 text-sm text-brown-light">{category.description}</p>
                <p className="mt-2 text-xs text-brown-light/80">{category.items}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
