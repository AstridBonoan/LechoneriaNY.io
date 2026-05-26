import { HIGHLIGHTS } from '../data/restaurant'

export default function Highlights() {
  return (
    <section className="border-b border-beige bg-cream py-6">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-beige bg-white/70 px-4 py-3"
          >
            <p className="font-semibold text-brown">{item.title}</p>
            <p className="mt-1 text-sm leading-snug text-brown-light">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
