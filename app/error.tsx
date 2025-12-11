'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, Phone, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console (in production: send to error tracking service)
    console.error('Application Error:', {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    })
  }, [error])

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <AlertTriangle size={16} />
          Technischer Fehler
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#012956] mb-4">
          Etwas ist schiefgelaufen
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten.
          Bitte versuchen Sie es erneut oder kontaktieren Sie uns.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <RefreshCw size={18} />
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Home size={18} />
            Zur Startseite
          </Link>
        </div>

        {/* Direct Contact */}
        <div className="text-gray-600">
          <p className="mb-2">Bei anhaltenden Problemen:</p>
          <a
            href="tel:+4987120669360"
            className="inline-flex items-center gap-2 text-[#109387] hover:text-[#0d7d72] font-bold text-lg"
          >
            <Phone size={20} />
            0871 2066936 0
          </a>
        </div>
      </div>
    </main>
  )
}
