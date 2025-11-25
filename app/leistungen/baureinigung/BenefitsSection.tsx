import { Shield, Clock, Sparkles, Award, Users, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Höchste Qualitätsstandards',
    description: 'Wir arbeiten nach ISO-Standards und führen regelmäßige Qualitätskontrollen durch für perfekte Ergebnisse.'
  },
  {
    icon: Clock,
    title: 'Flexible Einsatzzeiten',
    description: 'Reinigung außerhalb Ihrer Geschäftszeiten - morgens, abends oder am Wochenende. Ihr Tagesgeschäft wird nicht gestört.'
  },
  {
    icon: Sparkles,
    title: 'Gründliche Reinigung',
    description: 'Von Arbeitsflächen über Sanitäranlagen bis zu Gemeinschaftsräumen - wir sorgen für absolute Sauberkeit in jedem Bereich.'
  },
  {
    icon: Award,
    title: 'Erfahrenes Fachpersonal',
    description: 'Geschulte und zuverlässige Reinigungskräfte mit langjähriger Erfahrung in der professionellen Büroreinigung.'
  },
  {
    icon: Users,
    title: 'Fester Ansprechpartner',
    description: 'Ein dedizierter Ansprechpartner koordiniert alle Reinigungsarbeiten und steht Ihnen jederzeit zur Verfügung.'
  },
  {
    icon: Leaf,
    title: 'Ökologische Reinigungsmittel',
    description: 'Umweltschonende und gesundheitsverträgliche Reinigungsmittel für ein gesundes Arbeitsklima.'
  }
]

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
            Ihre Vorteile
          </span>
          <h2 className="mb-6">Warum FIMI Baureinigung?</h2>
          <p className="text-xl text-gray-600">
            Unsere Baureinigung vereint Gründlichkeit, Erfahrung und professionelle Technik für bezugsfertige Räume.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
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
                  <div className="absolute top-0 left-0 w-16 h-16 bg-fimi-turquoise rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-fimi-navy mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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
