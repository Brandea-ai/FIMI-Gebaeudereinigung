import { Sparkles, Shield, Clock, Users, Leaf, Award } from 'lucide-react'

const benefits = [
  {
    icon: Sparkles,
    title: 'Flexible Intervalle',
    description: '[PLATZHALTER: Beschreibung flexible Reinigungsintervalle]'
  },
  {
    icon: Shield,
    title: 'Qualitätskontrolle',
    description: '[PLATZHALTER: Beschreibung Qualitätssicherung]'
  },
  {
    icon: Clock,
    title: 'Zuverlässige Zeiten',
    description: '[PLATZHALTER: Beschreibung pünktliche Reinigung]'
  },
  {
    icon: Users,
    title: 'Festes Stammpersonal',
    description: '[PLATZHALTER: Beschreibung Stammpersonal]'
  },
  {
    icon: Leaf,
    title: 'Umweltfreundlich',
    description: '[PLATZHALTER: Beschreibung Umweltfreundlichkeit]'
  },
  {
    icon: Award,
    title: 'Höchste Standards',
    description: '[PLATZHALTER: Beschreibung Standards]'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Ihre Vorteile
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Warum FIMI Unterhaltsreinigung?
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            [PLATZHALTER: Kurze Einleitung zu den Vorteilen der Unterhaltsreinigung]
          </p>
        </div>

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
