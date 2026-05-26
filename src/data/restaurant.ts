export const RESTAURANT = {
  name: 'Lechoneria New York',
  tagline: 'Authentic Colombian Food in Queens',
  subtext: 'Traditional flavors, homemade meals, and family-style dining',
  phone: '(347) 642-3025',
  phoneHref: 'tel:+13476423025',
  address: '52-27 69th St',
  city: 'Maspeth, Queens, NY 11378',
  fullAddress: '52-27 69th St, Maspeth, Queens, NY 11378',
  rating: '3.3',
  cuisine: 'Colombian',
  orderUrl: 'https://www.lechonerianewyorkny.com/lechoneria-new-york/menu/52-27-69th-St/',
  mapsEmbed:
    'https://maps.google.com/maps?q=52-27+69th+St,+Maspeth,+NY+11378&output=embed',
  mapsLink:
    'https://maps.google.com/?q=52-27+69th+St,+Maspeth,+NY+11378',
  hours: [
    { days: 'Sunday', time: '8:00 AM – 9:00 PM' },
    { days: 'Monday – Thursday', time: '9:00 AM – 9:00 PM' },
    { days: 'Friday – Saturday', time: '8:00 AM – 10:00 PM' },
  ],
}

export const MENU_CATEGORIES = [
  {
    title: 'Typical Dishes',
    description: 'Lechona, tamales, bandeja paisa — Colombian classics made fresh daily.',
    image:
      'https://images.unsplash.com/photo-1594040226829-7f251665c8d2?w=600&h=400&fit=crop',
  },
  {
    title: 'Breakfast & Lunch',
    description: 'Caldo de costilla, calentado paisa, and hearty morning favorites.',
    image:
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop',
  },
  {
    title: 'Antojitos',
    description: 'Arepas, empanadas, chicharrón, and choripapas for sharing.',
    image:
      'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop',
  },
  {
    title: 'Desserts',
    description: 'Arroz con leche, cheesecake, and sweet Colombian treats.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
  },
  {
    title: 'Drinks',
    description: 'Fresh jugos, limonadas, and Colombian sodas.',
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop',
  },
]

export const SIGNATURE_DISHES = [
  {
    name: 'Lechona Colombiana',
    description: 'Slow-roasted pork with rice, peas, crispy skin, and arepa.',
    price: '$13.47',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop',
  },
  {
    name: 'Bandeja Paisa',
    description: 'A hearty platter with beans, rice, chicharrón, egg, and more.',
    price: '$16.99',
    image:
      'https://images.unsplash.com/photo-1594040226829-7f251665c8d2?w=500&h=350&fit=crop',
  },
  {
    name: 'Tamal Tolimense',
    description: 'Corn masa filled with chicken, pork rib, egg, and vegetables.',
    price: '$13.47',
    image:
      'https://images.unsplash.com/photo-1582169292940-452f205a5e2d?w=500&h=350&fit=crop',
  },
  {
    name: 'Chicharrón',
    description: 'Golden, crispy fried pork belly — a Colombian favorite.',
    price: '$8.99',
    image:
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&h=350&fit=crop',
  },
  {
    name: 'Arepa de Maíz con Carne',
    description: 'Griddled corn arepa topped with seasoned shredded beef.',
    price: '$9.99',
    image:
      'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&h=350&fit=crop',
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop',
    alt: 'Colombian roasted pork dish close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop',
    alt: 'Casual family dining atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=450&fit=crop',
    alt: 'Arepas and appetizers on a table',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=450&fit=crop',
    alt: 'Warm restaurant interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=450&fit=crop',
    alt: 'Hearty Colombian lunch plate',
  },
  {
    src: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=450&fit=crop',
    alt: 'Fresh tropical juice drinks',
  },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Dishes', href: '#dishes' },
  { label: 'Visit', href: '#visit' },
]
