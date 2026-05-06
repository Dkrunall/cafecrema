import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react'
import { getBlogPost } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import CustomPortableText from '@/components/blog/CustomPortableText'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Let it crash elegantly or mock if Sanity is down
  let title = `Dispatch: ${params.slug} – Café Crema Journal`
  try {
    const post = await getBlogPost(params.slug)
    if (post) title = `${post.title} | Café Crema Journal`
  } catch (e) {}

  return {
    title,
    description: 'Explore our latest culinary dispatch from the Café Crema Journal.',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post = null;
  try {
    post = await getBlogPost(params.slug);
  } catch(e) {
    console.error("Sanity client fetch failed: ", e);
  }

  if (!post) {
    // If we're fully relying on Sanity, we just invoke notFound()
    // but since we don't have the real CMS connection seeded here, we will render a graceful fallback.
    // NOTE: In production, uncomment `notFound()`
    // notFound();
    post = {
      title: "Redefining Culinary Narratives",
      publishedAt: new Date().toISOString(),
      author: "Editorial Team",
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'This dispatch serves as a dynamic portal into the heart of the 2026 Café Crema experience. Note: This is fallback text because Sanity returned no data for this slug.' }]
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'The 2026 Standard' }]
        },
        {
          _type: 'block',
          style: 'blockquote',
          children: [{ _type: 'span', text: "The digital evolution of hospitality is no longer just about information—it's about emotion." }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Our commitment to artisanal quality extends from the plate to the pixel. Each scroll is designed to evoke the same sense of warmth and excellence that you experience in our dining gallery.' }]
        }
      ]
    }
  }

  const dateStr = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'Ongoing'

  return (
    <div className="min-h-screen bg-cream pt-32 lg:pt-40">
      <div className="page-wrapper py-20">
         
         <Link href="/blog" className="inline-flex items-center gap-3 text-forest font-bold text-[10px] uppercase tracking-[0.4em] mb-12 hover:text-gold-muted transition-colors group">
           <div className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-cream transition-all">
             <ArrowLeft size={16} />
           </div>
           Back to Journal
         </Link>
         
         <article className="bg-sand border border-forest/10 overflow-hidden">
            {/* Post Header */}
            <header className="p-12 md:p-24 bg-forest text-cream relative overflow-hidden">
              {post.coverImage && (
                 <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
                    <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                 </div>
              )}
              
              <div className="relative z-10 flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-muted mb-10">
                <span className="flex items-center gap-2"><Calendar size={14} /> {dateStr}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 5 Min Read</span>
              </div>

              <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium mb-12 tracking-tight leading-[0.9]">
                {post.title}
              </h1>

              <div className="relative z-10 flex justify-between items-center pt-12 border-t border-cream/10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center font-heading font-medium text-gold-muted text-lg italic">
                    CC
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1 text-cream">{post.author || 'Editorial Team'}</p>
                    <p className="text-[10px] opacity-60 italic tracking-widest uppercase">Chef &amp; Curator</p>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-forest transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </header>

            {/* Post Content parsed by PortableText */}
            <div className="p-12 md:p-24 max-w-4xl mx-auto">
               <CustomPortableText value={post.body} />
            </div>
         </article>

      </div>
    </div>
  )
}
