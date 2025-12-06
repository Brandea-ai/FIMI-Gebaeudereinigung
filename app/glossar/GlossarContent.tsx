'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface GlossarItem {
  begriff: string
  definition: string
  link: string
  ctaLabel?: string
  highlights?: string[]
}

const glossarData: GlossarItem[] = [
  {
    begriff: 'Außenanlagenpflege',
    definition: 'Professionelle Pflege und Instandhaltung von Außenbereichen wie Grünflächen, Wegen, Parkplätzen und Eingangsbereichen. Umfasst Rasenpflege, Laubbeseitigung und allgemeine Sauberkeit.',
    link: '/leistungen/aussenanlagenpflege',
    ctaLabel: 'Mehr zur Außenanlagenpflege',
  },
  {
    begriff: 'Baureinigung',
    definition: 'Spezielle Reinigung nach Bau- oder Renovierungsarbeiten. Entfernt Baustaub, Mörtelreste, Farbspritzer und andere baubedingte Verschmutzungen für eine bezugsfertige Übergabe.',
    link: '/leistungen/baureinigung',
    ctaLabel: 'Mehr zur Baureinigung',
  },
  {
    begriff: 'Büroreinigung',
    definition: 'Regelmäßige professionelle Reinigung von Büroflächen, Arbeitsplätzen, Konferenzräumen und Gemeinschaftsbereichen. Sorgt für ein hygienisches und produktives Arbeitsumfeld.',
    link: '/leistungen/bueroreinigung',
    ctaLabel: 'Mehr zur Büroreinigung',
  },
  {
    begriff: 'Desinfektionsreinigung',
    definition: 'Reinigungsverfahren mit desinfizierenden Mitteln zur Abtötung von Keimen, Bakterien und Viren. Besonders wichtig in Gesundheitseinrichtungen und bei erhöhten Hygieneanforderungen.',
    link: '/branchen/gesundheitswesen',
    ctaLabel: 'Mehr zum Gesundheitswesen',
  },
  {
    begriff: 'Facility Management',
    definition: 'Ganzheitliches Management von Gebäuden und Liegenschaften, das alle technischen, infrastrukturellen und kaufmännischen Dienstleistungen für einen effizienten Gebäudebetrieb vereint. Gewerbliche Kunden profitieren von einem zentralen Ansprechpartner für alle gebäudebezogenen Services – von der Reinigung über Wartung bis zur Grünflächenpflege.',
    link: '/leistungen/facility-management',
    ctaLabel: 'Mehr zum Facility Management',
    highlights: [
      'Zentraler Ansprechpartner für alle Gebäudeservices',
      'Kostenoptimierung durch gebündelte Dienstleistungen',
      'Professionelle Koordination von Wartung, Reinigung und Pflege',
    ],
  },
  {
    begriff: 'Fassadenreinigung',
    definition: 'Professionelle Reinigung von Gebäudefassaden verschiedener Materialien wie Glas, Stein, Metall oder Putz. Erhält das Erscheinungsbild und den Wert der Immobilie.',
    link: '/leistungen/fassadenreinigung',
    ctaLabel: 'Mehr zur Fassadenreinigung',
  },
  {
    begriff: 'Fensterreinigung',
    definition: 'Streifenfreie Reinigung von Fenstern, Glasflächen und Rahmen. Wird mit speziellen Werkzeugen und Techniken durchgeführt, auch in großen Höhen.',
    link: '/leistungen/fensterreinigung',
    ctaLabel: 'Mehr zur Fensterreinigung',
  },
  {
    begriff: 'Gebäudereinigung',
    definition: 'Oberbegriff für alle professionellen Reinigungsdienstleistungen in und an Gebäuden. Für Unternehmen bedeutet professionelle Gebäudereinigung weniger Eigenaufwand, hygienische Arbeitsbedingungen und den Werterhalt ihrer Immobilie. Von der täglichen Unterhaltsreinigung über Glasreinigung bis zur industriellen Sonderreinigung – gewerbliche Kunden erhalten maßgeschneiderte Lösungen.',
    link: '/leistungen',
    ctaLabel: 'Alle Reinigungsleistungen entdecken',
    highlights: [
      'Unterhaltsreinigung, Glasreinigung, Sonderreinigung u.v.m.',
      'Maßgeschneiderte Konzepte für jede Branche',
      'Dokumentierte Prozesse für gleichbleibende Qualität',
    ],
  },
  {
    begriff: 'Glasreinigung',
    definition: 'Professionelle Reinigung aller Glasflächen wie Fenster, Glasfassaden, Schaufenster und Glastrennwände. Für optimale Transparenz und Lichtdurchlässigkeit.',
    link: '/leistungen/fensterreinigung',
    ctaLabel: 'Mehr zur Fensterreinigung',
  },
  {
    begriff: 'Grundreinigung',
    definition: 'Intensive Tiefenreinigung von Böden und Oberflächen. Entfernt hartnäckige Verschmutzungen und alte Pflegeschichten. Bildet die Basis für nachfolgende Unterhaltsreinigung.',
    link: '/leistungen/sonderreinigung',
    ctaLabel: 'Mehr zur Sonderreinigung',
  },
  {
    begriff: 'Hallenreinigung',
    definition: 'Reinigung großer Hallen in Industrie, Logistik und Produktion. Erfordert spezielle Maschinen und Techniken für große Flächen und industrielle Verschmutzungen.',
    link: '/leistungen/hallenreinigung',
    ctaLabel: 'Mehr zur Hallenreinigung',
  },
  {
    begriff: 'Hausmeisterservice',
    definition: 'Umfassende Betreuung von Immobilien durch geschultes Personal. Beinhaltet kleinere Reparaturen, Kontrollgänge, Müllentsorgung und Ansprechpartner für Mieter.',
    link: '/leistungen/hausmeisterservice',
    ctaLabel: 'Mehr zum Hausmeisterservice',
  },
  {
    begriff: 'Hygieneplan',
    definition: 'Schriftlich fixierte Reinigungs- und Desinfektionsabläufe für Betriebe mit erhöhten Hygieneanforderungen. Definiert wer, was, wie oft und womit reinigt – unverzichtbar in Gesundheitswesen, Gastronomie und lebensmittelverarbeitenden Betrieben.',
    link: '/branchen/gesundheitswesen',
    ctaLabel: 'Mehr zum Gesundheitswesen',
  },
  {
    begriff: 'Hygienereinigung',
    definition: 'Reinigung mit besonderem Fokus auf Hygiene und Keimfreiheit. Wichtig in sensiblen Bereichen wie Sanitäranlagen, Küchen und medizinischen Einrichtungen.',
    link: '/branchen/gesundheitswesen',
    ctaLabel: 'Mehr zum Gesundheitswesen',
  },
  {
    begriff: 'Industriereinigung',
    definition: 'Spezialisierte Reinigung in Produktions- und Industriebetrieben mit besonderen Anforderungen an Maschinenreinigung, Entfettung und Arbeitssicherheit. Für produzierende Unternehmen ist professionelle Industriereinigung essenziell: Sie gewährleistet Arbeitssicherheit, verlängert die Lebensdauer von Maschinen und erfüllt branchenspezifische Hygienevorschriften.',
    link: '/leistungen/industriereinigung',
    ctaLabel: 'Mehr zur Industriereinigung',
    highlights: [
      'Maschinenreinigung und Entfettung nach Vorschrift',
      'Einhaltung von Arbeitsschutz- und Hygienestandards',
      'Minimierung von Produktionsausfällen durch geplante Reinigung',
    ],
  },
  {
    begriff: 'ISO 9001',
    definition: 'Internationaler Standard für Qualitätsmanagementsysteme. Unternehmen, die nach ISO 9001 arbeiten, erfüllen definierte Qualitätsstandards und setzen auf kontinuierliche Verbesserungsprozesse.',
    link: '/ueber-uns',
    ctaLabel: 'Mehr zu unseren Qualitätsstandards',
  },
  {
    begriff: 'ISO 14001',
    definition: 'Internationaler Standard für Umweltmanagementsysteme. Unternehmen, die nach ISO 14001 arbeiten, setzen auf umweltschonende Prinzipien und reduzieren systematisch ihre Umweltauswirkungen.',
    link: '/ueber-uns',
    ctaLabel: 'Mehr zu unseren Umweltstandards',
  },
  {
    begriff: 'Leistungsverzeichnis',
    definition: 'Detaillierte Auflistung aller vereinbarten Reinigungsleistungen mit Angaben zu Intervallen, Flächen, Methoden und Qualitätsstandards. Bildet die vertragliche Grundlage für gewerbliche Reinigungsaufträge und Ausschreibungen.',
    link: '/leistungen',
    ctaLabel: 'Alle Leistungen entdecken',
  },
  {
    begriff: 'Maschinenreinigung',
    definition: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen. Wichtig für Wartung, Hygiene und Arbeitssicherheit in der Industrie.',
    link: '/leistungen/maschinenreinigung',
    ctaLabel: 'Mehr zur Maschinenreinigung',
  },
  {
    begriff: 'Objektbegehung',
    definition: 'Vor-Ort-Besichtigung eines Gebäudes oder einer Fläche vor Vertragsabschluss. Dient der genauen Bestandsaufnahme von Flächen, Materialien und Verschmutzungsgrad – Grundlage für ein passgenaues Angebot.',
    link: '/kontakt',
    ctaLabel: 'Kostenfreie Besichtigung anfragen',
  },
  {
    begriff: 'Objektleiter',
    definition: 'Verantwortliche Ansprechperson für ein Reinigungsobjekt. Koordiniert das Reinigungsteam, überwacht die Qualität und ist Schnittstelle zum Kunden.',
    link: '/karriere',
    ctaLabel: 'Karriere bei FIMI',
  },
  {
    begriff: 'Parkplatzreinigung',
    definition: 'Reinigung und Pflege von Parkflächen, Parkhäusern und Tiefgaragen. Umfasst Kehren, Nassreinigung und Entfernung von Öl- und Reifenspuren.',
    link: '/leistungen/parkplatzreinigung',
    ctaLabel: 'Mehr zur Parkplatzreinigung',
  },
  {
    begriff: 'Reinigungsfachkraft',
    definition: 'Ausgebildetes Personal für professionelle Gebäudereinigung. Beherrscht verschiedene Reinigungstechniken, Materialkunde und den sicheren Umgang mit Reinigungsmitteln.',
    link: '/karriere',
    ctaLabel: 'Karriere bei FIMI',
  },
  {
    begriff: 'Sicherheitsdatenblatt',
    definition: 'Dokument mit Informationen zu Gefahrstoffen, sicherer Handhabung und Erste-Hilfe-Maßnahmen für Reinigungsmittel. Gesetzlich vorgeschrieben für den professionellen Umgang mit Chemikalien.',
    link: '/ueber-uns',
    ctaLabel: 'Mehr zu unseren Standards',
  },
  {
    begriff: 'SLA (Service Level Agreement)',
    definition: 'Vertragliche Vereinbarung über Qualitätsstandards, Reaktionszeiten und Leistungskennzahlen zwischen Dienstleister und Kunde. Garantiert messbare Servicequalität und definiert Eskalationswege.',
    link: '/leistungen',
    ctaLabel: 'Unsere Leistungsgarantie',
  },
  {
    begriff: 'Sonderreinigung',
    definition: 'Spezielle Reinigungsleistungen außerhalb der regulären Unterhaltsreinigung. Umfasst Grundreinigungen, Teppichreinigung, Polsterreinigung und Spezialanwendungen.',
    link: '/leistungen/sonderreinigung',
    ctaLabel: 'Mehr zur Sonderreinigung',
  },
  {
    begriff: 'Tiefgaragenreinigung',
    definition: 'Professionelle Reinigung von Tiefgaragen und Parkhäusern. Entfernt Staub, Reifenabrieb, Ölflecken und sorgt für Sicherheit und Sauberkeit.',
    link: '/leistungen/tiefgaragenreinigung',
    ctaLabel: 'Mehr zur Tiefgaragenreinigung',
  },
  {
    begriff: 'Unterhaltsreinigung',
    definition: 'Regelmäßig wiederkehrende Reinigung von Gebäuden in vereinbarten Intervallen – täglich, wöchentlich oder monatlich. Für Unternehmen ist die Unterhaltsreinigung das Fundament sauberer Geschäftsräume: Sie sorgt für ein gepflegtes Erscheinungsbild, hygienische Arbeitsbedingungen und trägt zum Werterhalt der Immobilie bei.',
    link: '/leistungen/unterhaltsreinigung',
    ctaLabel: 'Mehr zur Unterhaltsreinigung',
    highlights: [
      'Flexible Intervalle: täglich, wöchentlich oder monatlich',
      'Feste Reinigungsteams für gleichbleibende Qualität',
      'Dokumentierte Prozesse für Ihre Rechtssicherheit',
    ],
  },
  {
    begriff: 'Winterdienst',
    definition: 'Professioneller Räum- und Streudienst bei Schnee und Eis zur Erfüllung der Verkehrssicherungspflicht. Für Unternehmen und Hausverwaltungen übernimmt der Winterdienst die gesetzlich vorgeschriebene Räum- und Streupflicht – das minimiert Haftungsrisiken und gewährleistet sichere Zugänge für Mitarbeiter und Kunden.',
    link: '/leistungen/winterdienst',
    ctaLabel: 'Mehr zum Winterdienst',
    highlights: [
      'Erfüllung der Verkehrssicherungspflicht',
      'Schnelle Reaktionszeiten bei Schneefall',
      'Dokumentierte Einsätze für Ihre Rechtssicherheit',
    ],
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
}, {} as Record<string, GlossarItem[]>)

