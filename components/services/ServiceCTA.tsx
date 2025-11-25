'use client'

export default function ServiceCTA() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-fimi-navy to-fimi-turquoise text-white">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Bereit für professionelle Sauberkeit?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-fimi-navy font-bold text-lg hover:opacity-90 transition-opacity"
            style={{ borderRadius: '4px' }}
          >
            Kostenloses Angebot anfordern
          </button>
          <a
            href="tel:01747225473"
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-fimi-navy transition-all"
            style={{ borderRadius: '4px' }}
          >
            01747225473 anrufen
          </a>
        </div>
        <p className="text-sm mt-6 text-white/70">
          Wir arbeiten nach ISO 9001 & 14001 Standards
        </p>
      </div>
    </section>
  )
}
