'use client'

import Script from 'next/script'
import { useEffect, useState, useCallback, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { getCookieConsent } from './CookieBanner'

// ============================================================================
// KONFIGURATION
// ============================================================================

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// Geschaetzter Wert einer Kontaktanfrage (fuer ROI-Berechnung)
const LEAD_VALUES: Record<string, number> = {
  'Unterhaltsreinigung': 500,
  'Büroreinigung': 400,
  'Industriereinigung': 800,
  'Fensterreinigung': 200,
  'Glasreinigung': 200,
  'Fassadenreinigung': 600,
  'Hallenreinigung': 700,
  'Maschinenreinigung': 500,
  'Facility Management': 1000,
  'Winterdienst': 300,
  'Hausmeisterservice': 400,
  'Außenanlagenpflege': 300,
  'Baureinigung': 600,
  'Sonderreinigung': 400,
  'Tiefgaragenreinigung': 350,
  'Parkplatzreinigung': 250,
  'Sonstiges': 300,
  'default': 350,
}

// ============================================================================
// TYPEN
// ============================================================================

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

interface FormTrackingData {
  service?: string
  branche?: string
  company?: string
  hasMessage?: boolean
  formDuration?: number
  fieldsInteracted?: string[]
  source?: string
  medium?: string
  campaign?: string
}

interface SessionData {
  sessionId: string
visitorId: string
  sessionStart: number
  pageViews: number
  isReturning: boolean
  landingPage: string
  referrer: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

// ============================================================================
// SESSION MANAGEMENT
// ============================================================================

const SESSION_KEY = 'fimi_analytics_session'
const VISITOR_KEY = 'fimi_visitor_id'
const SESSION_TIMEOUT = 30 * 60 * 1000 // 30 Minuten

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return ''

  let visitorId = localStorage.getItem(VISITOR_KEY)
  if (!visitorId) {
    visitorId = `v_${generateId()}`
    localStorage.setItem(VISITOR_KEY, visitorId)
  }
  return visitorId
}

function getSessionData(): SessionData | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = sessionStorage.getItem(SESSION_KEY)
    if (stored) {
      const session = JSON.parse(stored) as SessionData
      // Pruefe ob Session abgelaufen
      if (Date.now() - session.sessionStart < SESSION_TIMEOUT) {
        return session
      }
    }
  } catch {
    // Silent fail
  }
  return null
}

function createOrUpdateSession(): SessionData {
  const existingSession = getSessionData()
  const visitorId = getOrCreateVisitorId()
  const isReturning = !!localStorage.getItem(VISITOR_KEY) && !existingSession

  // UTM Parameter aus URL lesen
  const urlParams = new URLSearchParams(window.location.search)

  const session: SessionData = existingSession || {
    sessionId: `s_${generateId()}`,
    visitorId,
    sessionStart: Date.now(),
    pageViews: 0,
    isReturning,
    landingPage: window.location.pathname,
    referrer: document.referrer || 'direct',
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
  }

  session.pageViews++
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))

  return session
}

export function getSession(): SessionData | null {
  return getSessionData()
}

// ============================================================================
// CORE TRACKING FUNCTIONS
// ============================================================================

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParams?: Record<string, unknown>
) {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return

  const session = getSessionData()

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    // Session-Daten mitsenden
    session_id: session?.sessionId,
    visitor_id: session?.visitorId,
    is_returning: session?.isReturning,
    // Custom Parameter
    ...customParams,
  })
}

// GA4 Conversion Event (fuer Ziele)
export function trackConversion(
  conversionName: string,
  value?: number,
  currency: string = 'EUR'
) {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return

  window.gtag('event', 'conversion', {
    send_to: GA_MEASUREMENT_ID,
    event_name: conversionName,
    value: value,
    currency: currency,
  })
}

// ============================================================================
// ANALYTICS API - Fuer Import in anderen Komponenten
// ============================================================================

