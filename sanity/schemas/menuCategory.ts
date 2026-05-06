export default {
  name: 'menuCategory', title: 'Menu Category', type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Category Title' },
    { name: 'order', type: 'number', title: 'Display Order' },
    { name: 'icon', type: 'string', title: 'Icon (lucide name)' },
    { name: 'description', type: 'text', title: 'Description' },
  ]
}
