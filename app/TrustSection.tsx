import { Shield, Award, Users, Clock, Leaf, TrendingUp } from 'lucide-react'

const trustElements = [
  {
    icon: Shield,
    title: 'Zertifizierte Qualität',
    description: 'ISO-zertifizierte Prozesse und regelmäßige Qualitätskontrollen garantieren höchste Standards.',
    stats: '100% zertifiziert'
  },
  {
    icon: Users,
    title: 'Erfahrenes Team',
    description: 'Speziell geschulte Fachkräfte mit langjähriger Erfahrung in der professionellen Gebäudereinigung.',
    stats: '50+ Mitarbeiter'
  },
  {
    icon: Clock,
    title: '24/7 Verfügbarkeit',
    description: 'Notfall-Hotline und flexible Einsatzzeiten - wir sind für Sie da, wann immer Sie uns brauchen.',
    stats: 'Rund um die Uhr'
  },
  {
    icon: Leaf,
    title: 'Nachhaltig',
    description: 'Einsatz ökologischer Reinigungsmittel und ressourcenschonende Verfahren.',
    stats: '100% bio-abbaubar'
  },
  {
    icon: Award,
    title: 'Ausgezeichneter Service',
    description: 'Mehrfach ausgezeichnet für exzellente Servicequalität und Kundenzufriedenheit.',
    stats: '98% Zufriedenheit'
  },
  {
    icon: TrendingUp,
    title: 'Faire Preise',
    description: 'Transparente Preisgestaltung ohne versteckte Kosten. Premium-Qualität zu fairen Konditionen.',
    stats: 'Ab 25€/Std'
  }
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-subtitle mb-6">
            Warum FIMI?
          </p>
          <h2 className="mb-6">
            Ihr vertrauensvoller Partner<br />
            für professionelle Sauberkeit
          </h2>
          <p className="text-body">
            Seit über 15 Jahren setzen wir Maßstäbe in der Gebäudereinigung.
            Vertrauen Sie auf Erfahrung, Qualität und Zuverlässigkeit.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <div
                key={index}
                className="border-l-4 border-fimi-turquoise pl-6"
              >
                {/* Icon */}
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-fimi-navy mr-3" />
                  <span className="text-sm font-bold text-fimi-turquoise">
                    {element.stats}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-fimi-navy mb-3">
                  {element.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar - Professional */}
        <div className="bg-fimi-navy text-white py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-gray-300">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-gray-300">Zufriedene Kunden</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-gray-300">Fachkräfte im Team</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-gray-300">Weiterempfehlung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
