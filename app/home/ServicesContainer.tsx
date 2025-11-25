'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench, CheckCircle } from 'lucide-react'

const serviceCategories = [
  {
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Von der täglichen Unterhaltsreinigung bis zur gründlichen Grundreinigung – wir sorgen für makellose Sauberkeit in Ihren Geschäftsräumen. Maßgeschneiderte Konzepte für Bürogebäude, Praxen und Verwaltungen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Büroreinigung',
      'Unterhaltsreinigung',
      'Baureinigung',
      'Hallenreinigung',
      'Parkplatzreinigung',
      'Fensterreinigung',
    ],
    link: '/leistungen#gewerblich',
  },
  {
    icon: Factory,
    title: 'Industrielle Reinigung',
    description: 'Industrieanlagen erfordern besondere Expertise. Unsere geschulten Teams reinigen Produktionshallen, Maschinen und Fassaden mit modernster Technik und unter Einhaltung aller Sicherheitsvorschriften.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Industriereinigung',
      'Maschinenreinigung',
      'Fassadenreinigung',
      'Tiefgaragenreinigung',
      'Außenanlagenpflege',
      'Sonderreinigung',
    ],
    link: '/leistungen#industrie',
  },
  {
    icon: Wrench,
    title: 'Facility Management',
    description: 'Alles aus einer Hand: Wir übernehmen die komplette Betreuung Ihrer Immobilie – von der Reinigung über Hausmeisterservices bis zum Winterdienst. Ihr Single Point of Contact für alle Gebäudedienstleistungen.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Facility Management',
      'Hausmeisterservice',
      'Winterdienst',
      'Beschaffungsmanagement',
    ],
    link: '/leistungen#facility',
  },
]

export default function ServicesContainer() {
  return (
    <section id="services-section" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="heading-section">
            Professionelle Reinigungslösungen für jeden Bedarf
          </h2>
          <p className="text-lead">
            18 spezialisierte Dienstleistungen in 3 Kategorien.
            Von der Büroreinigung bis zum kompletten Facility Management.
          </p>
        </div>

        {/* Services - Zick-Zack Layout */}
        <div className="space-y-20">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={category.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Icon */}
                  <Icon size={40} className="text-fimi-turquoise mb-4" />

                  {/* Title */}
                  <h3 className="heading-card text-2xl mb-3">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body mb-6">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.services.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-fimi-turquoise flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 text-fimi-turquoise font-semibold hover:gap-3 transition-all"
                  >
                    Mehr erfahren
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-white rounded-[6px] border border-gray-200">
            <h3 className="heading-card mb-2">
              Sie wissen nicht, welche Leistung Sie benötigen?
            </h3>
            <p className="text-body mb-6 max-w-xl mx-auto">
              Kein Problem. Wir beraten Sie gerne und erstellen ein maßgeschneidertes Konzept für Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/leistungen" className="btn-outline">
                Alle 18 Leistungen ansehen
              </Link>
              <Link href="/kontakt" className="btn-primary">
                Kostenlose Beratung
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
