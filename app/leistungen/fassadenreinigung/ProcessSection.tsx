'use client'

import { Phone, Search, FileText, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: Phone,
    titel: 'Anfrage',
    beschreibung: 'Sie kontaktieren uns per Telefon, E-Mail oder Formular. Wir melden uns innerhalb von 2 Stunden.',
    dauer: '2 Stunden Reaktionszeit',
  },
  {
    nummer: '02',
    icon: Search,
    titel: 'Kostenfreie Besichtigung',
    beschreibung: 'Wir kommen zu Ihnen, analysieren die Fassade und besprechen Ihre Wünsche vor Ort.',
    dauer: 'Innerhalb von 48 Stunden',
  },
  {
    nummer: '03',
    icon: FileText,
    titel: 'Festpreisangebot',
    beschreibung: 'Sie erhalten ein transparentes Angebot mit allen Leistungen. Keine versteckten Kosten.',
    dauer: 'Am selben Tag',
  },
  {
    nummer: '04',
    icon: Sparkles,
    titel: 'Professionelle Reinigung',
    beschreibung: 'Unser geschultes Team reinigt Ihre Fassade schonend und gründlich. Mit Imprägnierung auf Wunsch.',
    dauer: 'Je nach Größe 1-3 Tage',
  },
  {
    nummer: '05',
    icon: CheckCircle,
    titel: 'Abnahme & Garantie',
    beschreibung: 'Gemeinsame Abnahme vor Ort. Sie erhalten eine Dokumentation und unsere Zufriedenheitsgarantie.',
    dauer: 'Direkt nach Abschluss',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            So einfach geht&apos;s
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 5 Schritten zur sauberen Fassade
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der ersten Anfrage bis zur fertigen Reinigung – wir machen es Ihnen
            so einfach wie möglich. Transparent, zuverlässig, termingerecht.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Verbindungslinie - nur Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-0.5 bg-[#109387]/20" />

          {/* Schritte */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {schritte.map((schritt, index) => (
              <div key={index} className="relative">
                {/* Nummer & Icon */}
                <div className="flex lg:flex-col lg:items-center gap-4 lg:gap-0 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[120px] lg:h-[120px] rounded-full bg-white border-4 border-[#109387] flex items-center justify-center shadow-lg">
                      <schritt.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-[#109387]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#012956] text-white text-sm font-bold flex items-center justify-center">
                      {schritt.nummer}
                    </div>
                  </div>

                  {/* Pfeil zwischen Schritten - Mobile */}
                  {index < schritte.length - 1 && (
                    <ArrowRight className="lg:hidden w-6 h-6 text-[#109387] flex-shrink-0" />
                  )}
                </div>

                {/* Content */}
                <div className="lg:text-center lg:mt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-2">
                    {schritt.titel}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-2">
                    {schritt.beschreibung}
                  </p>
                  <span className="text-[#109387] font-bold text-xs uppercase tracking-wide">
                    {schritt.dauer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group"
          >
            Jetzt Schritt 1 starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
