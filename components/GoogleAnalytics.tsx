'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getCookieConsent } from './CookieBanner'

// Google Analytics Measurement ID aus Environment Variable
// Setze in .env: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// Typen fuer gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// Event-Tracking Funktion (kann ueberall importiert werden)
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Spezifische Event-Funktionen fuer haeufige Aktionen
export const analytics = {
  // Kontaktformular abgeschickt
  contactFormSubmitted: (service?: string) => {
    trackEvent('form_submit', 'Contact', service || 'General')
  },

  // Telefonnummer geklickt
  phoneClicked: (phoneNumber: string) => {
    trackEvent('click', 'Contact', `Phone: ${phoneNumber}`)
  },

  // E-Mail geklickt
  emailClicked: (email: string) => {
    trackEvent('click', 'Contact', `Email: ${email}`)
  },

  // WhatsApp geklickt
  whatsappClicked: () => {
    trackEvent('click', 'Contact', 'WhatsApp')
  },

  // Leistungsseite besucht
  serviceViewed: (serviceName: string) => {
    trackEvent('view_item', 'Service', serviceName)
  },

  // Branchenseite besucht
  industryViewed: (industryName: string) => {
    trackEvent('view_item', 'Industry', industryName)
  },

  // CTA Button geklickt
  ctaClicked: (ctaName: string, location: string) => {
    trackEvent('click', 'CTA', `${ctaName} - ${location}`)
  },

  // Scroll-Tiefe (25%, 50%, 75%, 100%)
  scrollDepth: (percentage: number) => {
    trackEvent('scroll', 'Engagement', `${percentage}%`, percentage)
  },

  // Externe Links geklickt
  externalLinkClicked: (url: string) => {
    trackEvent('click', 'External Link', url)
  },

  // Download (z.B. PDF, Loeschantrag)
  fileDownloaded: (fileName: string) => {
    trackEvent('download', 'File', fileName)
  },

  // Cookie-Einwilligung
  cookieConsentGiven: (consentType: string) => {
    trackEvent('consent', 'Cookie', consentType)
  },
}

// Google Analytics Komponente
export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Pruefe initiale Einwilligung
    const checkConsent = () => {
      const consent = getCookieConsent()
      setHasConsent(consent?.analytics === true)
    }

    checkConsent()

    // Hoere auf Consent-Aenderungen
    const handleConsentUpdate = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate)
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate)
    }
  }, [])

  // Wenn keine Measurement ID konfiguriert ist, nichts rendern
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  // Wenn keine Einwilligung, nichts laden
  if (!hasConsent) {
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />

      {/* gtag Initialisierung */}
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
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />

      {/* Scroll-Tracking */}
      {isLoaded && <ScrollTracker />}
    </>
  )
}

// Automatisches Scroll-Tracking
function ScrollTracker() {
  useEffect(() => {
    const scrollThresholds = [25, 50, 75, 100]
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      scrollThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold)
          analytics.scrollDepth(threshold)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
