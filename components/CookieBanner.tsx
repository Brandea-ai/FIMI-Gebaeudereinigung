'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Settings, Check, X, ChevronDown, ChevronUp, Cookie, ExternalLink } from 'lucide-react'

// Cookie Consent Types
export interface CookieConsent {
  essential: boolean // Always true, cannot be disabled
  functional: boolean // For remembering preferences
  external: boolean // External services like Google Maps
  analytics: boolean // Future: Analytics (currently not used)
  marketing: boolean // Future: Marketing (currently not used)
  timestamp: number
  version: string
}

const CONSENT_VERSION = '1.0.0'
const CONSENT_STORAGE_KEY = 'fimi_cookie_consent'

// Default consent (only essential)
const defaultConsent: CookieConsent = {
  essential: true,
  functional: false,
  external: false,
  analytics: false,
  marketing: false,
  timestamp: 0,
  version: CONSENT_VERSION,
}

// Get saved consent from localStorage
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) return null

    const consent = JSON.parse(stored) as CookieConsent

    // Check if consent is still valid (version match)
    if (consent.version !== CONSENT_VERSION) {
      return null
    }

    return consent
  } catch {
    return null
  }
}

// Save consent to localStorage
function saveCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // Silent fail - localStorage might be blocked
  }
}

// Check if a specific consent type is given
export function hasConsent(type: keyof CookieConsent): boolean {
  const consent = getCookieConsent()
  if (!consent) return false
  return consent[type] === true
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [isAnimating, setIsAnimating] = useState(false)

  // Check for existing consent on mount
  useEffect(() => {
    const existingConsent = getCookieConsent()
    if (!existingConsent) {
      // Small delay for smooth appearance
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      setConsent(existingConsent)
    }
  }, [])

  // Handle accept all cookies
  const handleAcceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      essential: true,
      functional: true,
      external: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    }

    saveCookieConsent(newConsent)
    setConsent(newConsent)
    setIsAnimating(false)

    setTimeout(() => {
      setIsVisible(false)
      // Dispatch event for other components to react
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }))
    }, 300)
  }, [])

  // Handle reject all (only essential)
  const handleRejectAll = useCallback(() => {
    const newConsent: CookieConsent = {
      ...defaultConsent,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    }

    saveCookieConsent(newConsent)
    setConsent(newConsent)
    setIsAnimating(false)

    setTimeout(() => {
      setIsVisible(false)
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }))
    }, 300)
  }, [])

  // Handle save custom selection
  const handleSaveSelection = useCallback(() => {
    const newConsent: CookieConsent = {
      ...consent,
      essential: true, // Always required
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    }

    saveCookieConsent(newConsent)
    setIsAnimating(false)

    setTimeout(() => {
      setIsVisible(false)
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }))
    }, 300)
  }, [consent])

  // Toggle individual consent
  const toggleConsent = (key: keyof CookieConsent) => {
    if (key === 'essential' || key === 'timestamp' || key === 'version') return

    setConsent(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Einstellungen"
        className={`fixed inset-x-0 bottom-0 z-[9999] transition-all duration-500 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white shadow-2xl border-t-4 border-[#109387]">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:py-5">

            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#012956] rounded-[6px] flex items-center justify-center shadow-lg">
                <Image
                  src="/FIMI-LOGO/Fimi-Favicon.png"
                  alt="FIMI"
                  width={28}
                  height={28}
                  className="rounded sm:w-8 sm:h-8"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Cookie size={16} className="text-[#109387]" />
                  <h2 className="text-base sm:text-lg font-bold text-[#012956]">
                    Cookie-Einstellungen
                  </h2>
                </div>
                <p className="text-gray-600 font-medium text-xs sm:text-sm">
                  Wir respektieren Ihre Privatsphäre.
                </p>
              </div>
            </div>

            {/* Main Info */}
            <div className="bg-[#f8f9fa] rounded-[6px] p-3 mb-4">
              <div className="flex items-start gap-2">
                <Shield size={16} className="text-[#109387] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#012956] font-semibold text-xs sm:text-sm">
                    Wir verwenden Cookies für den Betrieb der Webseite und externe Inhalte wie Google Maps.
                  </p>
                  <Link
                    href="/datenschutz"
                    className="inline-flex items-center gap-1 text-[#109387] hover:text-[#012956] font-bold text-xs mt-1 transition-colors"
                  >
                    Datenschutzerklärung
                    <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Cookie Categories (Expandable) */}
            <div className="mb-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1.5 text-[#012956] font-bold hover:text-[#109387] transition-colors text-xs sm:text-sm"
              >
                <Settings size={14} />
                <span>Einstellungen anpassen</span>
                {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showDetails && (
                <div className="mt-3 space-y-2 animate-fadeIn">

                  {/* Essential Cookies */}
                  <div className="bg-white border border-[#109387] rounded-[6px] p-2.5 sm:p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-bold text-[#012956] text-xs sm:text-sm">Notwendig</h3>
                          <span className="text-[10px] bg-[#109387] text-white px-1.5 py-0.5 rounded font-bold">Erforderlich</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-5 bg-[#109387] rounded-full flex items-center justify-end px-0.5 cursor-not-allowed">
                          <div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center">
                            <Check size={10} className="text-[#109387]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-white border border-gray-200 rounded-[6px] p-2.5 sm:p-3 hover:border-[#109387] transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#012956] text-xs sm:text-sm">Funktional</h3>
                      </div>
                      <button
                        onClick={() => toggleConsent('functional')}
                        className={`flex-shrink-0 w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                          consent.functional ? 'bg-[#109387] justify-end' : 'bg-gray-300 justify-start'
                        }`}
                        aria-label={consent.functional ? 'Deaktivieren' : 'Aktivieren'}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center">
                          {consent.functional ? <Check size={10} className="text-[#109387]" /> : <X size={10} className="text-gray-400" />}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* External Services */}
                  <div className="bg-white border border-gray-200 rounded-[6px] p-2.5 sm:p-3 hover:border-[#109387] transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#012956] text-xs sm:text-sm">Externe Dienste (Maps)</h3>
                      </div>
                      <button
                        onClick={() => toggleConsent('external')}
                        className={`flex-shrink-0 w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                          consent.external ? 'bg-[#109387] justify-end' : 'bg-gray-300 justify-start'
                        }`}
                        aria-label={consent.external ? 'Deaktivieren' : 'Aktivieren'}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center">
                          {consent.external ? <Check size={10} className="text-[#109387]" /> : <X size={10} className="text-gray-400" />}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="bg-white border border-gray-200 rounded-[6px] p-2.5 sm:p-3 hover:border-[#109387] transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-bold text-[#012956] text-xs sm:text-sm">Analyse</h3>
                          <span className="text-[10px] bg-[#109387] text-white px-1.5 py-0.5 rounded font-bold">Analytics</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleConsent('analytics')}
                        className={`flex-shrink-0 w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                          consent.analytics ? 'bg-[#109387] justify-end' : 'bg-gray-300 justify-start'
                        }`}
                        aria-label={consent.analytics ? 'Deaktivieren' : 'Aktivieren'}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center">
                          {consent.analytics ? <Check size={10} className="text-[#109387]" /> : <X size={10} className="text-gray-400" />}
                        </div>
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              {showDetails ? (
                <>
                  <button
                    onClick={handleSaveSelection}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 py-2.5 rounded-[6px] transition-all shadow-lg text-xs sm:text-sm"
                  >
                    <Check size={16} />
                    Auswahl speichern
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-4 py-2.5 rounded-[6px] transition-all text-xs sm:text-sm"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 text-[#012956] font-bold px-4 py-2.5 rounded-[6px] transition-all text-xs sm:text-sm"
                  >
                    Nur notwendige
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 py-2.5 rounded-[6px] transition-all shadow-lg text-xs sm:text-sm"
                  >
                    <Check size={16} />
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-4 py-2.5 rounded-[6px] transition-all text-xs sm:text-sm"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gray-200 hover:bg-gray-300 text-[#012956] font-bold px-4 py-2.5 rounded-[6px] transition-all text-xs sm:text-sm"
                  >
                    <Settings size={14} />
                    Einstellungen
                  </button>
                </>
              )}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 pt-3 border-t border-gray-200">
              <Link href="/datenschutz" className="text-xs text-gray-500 hover:text-[#109387] font-semibold transition-colors">
                Datenschutz
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/impressum" className="text-xs text-gray-500 hover:text-[#109387] font-semibold transition-colors">
                Impressum
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/agb" className="text-xs text-gray-500 hover:text-[#109387] font-semibold transition-colors">
                AGB
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </>
  )
}

// Re-open cookie settings button (for footer)
export function CookieSettingsButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOpenSettings = () => {
    // Clear consent to show banner again
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CONSENT_STORAGE_KEY)
      window.location.reload()
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={handleOpenSettings}
      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-semibold"
      aria-label="Cookie-Einstellungen öffnen"
    >
      <Cookie size={16} />
      Cookie-Einstellungen
    </button>
  )
}
