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
    title: 'Nachhaltig & Umweltfreundlich',
    description: 'Einsatz ökologischer Reinigungsmittel und ressourcenschonende Verfahren für eine grüne Zukunft.',
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
    title: 'Beste Preis-Leistung',
    description: 'Transparente Preisgestaltung ohne versteckte Kosten. Premium-Qualität zu fairen Konditionen.',
    stats: 'Ab 25€/Std'
  }
]

export default function TrustContainer() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
            Warum FIMI?
          </span>
          <h2 className="mb-6">
            Ihr vertrauensvoller Partner für<br />
            <span className="text-fimi-turquoise">professionelle Sauberkeit</span>
          </h2>
          <p className="text-xl text-gray-600">
            Seit über 15 Jahren setzen wir Maßstäbe in der Gebäudereinigung.
            Vertrauen Sie auf Erfahrung, Qualität und Zuverlässigkeit.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-fimi-turquoise hover:shadow-xl transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-fimi-turquoise rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-fimi-navy mb-3">
                  {element.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {element.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center bg-fimi-turquoise/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-fimi-turquoise">
                    {element.stats}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 p-12 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-2xl text-white text-center">
          <div>
            <p className="text-5xl font-bold mb-2">15+</p>
            <p className="text-gray-200">Jahre Erfahrung</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">500+</p>
            <p className="text-gray-200">Zufriedene Kunden</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">50+</p>
            <p className="text-gray-200">Fachkräfte im Team</p>
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">98%</p>
            <p className="text-gray-200">Weiterempfehlungsrate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
