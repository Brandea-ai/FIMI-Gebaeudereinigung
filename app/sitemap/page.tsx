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
    { name: 'Karriere', href: '/karriere' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Neuigkeiten', href: '/neuigkeiten' },
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
  branchen: [
    { name: 'Alle Branchen', href: '/branchen', isMain: true },
    { name: 'Büro & Verwaltung', href: '/branchen/buero-verwaltung' },
    { name: 'Industrie & Produktion', href: '/branchen/industrie-produktion' },
    { name: 'Gesundheitswesen', href: '/branchen/gesundheitswesen' },
    { name: 'Einzelhandel', href: '/branchen/einzelhandel' },
    { name: 'Gastronomie & Hotellerie', href: '/branchen/gastronomie-hotel' },
    { name: 'Bildung & Schulen', href: '/branchen/bildung-schulen' },
    { name: 'Fitness & Sport', href: '/branchen/fitness-sport' },
    { name: 'Logistik & Lager', href: '/branchen/logistik-lager' },
    { name: 'Wohnungswirtschaft', href: '/branchen/wohnungswirtschaft' },
    { name: 'Öffentliche Einrichtungen', href: '/branchen/oeffentliche-einrichtungen' },
    { name: 'Banken & Versicherungen', href: '/branchen/banken-versicherungen' },
    { name: 'Automotive', href: '/branchen/automotive' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Glossar', href: '/glossar' },
  ],
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#012956] py-20 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
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
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

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

              {/* Rechtliches */}
              <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387] mt-12">
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

            {/* Leistungen */}
            <div>
              <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387]">
                Leistungen
              </h2>
              <ul className="space-y-4">
                {sitemapData.leistungen.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-semibold transition-colors ${
                        item.isMain
                          ? 'text-[#109387] hover:text-[#012956]'
                          : 'text-gray-700 hover:text-[#109387]'
                      }`}
                    >
                      {item.isMain ? `→ ${item.name}` : item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branchen */}
            <div>
              <h2 className="text-[#012956] font-bold text-lg mb-6 pb-3 border-b-2 border-[#109387]">
                Branchen
              </h2>
              <ul className="space-y-4">
                {sitemapData.branchen.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-semibold transition-colors ${
                        item.isMain
                          ? 'text-[#109387] hover:text-[#012956]'
                          : 'text-gray-700 hover:text-[#109387]'
                      }`}
                    >
                      {item.isMain ? `→ ${item.name}` : item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
