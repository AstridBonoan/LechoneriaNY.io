import { ASSETS, RESTAURANT } from '../data/restaurant'

type LogoProps = {
  className?: string
}

export default function Logo({ className = 'h-10 w-10 object-contain' }: LogoProps) {
  return (
    <img
      src={ASSETS.logo}
      alt={RESTAURANT.name}
      className={className}
    />
  )
}
