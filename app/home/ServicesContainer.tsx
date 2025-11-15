import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench } from 'lucide-react'

const serviceCategories = [
  {
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Professionelle Reinigungslösungen für Büros, Hallen, Baustellen und mehr. Täglich, wöchentlich oder nach Ihrem individuellen Bedarf.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Büroreinigung',
      'Unterhaltsreinigung',
      'Baureinigung',
      'Hallenreinigung',
      'Parkplatzreinigung',
      'Fensterreinigung'
    ],
    link: '/leistungen#gewerblich'
  },
  {
    icon: Factory,
    title: 'Industrielle & Spezialreinigung',
    description: 'Spezialisierte Reinigung für industrielle Anlagen, Maschinen und Fassaden mit modernster Technik und geschultem Personal.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Industriereinigung',
      'Maschinenreinigung',
      'Fassadenreinigung',
      'Tiefgaragenreinigung',
      'Außenanlagenpflege',
      'Sonderleistungen'
    ],
    link: '/leistungen#industrie'
  },
  {
    icon: Wrench,
    title: 'Facility Management & Services',
    description: 'Umfassende Gebäudebetreuung aus einer Hand. Von Hausmeisterservice bis Winterdienst - wir kümmern uns um alles.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=3540&auto=format&fit=crop',
    services: [
      'Facility Management',
      'Hausmeisterservice',
      'Winterdienst',
      'Beschaffungsmanagement'
    ],
    link: '/leistungen#facility'
  }
]

export default function ServicesContainer() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Unsere Leistungen
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Professionelle Lösungen für jeden Bedarf
          </h2>
          <p className="text-xl text-gray-600">
            Von der gewerblichen Reinigung bis zum kompletten Facility Management
          </p>
        </div>

        {/* Services Grid - Zick-Zack Layout */}
        <div className="space-y-24">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={category.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-[500px] group overflow-hidden" style={{ borderRadius: '4px' }}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fimi-navy/80 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6" style={{ borderRadius: '4px' }}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-fimi-navy mb-4">
                    {category.title}
                  </h3>

                  <p className="text-xl text-gray-600 mb-8">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {category.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-fimi-navy"
                      >
                        <div className="w-1.5 h-1.5 bg-fimi-turquoise" style={{ borderRadius: '2px' }} />
                        <span className="font-semibold">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-fimi-navy text-white font-bold hover:opacity-90 transition-opacity group"
                    style={{ borderRadius: '4px' }}
                  >
                    Mehr erfahren
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 bg-white p-12 text-center border-2 border-fimi-turquoise" style={{ borderRadius: '4px' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-fimi-navy mb-4">
            Maßgeschneiderte Lösungen für Ihr Unternehmen
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Jedes Unternehmen hat individuelle Anforderungen. Lassen Sie uns gemeinsam die perfekte Lösung für Sie finden.
          </p>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fimi-turquoise text-white font-bold hover:opacity-90 transition-opacity"
            style={{ borderRadius: '4px' }}
          >
            Alle Leistungen ansehen
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
