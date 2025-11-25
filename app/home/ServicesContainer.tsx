'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench, CheckCircle } from 'lucide-react'

const serviceCategories = [
  {
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    subtitle: 'Professionelle Reinigung fuer Bueros und Gewerbe',
    description: 'Von der taeglichen Unterhaltsreinigung bis zur gruendlichen Grundreinigung - wir sorgen fuer makellose Sauberkeit in Ihren Geschaeftsraeumen. Massgeschneiderte Konzepte fuer Buerogebaeude, Praxen und Verwaltungen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Bueroreinigung',
      'Unterhaltsreinigung',
      'Baureinigung',
      'Hallenreinigung',
      'Parkplatzreinigung',
      'Fensterreinigung',
    ],
    link: '/leistungen#gewerblich',
    stats: { value: '200+', label: 'Bueros betreut' },
  },
  {
    icon: Factory,
    title: 'Industrielle Reinigung',
    subtitle: 'Spezialisierte Loesungen fuer Industrie',
    description: 'Industrieanlagen erfordern besondere Expertise. Unsere geschulten Teams reinigen Produktionshallen, Maschinen und Fassaden mit modernster Technik und unter Einhaltung aller Sicherheitsvorschriften.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Industriereinigung',
      'Maschinenreinigung',
      'Fassadenreinigung',
      'Tiefgaragenreinigung',
      'Aussenanlagenpflege',
      'Sonderreinigung',
    ],
    link: '/leistungen#industrie',
    stats: { value: '50+', label: 'Industriekunden' },
  },
  {
    icon: Wrench,
    title: 'Facility Management',
    subtitle: 'Ganzheitliche Gebaeudebetreuung',
    description: 'Alles aus einer Hand: Wir uebernehmen die komplette Betreuung Ihrer Immobilie - von der Reinigung ueber Hausmeisterservices bis zum Winterdienst. Ihr Single Point of Contact fuer alle Gebaeudedienstleistungen.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Facility Management',
      'Hausmeisterservice',
      'Winterdienst',
      'Beschaffungsmanagement',
    ],
    link: '/leistungen#facility',
    stats: { value: '100+', label: 'Objekte verwaltet' },
  },
]

export default function ServicesContainer() {
  return (
    <section id="services-section" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge mb-6">Unsere Leistungen</span>
          <h2 className="heading-2 mb-6">
            Professionelle Reinigungsloesungen fuer jeden Bedarf
          </h2>
          <p className="text-lead">
            18 spezialisierte Dienstleistungen in 3 Kategorien.
            Von der Bueroreinigung bis zum kompletten Facility Management.
          </p>
        </div>

        {/* Services - Zick-Zack Layout */}
        <div className="space-y-24 lg:space-y-32">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={category.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-zoom">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-fimi-navy/0 group-hover:bg-fimi-navy/20 transition-colors duration-500" />
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute -bottom-6 -right-6 lg:-right-8 glass-card px-6 py-4 rounded-xl shadow-glass-lg">
                      <div className="text-3xl font-bold text-fimi-turquoise">
                        {category.stats.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {category.stats.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-fimi-turquoise/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-fimi-turquoise" />
                  </div>

                  {/* Subtitle */}
                  <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider">
                    {category.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="heading-3 mt-2 mb-4">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {category.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-fimi-navy"
                      >
                        <CheckCircle size={16} className="text-fimi-turquoise flex-shrink-0" />
                        <span className="font-medium text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={category.link}
                    className="group inline-flex items-center gap-2 text-fimi-turquoise font-semibold hover:gap-3 transition-all"
                  >
                    Mehr erfahren
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-10 bg-white rounded-2xl shadow-card border border-gray-100">
            <h3 className="heading-4 mb-4">
              Sie wissen nicht, welche Leistung Sie benoetigen?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Kein Problem. Wir beraten Sie gerne und erstellen ein massgeschneidertes Konzept fuer Ihre Anforderungen.
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
