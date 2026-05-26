import { ASSETS, RESTAURANT } from '../data/restaurant'

type LogoProps = {
  className?: string
}

export default function Logo({ className = 'h-14 w-14' }: LogoProps) {
  return (
    <img
      src={ASSETS.logo}
      alt={RESTAURANT.name}
      className={`object-contain ${className}`}
      decoding="async"
    />
  )
}
