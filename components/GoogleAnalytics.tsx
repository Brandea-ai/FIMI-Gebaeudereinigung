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
// CORE WEB VITALS - Performance Metriken (Google's Ranking-Faktoren)
// ============================================================================

interface WebVitalsMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
}

function getCLSRating(value: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= 0.1) return 'good'
  if (value <= 0.25) return 'needs-improvement'
  return 'poor'
}

function getLCPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= 2500) return 'good'
  if (value <= 4000) return 'needs-improvement'
  return 'poor'
}

function getFIDRating(value: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= 100) return 'good'
  if (value <= 300) return 'needs-improvement'
  return 'poor'
}

function getTTFBRating(value: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= 800) return 'good'
  if (value <= 1800) return 'needs-improvement'
  return 'poor'
}

function CoreWebVitalsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    let clsEntries: PerformanceEntry[] = []

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // @ts-expect-error - LayoutShift type not fully typed
        if (!entry.hadRecentInput) {
          // @ts-expect-error - LayoutShift type not fully typed
          clsValue += entry.value
          clsEntries.push(entry)
        }
      }
    })

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch {
      // Browser doesn't support this observer
    }

    // Largest Contentful Paint (LCP)
    let lcpValue = 0

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        lcpValue = lastEntry.startTime
      }
    })

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch {
      // Browser doesn't support this observer
    }

    // First Input Delay (FID)
    let fidValue = 0
    let fidReported = false

    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const firstEntry = entries[0]
      if (firstEntry && !fidReported) {
        // @ts-expect-error - PerformanceEventTiming not fully typed
        fidValue = firstEntry.processingStart - firstEntry.startTime
        fidReported = true

        // FID sofort reporten da es nur einmal passiert
        trackEvent('web_vitals', 'Performance', 'FID', Math.round(fidValue), {
          metric_rating: getFIDRating(fidValue),
          page_path: pathname,
        })
      }
    })

    try {
      fidObserver.observe({ type: 'first-input', buffered: true })
    } catch {
      // Browser doesn't support this observer
    }

    // Time to First Byte (TTFB)
    const navigationEntries = performance.getEntriesByType('navigation')
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0] as PerformanceNavigationTiming
      const ttfb = navEntry.responseStart - navEntry.requestStart

      if (ttfb > 0) {
        trackEvent('web_vitals', 'Performance', 'TTFB', Math.round(ttfb), {
          metric_rating: getTTFBRating(ttfb),
          page_path: pathname,
        })
      }
    }

    // Bei Page-Wechsel oder Unload: CLS und LCP reporten
    const reportMetrics = () => {
      if (clsValue > 0) {
        trackEvent('web_vitals', 'Performance', 'CLS', Math.round(clsValue * 1000), {
          metric_rating: getCLSRating(clsValue),
          page_path: pathname,
        })
      }

      if (lcpValue > 0) {
        trackEvent('web_vitals', 'Performance', 'LCP', Math.round(lcpValue), {
          metric_rating: getLCPRating(lcpValue),
          page_path: pathname,
        })
      }
    }

    // Beim Verlassen der Seite reporten
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        reportMetrics()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clsObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      reportMetrics()
    }
  }, [pathname])

  return null
}

// ============================================================================
// DEVICE & BROWSER FINGERPRINTING
// ============================================================================

interface DeviceInfo {
  deviceType: 'mobile' | 'tablet' | 'desktop'
  browser: string
  browserVersion: string
  os: string
  screenResolution: string
  viewportSize: string
  touchEnabled: boolean
  connectionType: string
  language: string
  timezone: string
  colorDepth: number
}

