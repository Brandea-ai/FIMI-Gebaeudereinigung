'use client'

import { useEffect } from 'react'
import { AlertTriangle, Home, Phone, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log critical error
    console.error('Critical Application Error:', {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    })
  }, [error])

  return (
    <html lang="de">
      <body className="antialiased">
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-24">
          <div className="max-w-lg mx-auto text-center">
            {/* Error Badge */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle size={16} />
              Kritischer Fehler
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#012956] mb-4">
              Die Seite konnte nicht geladen werden
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Es ist ein schwerwiegender Fehler aufgetreten.
              Bitte laden Sie die Seite neu oder kontaktieren Sie uns direkt.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <RefreshCw size={18} />
                Seite neu laden
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                <Home size={18} />
                Zur Startseite
              </a>
            </div>

            {/* Direct Contact */}
            <div className="text-gray-600">
              <p className="mb-2">Rufen Sie uns an:</p>
              <a
                href="tel:+4987120669360"
                className="inline-flex items-center gap-2 text-[#109387] hover:text-[#0d7d72] font-bold text-lg"
              >
                <Phone size={20} />
                0871 20669360
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
