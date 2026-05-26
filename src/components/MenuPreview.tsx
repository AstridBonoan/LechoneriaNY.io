import { RESTAURANT, MENU_CATEGORIES } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function MenuPreview() {
  const ref = useFadeIn()

  return (
    <section id="menu" className="bg-beige/50 py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Menu
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Explore our menu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-brown-light">
            Traditional Colombian dishes for every meal — from hearty breakfasts
            to antojitos and desserts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-2xl bg-cream shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brown">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-light">
                  {category.description}
                </p>
                <a
                  href={RESTAURANT.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-terracotta transition-colors hover:text-terracotta-dark"
                >
                  View Full Menu →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
