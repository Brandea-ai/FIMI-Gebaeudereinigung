'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin, ExternalLink, Cookie } from 'lucide-react'
import { getCookieConsent } from './CookieBanner'

interface GoogleMapsWrapperProps {
  src: string
  height?: number
  title?: string
  className?: string
}

export default function GoogleMapsWrapper({
  src,
  height = 350,
  title = 'Google Maps Standortkarte',
  className = '',
}: GoogleMapsWrapperProps) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check consent on mount and listen for updates
  useEffect(() => {
    const checkConsent = () => {
      const consent = getCookieConsent()
      setHasConsent(consent?.external === true)
      setIsLoading(false)
    }

    checkConsent()

    // Listen for consent updates
    const handleConsentUpdate = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate)
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate)
    }
  }, [])

  // Open cookie settings
  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fimi_cookie_consent')
      window.location.reload()
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <div
        className={`bg-[#f8f9fa] rounded-[6px] flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="w-8 h-8 border-3 border-[#109387] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // Show consent required message
  if (!hasConsent) {
    return (
      <div
        className={`bg-[#012956] rounded-[6px] flex flex-col items-center justify-center p-8 text-center ${className}`}
        style={{ height }}
      >
        <div className="w-16 h-16 bg-[#109387]/20 rounded-full flex items-center justify-center mb-4">
          <MapPin size={32} className="text-[#109387]" />
        </div>

        <h3 className="text-white font-bold text-lg mb-2">Google Maps ist deaktiviert</h3>

        <p className="text-white/70 font-medium text-sm max-w-md mb-6">
          Um die Karte anzuzeigen, muessen Sie der Nutzung externer Dienste zustimmen.
          Google Maps laedt Inhalte von externen Servern, die Daten ueber Ihr Nutzungsverhalten sammeln koennen.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleOpenCookieSettings}
            className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors"
          >
            <Cookie size={18} />
            Cookie-Einstellungen oeffnen
          </button>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Kellerstr.+39,+84036+Landshut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-[6px] transition-colors"
          >
            In Google Maps oeffnen
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Alternative: Address info */}
        <div className="mt-6 pt-6 border-t border-white/10 w-full max-w-md">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/FIMI-LOGO/Fimi-Favicon.png"
              alt="FIMI"
              width={32}
              height={32}
              className="rounded"
            />
            <div className="text-left">
              <p className="text-white font-bold">FIMI Gebaeudereinigung GmbH</p>
              <p className="text-white/60 text-sm">Kellerstr. 39, 84036 Landshut</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show Google Maps iframe
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      className={className}
    />
  )
}
