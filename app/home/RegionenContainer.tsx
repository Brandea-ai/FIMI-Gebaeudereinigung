'use client'

import { useState } from 'react'
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react'

const staedte = [
  { name: 'Landshut', region: 'Niederbayern', hauptsitz: true, position: { top: '52%', left: '58%' } },
  { name: 'Muenchen', region: 'Oberbayern', hauptsitz: false, position: { top: '62%', left: '48%' } },
  { name: 'Regensburg', region: 'Oberpfalz', hauptsitz: false, position: { top: '40%', left: '62%' } },
  { name: 'Straubing', region: 'Niederbayern', hauptsitz: false, position: { top: '45%', left: '68%' } },
  { name: 'Dingolfing', region: 'Niederbayern', hauptsitz: false, position: { top: '55%', left: '65%' } },
  { name: 'Moosburg', region: 'Oberbayern', hauptsitz: false, position: { top: '58%', left: '52%' } },
  { name: 'Freising', region: 'Oberbayern', hauptsitz: false, position: { top: '60%', left: '50%' } },
  { name: 'Ingolstadt', region: 'Oberbayern', hauptsitz: false, position: { top: '48%', left: '42%' } },
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
        {/* Header - Links */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-navy mb-6">
            Gebaeudereinigung in ganz Bayern
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-4xl">
            Von Landshut aus bedienen wir 8 Regionen in Bayern.
            Kurze Anfahrtswege garantieren schnellen Service und flexible Einsatzzeiten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Bayern SVG */}
              <svg viewBox="0 0 400 450" className="w-full h-full" fill="none">
                <path
                  d="M200 20 L320 60 L380 140 L360 220 L380 300 L340 380 L260 420 L180 430 L100 400 L40 340 L20 260 L40 180 L80 100 L140 40 Z"
                  fill="#f1f5f9"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
              </svg>

              {/* City Pins - Ohne Hintergrund, nur Icons */}
              {staedte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeStadt === stadt.name ? 'z-20 scale-125' : 'z-10 hover:scale-110'
                  }`}
                  style={{ top: stadt.position.top, left: stadt.position.left }}
                >
                  <MapPin
                    size={stadt.hauptsitz ? 40 : 32}
                    strokeWidth={3}
                    className={`${
                      stadt.hauptsitz
                        ? 'text-fimi-navy'
                        : activeStadt === stadt.name
                          ? 'text-fimi-turquoise'
                          : 'text-gray-400'
                    }`}
                  />
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-sm font-bold ${
                    activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-600'
                  }`}>
                    {stadt.name}
                  </span>
                </button>
              ))}

              {/* Legend - Ohne Hintergrund */}
              <div className="absolute bottom-4 left-4 flex items-center gap-6 text-sm font-bold">
                <div className="flex items-center gap-2">
                  <MapPin size={24} strokeWidth={3} className="text-fimi-navy" />
                  <span className="text-gray-600">Hauptsitz</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={24} strokeWidth={3} className="text-fimi-turquoise" />
                  <span className="text-gray-600">Service-Region</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div>
            {/* City List - 6px Rundungen */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {staedte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`flex items-center gap-3 p-4 rounded-[6px] border-2 transition-all text-left ${
                    activeStadt === stadt.name
                      ? 'border-fimi-turquoise'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin
                    size={28}
                    strokeWidth={2.5}
                    className={activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-400'}
                  />
                  <div>
                    <span className={`text-lg font-bold block ${
                      activeStadt === stadt.name ? 'text-fimi-navy' : 'text-gray-700'
                    }`}>
                      {stadt.name}
                    </span>
                    <span className="text-sm font-bold text-gray-500">{stadt.region}</span>
                  </div>
                  {stadt.hauptsitz && (
                    <span className="ml-auto text-xs font-extrabold text-fimi-navy bg-fimi-navy/10 px-2 py-1 rounded-[6px]">
                      HQ
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active City Info - 6px Rundungen */}
            {activeStadt && (
              <div className="bg-gray-100 rounded-[6px] p-6 mb-8">
                <h3 className="text-2xl font-extrabold text-fimi-navy mb-4">
                  Gebaeudereinigung {activeStadt}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {['Bueroreinigung', 'Industriereinigung', 'Facility Management'].map((service) => (
                    <span key={service} className="flex items-center gap-2 text-lg font-bold text-fimi-navy">
                      <CheckCircle size={24} strokeWidth={2.5} className="text-fimi-turquoise" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA - 6px Rundungen */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToFooter}
                className="flex-1 inline-flex items-center justify-center gap-3 bg-fimi-turquoise text-white text-lg font-bold px-6 py-4 rounded-[6px] hover:opacity-90 transition-all"
              >
                Angebot fuer {activeStadt || 'Ihre Region'}
                <ArrowRight size={24} strokeWidth={3} />
              </button>
              <a
                href="tel:01747225473"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-white text-fimi-navy text-lg font-bold px-6 py-4 rounded-[6px] border-2 border-fimi-navy hover:bg-fimi-navy hover:text-white transition-all"
              >
                <Phone size={24} strokeWidth={3} />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-20 pt-16 border-t-2 border-gray-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staedte.slice(0, 4).map((stadt) => (
              <div key={stadt.name}>
                <h4 className="text-xl font-extrabold text-fimi-navy mb-2">
                  Gebaeudereinigung {stadt.name}
                </h4>
                <p className="text-lg font-bold text-gray-600">
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
