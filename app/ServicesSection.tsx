import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Factory, Wrench } from 'lucide-react'

const serviceCategories = [
  {
    id: 1,
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Professionelle Reinigungslösungen für Büros, Verwaltungsgebäude und Gewerbeimmobilien. Maßgeschneiderte Konzepte für Ihre Bedürfnisse.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop',
    services: ['Büroreinigung', 'Unterhaltsreinigung', 'Baureinigung', 'Hallenreinigung', 'Parkplatzreinigung', 'Fensterreinigung'],
    link: '/leistungen/bueroreinigung',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 2,
    icon: Factory,
    title: 'Industrielle & Spezialreinigung',
    description: 'Spezialisiert auf anspruchsvolle Reinigungsaufgaben in Produktionsstätten, Industrieanlagen und Spezialimmobilien.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop',
    services: ['Industriereinigung', 'Maschinenreinigung', 'Fassadenreinigung', 'Tiefgaragenreinigung', 'Außenanlagenpflege', 'Sonderleistungen'],
    link: '/leistungen/industriereinigung',
    color: 'from-fimi-navy to-fimi-turquoise'
  },
  {
    id: 3,
    icon: Wrench,
    title: 'Facility Management & Services',
    description: 'Umfassende Facility-Management-Lösungen für einen reibungslosen Betrieb Ihrer Immobilie. Alles aus einer Hand.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
    services: ['Facility Management', 'Hausmeisterservice', 'Winterdienst', 'Beschaffungsmanagement'],
    link: '/leistungen/facility-management',
    color: 'from-teal-600 to-emerald-600'
  }
]

export default function ServicesContainer() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="mb-6">
            Maßgeschneiderte Reinigungslösungen<br />
            <span className="text-fimi-turquoise">für jeden Bedarf</span>
          </h2>
          <p className="text-xl text-gray-600">
            Von der gewerblichen Objektreinigung bis zum kompletten Facility Management –
            wir bieten Ihnen professionelle Lösungen aus einer Hand.
          </p>
        </div>

        {/* Zig-Zag Layout für Service-Kategorien */}
        <div className="space-y-24">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={category.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Bild Seite */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    {/* Hauptbild */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border-4 border-white">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-fimi-navy">{category.services.length}</p>
                      <p className="text-sm text-gray-600">Services</p>
                    </div>
                  </div>
                </div>

                {/* Content Seite */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center space-x-2 bg-fimi-turquoise/10 rounded-full px-4 py-2 mb-6">
                    <Icon className="w-5 h-5 text-fimi-turquoise" />
                    <span className="text-sm font-semibold text-fimi-turquoise">Kategorie {category.id}</span>
                  </div>

                  <h3 className="mb-6">{category.title}</h3>

                  <p className="text-lg text-gray-600 mb-8">
                    {category.description}
                  </p>

                  {/* Service Liste */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {category.services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-fimi-turquoise" />
                        <span className="text-gray-700 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={category.link}
                    className="inline-flex items-center space-x-2 btn-primary group"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Nicht die richtige Lösung gefunden?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Kein Problem! Wir erstellen individuelle Reinigungskonzepte,
                perfekt abgestimmt auf Ihre Anforderungen.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center space-x-2 bg-white text-fimi-navy font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Individuelle Beratung anfordern</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
