export default {
  name: 'sundayBrunchWeek', title: 'Sunday Brunch Week', type: 'document',
  fields: [
    { name: 'date', type: 'date', title: 'Brunch Date' },
    { name: 'featuredDishes', type: 'array', of: [{type: 'string'}], title: 'Featured Dishes' },
    { name: 'musicianName', type: 'string', title: 'Musician Name' },
    { name: 'musicianPhoto', type: 'image', title: 'Musician Photo' },
    { name: 'specialNote', type: 'text', title: 'Special Note / Theme' },
  ]
}
