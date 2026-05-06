import type { Metadata } from 'next'
import ReservationForm from '@/components/forms/ReservationForm'
import LocationSection from '@/components/home/LocationSection'

export const metadata: Metadata = {
  title: 'Contact & Reservations – Café Crema Mumbai',
  description: 'Book your table, find our location at Hotel Peninsula Grand on the map, or contact Café Crema Andheri East via Phone and WhatsApp for bulk bookings.',
  keywords: ['cafe crema contact', 'cafe crema phone number', 'restaurant reservation andheri east', 'hotel peninsula grand directions']
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-32">
      <section className="page-wrapper pt-32 pb-40 text-center">
        <span className="section-label mx-auto">Arrivals</span>
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.85] tracking-tight mb-10">
          Connect <br /> <span className="font-heading italic text-forest/30">with</span> Us
        </h1>
        <p className="text-forest/60 max-w-2xl mx-auto px-4 text-xl font-light italic leading-relaxed">
          Reach out for reservations at Hotel Peninsula Grand, catering inquiries, or global gastronomic questions.
        </p>
      </section>

      <section className="page-wrapper pb-48">
        <div className="max-w-4xl mx-auto bg-sand border border-forest/10 overflow-hidden">
           <div className="p-12 md:p-24 relative overflow-hidden">
              <div className="text-center mb-24 relative z-10">
                <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight">Table Reservations</h2>
                <p className="text-forest/50 text-lg font-light leading-relaxed italic">
                  Secure your table immediately. For groups larger than 50 or private dining inquiries, please call our management directly.
                </p>
              </div>
              
              <div className="relative z-10">
                 <ReservationForm />
              </div>
           </div>
        </div>
      </section>

      <LocationSection />
    </div>
  )
}
