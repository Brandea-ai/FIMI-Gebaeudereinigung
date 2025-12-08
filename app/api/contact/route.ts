import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateAdminEmail } from '@/lib/email-templates/admin-email'
import { generateConfirmationEmail } from '@/lib/email-templates/confirmation-email'

// Initialize Resend only when API key is available (prevents build errors)
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) return null
  return new Resend(process.env.RESEND_API_KEY)
}

// Rate Limiting
const requestCounts = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT = 5 // Max requests
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now - record.timestamp > RATE_WINDOW) {
    requestCounts.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

// Reference Number Generator
let dailyCounter = 0
let lastDate = ''

function generateRequestId(service?: string): string {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')

  // Reset counter at midnight
  if (dateStr !== lastDate) {
    dailyCounter = 0
    lastDate = dateStr
  }

  dailyCounter++

  // Service abbreviation
  const serviceMap: Record<string, string> = {
    'Unterhaltsreinigung': 'UR',
    'Büroreinigung': 'BR',
    'Industriereinigung': 'IR',
    'Fensterreinigung': 'FR',
    'Glasreinigung': 'GR',
    'Fassadenreinigung': 'FA',
    'Hallenreinigung': 'HR',
    'Maschinenreinigung': 'MR',
    'Facility Management': 'FM',
    'Winterdienst': 'WD',
    'Hausmeisterservice': 'HS',
    'Außenanlagenpflege': 'AP',
    'Baureinigung': 'BA',
    'Sonderreinigung': 'SR',
    'Tiefgaragenreinigung': 'TG',
    'Parkplatzreinigung': 'PP',
    'Sonstiges': 'SO',
  }

  const serviceCode = service ? (serviceMap[service] || 'AN') : 'AN'
  const counter = String(dailyCounter).padStart(3, '0')

  return `FIMI-${dateStr}-${serviceCode}-${counter}`
}

// Validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '')
  return /^[\+]?[0-9]{6,20}$/.test(cleaned)
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

interface FormErrors {
  [key: string]: string
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const {
      name,
      email,
      phone,
      company,
      postalCode,
      website,
      employeeCount,
      service,
      branche,
      callbackTime,
      message,
      privacy,
      form_time,
      js_active,
      website_hp,
      fax_hp
    } = body

    // Honeypot check (spam protection)
    if (website_hp || fax_hp) {
      // Silently accept but don't process (looks like success to bots)
      return NextResponse.json({
        success: true,
        name: name,
        request_id: 'FIMI-BLOCKED',
        message: 'Anfrage erhalten.'
      })
    }

    // Time-based spam check (form submitted too fast)
    if (form_time) {
      const submitTime = parseInt(form_time, 10)
      const currentTime = Math.floor(Date.now() / 1000)
      const elapsed = currentTime - submitTime

      if (elapsed < 3) {
        // Form submitted in less than 3 seconds - likely bot
        return NextResponse.json({
          success: true,
          name: name,
          request_id: 'FIMI-BLOCKED',
          message: 'Anfrage erhalten.'
        })
      }
    }

    // JavaScript check
    if (js_active !== 'yes') {
      return NextResponse.json(
        { message: 'Bitte aktivieren Sie JavaScript in Ihrem Browser.' },
        { status: 400 }
      )
    }

    // Validation
    const errors: FormErrors = {}

    if (!name || name.trim().length < 2) {
      errors.name = 'Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen).'
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }

    if (!phone || !validatePhone(phone)) {
      errors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.'
    }

    if (!privacy) {
      errors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung.'
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: 'Bitte korrigieren Sie die markierten Felder.', errors },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : undefined,
      postalCode: postalCode ? sanitizeInput(postalCode) : undefined,
      website: website ? sanitizeInput(website) : undefined,
      employeeCount: employeeCount ? sanitizeInput(employeeCount) : undefined,
      branche: branche ? sanitizeInput(branche) : undefined,
      service: service ? sanitizeInput(service) : undefined,
      callbackTime: callbackTime ? sanitizeInput(callbackTime) : undefined,
      message: message ? sanitizeInput(message) : undefined,
    }

    // Generate request ID
    const requestId = generateRequestId(sanitizedData.service)

    // Format date for email
    const submittedAt = new Date().toLocaleString('de-DE', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/Berlin'
    })

    // Send emails (only if RESEND_API_KEY is configured)
    const resend = getResendClient()
    if (resend) {
      try {
        // 1. Email to FIMI (Admin)
        await resend.emails.send({
          from: 'FIMI Gebäudereinigung <kontakt@fimi-gebaeudereinigung.de>',
          to: ['kontakt@fimi-gebaeudereinigung.de'],
          replyTo: sanitizedData.email,
          subject: `Neue Anfrage: ${sanitizedData.name}${sanitizedData.service ? ` - ${sanitizedData.service}` : ''} [${requestId}]`,
          html: generateAdminEmail({
            ...sanitizedData,
            requestId,
            submittedAt
          })
        })

        // 2. Confirmation Email to Customer
        await resend.emails.send({
          from: 'FIMI Gebäudereinigung GmbH <kontakt@fimi-gebaeudereinigung.de>',
          to: [sanitizedData.email],
          replyTo: 'kontakt@fimi-gebaeudereinigung.de',
          subject: `Ihre Anfrage bei FIMI Gebäudereinigung - ${requestId}`,
          headers: {
            'List-Unsubscribe': '<mailto:kontakt@fimi-gebaeudereinigung.de?subject=Abmelden>',
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
          },
          html: generateConfirmationEmail({
            name: sanitizedData.name,
            requestId,
            service: sanitizedData.service
          })
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Continue anyway - we don't want to fail the form submission
        // Log for monitoring
      }
    } else {
      // Development mode - log to console
      console.log('📧 Admin Email would be sent to: kontakt@fimi-gebaeudereinigung.de')
      console.log('📧 Confirmation Email would be sent to:', sanitizedData.email)
      console.log('Request ID:', requestId)
      console.log('Data:', sanitizedData)
    }

    return NextResponse.json({
      success: true,
      name: sanitizedData.name,
      request_id: requestId,
      message: 'Ihre Anfrage wurde erfolgreich gesendet.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch unter 0871 430 334 60.' },
      { status: 500 }
    )
  }
}
