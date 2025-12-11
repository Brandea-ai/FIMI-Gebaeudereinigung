import Image from 'next/image'
import { Sparkles, Clock, Users, Shield, Leaf, CheckCircle2 } from 'lucide-react'

export default function BueroreinigungFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'Umfassende Reinigung',
      items: [
        'Bodenreinigung (Teppich, Laminat, Fliesen)',
        'Schreibtisch- und Oberflächenreinigung',
        'Sanitärreinigung und Hygiene',
        'Müllentsorgung und Recycling',
        'Küchen- und Pausenraumreinigung',
        'Glas- und Fensterreinigung'
      ]
    },
    {
      icon: Clock,
      title: 'Flexible Reinigungszeiten',
      items: [
        'Morgens vor Arbeitsbeginn',
        'Abends nach Feierabend',
        'Am Wochenende',
        'Nachts (keine Störung)',
        'Nach individuellem Zeitplan',
        'Einmalig oder regelmäßig'
      ]
    },
    {
      icon: Users,
      title: 'Professionelles Team',
      items: [
        'Festangestelltes Personal',
        'Regelmäßige Schulungen',
        'Erfahrene Fachkräfte',
        'Persönlicher Ansprechpartner',
        'Zuverlässig und diskret',
        'Deutschsprachige Kommunikation'
      ]
    },
    {
      icon: Shield,
      title: 'Qualität & Sicherheit',
      items: [
        'Geprüfte Qualität',
        'Versichert und geprüft',
        'Qualitätskontrollen',
        'Dokumentierte Prozesse',
        'Vertraulichkeit garantiert',
        'Datenschutz-konform'
      ]
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Leistungsumfang
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Was wir für Ihr Büro tun
          </h2>
          <p className="text-xl text-gray-600">
            Umfassende Reinigungsleistungen für ein perfektes Arbeitsumfeld
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 hover-lift"
                style={{ borderRadius: '4px' }}
              >
                <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6" style={{ borderRadius: '4px' }}>
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-fimi-navy mb-6">
                  {feature.title}
                </h3>

                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-fimi-turquoise flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] group overflow-hidden" style={{ borderRadius: '4px' }}>
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=3540&auto=format&fit=crop"
              alt="Sauberes Büro nach professioneller Reinigung"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-fimi-navy mb-6">
              Umweltfreundliche Reinigung
            </h3>

            <p className="text-xl text-gray-600 mb-8">
              Wir setzen auf nachhaltige Reinigungsmittel und -verfahren, die sowohl effektiv als auch umweltschonend sind.
            </p>

            <div className="space-y-4">
              {[
                'Umweltbewusstes Arbeiten',
                'Ökologische Reinigungsmittel',
                'Wassersparende Verfahren',
                'Mülltrennungskonzepte',
                'Energieeffiziente Geräte'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderRadius: '4px' }}>
                    <Leaf size={16} />
                  </div>
                  <span className="text-lg text-gray-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
