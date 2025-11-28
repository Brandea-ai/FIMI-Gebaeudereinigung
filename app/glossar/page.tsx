import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glossar - Fachbegriffe der Gebäudereinigung | FIMI',
  description: 'Lexikon der wichtigsten Begriffe rund um professionelle Gebäudereinigung, Facility Management und Reinigungsdienstleistungen. Von A wie Außenanlagenpflege bis W wie Winterdienst.',
  keywords: 'Glossar, Lexikon, Gebäudereinigung, Fachbegriffe, Reinigung, Facility Management, Bayern',
}

const glossarData = [
  {
    begriff: 'Außenanlagenpflege',
    definition: 'Professionelle Pflege und Instandhaltung von Außenbereichen wie Grünflächen, Wegen, Parkplätzen und Eingangsbereichen. Umfasst Rasenpflege, Laubbeseitigung und allgemeine Sauberkeit.',
    link: '/leistungen/aussenanlagenpflege',
  },
  {
    begriff: 'Baureinigung',
    definition: 'Spezielle Reinigung nach Bau- oder Renovierungsarbeiten. Entfernt Baustaub, Mörtelreste, Farbspritzer und andere baubedingte Verschmutzungen für eine bezugsfertige Übergabe.',
    link: '/leistungen/baureinigung',
  },
  {
    begriff: 'Büroreinigung',
    definition: 'Regelmäßige professionelle Reinigung von Büroflächen, Arbeitsplätzen, Konferenzräumen und Gemeinschaftsbereichen. Sorgt für ein hygienisches und produktives Arbeitsumfeld.',
    link: '/leistungen/bueroreinigung',
  },
  {
    begriff: 'Desinfektionsreinigung',
    definition: 'Reinigungsverfahren mit desinfizierenden Mitteln zur Abtötung von Keimen, Bakterien und Viren. Besonders wichtig in Gesundheitseinrichtungen und bei erhöhten Hygieneanforderungen.',
    link: '/branchen/gesundheitswesen',
  },
  {
    begriff: 'Facility Management',
    definition: 'Ganzheitliches Management von Gebäuden und Liegenschaften. Umfasst technische, infrastrukturelle und kaufmännische Dienstleistungen für einen effizienten Gebäudebetrieb.',
    link: '/leistungen/facility-management',
  },
  {
    begriff: 'Fassadenreinigung',
    definition: 'Professionelle Reinigung von Gebäudefassaden verschiedener Materialien wie Glas, Stein, Metall oder Putz. Erhält das Erscheinungsbild und den Wert der Immobilie.',
    link: '/leistungen/fassadenreinigung',
  },
  {
    begriff: 'Fensterreinigung',
    definition: 'Streifenfreie Reinigung von Fenstern, Glasflächen und Rahmen. Wird mit speziellen Werkzeugen und Techniken durchgeführt, auch in großen Höhen.',
    link: '/leistungen/fensterreinigung',
  },
  {
    begriff: 'Gebäudereinigung',
    definition: 'Oberbegriff für alle professionellen Reinigungsdienstleistungen in und an Gebäuden. Umfasst Unterhaltsreinigung, Glasreinigung, Sonderreinigung und viele weitere Leistungen.',
    link: '/leistungen',
  },
  {
    begriff: 'Glasreinigung',
    definition: 'Professionelle Reinigung aller Glasflächen wie Fenster, Glasfassaden, Schaufenster und Glastrennwände. Für optimale Transparenz und Lichtdurchlässigkeit.',
    link: '/leistungen/glasreinigung',
  },
  {
    begriff: 'Grundreinigung',
    definition: 'Intensive Tiefenreinigung von Böden und Oberflächen. Entfernt hartnäckige Verschmutzungen und alte Pflegeschichten. Bildet die Basis für nachfolgende Unterhaltsreinigung.',
    link: '/leistungen/sonderreinigung',
  },
  {
    begriff: 'Hallenreinigung',
    definition: 'Reinigung großer Hallen in Industrie, Logistik und Produktion. Erfordert spezielle Maschinen und Techniken für große Flächen und industrielle Verschmutzungen.',
    link: '/leistungen/hallenreinigung',
  },
  {
    begriff: 'Hausmeisterservice',
    definition: 'Umfassende Betreuung von Immobilien durch geschultes Personal. Beinhaltet kleinere Reparaturen, Kontrollgänge, Müllentsorgung und Ansprechpartner für Mieter.',
    link: '/leistungen/hausmeisterservice',
  },
  {
    begriff: 'Hygienereininung',
    definition: 'Reinigung mit besonderem Fokus auf Hygiene und Keimfreiheit. Wichtig in sensiblen Bereichen wie Sanitäranlagen, Küchen und medizinischen Einrichtungen.',
    link: '/branchen/gesundheitswesen',
  },
  {
    begriff: 'Industriereinigung',
    definition: 'Spezialisierte Reinigung in Produktions- und Industriebetrieben. Berücksichtigt besondere Anforderungen wie Maschinenreinigung, Entfettung und Arbeitssicherheit.',
    link: '/leistungen/industriereinigung',
  },
  {
    begriff: 'ISO 9001',
    definition: 'Internationaler Standard für Qualitätsmanagementsysteme. Zertifizierte Unternehmen erfüllen definierte Qualitätsstandards und kontinuierliche Verbesserungsprozesse.',
    link: '/ueber-uns',
  },
  {
    begriff: 'ISO 14001',
    definition: 'Internationaler Standard für Umweltmanagementsysteme. Zertifizierte Unternehmen arbeiten nach umweltschonenden Prinzipien und reduzieren ihre Umweltauswirkungen.',
    link: '/ueber-uns',
  },
  {
    begriff: 'Maschinenreinigung',
    definition: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen. Wichtig für Wartung, Hygiene und Arbeitssicherheit in der Industrie.',
    link: '/leistungen/maschinenreinigung',
  },
  {
    begriff: 'Objektleiter',
    definition: 'Verantwortliche Ansprechperson für ein Reinigungsobjekt. Koordiniert das Reinigungsteam, überwacht die Qualität und ist Schnittstelle zum Kunden.',
    link: '/karriere',
  },
  {
    begriff: 'Parkplatzreinigung',
    definition: 'Reinigung und Pflege von Parkflächen, Parkhäusern und Tiefgaragen. Umfasst Kehren, Nassreinigung und Entfernung von Öl- und Reifenspuren.',
    link: '/leistungen/parkplatzreinigung',
  },
  {
    begriff: 'Reinigungsfachkraft',
    definition: 'Ausgebildetes Personal für professionelle Gebäudereinigung. Beherrscht verschiedene Reinigungstechniken, Materialkunde und den sicheren Umgang mit Reinigungsmitteln.',
    link: '/karriere',
  },
  {
    begriff: 'Sonderreinigung',
    definition: 'Spezielle Reinigungsleistungen außerhalb der regulären Unterhaltsreinigung. Umfasst Grundreinigungen, Teppichreinigung, Polsterreinigung und Spezialanwendungen.',
    link: '/leistungen/sonderreinigung',
  },
  {
    begriff: 'Tiefgaragenreinigung',
    definition: 'Professionelle Reinigung von Tiefgaragen und Parkhäusern. Entfernt Staub, Reifenabrieb, Ölflecken und sorgt für Sicherheit und Sauberkeit.',
    link: '/leistungen/tiefgaragenreinigung',
  },
  {
    begriff: 'Unterhaltsreinigung',
    definition: 'Regelmäßig wiederkehrende Reinigung von Gebäuden in vereinbarten Intervallen (täglich, wöchentlich, monatlich). Sichert dauerhaft saubere und hygienische Räumlichkeiten.',
    link: '/leistungen/unterhaltsreinigung',
  },
  {
    begriff: 'Winterdienst',
    definition: 'Räum- und Streudienst bei Schnee und Eis. Umfasst Schneeräumung, Streuen von Gehwegen und Parkplätzen sowie die Einhaltung der Verkehrssicherungspflicht.',
    link: '/leistungen/winterdienst',
  },
]

