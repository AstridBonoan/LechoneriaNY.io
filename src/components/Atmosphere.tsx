import { GALLERY_IMAGES } from '../data/restaurant'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Atmosphere() {
  const ref = useFadeIn()

  return (
    <section className="py-10 sm:py-12" ref={ref}>
      <div className="fade-in-section mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-5">
          <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
            Our Restaurant
          </p>
          <h2 className="mt-1 text-2xl font-bold text-brown sm:text-3xl">
            Real food, real neighborhood
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-brown-light sm:text-base">
            From our kitchen to your table — Colombian comfort food, casual dining,
            and outdoor seating in Queens.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