export const analytics = {
  // ----- KONTAKTFORMULAR -----

  // Formular wurde angezeigt
  formViewed: (formLocation: string = 'footer') => {
    trackEvent('form_view', 'Contact Form', formLocation)
  },

  // Feld wurde fokussiert (erstes Mal)
  formFieldFocused: (fieldName: string, formLocation: string = 'footer') => {
    trackEvent('form_field_focus', 'Contact Form', `${fieldName} - ${formLocation}`)
  },

  // Feld wurde ausgefuellt
  formFieldCompleted: (fieldName: string, formLocation: string = 'footer') => {
    trackEvent('form_field_complete', 'Contact Form', `${fieldName} - ${formLocation}`)
  },

  // Phase 2 wurde sichtbar (Nutzer hat Name, Email, Phone eingegeben)
  formPhase2Reached: () => {
    trackEvent('form_progress', 'Contact Form', 'Phase 2 reached')
  },

  // Formular Start (erstes Feld fokussiert)
  formStarted: (formLocation: string = 'footer') => {
    trackEvent('form_start', 'Contact Form', formLocation)
  },

  // Formular abgebrochen (Seite verlassen mit angefangenem Formular)
  formAbandoned: (lastField: string, fieldsCompleted: number) => {
    trackEvent('form_abandon', 'Contact Form', lastField, fieldsCompleted)
  },

  // Formular erfolgreich abgeschickt
  formSubmitted: (data: FormTrackingData) => {
    const service = data.service || 'Nicht angegeben'
    const leadValue = LEAD_VALUES[service] || LEAD_VALUES['default']
    const session = getSessionData()

    // Haupt-Event
    trackEvent('form_submit', 'Contact Form', service, leadValue, {
      service: service,
      branche: data.branche || 'Nicht angegeben',
      has_company: !!data.company,
      has_message: data.hasMessage,
      form_duration_seconds: data.formDuration,
      fields_interacted: data.fieldsInteracted?.join(','),
      // Attribution
      traffic_source: session?.utmSource || session?.referrer || 'direct',
      traffic_medium: session?.utmMedium || 'organic',
      traffic_campaign: session?.utmCampaign || 'none',
    })

    // GA4 Conversion
    trackConversion('contact_form_submission', leadValue)

    // Lead Generation Event (GA4 Standard)
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        currency: 'EUR',
        value: leadValue,
        lead_source: 'website_form',
      })
    }
  },

  // Formular-Fehler
  formError: (errorType: string, field?: string) => {
    trackEvent('form_error', 'Contact Form', `${errorType}: ${field || 'unknown'}`)
  },

  // ----- KONTAKT-AKTIONEN -----

  phoneClicked: (phoneNumber: string, location: string = 'unknown') => {
    trackEvent('click', 'Contact', `Phone: ${phoneNumber}`, undefined, { location })
    trackConversion('phone_click', 50)
  },

  emailClicked: (email: string, location: string = 'unknown') => {
    trackEvent('click', 'Contact', `Email: ${email}`, undefined, { location })
  },

  whatsappClicked: (location: string = 'unknown') => {
    trackEvent('click', 'Contact', 'WhatsApp', undefined, { location })
    trackConversion('whatsapp_click', 30)
  },

  addressCopied: () => {
    trackEvent('copy', 'Contact', 'Address')
  },

  // ----- NAVIGATION & ENGAGEMENT -----

  pageView: (pagePath: string, pageTitle: string) => {
    const session = createOrUpdateSession()

    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: pageTitle,
        session_id: session.sessionId,
        visitor_id: session.visitorId,
        page_view_number: session.pageViews,
      })
    }
  },

  serviceViewed: (serviceName: string) => {
    trackEvent('view_item', 'Service', serviceName, undefined, {
      content_type: 'service',
      item_name: serviceName,
    })
  },

  industryViewed: (industryName: string) => {
    trackEvent('view_item', 'Industry', industryName, undefined, {
      content_type: 'industry',
      item_name: industryName,
    })
  },

  ctaClicked: (ctaName: string, location: string, destination?: string) => {
    trackEvent('click', 'CTA', `${ctaName} - ${location}`, undefined, {
      cta_destination: destination,
    })
  },

  scrollDepth: (percentage: number, pagePath: string) => {
    trackEvent('scroll', 'Engagement', `${percentage}%`, percentage, {
      page_path: pagePath,
    })
  },

  timeOnPage: (seconds: number, pagePath: string) => {
    // Tracke nur bei bestimmten Schwellenwerten
    const thresholds = [30, 60, 120, 300]
    if (thresholds.includes(seconds)) {
      trackEvent('engagement', 'Time on Page', `${seconds}s`, seconds, {
        page_path: pagePath,
      })
    }
  },

  // ----- DOWNLOADS & EXTERNE LINKS -----

  fileDownloaded: (fileName: string, fileType: string = 'document') => {
    trackEvent('download', 'File', fileName, undefined, {
      file_type: fileType,
    })
  },

  externalLinkClicked: (url: string, linkText?: string) => {
    trackEvent('click', 'External Link', url, undefined, {
      link_text: linkText,
    })
  },

  // ----- COOKIE CONSENT -----

  cookieConsentGiven: (consentLevel: 'all' | 'essential' | 'custom', categories?: string[]) => {
    trackEvent('consent', 'Cookie', consentLevel, undefined, {
      consent_categories: categories?.join(','),
    })
  },

  // ----- SUCHE (falls vorhanden) -----

  searchPerformed: (query: string, resultsCount: number) => {
    trackEvent('search', 'Site Search', query, resultsCount)
  },

  // ----- ERRORS -----

  errorOccurred: (errorType: string, errorMessage: string, pagePath: string) => {
    trackEvent('error', 'JavaScript Error', errorType, undefined, {
      error_message: errorMessage.substring(0, 100),
      page_path: pagePath,
    })
  },
}

