import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/919930271349" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 w-14 h-14 bg-forest text-cream rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </Link>
  )
}
