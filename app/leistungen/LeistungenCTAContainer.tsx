'use client'

import { Shield, Leaf } from 'lucide-react'

export default function LeistungenCTAContainer() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Qualitätsversprechen */}
          <div>
            <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
              Qualitätsversprechen
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6">
              So sichern wir Qualität
            </h2>

            <p className="text-xl text-gray-600 mb-12">
              Alle unsere Leistungen werden nach höchsten Qualitäts- und Umweltstandards erbracht.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6" style={{ borderRadius: '4px' }}>
                <div className="bg-fimi-turquoise text-white w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '4px' }}>
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-fimi-navy text-lg mb-2">Dokumentierte Prozesse</h3>
                  <p className="text-gray-600">
                    Qualitätsmanagement für gleichbleibend höchste Standards und Kundenzufriedenheit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6" style={{ borderRadius: '4px' }}>
                <div className="bg-fimi-turquoise text-white w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '4px' }}>
                  <Leaf size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-fimi-navy text-lg mb-2">Umweltbewusstes Arbeiten</h3>
                  <p className="text-gray-600">
                    Nachhaltige Reinigungsverfahren und ökologische Verantwortung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white p-12" style={{ borderRadius: '4px' }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für makellose Sauberkeit?
            </h3>

            <p className="text-xl mb-8 text-white/90">
              Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. Wir beraten Sie gerne zu allen Leistungen.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Kostenlose Erstberatung',
                'Individuelle Angebotserstellung',
                'Persönlicher Ansprechpartner',
                'Flexible Vertragslaufzeiten'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 text-white flex items-center justify-center flex-shrink-0" style={{ borderRadius: '4px' }}>
                    ✓
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={scrollToContact}
                className="w-full bg-white text-fimi-navy px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity"
                style={{ borderRadius: '4px' }}
              >
                Jetzt Angebot anfordern
              </button>

              <a
                href="tel:+4987120669360"
                className="block w-full text-center border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-fimi-navy transition-all"
                style={{ borderRadius: '4px' }}
              >
                Oder anrufen: 0871 2066936 0
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
