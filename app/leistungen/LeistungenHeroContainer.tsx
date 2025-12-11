import Image from 'next/image'

export default function LeistungenHeroContainer() {
  return (
    <section className="relative py-32 bg-fimi-navy text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=3540&auto=format&fit=crop"
          alt="Professionelle Reinigungsdienstleistungen"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy via-fimi-navy/95 to-fimi-navy/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/20 border border-fimi-turquoise text-fimi-turquoise font-semibold mb-8" style={{ borderRadius: '4px' }}>
            16 Spezialisierte Dienstleistungen
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Unsere Leistungen
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
            Von Büroreinigung bis Facility Management - Maßgeschneiderte Lösungen für Ihr Unternehmen
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '3', label: 'Kategorien' },
              { number: '120+', label: 'Kunden' },
              { number: '24/7', label: 'Service' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20" style={{ borderRadius: '4px' }}>
                <div className="text-4xl font-bold text-fimi-turquoise mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
