import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Übersicht aller Seiten von FIMI Gebäudereinigung',
}

const sitemapData = {
  hauptseiten: [
    { name: 'Startseite', href: '/' },
    { name: 'Über FIMI', href: '/ueber-uns' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  leistungen: [
    { name: 'Alle Leistungen', href: '/leistungen', isMain: true },
    { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
    { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
    { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
    { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
    { name: 'Glasreinigung', href: '/leistungen/glasreinigung' },
    { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
    { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
    { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
    { name: 'Facility Management', href: '/leistungen/facility-management' },
    { name: 'Winterdienst', href: '/leistungen/winterdienst' },
    { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
    { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
    { name: 'Baureinigung', href: '/leistungen/baureinigung' },
    { name: 'Sonderreinigung', href: '/leistungen/sonderreinigung' },
    { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
    { name: 'Parkplatzreinigung', href: '/leistungen/parkplatzreinigung' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#012956] py-20 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Navigation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Sitemap
          </h1>
          <p className="mt-6 text-white/60 font-semibold text-lg">
            Übersicht aller Seiten
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-3 gap-16">

            {/* Hauptseiten & Rechtliches */}
            <div className="space-y-12">
              {/* Hauptseiten */}
              <div>
                <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387]">
                  Hauptseiten
                </h2>
                <ul className="space-y-4">
                  {sitemapData.hauptseiten.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rechtliches */}
              <div>
                <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387]">
                  Rechtliches
                </h2>
                <ul className="space-y-4">
                  {sitemapData.rechtliches.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Leistungen */}
            <div className="md:col-span-2">
              <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387]">
                Leistungen
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {sitemapData.leistungen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-semibold transition-colors ${
                      item.isMain
                        ? 'text-[#109387] hover:text-[#012956] col-span-2 mb-2'
                        : 'text-gray-700 hover:text-[#109387]'
                    }`}
                  >
                    {item.isMain ? `→ ${item.name}` : item.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
