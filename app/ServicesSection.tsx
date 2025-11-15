import Link from 'next/link'
import { Building2, Factory, Wrench, ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    id: 1,
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Professionelle Reinigungslösungen für Büros, Verwaltungsgebäude und Gewerbeimmobilien.',
    services: ['Büroreinigung', 'Unterhaltsreinigung', 'Baureinigung', 'Hallenreinigung', 'Parkplatzreinigung', 'Fensterreinigung'],
    link: '/leistungen/bueroreinigung'
  },
  {
    id: 2,
    icon: Factory,
    title: 'Industrielle & Spezialreinigung',
    description: 'Spezialisiert auf anspruchsvolle Reinigungsaufgaben in Produktionsstätten und Industrieanlagen.',
    services: ['Industriereinigung', 'Maschinenreinigung', 'Fassadenreinigung', 'Tiefgaragenreinigung', 'Außenanlagenpflege', 'Sonderleistungen'],
    link: '/leistungen/industriereinigung'
  },
  {
    id: 3,
    icon: Wrench,
    title: 'Facility Management & Services',
    description: 'Umfassende Facility-Management-Lösungen für einen reibungslosen Betrieb Ihrer Immobilie.',
    services: ['Facility Management', 'Hausmeisterservice', 'Winterdienst', 'Beschaffungsmanagement'],
    link: '/leistungen/facility-management'
  }
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-subtitle mb-6">
            Unsere Leistungen
          </p>
          <h2 className="mb-6">
            Maßgeschneiderte Lösungen<br />
            für jeden Bedarf
          </h2>
          <p className="text-body">
            Von der gewerblichen Objektreinigung bis zum kompletten Facility Management –
            wir bieten Ihnen professionelle Lösungen aus einer Hand.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="card p-8 card-hover group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-fimi-navy flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4">{category.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2 mb-8">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-fimi-turquoise rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={category.link}
                  className="btn-text group"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-fimi-navy text-white p-12 md:p-16">
          <div className="max-w-3xl">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Nicht die passende Lösung gefunden?
            </h3>
            <p className="text-gray-200 text-lg mb-8">
              Kein Problem. Wir erstellen individuelle Reinigungskonzepte,
              perfekt abgestimmt auf Ihre spezifischen Anforderungen.
            </p>
            <Link href="/kontakt" className="btn-secondary">
              Individuelle Beratung anfordern
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
