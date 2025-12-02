'use client'

import { Check, X, ArrowRight, Calculator } from 'lucide-react'

const preisbeispiele = [
  {
    typ: 'Einfamilienhaus',
    flaeche: '150 m²',
    reinigung: '1.500 - 2.500€',
    impraegnierung: '+ 750 - 1.500€',
    neuanstrich: '5.000 - 7.500€',
    ersparnis: 'bis zu 5.000€',
  },
  {
    typ: 'Mehrfamilienhaus',
    flaeche: '300 m²',
    reinigung: '3.000 - 4.500€',
    impraegnierung: '+ 1.500 - 3.000€',
    neuanstrich: '10.500 - 15.000€',
    ersparnis: 'bis zu 10.000€',
  },
  {
    typ: 'Bürogebäude',
    flaeche: '500 m²',
    reinigung: '5.000 - 7.500€',
    impraegnierung: '+ 2.500 - 5.000€',
    neuanstrich: '17.500 - 25.000€',
    ersparnis: 'bis zu 15.000€',
  },
]

const vergleich = {
  reinigung: [
    { text: 'Ab 10€/m²', included: true },
    { text: 'Kein Gerüst nötig (bis 18m)', included: true },
    { text: 'Fertig in 1-3 Tagen', included: true },
    { text: 'Keine Trocknungszeit', included: true },
    { text: '5-10 Jahre Schutz', included: true },
    { text: 'Umweltschonend', included: true },
  ],
  neuanstrich: [
    { text: 'Ab 35€/m²', included: false },
    { text: 'Gerüst erforderlich', included: false },
    { text: '1-2 Wochen Dauer', included: false },
    { text: 'Trocknungszeit beachten', included: false },
    { text: 'Farbauswahl nötig', included: false },
    { text: 'Höherer CO2-Fußabdruck', included: false },
  ],
}

export default function KostenSection() {
  return (
    <section id="kosten" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Transparente Preise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Was kostet Fassadenreinigung?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Die Kosten hängen von Fassadengröße, Verschmutzungsgrad und gewähltem Verfahren ab.
            Hier finden Sie Richtwerte – den genauen Preis nennen wir Ihnen nach der Besichtigung.
          </p>
        </div>

        {/* Vergleich */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
          {/* Reinigung */}
          <div className="bg-[#109387] rounded-[6px] p-5 sm:p-6 lg:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Fassadenreinigung</h3>
                <p className="text-white/70 font-semibold text-sm">Unsere Empfehlung</p>
              </div>
            </div>

            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ab 10€<span className="text-lg sm:text-xl">/m²</span>
            </div>

            <ul className="space-y-3">
              {vergleich.reinigung.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Neuanstrich */}
          <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#012956]">Neuanstrich</h3>
                <p className="text-gray-500 font-semibold text-sm">Alternative</p>
              </div>
            </div>

            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-6">
              Ab 35€<span className="text-lg sm:text-xl">/m²</span>
            </div>

            <ul className="space-y-3">
              {vergleich.neuanstrich.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Preisbeispiele Tabelle */}
        <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#012956] mb-6 flex items-center gap-3">
            <Calculator className="w-6 h-6 text-[#109387]" />
            Preisbeispiele
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#012956]">
                  <th className="text-left py-3 px-2 text-[#012956] font-bold">Gebäudetyp</th>
                  <th className="text-left py-3 px-2 text-[#012956] font-bold">Fläche</th>
                  <th className="text-left py-3 px-2 text-[#012956] font-bold">Reinigung</th>
                  <th className="text-left py-3 px-2 text-[#012956] font-bold">+ Imprägnierung</th>
                  <th className="text-left py-3 px-2 text-gray-400 font-bold">Neuanstrich</th>
                  <th className="text-left py-3 px-2 text-[#109387] font-bold">Ersparnis</th>
                </tr>
              </thead>
              <tbody>
                {preisbeispiele.map((beispiel, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-2 font-bold text-[#012956]">{beispiel.typ}</td>
                    <td className="py-4 px-2 text-gray-600 font-semibold">{beispiel.flaeche}</td>
                    <td className="py-4 px-2 text-[#109387] font-bold">{beispiel.reinigung}</td>
                    <td className="py-4 px-2 text-gray-600 font-semibold">{beispiel.impraegnierung}</td>
                    <td className="py-4 px-2 text-gray-400 font-semibold line-through">{beispiel.neuanstrich}</td>
                    <td className="py-4 px-2 text-[#109387] font-bold">{beispiel.ersparnis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm font-semibold mt-4">
            * Alle Preise sind Richtwerte inkl. MwSt. Der finale Preis wird nach kostenfreier Besichtigung festgelegt.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group"
          >
            Kostenloses Angebot anfordern
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
