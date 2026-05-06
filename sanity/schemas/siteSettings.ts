export default {
  name: 'siteSettings', title: 'Site Settings', type: 'document',
  fields: [
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'address', type: 'text', title: 'Address' },
    { name: 'hours', type: 'text', title: 'Opening Hours' },
    { name: 'socialLinks', type: 'array', of: [{ type: 'url' }], title: 'Social Links' },
    { name: 'ogImage', type: 'image', title: 'Default OG Image' },
  ]
}
