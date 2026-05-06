export default {
  name: 'blogPost', title: 'Blog Post', type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'author', type: 'string', title: 'Author' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'body', type: 'array', title: 'Body', of: [{type: 'block'}, {type: 'image'}] },
    { name: 'tags', type: 'array', of: [{type: 'string'}], title: 'Tags' },
  ]
}
