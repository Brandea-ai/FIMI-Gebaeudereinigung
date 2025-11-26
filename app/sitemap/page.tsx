import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Übersicht aller Seiten von FIMI Gebäudereinigung',
}

const sitemapData = {
  hauptseiten: [
    { name: 'Startseite', href: '/' },
    { name: 'Über FIMI', href: '/unternehmen' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Karriere', href: '/karriere' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  leistungen: {
    title: 'Leistungen',
    href: '/leistungen',
    items: [
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
  },
  regionen: {
    title: 'Regionen',
    items: [
      { name: 'Landshut', href: '/regionen/landshut' },
      { name: 'München', href: '/regionen/muenchen' },
      { name: 'Regensburg', href: '/regionen/regensburg' },
      { name: 'Ingolstadt', href: '/regionen/ingolstadt' },
      { name: 'Freising', href: '/regionen/freising' },
      { name: 'Erding', href: '/regionen/erding' },
      { name: 'Straubing', href: '/regionen/straubing' },
      { name: 'Dingolfing', href: '/regionen/dingolfing' },
      { name: 'Moosburg', href: '/regionen/moosburg' },
      { name: 'Deggendorf', href: '/regionen/deggendorf' },
      { name: 'Passau', href: '/regionen/passau' },
      { name: 'Rosenheim', href: '/regionen/rosenheim' },
    ],
  },
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
}

function TreeBranch({ children, isLast = false }: { children: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="relative pl-8">
      {/* Vertikale Linie */}
      <div className={`absolute left-3 top-0 w-px bg-[#109387]/30 ${isLast ? 'h-4' : 'h-full'}`} />
      {/* Horizontale Linie */}
      <div className="absolute left-3 top-4 w-4 h-px bg-[#109387]/30" />
      {/* Punkt */}
      <div className="absolute left-[9px] top-[13px] w-[7px] h-[7px] rounded-full bg-[#109387]" />
      <div className="py-2">
        {children}
      </div>
    </div>
  )
}

function TreeSection({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Hauptknoten */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-4 h-4 rounded-full bg-[#012956] border-4 border-[#109387] flex-shrink-0" />
        {href ? (
          <Link href={href} className="text-xl font-bold text-[#012956] hover:text-[#109387] transition-colors">
            {title}
          </Link>
        ) : (
          <span className="text-xl font-bold text-[#012956]">{title}</span>
        )}
      </div>
      {/* Kinder */}
      <div className="ml-2">
        {children}
      </div>
    </div>
  )
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#012956] py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Navigation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Sitemap
          </h1>
          <p className="mt-6 text-white/70 font-semibold text-lg max-w-2xl">
            Übersicht aller Seiten unserer Website
          </p>
        </div>
      </section>

      {/* Sitemap Tree */}
      <section className="py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

            {/* Hauptseiten */}
            <div>
              <TreeSection title="FIMI">
                {sitemapData.hauptseiten.map((item, index) => (
                  <TreeBranch key={item.href} isLast={index === sitemapData.hauptseiten.length - 1}>
                    <Link
                      href={item.href}
                      className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </TreeBranch>
                ))}
              </TreeSection>
            </div>

            {/* Leistungen */}
            <div>
              <TreeSection title={sitemapData.leistungen.title} href={sitemapData.leistungen.href}>
                {sitemapData.leistungen.items.map((item, index) => (
                  <TreeBranch key={item.href} isLast={index === sitemapData.leistungen.items.length - 1}>
                    <Link
                      href={item.href}
                      className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </TreeBranch>
                ))}
              </TreeSection>
            </div>

            {/* Regionen */}
            <div>
              <TreeSection title={sitemapData.regionen.title}>
                {sitemapData.regionen.items.map((item, index) => (
                  <TreeBranch key={item.href} isLast={index === sitemapData.regionen.items.length - 1}>
                    <Link
                      href={item.href}
                      className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </TreeBranch>
                ))}
              </TreeSection>
            </div>

            {/* Rechtliches */}
            <div>
              <TreeSection title="Rechtliches">
                {sitemapData.rechtliches.map((item, index) => (
                  <TreeBranch key={item.href} isLast={index === sitemapData.rechtliches.length - 1}>
                    <Link
                      href={item.href}
                      className="text-gray-700 font-semibold hover:text-[#109387] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </TreeBranch>
                ))}
              </TreeSection>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
