import { GALLERY_IMAGES } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Atmosphere() {
  const ref = useFadeIn()

  return (
    <section className="bg-beige/50 py-16 sm:py-24" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Atmosphere
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brown sm:text-3xl">
            Real food, real moments
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-brown-light">
            Casual dining, family meals, and the kind of food that brings people
            together.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.alt}
              className={`overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
