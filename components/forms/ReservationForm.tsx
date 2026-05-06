'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const reservationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required').or(z.literal('')),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  date: z.string().min(1, 'Date is required'),
  guests: z.string(),
  message: z.string()
})

type ReservationFormValues = z.infer<typeof reservationSchema>

export default function ReservationForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '2',
      message: ''
    }
  })

  const onSubmit = async (data: ReservationFormValues) => {
    setSubmitStatus('loading')
    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('API Error')

      setSubmitStatus('success')
      reset()
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    }
  }

  const inputClasses = "w-full bg-transparent border-b border-forest/15 py-4 text-forest font-light italic focus:border-forest focus:outline-none transition-all placeholder:text-forest/30 text-base"
  const errorInputClasses = "w-full bg-transparent border-b border-red-500/50 py-4 text-red-500 font-light italic focus:outline-none transition-all placeholder:text-red-500/50 text-base"

  if (submitStatus === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-1000 py-24">
        <div className="w-16 h-16 rounded-full border border-forest/20 flex items-center justify-center text-forest">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div>
          <h3 className="text-3xl font-medium tracking-tight text-forest mb-4">Request Verified</h3>
          <p className="text-forest/60 italic font-light">Our team at Hotel Peninsula Grand will contact you shortly to confirm your table.</p>
        </div>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="text-[10px] font-bold uppercase tracking-widest text-forest border-b border-forest/20 hover:border-forest pb-1 transition-all"
        >
          Book Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">
            Full Name <span className="text-red-500/50">*</span>
          </label>
          <input
            {...register('name')}
            className={errors.name ? errorInputClasses : inputClasses}
            placeholder="e.g. Rohan Malhotra"
          />
          {errors.name && <p className="text-xs text-red-500 mt-2">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">Email Address</label>
          <input
            {...register('email')}
            type="email"
            className={errors.email ? errorInputClasses : inputClasses}
            placeholder="rohan@example.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-2">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">
            Phone Number <span className="text-red-500/50">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            className={errors.phone ? errorInputClasses : inputClasses}
            placeholder="+91"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-2">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">
            Preferred Date <span className="text-red-500/50">*</span>
          </label>
          <input
            {...register('date')}
            type="date"
            className={errors.date ? errorInputClasses : inputClasses}
          />
          {errors.date && <p className="text-xs text-red-500 mt-2">{errors.date.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">
            Guest Count <span className="text-red-500/50">*</span>
          </label>
          <select
            {...register('guests')}
            className={errors.guests ? errorInputClasses : inputClasses}
          >
            {[1,2,3,4,5,6,7,8,10,12].map(n => (
              <option key={n} value={n} className="bg-cream text-forest">{n} Guests</option>
            ))}
            <option value="large" className="bg-cream text-forest">Large Group (12+)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/50 block">Additional Requests</label>
        <textarea
          {...register('message')}
          rows={3}
          className={inputClasses}
          placeholder="Allergies, birthdays, or specific table preference..."
        ></textarea>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 text-sm font-light italic">
          There was a problem sending your inquiry. Please try again or call us directly.
        </div>
      )}

      <div className="pt-8">
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="w-full py-5 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-forest-muted transition-all duration-500 flex items-center justify-between px-8 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{submitStatus === 'loading' ? 'Transmitting...' : 'Send Reservation Inquiry'}</span>
          {submitStatus !== 'loading' && (
            <span className="w-8 h-[1px] bg-cream/40 group-hover:w-16 transition-all duration-700"></span>
          )}
        </button>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/30 mt-6 text-center">
          Available 24/7 Arrivals At Hotel Peninsula Grand
        </p>
      </div>
    </form>
  )
}