const letters = Object.keys(groupedGlossar).sort()

export default function GlossarContent() {
  const [activeLetter, setActiveLetter] = useState<string>(letters[0])
  const letterRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const handleScroll = () => {
      // Finde den aktuell sichtbaren Buchstaben
      for (const letter of letters) {
        const element = document.getElementById(letter)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Wenn die Section im oberen Bereich des Viewports ist
          if (rect.top <= 200 && rect.bottom > 100) {
            setActiveLetter(letter)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll mobile filter to active letter
  useEffect(() => {
    const activeButton = letterRefs.current[activeLetter]
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeLetter])

  const isActive = (letter: string) => letter === activeLetter

  return (
    <>
      {/* Hero */}
      <section className="bg-[#012956] py-16 lg:py-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4">
            Glossar
          </h1>
          <p className="text-white/90 font-semibold text-base lg:text-lg max-w-xl">
            Fachbegriffe der professionellen Gebäudereinigung - von A bis W.
          </p>
        </div>
      </section>

      {/* Mobile: Sticky Horizontal Alphabet - AUSSERHALB der Section */}
      <div className="lg:hidden sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-6">
          <div className="overflow-x-auto scrollbar-hide py-3">
            <div className="flex gap-2">
              {letters.map((letter) => {
                const active = isActive(letter)
                return (
                  <a
                    key={letter}
                    ref={(el) => { letterRefs.current[letter] = el }}
                    href={`#${letter}`}
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold rounded-[6px] transition-all duration-300 ${
                      active
                        ? 'bg-[#109387] text-white scale-110 shadow-lg'
                        : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#109387] hover:text-white'
                    }`}
                  >
                    {letter}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Glossar Content mit Sidebar */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex gap-12 lg:gap-16">

            {/* Sticky Sidebar - Alphabet Navigation (nur Desktop) */}
            <aside className="hidden lg:block w-14 flex-shrink-0">
              <div className="sticky top-32">
                <nav className="flex flex-col items-center gap-1 bg-[#f8f9fa] rounded-[6px] p-2">
                  {letters.map((letter) => {
                    const active = isActive(letter)

                    return (
                      <a
                        key={letter}
                        href={`#${letter}`}
                        className={`w-10 h-10 flex items-center justify-center font-bold text-sm rounded-[6px] transition-all duration-300 ${
                          active
                            ? 'bg-[#109387] text-white'
                            : 'text-[#012956]/80 hover:text-[#109387] hover:bg-white'
                        }`}
                      >
                        {letter}
                      </a>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="space-y-16">
                {letters.map((letter) => (
                  <div key={letter} id={letter} className="scroll-mt-20 lg:scroll-mt-8">
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
                          className={`bg-[#f8f9fa] rounded-[6px] p-6 hover:shadow-lg transition-shadow ${
                            item.highlights ? 'md:col-span-2 lg:col-span-1' : ''
                          }`}
                        >
                          <h2 className="text-xl font-bold text-[#012956] mb-3">
                            {item.begriff}
                          </h2>
                          <p className="text-gray-700 font-medium leading-relaxed mb-4">
                            {item.definition}
                          </p>

                          {/* Optional Highlights für Schlüsselbegriffe */}
                          {item.highlights && (
                            <ul className="mb-4 space-y-2">
                              {item.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-[#109387] mt-0.5">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <Link
                            href={item.link}
                            className="inline-flex items-center gap-2 text-[#109387] hover:text-[#012956] font-semibold text-sm transition-colors"
                          >
                            {item.ctaLabel || 'Mehr erfahren'} →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-white/90 font-semibold mb-8 max-w-xl mx-auto">
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
    </>
  )
}
