export default {
  name: 'menuItem', title: 'Menu Item', type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Dish Name' },
    { name: 'category', type: 'reference', to: [{type: 'menuCategory'}] },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'number', title: 'Price (₹)' },
    { name: 'photo', type: 'image', title: 'Dish Photo' },
    { name: 'isVeg', type: 'boolean', title: 'Vegetarian?' },
    { name: 'isBestSeller', type: 'boolean', title: 'Best Seller?' },
    { name: 'isAvailable', type: 'boolean', title: 'Currently Available?', initialValue: true },
  ],
  orderings: [{ title: 'Category', by: [{ field: 'category.title', direction: 'asc' }] }],
}