// Gruppiere nach Anfangsbuchstaben
const groupedGlossar = glossarData.reduce((acc, item) => {
  const letter = item.begriff.charAt(0).toUpperCase()
  if (!acc[letter]) {
    acc[letter] = []
  }
  acc[letter].push(item)
  return acc
}, {} as Record<string, typeof glossarData>)

const letters = Object.keys(groupedGlossar).sort()

export default function GlossarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#012956] py-20 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Fachbegriffe
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Glossar der Gebäudereinigung
          </h1>
          <p className="mt-6 text-white/60 font-semibold text-lg max-w-2xl">
            Die wichtigsten Begriffe rund um professionelle Reinigung, Facility Management
            und Gebäudedienstleistungen verständlich erklärt.
          </p>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="bg-[#f8f9fa] py-6 sticky top-24 lg:top-32 z-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-[#109387] text-[#012956] hover:text-white font-bold rounded-[6px] transition-all shadow-sm"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossar Content */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="space-y-16">
            {letters.map((letter) => (
              <div key={letter} id={letter}>
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl lg:text-6xl font-bold text-[#109387]">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Terms */}
                <div className="grid md:grid-cols-2 gap-6">
                  {groupedGlossar[letter].map((item) => (
                    <div
                      key={item.begriff}
                      className="bg-[#f8f9fa] rounded-[6px] p-6 hover:shadow-lg transition-shadow"
                    >
                      <h2 className="text-xl font-bold text-[#012956] mb-3">
                        {item.begriff}
                      </h2>
                      <p className="text-gray-700 font-medium leading-relaxed mb-4">
                        {item.definition}
                      </p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-[#109387] hover:text-[#012956] font-semibold text-sm transition-colors"
                      >
                        Mehr erfahren →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-white/70 font-semibold mb-8 max-w-xl mx-auto">
            Wir beraten Sie gerne persönlich und erstellen Ihnen ein individuelles Angebot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-8 py-4 rounded-[6px] transition-all"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-[6px] transition-all border border-white/30"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
