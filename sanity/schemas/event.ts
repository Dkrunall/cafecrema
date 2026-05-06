export default {
  name: 'event', title: 'Event', type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Event Title' },
    { name: 'date', type: 'date', title: 'Date' },
    { name: 'time', type: 'string', title: 'Time' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'string', title: 'Price Details' },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'bookingLink', type: 'url', title: 'External Booking Link (Optional)' },
  ]
}
