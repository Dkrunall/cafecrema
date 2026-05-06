import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,  // fast edge caching
})

export async function getMenuItems() {
  return client.fetch(`
    *[_type == 'menuItem' && isAvailable == true] | order(category->title asc) {
      name, description, price, isVeg, isBestSeller,
      'photo': photo.asset->url,
      'category': category->title
    }
  `)
}

export async function getBlogSlugsFromSanity() {
  return client.fetch(`*[_type == "blogPost"].slug.current`)
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      publishedAt,
      "slug": slug.current,
      "author": author,
      "coverImage": coverImage.asset->url,
      body,
      tags
    }
  `, { slug })
}
