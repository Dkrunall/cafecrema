const schema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'FoodEstablishment'],
  name: 'Café Crema',
  url: 'https://cafecrema.in',
  telephone: '+919930271349',
  priceRange: '₹₹₹',
  servesCuisine: ['Indian','Chinese','Continental','Asian'],
  hasMenu: 'https://cafecrema.in/menu',
  acceptsReservations: true,
  address: { '@type': 'PostalAddress',
    streetAddress: '1st Floor, Hotel Peninsula Grand, Sakinaka Junction',
    addressLocality: 'Andheri East', addressRegion: 'Mumbai',
    postalCode: '400072', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates',
    latitude: 19.1025, longitude: 72.8891 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    opens: '00:00', closes: '23:59' }],
  sameAs: ['https://www.instagram.com/cafecrema__/',
    'https://www.zomato.com/mumbai/cafe-crema-peninsula-grand-hotel-sakinaka'],
}

export default function SchemaOrg() {
  return <script type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
