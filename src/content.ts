// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el enlace de Instagram y de pedidos aportados por el cliente
// (ver /data/contacto.json).

export const content = {
  name: 'PURO Heladeria y Cafe de especialidad',
  shortName: 'PURO',
  tagline: 'Heladería artesanal y café de especialidad en Ciutat Vella, Valencia',
  description:
    'PURO es una heladería artesanal argentina y café de especialidad en pleno centro histórico de Valencia, a un paso de la Plaça de la Reina. Elaboramos gelato 100% natural, sin colorantes, conservantes ni aditivos químicos, con sabores que van desde los clásicos hasta combinaciones más atrevidas. Acompaña tu helado con un café de especialidad recién hecho, un affogato o un chocolate caliente, para tomar en nuestra sala interior o para llevar mientras paseas por el barrio.',
  metaDescription:
    'Heladería artesanal y café de especialidad en Ciutat Vella, Valencia. Gelato 100% natural sin aditivos, café de especialidad y affogato junto a la Plaça de la Reina.',
  keywords: [
    'PURO Heladeria y Cafe de especialidad',
    'Valencia',
    'Ciutat Vella',
    'heladería artesanal',
    'helado artesanal Valencia',
    'café de especialidad',
    'heladería argentina',
    'Plaça de la Reina',
  ],
  priceRange: '',
  priceRangeDisplay: '',
  cuisine: 'Heladería artesanal y café de especialidad',

  rating: { value: 4.8, count: 409, countDisplay: '409 reseñas' },
  highlights: [
    'Gelato artesanal 100% natural, sin colorantes ni aditivos químicos.',
    'Heladería de raíz argentina, con sabores clásicos y de autor.',
    'Café de especialidad, ideal para acompañar con un affogato.',
    'Apto para niños y grupos, con acceso y aseo adaptados.',
  ],

  address: {
    streetAddress: 'Pça. de la Reina, 19',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46003',
    addressCountry: 'ES',
    full: 'Pça. de la Reina, 19, Ciutat Vella, 46003 València, Valencia',
  },
  geo: { lat: 39.4746781, lng: -0.3750308 },

  phone: '+34 633 17 53 00',
  phoneDisplay: '633 17 53 00',
  whatsappNumber: '34633175300',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/puro-heladeria-y-cafe-de-especialidad/',

  social: {
    instagram: 'https://www.instagram.com/puro_heladosycafe',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  // Enlace de pedido a domicilio/recogida aportado por el cliente (Just Eat).
  orderUrl: 'https://www.just-eat.es/restaurants-puro-heladeria-y-cafe-valencia/menu',

  hours: [
    { day: 'Lunes', hours: '11:30 – 15:00 y 18:00 – 23:30' },
    { day: 'Martes', hours: '11:30 – 15:00 y 18:00 – 23:30' },
    { day: 'Miércoles', hours: '11:30 – 15:00 y 18:00 – 23:30' },
    { day: 'Jueves', hours: '11:30 – 15:30 y 18:00 – 23:30' },
    { day: 'Viernes', hours: '11:30 – 23:30' },
    { day: 'Sábado', hours: '11:00 – 00:00' },
    { day: 'Domingo', hours: '11:00 – 23:30' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'], opens: '11:30', closes: '15:00' },
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], opens: '18:00', closes: '23:30' },
    { dayOfWeek: ['Thursday'], opens: '11:30', closes: '15:30' },
    { dayOfWeek: ['Thursday'], opens: '18:00', closes: '23:30' },
    { dayOfWeek: ['Friday'], opens: '11:30', closes: '23:30' },
    { dayOfWeek: ['Saturday'], opens: '11:00', closes: '23:59' },
    { dayOfWeek: ['Sunday'], opens: '11:00', closes: '23:30' },
  ],

  // Servicios reales de la ficha de Google Maps (ver data/ficha.md), usados
  // en la sección de horario en lugar de un rango de precios que Google no
  // expone para este negocio.
  services: [
    'Comer en el local y para llevar',
    'Apto para niños y para grupos',
    'Aseos y acceso adaptados',
    'Pago con tarjeta, débito y sin contacto',
  ],

  gallery: [
    {
      src: '/gallery/puro-heladeria-cono-especialidad.jpg',
      alt: 'Cono de helado artesanal de tres sabores de PURO Heladeria y Cafe de especialidad, en la Plaça de la Reina de Valencia',
      credit: 'Aldana',
    },
    {
      src: '/gallery/puro-heladeria-mostrador-logo.jpg',
      alt: 'Logotipo y mostrador de PURO Heladeria y Cafe de especialidad en su local de Valencia',
      credit: 'M Lee',
    },
    {
      src: '/gallery/puro-heladeria-vitrina-sabores.jpg',
      alt: 'Vitrina con variedad de sabores de gelato artesanal en PURO Heladeria y Cafe de especialidad',
      credit: '',
    },
    {
      src: '/gallery/puro-heladeria-cafe-especialidad.jpg',
      alt: 'Café de especialidad con latte art servido en PURO Heladeria y Cafe de especialidad',
      credit: 'Lauren Nelson',
    },
    {
      src: '/gallery/puro-heladeria-sala-interior.jpg',
      alt: 'Sala interior de PURO Heladeria y Cafe de especialidad, con mesas y sillones en tonos azul marino',
      credit: '',
    },
    {
      src: '/gallery/puro-heladeria-fachada-menu.jpg',
      alt: 'Fachada de PURO Heladeria y Cafe de especialidad, con su vitrina de helados y cartel de café de especialidad',
      credit: '',
    },
    {
      src: '/gallery/puro-heladeria-ambiente-noche.jpg',
      alt: 'Ambiente nocturno junto a PURO Heladeria y Cafe de especialidad, en el centro histórico de Valencia',
      credit: 'L.V. Freitas',
    },
  ],

  // Reseñas reales de Google Maps, con atribución al autor (ver data/place.json).
  reviews: [
    {
      author: 'Aldana',
      text: 'Fui a por un helado y la verdad es que vale mucho la pena. Muy sabroso, con una buena variedad de sabores y una atención muy amable.',
    },
    {
      author: 'Florencia Calvi',
      text: 'Es el helado más rico que he probado en mi vida, por lejos. Los ingredientes son 100% naturales y puros, nada de endulzantes ni aditivos.',
    },
    {
      author: 'Gabriel Silic',
      text: 'Espectacular, hacía años que no comía un helado así, es una heladería artesanal argentina en el medio de Valencia.',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('PURO Heladeria y Cafe de especialidad, Pça. de la Reina 19, 46003 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=8542136341825824430&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de PURO Heladeria y Cafe de especialidad y tengo una consulta.'

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

// Pedido a domicilio/recogida a través de Just Eat (enlace aportado por el
// cliente). No hay sistema de reservas propio: no aplica a una heladería.
export function orderHref(): string {
  return content.orderUrl
}
