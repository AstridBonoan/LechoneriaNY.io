const BASE = import.meta.env.BASE_URL

export const ASSETS = {
  logo: `${BASE}images/logo.png`,
  hero: `${BASE}images/food-spread.png`,
  lechona: `${BASE}images/lechona.png`,
  picada: `${BASE}images/picada-platter.png`,
  foodSpread: `${BASE}images/food-spread.png`,
  storefrontPatio: `${BASE}images/storefront-patio.png`,
  storefrontFlag: `${BASE}images/storefront-flag.png`,
}

export const RESTAURANT = {
  name: 'Lechoneria New York',
  welcome: 'Welcome to Lechoneria New York',
  subtitle: 'Colombian Restaurant',
  tagline: 'Authentic Colombian Food in Queens',
  subtext: 'Traditional flavors, homemade meals, and family-style dining',
  locationCount: '2 locations in New York',
  orderUrl: 'https://www.lechonerianewyorkny.com/lechoneria-new-york/',
  menuUrl: 'https://www.lechonerianewyorkny.com/lechoneria-new-york/',
}

export const LOCATIONS = [
  {
    id: 'queens',
    name: 'Queens',
    address: '52-27 69th St',
    city: 'Queens, NY 11378',
    fullAddress: '52-27 69th St, Queens, NY 11378',
    phone: '(718) 865-2346',
    phoneHref: 'tel:+17188652346',
    orderUrl:
      'https://www.lechonerianewyorkny.com/lechoneria-new-york/menu/52-27-69th-St/',
    mapsLink: 'https://maps.google.com/?q=52-27+69th+St,+Queens,+NY+11378',
    mapsEmbed:
      'https://maps.google.com/maps?q=52-27+69th+St,+Queens,+NY+11378&output=embed',
    hours: [
      { days: 'Sunday', time: '8:00 AM – 9:00 PM' },
      { days: 'Monday', time: '9:00 AM – 9:00 PM' },
      { days: 'Tuesday', time: '9:00 AM – 9:00 PM' },
      { days: 'Wednesday', time: '9:00 AM – 9:00 PM' },
      { days: 'Thursday', time: '9:00 AM – 9:00 PM' },
      { days: 'Friday', time: '8:00 AM – 10:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 10:00 PM' },
    ],
  },
  {
    id: 'jackson-heights',
    name: 'Jackson Heights',
    address: '84-17 Northern Blvd',
    city: 'Jackson Heights, NY 11372',
    fullAddress: '84-17 Northern Blvd, Jackson Heights, NY 11372',
    phone: '(646) 956-5024',
    phoneHref: 'tel:+16469565024',
    orderUrl:
      'https://www.lechonerianewyorkny.com/lechoneria-new-york/menu/84-17-Northern-Blvd/',
    mapsLink:
      'https://maps.google.com/?q=84-17+Northern+Blvd,+Jackson+Heights,+NY+11372',
    mapsEmbed:
      'https://maps.google.com/maps?q=84-17+Northern+Blvd,+Jackson+Heights,+NY+11372&output=embed',
    hours: [
      { days: 'Sunday – Thursday', time: '9:00 AM – 10:00 PM' },
      { days: 'Friday – Saturday', time: '9:00 AM – 12:00 AM' },
    ],
  },
]

export const POPULAR_ITEMS = [
  {
    name: 'Lechona Colombiana',
    price: '$13.47',
    description:
      'Mezcla horneada de arroz, arbeja y cerdo, acompañado de cuero crocante y arepa.',
    image: ASSETS.lechona,
  },
  {
    name: 'Tamal Tolimense',
    price: '$13.47',
    description:
      'Mezcla de harina de maiz, arroz, pollo, costilla de cerdo, huevo, tocino, papa, zanahoria.',
    image: ASSETS.foodSpread,
  },
  {
    name: 'Picada para (2) Personas',
    price: '$29.93',
    description:
      'Carne asada, pechuga asada, chorizo, morcilla, costillas de cerdo, papa criolla, maduro y arepa blanca.',
    image: ASSETS.picada,
  },
]

export const MENU_CATEGORIES = [
  {
    title: 'Typical Dishes',
    description: 'Lechona, tamales, bandeja paisa — Colombian classics made fresh daily.',
    image: ASSETS.lechona,
  },
  {
    title: 'Breakfast & Lunch',
    description: 'Caldo de costilla, calentado paisa, and hearty morning favorites.',
    image: ASSETS.foodSpread,
  },
  {
    title: 'Antojitos',
    description: 'Arepas, empanadas, chicharrón, and choripapas for sharing.',
    image: ASSETS.picada,
  },
  {
    title: 'Desserts',
    description: 'Arroz con leche, cheesecake, and sweet Colombian treats.',
    image: ASSETS.foodSpread,
  },
  {
    title: 'Drinks',
    description: 'Fresh jugos, limonadas, and Colombian sodas.',
    image: ASSETS.picada,
  },
]

export const GALLERY_IMAGES = [
  { src: ASSETS.lechona, alt: 'Lechona Colombiana with crispy pork skin and arepa' },
  { src: ASSETS.foodSpread, alt: 'Traditional Colombian dishes spread' },
  { src: ASSETS.picada, alt: 'Picada platter with grilled meats and sides' },
  { src: ASSETS.storefrontPatio, alt: 'Lechoneria NY storefront with outdoor patio' },
  { src: ASSETS.storefrontFlag, alt: 'Lechoneria NY entrance with Colombian flag' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
  { label: 'Menu', href: '#menu' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
]