// ============================================================================
// FORM TRACKING HOOK - Fuer Kontaktformular
// ============================================================================

interface FormTrackingState {
  startTime: number | null
  fieldsInteracted: Set<string>
  hasStarted: boolean
  lastField: string
}

export function useFormTracking(formLocation: string = 'footer') {
  const [state, setState] = useState<FormTrackingState>({
    startTime: null,
    fieldsInteracted: new Set(),
    hasStarted: false,
    lastField: '',
  })

  // Formular wurde angezeigt
  useEffect(() => {
    analytics.formViewed(formLocation)
  }, [formLocation])

  // Feld fokussiert
  const onFieldFocus = useCallback((fieldName: string) => {
    setState(prev => {
      const newState = { ...prev }

      // Erstes Feld = Formular gestartet
      if (!prev.hasStarted) {
        newState.hasStarted = true
        newState.startTime = Date.now()
        analytics.formStarted(formLocation)
      }

      // Feld zum ersten Mal fokussiert
      if (!prev.fieldsInteracted.has(fieldName)) {
        const newFields = new Set(prev.fieldsInteracted)
        newFields.add(fieldName)
        newState.fieldsInteracted = newFields
        analytics.formFieldFocused(fieldName, formLocation)
      }

      newState.lastField = fieldName
      return newState
    })
  }, [formLocation])

  // Feld ausgefuellt (blur mit Wert)
  const onFieldComplete = useCallback((fieldName: string, hasValue: boolean) => {
    if (hasValue) {
      analytics.formFieldCompleted(fieldName, formLocation)
    }
  }, [formLocation])

  // Phase 2 erreicht
  const onPhase2Reached = useCallback(() => {
    analytics.formPhase2Reached()
  }, [])

  // Formular abgeschickt
  const onSubmit = useCallback((data: {
    service?: string
    branche?: string
    company?: string
    message?: string
  }) => {
    const formDuration = state.startTime
      ? Math.round((Date.now() - state.startTime) / 1000)
      : undefined

    analytics.formSubmitted({
      service: data.service,
      branche: data.branche,
      company: data.company,
      hasMessage: !!data.message,
      formDuration,
      fieldsInteracted: Array.from(state.fieldsInteracted),
    })
  }, [state])

  // Formular-Fehler
  const onError = useCallback((errorType: string, field?: string) => {
    analytics.formError(errorType, field)
  }, [])

  // Cleanup bei unmount (Abbruch tracken wenn angefangen)
  useEffect(() => {
    return () => {
      if (state.hasStarted && state.fieldsInteracted.size > 0) {
        // Nur tracken wenn wirklich abgebrochen (nicht bei Submit)
        // Das wird vom ContactForm gesteuert
      }
    }
  }, [state])

  return {
    onFieldFocus,
    onFieldComplete,
    onPhase2Reached,
    onSubmit,
    onError,
    hasStarted: state.hasStarted,
    fieldsInteracted: state.fieldsInteracted.size,
  }
}

// ============================================================================
// HAUPT-KOMPONENTE
// ============================================================================

// Innere Komponente die useSearchParams verwendet
function GoogleAnalyticsInner() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Consent pruefen
  useEffect(() => {
    const checkConsent = () => {
      const consent = getCookieConsent()
      setHasConsent(consent?.analytics === true)
    }

    checkConsent()

    const handleConsentUpdate = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate)
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate)
    }
  }, [])

  // Page Views tracken bei Navigation
  useEffect(() => {
    if (isLoaded && hasConsent) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      analytics.pageView(url, document.title)
    }
  }, [pathname, searchParams, isLoaded, hasConsent])

  if (!GA_MEASUREMENT_ID || !hasConsent) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          setIsLoaded(true)
          // Session initialisieren
          createOrUpdateSession()
        }}
      />

      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              send_page_view: false
            });
          `,
        }}
      />

      {isLoaded && (
        <>
          <ScrollTracker />
          <TimeOnPageTracker />
          <ExternalLinkTracker />
        </>
      )}
    </>
  )
}

// Export mit Suspense Boundary (fuer Next.js Static Generation)
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}

// ============================================================================
// AUTO-TRACKING KOMPONENTEN
// ============================================================================

function ScrollTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollThresholds = [25, 50, 75, 90, 100]
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      scrollThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          analytics.scrollDepth(threshold, pathname)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}

function TimeOnPageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const startTime = Date.now()
    const thresholds = [30, 60, 120, 300] // Sekunden
    const trackedThresholds = new Set<number>()

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)

      thresholds.forEach(threshold => {
        if (elapsed >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          analytics.timeOnPage(threshold, pathname)
        }
      })
    }, 5000) // Alle 5 Sekunden pruefen

    return () => clearInterval(interval)
  }, [pathname])

  return null
}

function ExternalLinkTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.hostname !== window.location.hostname) {
        analytics.externalLinkClicked(link.href, link.textContent || undefined)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