function getDeviceInfo(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {} as DeviceInfo
  }

  const ua = navigator.userAgent

  // Device Type
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua)
  const deviceType = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop'

  // Browser Detection
  let browser = 'Unknown'
  let browserVersion = ''

  if (ua.includes('Firefox/')) {
    browser = 'Firefox'
    browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || ''
  } else if (ua.includes('Edg/')) {
    browser = 'Edge'
    browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || ''
  } else if (ua.includes('Chrome/')) {
    browser = 'Chrome'
    browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || ''
  } else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
    browser = 'Safari'
    browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || ''
  }

  // OS Detection
  let os = 'Unknown'
  if (ua.includes('Windows')) os = 'Windows'
  else if (ua.includes('Mac OS')) os = 'macOS'
  else if (ua.includes('Linux')) os = 'Linux'
  else if (ua.includes('Android')) os = 'Android'
  else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS'

  // Connection Type
  let connectionType = 'unknown'
  // @ts-expect-error - Navigator connection not fully typed
  if (navigator.connection) {
    // @ts-expect-error - Navigator connection not fully typed
    connectionType = navigator.connection.effectiveType || 'unknown'
  }

  return {
    deviceType,
    browser,
    browserVersion,
    os,
    screenResolution: `${screen.width}x${screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    touchEnabled: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    connectionType,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    colorDepth: screen.colorDepth,
  }
}

function DeviceTracker() {
  useEffect(() => {
    // Nur einmal pro Session tracken
    const sessionKey = 'fimi_device_tracked'
    if (sessionStorage.getItem(sessionKey)) return

    const deviceInfo = getDeviceInfo()

    trackEvent('device_info', 'Technical', deviceInfo.deviceType, undefined, {
      browser: deviceInfo.browser,
      browser_version: deviceInfo.browserVersion,
      os: deviceInfo.os,
      screen_resolution: deviceInfo.screenResolution,
      viewport_size: deviceInfo.viewportSize,
      touch_enabled: deviceInfo.touchEnabled,
      connection_type: deviceInfo.connectionType,
      language: deviceInfo.language,
      timezone: deviceInfo.timezone,
      color_depth: deviceInfo.colorDepth,
    })

    sessionStorage.setItem(sessionKey, 'true')
  }, [])

  return null
}

// ============================================================================
// RAGE CLICK DETECTION - Frustrations-Indikator
// ============================================================================

function RageClickTracker() {
  const pathname = usePathname()

  useEffect(() => {
    let clicks: { time: number; x: number; y: number }[] = []
    const RAGE_THRESHOLD = 3 // Klicks
    const TIME_WINDOW = 1000 // 1 Sekunde
    const DISTANCE_THRESHOLD = 30 // Pixel

    const handleClick = (e: MouseEvent) => {
      const now = Date.now()

      // Alte Klicks entfernen
      clicks = clicks.filter(c => now - c.time < TIME_WINDOW)

      // Neuen Klick hinzufuegen
      clicks.push({ time: now, x: e.clientX, y: e.clientY })

      // Pruefen ob Rage Click
      if (clicks.length >= RAGE_THRESHOLD) {
        // Pruefen ob alle Klicks in der Naehe sind
        const firstClick = clicks[0]
        const allNearby = clicks.every(c =>
          Math.abs(c.x - firstClick.x) < DISTANCE_THRESHOLD &&
          Math.abs(c.y - firstClick.y) < DISTANCE_THRESHOLD
        )

        if (allNearby) {
          const target = e.target as HTMLElement
          const elementInfo = target.tagName +
            (target.className ? `.${target.className.split(' ')[0]}` : '') +
            (target.id ? `#${target.id}` : '')

          trackEvent('rage_click', 'UX Problem', elementInfo, clicks.length, {
            page_path: pathname,
            element_text: target.textContent?.substring(0, 50) || '',
            click_position: `${e.clientX},${e.clientY}`,
          })

          // Reset
          clicks = []
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}

// ============================================================================
// EXIT INTENT DETECTION
// ============================================================================

