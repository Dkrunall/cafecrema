export default {
  name: 'galleryImage', title: 'Gallery Image', type: 'document',
  fields: [
    { name: 'photo', type: 'image', title: 'Photo' },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    { name: 'category', type: 'string', title: 'Category', options: { list: ['Food', 'Brunch', 'Ambience', 'Bar'] } },
    { name: 'order', type: 'number', title: 'Order Level' },
  ]
}
