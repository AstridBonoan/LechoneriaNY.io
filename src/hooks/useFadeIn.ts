import { useEffect, useRef, type RefObject } from 'react'

export function useFadeIn<T extends HTMLElement = HTMLElement>(
  threshold = 0.1
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const target = element.querySelector('.fade-in-section') ?? element

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('visible')
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
