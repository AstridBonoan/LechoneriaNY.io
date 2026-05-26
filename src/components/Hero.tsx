import { ASSETS, RESTAURANT } from '../data/restaurant'
import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh]">
      <img
        src={ASSETS.banner}
        alt="Colombian food at Lechoneria New York"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-brown/65" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[80vh] sm:px-6">
        <img
          src={ASSETS.logo}
          alt={RESTAURANT.name}
          className="mb-6 h-28 w-auto sm:h-36 md:h-44"
        />

        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {RESTAURANT.welcome}
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" aria-hidden="true" />
        <p className="mt-3 text-lg text-beige/95 sm:text-xl">{RESTAURANT.subtitle}</p>

        <a
          href={RESTAURANT.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-terracotta px-10 py-3 text-base font-medium text-white transition-colors hover:bg-terracotta-dark"
        >
          Order Online
        </a>

        <p className="mt-5 text-sm text-beige/90 sm:text-base">{RESTAURANT.locationCount}</p>

        <SocialIcons className="mt-6 text-white" />
      </div>
    </section>
  )
}
