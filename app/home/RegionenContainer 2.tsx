'use client'

import { useState } from 'react'
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const staedte = [
  {
    name: 'Landshut',
    region: 'Niederbayern',
    hauptsitz: true,
    position: { top: '52%', left: '58%' },
    beschreibung: 'Unser Hauptsitz - Zentrale fuer ganz Niederbayern',
  },
  {
    name: 'Muenchen',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '62%', left: '48%' },
    beschreibung: 'Metropolregion Muenchen und Umland',
  },
  {
    name: 'Regensburg',
    region: 'Oberpfalz',
    hauptsitz: false,
    position: { top: '40%', left: '62%' },
    beschreibung: 'UNESCO-Welterbe Stadt und Umgebung',
  },
  {
    name: 'Straubing',
    region: 'Niederbayern',
    hauptsitz: false,
    position: { top: '45%', left: '68%' },
    beschreibung: 'Zentrum Niederbayerns',
  },
  {
    name: 'Dingolfing',
    region: 'Niederbayern',
    hauptsitz: false,
    position: { top: '55%', left: '65%' },
    beschreibung: 'Industriestandort und Region',
  },
  {
    name: 'Moosburg',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '58%', left: '52%' },
    beschreibung: 'Noerdliches Oberbayern',
  },
  {
    name: 'Freising',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '60%', left: '50%' },
    beschreibung: 'Flughafen-Region Muenchen',
  },
  {
    name: 'Ingolstadt',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '48%', left: '42%' },
    beschreibung: 'Automobilindustrie und Region',
  },
]

export default function RegionenContainer() {
  const [activeStadt, setActiveStadt] = useState<string | null>('Landshut')

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="regionen-section" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-6">Unsere Standorte</span>
          <h2 className="heading-2 mb-6">
            Gebaeudereinigung in ganz Bayern
          </h2>
          <p className="text-lead">
            Von Landshut aus bedienen wir 8 Regionen in Bayern.
            Kurze Anfahrtswege garantieren schnellen Service und flexible Einsatzzeiten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map */}
          <div className="relative">
            {/* Bayern SVG Map */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shape - Simplified Bavaria */}
              <svg
                viewBox="0 0 400 450"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bavaria Outline */}
                <path
                  d="M200 20 L320 60 L380 140 L360 220 L380 300 L340 380 L260 420 L180 430 L100 400 L40 340 L20 260 L40 180 L80 100 L140 40 Z"
                  fill="#f1f5f9"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                {/* Decorative Grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                </pattern>
                <path
                  d="M200 20 L320 60 L380 140 L360 220 L380 300 L340 380 L260 420 L180 430 L100 400 L40 340 L20 260 L40 180 L80 100 L140 40 Z"
                  fill="url(#grid)"
                />
              </svg>

              {/* City Pins */}
              {staedte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeStadt === stadt.name ? 'z-20 scale-125' : 'z-10 hover:scale-110'
                  }`}
                  style={{ top: stadt.position.top, left: stadt.position.left }}
                >
                  {/* Pin */}
                  <div className={`relative ${stadt.hauptsitz ? 'w-10 h-10' : 'w-8 h-8'}`}>
                    {/* Pulse Animation for Active */}
                    {activeStadt === stadt.name && (
                      <span className="absolute inset-0 rounded-full bg-fimi-turquoise/30 animate-ping" />
                    )}
                    {/* Pin Icon */}
                    <div className={`relative w-full h-full rounded-full flex items-center justify-center ${
                      stadt.hauptsitz
                        ? 'bg-fimi-navy shadow-lg'
                        : activeStadt === stadt.name
                          ? 'bg-fimi-turquoise shadow-lg'
                          : 'bg-white border-2 border-fimi-turquoise shadow-card'
                    }`}>
                      <MapPin
                        size={stadt.hauptsitz ? 20 : 16}
                        className={`${
                          stadt.hauptsitz || activeStadt === stadt.name
                            ? 'text-white'
                            : 'text-fimi-turquoise'
                        }`}
                      />
                    </div>
                  </div>
                  {/* Label */}
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-xs font-semibold ${
                    activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-600'
                  }`}>
                    {stadt.name}
                  </span>
                </button>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-fimi-navy" />
                  <span className="text-gray-600">Hauptsitz</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-fimi-turquoise" />
                  <span className="text-gray-600">Service-Region</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div>
            {/* City List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {staedte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeStadt === stadt.name
                      ? 'border-fimi-turquoise bg-fimi-turquoise/5'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <MapPin
                    size={18}
                    className={`flex-shrink-0 ${
                      activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-400'
                    }`}
                  />
                  <div>
                    <span className={`font-semibold block ${
                      activeStadt === stadt.name ? 'text-fimi-navy' : 'text-gray-700'
                    }`}>
                      {stadt.name}
                    </span>
                    <span className="text-xs text-gray-500">{stadt.region}</span>
                  </div>
                  {stadt.hauptsitz && (
                    <span className="ml-auto text-[10px] font-bold text-fimi-navy bg-fimi-navy/10 px-2 py-1 rounded">
                      HQ
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active City Info */}
            {activeStadt && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="heading-4 mb-2">
                  Gebaeudereinigung {activeStadt}
                </h3>
                <p className="text-gray-600 mb-4">
                  {staedte.find(s => s.name === activeStadt)?.beschreibung}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Bueroreinigung',
                    'Industriereinigung',
                    'Facility Management',
                  ].map((service) => (
                    <span
                      key={service}
                      className="flex items-center gap-1 text-sm text-fimi-navy"
                    >
                      <CheckCircle size={14} className="text-fimi-turquoise" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToFooter}
                className="btn-primary flex-1"
              >
                Angebot fuer {activeStadt || 'Ihre Region'}
                <ArrowRight size={18} />
              </button>
              <a href="tel:01747225473" className="btn-outline flex-1 justify-center">
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staedte.slice(0, 4).map((stadt) => (
              <div key={stadt.name}>
                <h4 className="font-semibold text-fimi-navy mb-2">
                  Gebaeudereinigung {stadt.name}
                </h4>
                <p className="text-sm text-gray-600">
                  Professionelle Reinigungsdienstleistungen in {stadt.name} und {stadt.region}.
                  Bueroreinigung, Industriereinigung und Facility Management vor Ort.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
