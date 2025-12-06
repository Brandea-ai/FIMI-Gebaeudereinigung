import Link from 'next/link'
import { Home, Phone, Mail, ArrowRight, Search } from 'lucide-react'

export default function NotFound() {
  const topPages = [
    { name: 'Startseite', href: '/', description: 'Zurück zur Übersicht' },
    { name: 'Leistungen', href: '/leistungen', description: 'Alle 18 Reinigungsservices' },
    { name: 'Kontakt', href: '/kontakt', description: 'Kostenfreie Beratung anfragen' },
    { name: 'Büroreinigung', href: '/leistungen/bueroreinigung', description: 'Unser beliebtester Service' },
    { name: 'Industriereinigung', href: '/leistungen/industriereinigung', description: 'Für Produktion & Logistik' },
  ]

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 bg-[#012956]/10 text-[#012956] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Search size={16} />
          Fehler 404
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#012956] mb-4">
          Seite nicht gefunden
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          Vielleicht finden Sie hier, was Sie suchen:
        </p>

        {/* Top Pages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Beliebte Seiten
          </h2>
          <ul className="space-y-3">
            {topPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="text-left">
                    <span className="font-semibold text-[#012956] group-hover:text-[#109387]">
                      {page.name}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {page.description}
                    </span>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-[#109387] group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Home size={18} />
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Mail size={18} />
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Direct Contact */}
        <div className="text-gray-600">
          <p className="mb-2">Oder rufen Sie uns direkt an:</p>
          <a
            href="tel:+4987143033460"
            className="inline-flex items-center gap-2 text-[#109387] hover:text-[#0d7d72] font-bold text-lg"
          >
            <Phone size={20} />
            0871 430 334 60
          </a>
        </div>
      </div>
    </main>
  )
}
