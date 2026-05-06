import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key')

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // 1. Send confirmation email to restaurant
    // Wrapping in try-catch so it won't crash if Resend API key is missing
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'reservations@cafecrema.in',
          to: process.env.RESERVATION_EMAIL || 'manager@cafecrema.in',
          subject: `New Table Reservation – ${data.name} – ${data.date}`,
          html: `
            <h2>New Table Reservation</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Date:</strong> ${data.date}</p>
            <p><strong>Time:</strong> ${data.time}</p>
            <p><strong>Guests:</strong> ${data.guests}</p>
            <p><strong>Occasion:</strong> ${data.occasion || 'None'}</p>
            <p><strong>Special Request:</strong> ${data.request || 'None'}</p>
            ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
          `,
        })
      } else {
        console.log('No RESEND_API_KEY, mocked email send to success. Payload:', data);
      }
    } catch (emailError) {
      console.log('Email delivery failed (invalid API key?)', emailError)
    }

    // 2. Logic to build WhatsApp API message
    const waMessage = encodeURIComponent(
      `New Reservation!\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\nOccasion: ${data.occasion || 'None'}`
    )
    console.log(`WhatsApp Link that could be generated: https://wa.me/919930271349?text=${waMessage}`);

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 })
  }
}
