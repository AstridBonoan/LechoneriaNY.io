import { ASSETS, RESTAURANT } from '../data/restaurant'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section className="relative">
      <img
        src={ASSETS.hero}
        alt="Colombian food at Lechoneria New York"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-brown/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-14">
        <Logo className="mb-5 h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52" />

        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          {RESTAURANT.welcome}
        </h1>
        <div className="mx-auto mt-2 h-0.5 w-10 bg-gold" aria-hidden="true" />
        <p className="mt-2 text-base text-beige/95 sm:text-lg">{RESTAURANT.subtitle}</p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-beige/85 sm:text-base">
          {RESTAURANT.subtext}
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={RESTAURANT.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-terracotta px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark sm:text-base"
          >
            Order Online
          </a>
          <a
            href="#menu"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/70 px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:text-base"
          >
            View Menu
          </a>
        </div>

        <p className="mt-4 text-sm text-beige/90">{RESTAURANT.locationCount}</p>
        <SocialIcons className="mt-4 text-white" />
      </div>
    </section>
  )
}
