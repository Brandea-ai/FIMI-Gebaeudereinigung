import Image from 'next/image'
import { TrendingUp, Heart, Award, Euro } from 'lucide-react'

export default function BueroreinigungBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Höhere Produktivität',
      description: 'Saubere Arbeitsplätze steigern nachweislich die Motivation und Leistungsfähigkeit Ihrer Mitarbeiter.',
      stats: '+25% Produktivität'
    },
    {
      icon: Heart,
      title: 'Gesünderes Arbeitsklima',
      description: 'Professionelle Hygiene reduziert Krankheitstage und sorgt für ein angenehmeres Arbeitsumfeld.',
      stats: '-30% Krankheitstage'
    },
    {
      icon: Award,
      title: 'Professioneller Eindruck',
      description: 'Empfangen Sie Kunden und Geschäftspartner in makellosen Räumlichkeiten - der erste Eindruck zählt.',
      stats: '100% Zufriedenheit'
    },
    {
      icon: Euro,
      title: 'Kosteneffizienz',
      description: 'Festpreise ohne versteckte Kosten. Langfristige Verträge mit attraktiven Konditionen möglich.',
      stats: 'Transparente Preise'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Ihre Vorteile
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Darum lohnt sich professionelle Büroreinigung
          </h2>
          <p className="text-xl text-gray-600">
            Investieren Sie in Sauberkeit - profitieren Sie mehrfach
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-8 hover-lift group text-center"
                style={{ borderRadius: '4px' }}
              >
                <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: '4px' }}>
                  <Icon size={32} />
                </div>

                <div className="text-3xl font-bold text-fimi-turquoise mb-3">
                  {benefit.stats}
                </div>

                <h3 className="text-xl font-bold text-fimi-navy mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white p-12" style={{ borderRadius: '4px' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-fimi-navy text-center mb-12">
            Mit FIMI vs. Ohne professionelle Reinigung
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ohne */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-400 mb-6">
                ❌ Ohne professionelle Reinigung
              </h4>

              {[
                'Mitarbeiter müssen selbst putzen',
                'Inkonsistente Sauberkeit',
                'Höherer Krankenstand',
                'Schlechter erster Eindruck',
                'Zeitverlust für Kerngeschäft',
                'Fehlende Fachkenntnis'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderRadius: '4px' }}>
                    ✗
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            {/* Mit FIMI */}
            <div className="space-y-6 bg-gradient-to-br from-fimi-turquoise/5 to-fimi-navy/5 p-8" style={{ borderRadius: '4px' }}>
              <h4 className="text-2xl font-bold text-fimi-navy mb-6">
                ✓ Mit FIMI Büroreinigung
              </h4>

              {[
                'Festangestellte Reinigungsprofis',
                'Gleichbleibend hohe Qualität',
                'Weniger Krankheitstage',
                'Professioneller Auftritt',
                'Voller Fokus aufs Geschäft',
                'Geprüfte Fachkompetenz'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-fimi-turquoise text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderRadius: '4px' }}>
                    ✓
                  </div>
                  <span className="text-gray-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
