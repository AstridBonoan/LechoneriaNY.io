import { RESTAURANT } from '../data/restaurant'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh]">
      <img
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&h=800&fit=crop"
        alt="Warm Colombian restaurant dining room"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-brown/60" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[80vh] sm:px-6 sm:pb-16">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-beige/90">
          <span>{RESTAURANT.rating} ★</span>
          <span aria-hidden="true">•</span>
          <span>{RESTAURANT.cuisine}</span>
          <span aria-hidden="true">•</span>
          <span className="text-sage font-medium">Open</span>
        </div>

        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {RESTAURANT.tagline}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-beige/95 sm:text-lg">
          {RESTAURANT.subtext}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#menu"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-terracotta px-8 py-3 text-base font-medium text-white transition-colors hover:bg-terracotta-dark"
          >
            View Menu
          </a>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Order / Call Now
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-beige/90">
          <a
            href={RESTAURANT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            Directions
          </a>
          <span aria-hidden="true">•</span>
          <a href={RESTAURANT.phoneHref} className="underline-offset-2 hover:underline">
            {RESTAURANT.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