function ExitIntentTracker() {
  const pathname = usePathname()

  useEffect(() => {
    let exitIntentShown = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Nur wenn Maus nach oben verlässt (Richtung Browser-UI)
      if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true

        const session = getSessionData()
        const timeOnPage = session ? Math.round((Date.now() - session.sessionStart) / 1000) : 0

        trackEvent('exit_intent', 'Engagement', pathname, timeOnPage, {
          page_views: session?.pageViews || 1,
          time_on_site_seconds: timeOnPage,
        })
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [pathname])

  return null
}

// ============================================================================
// TAB VISIBILITY TRACKING
// ============================================================================

function TabVisibilityTracker() {
  const pathname = usePathname()

  useEffect(() => {
    let hiddenStartTime: number | null = null
    let totalHiddenTime = 0

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenStartTime = Date.now()
        trackEvent('tab_hidden', 'Engagement', pathname)
      } else {
        if (hiddenStartTime) {
          const hiddenDuration = Math.round((Date.now() - hiddenStartTime) / 1000)
          totalHiddenTime += hiddenDuration

          trackEvent('tab_visible', 'Engagement', pathname, hiddenDuration, {
            hidden_duration_seconds: hiddenDuration,
            total_hidden_time: totalHiddenTime,
          })
        }
        hiddenStartTime = null
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [pathname])

  return null
}

// ============================================================================
// PHONE & EMAIL AUTO-TRACKING
// ============================================================================

function ContactLinkTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (!link) return

      const href = link.getAttribute('href') || ''

      // Telefon-Links
      if (href.startsWith('tel:')) {
        const phoneNumber = href.replace('tel:', '')
        const location = link.closest('footer') ? 'footer' :
                        link.closest('header') ? 'header' :
                        link.closest('nav') ? 'navigation' : 'content'

        analytics.phoneClicked(phoneNumber, location)
      }

      // Email-Links
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '').split('?')[0]
        const location = link.closest('footer') ? 'footer' :
                        link.closest('header') ? 'header' :
                        link.closest('nav') ? 'navigation' : 'content'

        analytics.emailClicked(email, location)
      }

      // WhatsApp Links
      if (href.includes('wa.me') || href.includes('whatsapp')) {
        const location = link.closest('footer') ? 'footer' :
                        link.closest('header') ? 'header' : 'content'

        analytics.whatsappClicked(location)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

// ============================================================================
// CTA BUTTON AUTO-TRACKING
// ============================================================================

function CTAButtonTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const ctaPatterns = [
      'jetzt anfragen',
      'kontakt',
      'angebot',
      'beratung',
      'termin',
      'anfrage',
      'buchen',
      'bestellen',
      'mehr erfahren',
      'details',
    ]

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const button = target.closest('button, a.btn, a[class*="button"], [role="button"]')

      if (!button) return

      const buttonText = button.textContent?.toLowerCase().trim() || ''
      const isCTA = ctaPatterns.some(pattern => buttonText.includes(pattern))

      if (isCTA) {
        const location = button.closest('footer') ? 'footer' :
                        button.closest('header') ? 'header' :
                        button.closest('nav') ? 'navigation' :
                        button.closest('section')?.getAttribute('id') || 'content'

        const destination = button.getAttribute('href') || undefined

        analytics.ctaClicked(buttonText, location, destination)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}

// ============================================================================
// USER ENGAGEMENT SCORE
// ============================================================================

interface EngagementData {
  pageViews: number
  scrollDepthMax: number
  timeOnSite: number
  interactions: number
  formProgress: number
}

const ENGAGEMENT_WEIGHTS = {
  pageViews: 10,        // 10 Punkte pro Seite
  scrollDepth: 0.2,     // 0.2 Punkte pro % Scroll
  timeOnSite: 0.5,      // 0.5 Punkte pro Sekunde (max 300 = 150 Punkte)
  interactions: 5,      // 5 Punkte pro Interaktion
  formProgress: 20,     // 20 Punkte pro Formular-Phase
}

function calculateEngagementScore(data: EngagementData): number {
  const pageScore = Math.min(data.pageViews * ENGAGEMENT_WEIGHTS.pageViews, 50)
  const scrollScore = data.scrollDepthMax * ENGAGEMENT_WEIGHTS.scrollDepth
  const timeScore = Math.min(data.timeOnSite * ENGAGEMENT_WEIGHTS.timeOnSite, 150)
  const interactionScore = Math.min(data.interactions * ENGAGEMENT_WEIGHTS.interactions, 50)
  const formScore = data.formProgress * ENGAGEMENT_WEIGHTS.formProgress

  return Math.round(pageScore + scrollScore + timeScore + interactionScore + formScore)
}

function getEngagementLevel(score: number): 'low' | 'medium' | 'high' | 'very_high' {
  if (score < 30) return 'low'
  if (score < 70) return 'medium'
  if (score < 120) return 'high'
  return 'very_high'
}

function EngagementScoreTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const startTime = Date.now()
    let maxScrollDepth = 0
    let interactions = 0

    // Scroll Tracking fuer Engagement
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const scrollPercent = Math.round((scrollTop / docHeight) * 100)
        maxScrollDepth = Math.max(maxScrollDepth, scrollPercent)
      }
    }

    // Interaction Counting
    const handleInteraction = () => {
      interactions++
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleInteraction)

    // Bei Verlassen: Engagement Score berechnen und senden
    const reportEngagement = () => {
      const session = getSessionData()
      const timeOnSite = Math.round((Date.now() - startTime) / 1000)

      const engagementData: EngagementData = {
        pageViews: session?.pageViews || 1,
        scrollDepthMax: maxScrollDepth,
        timeOnSite,
        interactions,
        formProgress: 0, // Wird vom FormTracking gesetzt
      }

      const score = calculateEngagementScore(engagementData)
      const level = getEngagementLevel(score)

      trackEvent('engagement_score', 'Engagement', level, score, {
        page_views: engagementData.pageViews,
        max_scroll_depth: engagementData.scrollDepthMax,
        time_on_site: engagementData.timeOnSite,
        total_interactions: engagementData.interactions,
        engagement_level: level,
      })
    }

    const handleBeforeUnload = () => {
      reportEngagement()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleInteraction)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname])

  return null
}

// ============================================================================
// PERFORMANCE METRICS
// ============================================================================

function PerformanceTracker() {
  useEffect(() => {
    // Warten bis Seite vollständig geladen
    if (document.readyState === 'complete') {
      reportPerformance()
    } else {
      window.addEventListener('load', reportPerformance)
      return () => window.removeEventListener('load', reportPerformance)
    }

    function reportPerformance() {
      const navEntries = performance.getEntriesByType('navigation')
      if (navEntries.length === 0) return

      const nav = navEntries[0] as PerformanceNavigationTiming

      const metrics = {
        dns_lookup: Math.round(nav.domainLookupEnd - nav.domainLookupStart),
        tcp_connect: Math.round(nav.connectEnd - nav.connectStart),
        request_time: Math.round(nav.responseStart - nav.requestStart),
        response_time: Math.round(nav.responseEnd - nav.responseStart),
        dom_interactive: Math.round(nav.domInteractive - nav.fetchStart),
        dom_complete: Math.round(nav.domComplete - nav.fetchStart),
        page_load: Math.round(nav.loadEventEnd - nav.fetchStart),
      }

      trackEvent('page_performance', 'Performance', 'page_load', metrics.page_load, {
        ...metrics,
        navigation_type: nav.type, // navigate, reload, back_forward
      })
    }
  }, [])

  return null
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
