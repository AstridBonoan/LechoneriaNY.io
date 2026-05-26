import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
              Our Story
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
              Colombian home-style cooking in Queens
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brown-light">
              <p>
                Lechoneria New York is a family-friendly neighborhood restaurant
                serving authentic Colombian food the way it&apos;s made at home —
                generous portions, traditional recipes, and flavors you&apos;ll
                recognize if you grew up with them.
              </p>
              <p>
                From slow-roasted lechona and tamales to a full bandeja paisa,
                every dish is prepared with care. Whether you&apos;re stopping
                in for breakfast, grabbing lunch, or sharing a meal with family,
                you&apos;re always welcome here.
              </p>
              <p>
                Located in Maspeth, Queens — a casual spot where locals come
                for real Colombian comfort food.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=500&fit=crop"
              alt="Family-style dining at a casual restaurant"
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
