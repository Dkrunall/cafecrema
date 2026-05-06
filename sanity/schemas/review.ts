export default {
  name: 'review', title: 'Review', type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Reviewer Name' },
    { name: 'rating', type: 'number', title: 'Rating (1-5)', validation: (Rule: any) => Rule.min(1).max(5) },
    { name: 'platform', type: 'string', title: 'Platform', options: { list: ['Google', 'Zomato', 'TripAdvisor'] } },
    { name: 'reviewText', type: 'text', title: 'Review Text' },
    { name: 'isFeatured', type: 'boolean', title: 'Feature on Homepage?', initialValue: false },
  ]
}
