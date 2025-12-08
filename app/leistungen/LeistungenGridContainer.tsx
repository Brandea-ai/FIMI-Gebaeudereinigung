import Link from 'next/link'
import Image from 'next/image'
import { Building2, Factory, Wrench, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'gewerblich',
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Professionelle Reinigungslösungen für Büros, Hallen und Gewerbeobjekte',
    services: [
      { name: 'Büroreinigung', slug: 'bueroreinigung', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Unterhaltsreinigung', slug: 'unterhaltsreinigung', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop' },
      { name: 'Baureinigung', slug: 'baureinigung', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hallenreinigung', slug: 'hallenreinigung', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Parkplatzreinigung', slug: 'parkplatzreinigung', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fensterreinigung', slug: 'fensterreinigung', image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'industrie',
    icon: Factory,
    title: 'Industrielle & Spezialreinigung',
    description: 'Spezialisierte Reinigung für industrielle Anlagen und Produktionsstätten',
    services: [
      { name: 'Industriereinigung', slug: 'industriereinigung', image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Maschinenreinigung', slug: 'maschinenreinigung', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fassadenreinigung', slug: 'fassadenreinigung', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tiefgaragenreinigung', slug: 'tiefgaragenreinigung', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Außenanlagenpflege', slug: 'aussenanlagenpflege', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sonderleistungen', slug: 'sonderleistungen', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sonderreinigung', slug: 'sonderreinigung', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  {
    id: 'facility',
    icon: Wrench,
    title: 'Facility Management & Gebäudeservice',
    description: 'Umfassende Gebäudebetreuung und Dienstleistungen aus einer Hand',
    services: [
      { name: 'Facility Management', slug: 'facility-management', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hausmeisterservice', slug: 'hausmeisterservice', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop' },
      { name: 'Winterdienst', slug: 'winterdienst', image: 'https://images.unsplash.com/photo-1612119181008-12ab5e11f48f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Beschaffungsmanagement', slug: 'beschaffungsmanagement', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' },
    ]
  }
]

export default function LeistungenGridContainer() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {categories.map((category, categoryIndex) => {
          const Icon = category.icon

          return (
            <div key={category.id} id={category.id} className={categoryIndex > 0 ? 'mt-32' : ''}>
              {/* Category Header */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center" style={{ borderRadius: '4px' }}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-fimi-turquoise uppercase tracking-wide mb-1">
                      Kategorie {categoryIndex + 1}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/leistungen/${service.slug}`}
                    className="group bg-white border-2 border-gray-200 overflow-hidden hover-lift"
                    style={{ borderRadius: '4px' }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fimi-navy via-fimi-navy/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 flex items-center justify-between">
                      <span className="text-fimi-turquoise font-semibold group-hover:underline">
                        Mehr erfahren
                      </span>
                      <ArrowRight className="text-fimi-turquoise group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
