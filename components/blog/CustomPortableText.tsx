import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-forest mt-20 mb-8 font-heading">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-medium tracking-tight text-forest mt-16 mb-6 font-heading">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-medium tracking-tight text-forest mt-12 mb-4 font-heading">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg md:text-xl text-forest/70 font-light leading-relaxed mb-8">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-12 pl-8 border-l-4 border-gold-muted italic text-xl md:text-2xl font-light text-forest tracking-tight">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-4 mb-12 my-8 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-4 mb-12 my-8 pl-8 text-forest/80 text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-4 text-forest/80 text-lg">
        <span className="w-1.5 h-1.5 mt-2.5 bg-gold-muted shrink-0 rounded-full" />
        <span className="flex-1">{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-forest">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic font-light">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="border-b border-forest/30 hover:border-forest text-forest transition-colors font-medium">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full aspect-[16/9] my-16 overflow-hidden bg-sand border border-forest/10 group">
          {/* Note: In a real Sanity generic setup we'd use @sanity/image-url to generate the URL. For simplicity, we assume value.asset.url is passed or use a fallback. */}
          <div className="absolute inset-0 flex items-center justify-center text-forest/20 text-sm tracking-widest uppercase">
            Image Asset
          </div>
        </div>
      )
    }
  }
}

export default function CustomPortableText({ value }: { value: any }) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
