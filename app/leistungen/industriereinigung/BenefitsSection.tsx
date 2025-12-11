import { Factory, Shield, Clock, Users, Leaf, Award } from 'lucide-react'

const benefits = [
  {
    icon: Factory,
    title: 'Industrieerfahrung',
    description: '8+ Jahre Erfahrung in der Reinigung von Produktionshallen, Lagern und technischen Anlagen. Wir kennen die Anforderungen der Industrie.'
  },
  {
    icon: Shield,
    title: 'Arbeitssicherheit',
    description: 'Geschultes Personal mit PSA-Ausrüstung. Wir arbeiten sicher mit Gefahrstoffen und in Sperrbereichen – dokumentiert und versichert.'
  },
  {
    icon: Clock,
    title: 'Flexible Einsatzzeiten',
    description: 'Reinigung im Schichtbetrieb, am Wochenende oder während Produktionspausen. Wir passen uns Ihrem Betriebsablauf an.'
  },
  {
    icon: Users,
    title: 'Geschultes Fachpersonal',
    description: 'Unsere Teams sind spezialisiert auf Industriereinigung – mit Schulungen in Arbeitssicherheit, HACCP und Gefahrstoffhandling.'
  },
  {
    icon: Leaf,
    title: 'Umweltgerechte Reinigung',
    description: 'Umweltfreundliche Reinigungsmittel und fachgerechte Entsorgung. Wir arbeiten nach den Vorgaben Ihres Umweltmanagements.'
  },
  {
    icon: Award,
    title: 'Qualitätsgarantie',
    description: 'Dokumentierte Reinigungsprotokolle und regelmäßige Qualitätskontrollen. Bei Beanstandungen bessern wir kostenlos nach.'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Ihre Vorteile
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Warum FIMI Industriereinigung?
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Produktionshallen, Lager, technische Anlagen – wir reinigen dort, wo andere aufhören. Mit dem Know-how aus über 120 Industriekunden.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-[6px] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#109387]" />
                </div>
                <h3 className="text-xl font-bold text-[#012956] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 font-semibold leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
