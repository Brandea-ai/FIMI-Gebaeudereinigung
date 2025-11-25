import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validierung
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // Hier später Resend Email Integration
    // Für jetzt loggen wir nur die Anfrage
    console.log('Kontaktanfrage erhalten:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Resend Email senden
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@fimi-service.de',
    //   to: 'info@fimi-service.de',
    //   subject: `Neue Kontaktanfrage von ${name}`,
    //   html: `...`
    // })

    return NextResponse.json(
      { success: true, message: 'Ihre Anfrage wurde erfolgreich gesendet.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
