import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

type BlogPost = {
  title: string
  publishedAt: string
  author: string
  readTime: string
  excerpt: string
  body: { heading?: string; text?: string; quote?: string }[]
}

const posts: Record<string, BlogPost> = {
  'redefining-culinary-narratives': {
    title: 'Redefining Culinary Narratives',
    publishedAt: '2026-04-01T00:00:00Z',
    author: 'Editorial Team',
    readTime: '5 Min Read',
    excerpt: 'A deep dive into the 2026 standard of luxury hospitality at Hotel Peninsula Grand.',
    body: [
      { text: 'At Café Crema, we believe that dining is not merely a necessity—it is an experience that engages all the senses. From the moment you step through our doors at Hotel Peninsula Grand, the warm amber light, the gentle hum of live music, and the aroma of freshly brewed coffee set the stage for something extraordinary.' },
      { heading: 'The 2026 Standard' },
      { quote: 'The digital evolution of hospitality is no longer just about information—it\'s about emotion.' },
      { text: 'Our multi-cuisine philosophy ensures that every guest, regardless of their culinary background, finds something that resonates. From the robust spices of North Indian cuisine to the delicate balance of Continental classics, our kitchen is a stage upon which the world\'s flavours perform in harmony.' },
      { heading: 'Crafting Every Detail' },
      { text: 'Our commitment to artisanal quality extends from the plate to every pixel of our digital presence. Each dish is designed as a curated artifact—plated with the same precision a designer applies to a high-fashion collection. Our chefs collaborate with local farmers to source the freshest produce, ensuring that sustainability and excellence go hand in hand.' },
      { text: 'The Sunday Brunch experience represents the pinnacle of what we offer: a slow-motion immersion into the art of dining, complete with unlimited pours, a rotating seasonal menu, and live acoustic performances that fill the atrium with warmth.' },
      { heading: 'Open Around the Clock' },
      { text: 'One of our proudest commitments is being open 24 hours, 7 days a week. Whether you arrive for an early morning business breakfast, a leisurely afternoon tea, a celebratory dinner, or a late-night craving, Café Crema is always ready to receive you with the same standard of excellence.' },
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  return {
    title: post ? `${post.title} | Café Crema Journal` : `Dispatch – Café Crema Journal`,
    description: post?.excerpt ?? 'Explore our latest culinary dispatch from the Café Crema Journal.',
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) notFound()

  const dateStr = new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

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
              <div className="relative z-10 flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-muted mb-10">
                <span className="flex items-center gap-2"><Calendar size={14} /> {dateStr}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
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
                    <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1 text-cream">{post.author}</p>
                    <p className="text-[10px] opacity-60 italic tracking-widest uppercase">Chef &amp; Curator</p>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-forest transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </header>

            {/* Post Content */}
            <div className="p-12 md:p-24 max-w-4xl mx-auto">
              {post.body.map((block, i) => {
                if (block.heading) {
                  return <h2 key={i} className="text-4xl md:text-5xl font-medium tracking-tight text-forest mt-20 mb-8 font-heading">{block.heading}</h2>
                }
                if (block.quote) {
                  return <blockquote key={i} className="my-12 pl-8 border-l-4 border-gold-muted italic text-xl md:text-2xl font-light text-forest tracking-tight">{block.quote}</blockquote>
                }
                return <p key={i} className="text-lg md:text-xl text-forest/70 font-light leading-relaxed mb-8">{block.text}</p>
              })}
            </div>
         </article>

      </div>
    </div>
  )
}
