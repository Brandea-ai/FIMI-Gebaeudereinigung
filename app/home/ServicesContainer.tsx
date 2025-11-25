'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench, CheckCircle } from 'lucide-react'

const serviceCategories = [
  {
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
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
  },
  {
    icon: Factory,
    title: 'Industrielle Reinigung',
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
  },
  {
    icon: Wrench,
    title: 'Facility Management',
    description: 'Alles aus einer Hand: Wir uebernehmen die komplette Betreuung Ihrer Immobilie - von der Reinigung ueber Hausmeisterservices bis zum Winterdienst. Ihr Single Point of Contact fuer alle Gebaeudedienstleistungen.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=3540&auto=format&fit=crop',
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
        {/* Header - Links ausgerichtet */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-navy mb-6">
            Professionelle Reinigungsloesungen fuer jeden Bedarf
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-4xl">
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
                {/* Image - 6px Rundungen */}
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
                <div className={`${isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                  {/* Icon - Ohne Hintergrund */}
                  <div className={`mb-6 ${isEven ? '' : 'lg:flex lg:justify-end'}`}>
                    <Icon size={48} strokeWidth={2.5} className="text-fimi-turquoise" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-fimi-navy mb-4">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl font-bold text-gray-600 mb-8">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className={`grid grid-cols-2 gap-3 mb-8 ${isEven ? '' : 'lg:justify-items-end'}`}>
                    {category.services.map((service) => (
                      <div
                        key={service}
                        className={`flex items-center gap-3 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                      >
                        <CheckCircle size={24} strokeWidth={2.5} className="text-fimi-turquoise flex-shrink-0" />
                        <span className="text-lg font-bold text-fimi-navy">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={category.link}
                    className={`inline-flex items-center gap-3 text-fimi-turquoise text-xl font-bold hover:gap-4 transition-all ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    Mehr erfahren
                    <ArrowRight size={24} strokeWidth={3} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA - 6px Rundungen */}
        <div className="mt-24 text-center">
          <div className="inline-block p-10 bg-white rounded-[6px] border-2 border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-fimi-navy mb-4">
              Sie wissen nicht, welche Leistung Sie benoetigen?
            </h3>
            <p className="text-xl font-bold text-gray-600 mb-8 max-w-2xl mx-auto">
              Kein Problem. Wir beraten Sie gerne und erstellen ein massgeschneidertes Konzept fuer Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/leistungen" className="inline-flex items-center justify-center gap-3 bg-white text-fimi-navy text-lg font-bold px-8 py-4 rounded-[6px] border-3 border-fimi-navy hover:bg-fimi-navy hover:text-white transition-all">
                Alle 18 Leistungen ansehen
              </Link>
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise text-white text-lg font-bold px-8 py-4 rounded-[6px] hover:opacity-90 transition-all">
                Kostenlose Beratung
                <ArrowRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
